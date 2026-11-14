import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";

type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  metric: string;
  tools: string[];
  tags: string[];
  year: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const statusVariant =
    project.status === "Live"
      ? "cyan"
      : project.status === "Ongoing"
        ? "yellow"
        : "default";

  return (
    <TiltCard className="h-full">
      <Card className="group flex h-full flex-col">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
            {project.category}
          </span>

          <Tag label={project.status} variant={statusVariant} />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-text-secondary">
          {project.description}
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
          <span className="text-xs text-text-secondary">{project.year}</span>

          <Link
            href={`/projects/${project.id}`}
            className="animated-link text-sm font-medium text-cyan transition-all duration-200 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]"
          >
            View case study →
          </Link>
        </div>
      </Card>
    </TiltCard>
  );
}