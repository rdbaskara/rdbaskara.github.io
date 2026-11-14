"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/workspace/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/site-config";

const statuses = ["All Status", "Completed", "Ongoing", "Live"];

type ProjectsSectionProps = {
  activeCategory: string;
};

export function ProjectsSection({ activeCategory }: ProjectsSectionProps) {
  const [activeStatus, setActiveStatus] = useState("All Status");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const statusMatch =
        activeStatus === "All Status" || project.status === activeStatus;

      return categoryMatch && statusMatch;
    });
  }, [activeCategory, activeStatus]);

  return (
    <section id="projects" className="mb-12 scroll-mt-20 md:mb-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Data analytics, dashboard, and supply chain projects."
      />

      <div className="mb-6 rounded-lg border border-border bg-surface p-4 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-base font-semibold text-text-primary md:text-lg">
              Quick filter
            </h2>

            <p className="mt-1 text-xs text-text-secondary md:text-sm">
              {activeCategory} · {activeStatus}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="rounded-md border border-border px-3 py-2 text-xs text-text-secondary transition-colors hover:border-cyan hover:text-cyan md:hidden"
          >
            {isFilterOpen ? "Hide" : "Filter"}
          </button>
        </div>

        <div
          className={`mt-4 space-y-4 ${
            isFilterOpen ? "block" : "hidden"
          } md:block`}
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Status
            </p>

            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-full border px-3 py-2 text-xs transition-colors duration-200 md:px-4 md:text-sm ${
                    activeStatus === status
                      ? "border-cyan bg-primary/10 text-cyan"
                      : "border-border text-text-secondary hover:border-cyan hover:text-cyan"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-lg border border-border bg-surface p-8 text-center">
          <p className="font-display text-lg font-semibold text-text-primary">
            No projects found
          </p>

          <p className="mt-2 text-sm text-text-secondary">
            Try selecting a different category or status.
          </p>
        </div>
      )}
    </section>
  );
}