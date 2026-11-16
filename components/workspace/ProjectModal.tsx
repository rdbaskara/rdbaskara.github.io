"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { Project, ProjectLink } from "@/lib/site-config";
import CodeBlock from "@/components/projects/CodeBlock";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const tabs = [
  "Overview",
  "Gallery",
  "Dashboard",
  "Links",
] as const;

type ModalTab = (typeof tabs)[number];

const linkTypeLabels: Record<ProjectLink["type"], string> = {
  dashboard: "Dashboard",
  code: "Code",
  slides: "Slides",
  other: "Resource",
};

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

type TableauEmbedProps = {
  url: string;
  title: string;
  isFullscreen?: boolean;
};

function TableauEmbed({
  url,
  title,
  isFullscreen = false,
}: TableauEmbedProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  const embedUrl = `${url}${
    url.includes("?") ? "&" : "?"
  }:embed=y&:showVizHome=no&:tabs=yes&:toolbar=yes`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-surface-muted ${
        isFullscreen ? "h-full" : "h-[calc(100vh-18rem)]"
      }`}
    >
      {status === "loading" && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-cyan" />

            <span className="text-sm text-text-secondary">
              Loading interactive dashboard…
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-surface p-6 text-center">
          <p className="font-display text-lg font-semibold text-text-primary">
            Dashboard failed to load
          </p>

          <p className="max-w-md text-sm text-text-secondary">
            The interactive Tableau dashboard could not be loaded. You can still
            open it directly in Tableau Public.
          </p>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Open Dashboard</Button>
          </a>
        </div>
      )}

      <iframe
        src={embedUrl}
        title={title}
        className="h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("error")}
      />
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>("Overview");
  const [isDashboardFullscreen, setIsDashboardFullscreen] = useState(false);
  const [isGalleryFullscreen, setIsGalleryFullscreen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const scrollPosition = window.scrollY;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const modal = modalRef.current;

      if (!modal) {
        return;
      }

      const focusableElements = Array.from(
        modal.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const closeButton = modalRef.current?.querySelector<HTMLButtonElement>(
      "button[aria-label='Close project case study']",
    );

    closeButton?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      window.scrollTo(0, scrollPosition);
    };
  }, [isMounted, onClose]);

  const dashboardLink = project.links.find(
    (link) => link.type === "dashboard",
  );

  const slidesLink = project.links.find((link) => link.type === "slides");

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-black/70 p-3 pt-6 pb-6 md:p-5 md:pt-8 md:pb-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="modal-panel flex max-h-[calc(100vh-4.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-xl border border-border bg-surface outline-none md:max-h-[calc(100vh-5rem)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-5 md:p-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
              {project.category}
            </span>

            <h2
              id="project-modal-title"
              className="mt-2 font-display text-xl font-bold text-text-primary md:text-2xl"
            >
              {project.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Tag label={project.status} />

              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-muted px-3 py-1 text-xs text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project case study"
            className="rounded-md border border-border px-3 py-1 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
          >
            Close
          </button>
        </div>

        <div className="border-b border-border px-5 md:px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-cyan text-cyan"
                    : "border-transparent text-text-secondary hover:text-text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          key={activeTab}
          className="modal-content-enter min-h-0 flex-1 overflow-y-auto p-5 md:p-6"
        >
          {activeTab === "Overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Background
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                  {project.overview.background}
                </p>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Goals
                </h3>

                <ul className="mt-2 space-y-2">
                  {project.overview.goals.map((goal) => (
                    <li
                      key={goal}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-cyan">•</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Methodology
                </h3>

                <ul className="mt-2 space-y-2">
                  {project.overview.methodology.map((method) => (
                    <li
                      key={method}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-cyan">•</span>
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Key Findings
                </h3>

                <ul className="mt-2 space-y-2">
                  {project.overview.findings.map((finding) => (
                    <li
                      key={finding}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-cyan">•</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Recommendations
                </h3>

                <ul className="mt-2 space-y-2">
                  {project.overview.recommendations.map((recommendation) => (
                    <li
                      key={recommendation}
                      className="flex gap-2 text-sm text-text-secondary"
                    >
                      <span className="text-cyan">•</span>
                      {recommendation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Gallery" && (
            <div>
              {project.slidesUrl ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-text-secondary">
                      Explore the case study presentation for this project.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => setIsGalleryFullscreen(true)}
                      >
                        Fullscreen
                      </Button>

                      <a
                        href={project.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">Open Presentation</Button>
                      </a>
                    </div>
                  </div>

                  <div className="h-[55vh]">
                    <iframe
                      src={project.slidesUrl}
                      className="h-full w-full rounded-lg border border-border"
                      allowFullScreen
                      title={`${project.title} case study slides`}
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-surface-muted p-8 text-center">
                  <p className="text-sm font-medium text-text-primary">
                    Case study slides are not available yet.
                  </p>

                  <p className="mt-2 text-sm text-text-secondary">
                    Add the published Google Slides embed URL in project data.
                  </p>
                </div>
              )}

              {isGalleryFullscreen && project.slidesUrl && createPortal(
                <div className="fixed inset-0 z-[70] flex flex-col bg-black">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-4 py-3">
                    <p className="truncate text-sm font-medium text-white">
                      {project.title} — Case Study Slides
                    </p>

                    <div className="flex shrink-0 gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => setIsGalleryFullscreen(false)}
                      >
                        Exit Fullscreen
                      </Button>

                      <a
                        href={project.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          Open Presentation
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="min-h-0 flex-1">
                    <iframe
                      src={project.slidesUrl}
                      className="h-full w-full border-0"
                      allowFullScreen
                      title={`${project.title} case study slides`}
                    />
                  </div>
                </div>,
                document.body,
              )}
            </div>
          )}

          {activeTab === "Dashboard" && (
            <div>
              {dashboardLink ? (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-text-secondary">
                      Explore the interactive dashboard for this project.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => setIsDashboardFullscreen(true)}
                      >
                        Fullscreen
                      </Button>

                      <a
                        href={dashboardLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          Open Full Dashboard
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="min-h-0 flex-1">
                    <TableauEmbed
                      url={dashboardLink.url}
                      title={`${project.title} interactive dashboard`}
                    />
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-surface-muted p-8 text-center">
                  <p className="text-sm font-medium text-text-primary">
                    No interactive dashboard is available for this project.
                  </p>

                  <p className="mt-2 text-sm text-text-secondary">
                    Explore the case study slides and available project
                    resources instead.
                  </p>
                </div>
              )}

              {isDashboardFullscreen && dashboardLink && createPortal(
                <div className="fixed inset-0 z-[70] flex flex-col bg-black">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-slate-950 px-4 py-3">
                    <p className="truncate text-sm font-medium text-white">
                      {project.title} — Interactive Dashboard
                    </p>

                    <div className="flex shrink-0 gap-2">
                      <Button
                        variant="secondary"
                        onClick={() => setIsDashboardFullscreen(false)}
                      >
                        Exit Fullscreen
                      </Button>

                      <a
                        href={dashboardLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">
                          Open Full Dashboard
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="min-h-0 flex-1">
                    <TableauEmbed
                      url={dashboardLink.url}
                      title={`${project.title} interactive dashboard`}
                      isFullscreen
                    />
                  </div>
                </div>,
                document.body,
              )}
            </div>
          )}

          {activeTab === "Links" && (
            <div>
              {project.links.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      project-resources
                    </span>
                  </div>

                  <div className="divide-y divide-white/5">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-2 px-4 py-4 transition-colors hover:bg-white/5 md:flex-row md:items-center md:justify-between md:gap-4"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                              {linkTypeLabels[link.type]}
                            </span>

                            <span className="text-sm font-semibold text-white">
                              {link.label}
                            </span>
                          </div>

                          <p className="mt-1 truncate text-xs text-slate-400">
                            {link.url}
                          </p>
                        </div>

                        <span className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition group-hover:border-cyan group-hover:text-cyan">
                          Open →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-surface-muted p-8 text-center">
                  <p className="text-sm font-medium text-text-primary">
                    No external links available yet.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-5 md:p-6">
          <p className="text-sm font-medium text-cyan">{project.metric}</p>

          <div className="flex flex-wrap gap-2">
            {slidesLink && (
              <a
                href={slidesLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">Open Google Slides</Button>
              </a>
            )}

            {dashboardLink && (
              <a
                href={dashboardLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Open Dashboard</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}