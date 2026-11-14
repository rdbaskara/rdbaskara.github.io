"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/workspace/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/site-config";

const categories = [
  "All Projects",
  "Data Analytics",
  "Dashboard",
  "Python-ML",
  "SQL",
  "Supply Chain",
];

const statuses = ["All Status", "Completed", "Ongoing", "Live"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [activeStatus, setActiveStatus] = useState("All Status");

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
    <section id="projects" className="mb-12 md:mb-16">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Data analytics, dashboard, and supply chain projects."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-2 text-xs transition-colors duration-200 md:px-4 md:text-sm ${
              activeCategory === category
                ? "border-cyan bg-primary/10 text-cyan"
                : "border-border text-text-secondary hover:border-cyan hover:text-cyan"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
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