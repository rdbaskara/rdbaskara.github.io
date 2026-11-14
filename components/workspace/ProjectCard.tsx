import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
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
    <Card className="group h-full">
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

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-muted px-3 py-1 text-xs text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs text-text-secondary">{project.year}</span>

        <Link
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-cyan transition-transform duration-200 group-hover:translate-x-1"
        >
          View case study →
        </Link>
      </div>
    </Card>
  );
}