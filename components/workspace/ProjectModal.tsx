"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { Project, ProjectLink } from "@/lib/site-config";

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
};

function TableauEmbed({ url, title }: TableauEmbedProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) {
      return;
    }

    inner.innerHTML = "";

    const pathname = url.replace("https://public.tableau.com/views/", "");
    const [workbookAndSheet] = pathname.split("?");

    if (!workbookAndSheet) {
      return;
    }

    const uniqueId = `tableau-${Math.random().toString(36).slice(2)}`;

    const placeholder = document.createElement("div");
    placeholder.className = "tableauPlaceholder";
    placeholder.id = uniqueId;
    placeholder.style.position = "relative";
    placeholder.style.width = "1600px";
    placeholder.style.height = "900px";

    const vizObject = document.createElement("object");
    vizObject.className = "tableauViz";
    vizObject.style.width = "1600px";
    vizObject.style.height = "900px";
    vizObject.style.display = "none";

    const params = [
      { name: "host_url", value: "https%3A%2F%2Fpublic.tableau.com%2F" },
      { name: "embed_code_version", value: "3" },
      { name: "site_root", value: "" },
      { name: "name", value: workbookAndSheet },
      { name: "tabs", value: "yes" },
      { name: "toolbar", value: "yes" },
      { name: "animate_transition", value: "yes" },
      { name: "display_spinner", value: "yes" },
      { name: "display_overlay", value: "yes" },
      { name: "display_count", value: "yes" },
      { name: "language", value: "en-US" },
    ];

    params.forEach(({ name, value }) => {
      const param = document.createElement("param");
      param.name = name;
      param.value = value;
      vizObject.appendChild(param);
    });

    placeholder.appendChild(vizObject);
    inner.appendChild(placeholder);

    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    inner.appendChild(script);

    const updateScale = () => {
      const outerWidth = outer.clientWidth;
      const outerHeight = outer.clientHeight;

      const scale = Math.min(outerWidth / 1600, outerHeight / 900);

      const offsetX = (outerWidth - 1600 * scale) / 2;
      const offsetY = (outerHeight - 900 * scale) / 2;

      inner.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
      inner.style.transformOrigin = "top left";
      inner.style.width = "1600px";
      inner.style.height = "900px";
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(outer);

    return () => {
      resizeObserver.disconnect();
      inner.innerHTML = "";
    };
  }, [url]);

  return (
    <div
      ref={outerRef}
      className="h-[calc(100vh-18rem)] w-full overflow-hidden rounded-lg border border-border"
    >
      <div ref={innerRef} className="origin-top-left" aria-label={title} />
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>("Overview");
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

    modalRef.current?.focus();

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
      className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden bg-black/70 p-3 pt-6 pb-6 md:p-5 md:pt-8 md:pb-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="flex max-h-[calc(100vh-4.5rem)] w-full max-w-7xl flex-col overflow-hidden rounded-xl border border-border bg-surface outline-none md:max-h-[calc(100vh-5rem)]"
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

        <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-6">
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
                <iframe
                  src={project.slidesUrl}
                  className="h-[70vh] w-full rounded-lg border border-border"
                  allowFullScreen
                  title={`${project.title} case study slides`}
                />
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

                    <a
                      href={dashboardLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary">Open Full Dashboard</Button>
                    </a>
                  </div>

                  <TableauEmbed
                    url={dashboardLink.url}
                    title={`${project.title} interactive dashboard`}
                  />
                </div>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-surface-muted p-8 text-center">
                  <p className="text-sm font-medium text-text-primary">
                    No interactive dashboard is available for this project.
                  </p>

                  <p className="mt-2 text-sm text-text-secondary">
                    Explore the case study slides and available project resources instead.
                  </p>
                </div>
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