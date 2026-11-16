"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Project } from "@/lib/site-config";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const statusVariant =
    project.status === "Live"
      ? "cyan"
      : project.status === "Ongoing"
        ? "yellow"
        : "default";

  return (
    <TiltCard className="h-full">
      <Card className="interactive-card group flex h-full flex-col">
        {project.thumbnail ? (
          <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-border bg-surface-muted">
            <Image
              src={project.thumbnail}
              alt={`Dashboard preview for ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {project.featured && (
              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan backdrop-blur">
                Featured Project
              </span>
            )}
          </div>
        ) : (
          <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-surface-muted">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
              Project preview
            </span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
            {project.category}
          </span>

          <Tag label={project.status} variant={statusVariant} />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-text-primary transition-colors duration-300 group-hover:text-cyan">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-4 rounded-lg border border-border bg-surface-muted p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Key metric
          </p>

          <p className="mt-1 font-display text-base font-bold text-cyan">
            {project.metric}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Tools
          </p>

          <p className="mt-1 text-xs text-text-secondary">
            {project.tools.join(" · ")}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="interactive-button rounded-full bg-surface-muted px-3 py-1 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-text-secondary">
            {project.status}
          </span>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="animated-link text-sm font-medium text-cyan transition-all duration-200 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]"
          >
            View case study →
          </button>
        </div>
      </Card>
    </TiltCard>
  );
}