"use client";

import { useMemo, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/site-config";
import { useWorkspace } from "@/components/providers/WorkspaceProvider";

const statuses = [
  { label: "Completed", variant: "default" as const },
  { label: "Ongoing", variant: "yellow" as const },
  { label: "Live", variant: "cyan" as const },
];

type SideBarProps = {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
};

export function SideBar({ activeCategory, onCategoryChange }: SideBarProps) {
  const { isSidebarVisible, toggleSidebar } = useWorkspace();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = useMemo(() => {
    const categoryCounts = projects.reduce<Record<string, number>>(
      (accumulator, project) => {
        accumulator[project.category] =
          (accumulator[project.category] || 0) + 1;

        return accumulator;
      },
      {},
    );

    return [
      {
        label: "All Projects",
        count: projects.length,
      },
      ...Object.entries(categoryCounts)
        .map(([label, count]) => ({
          label,
          count,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    ];
  }, []);

  const handleCategoryChange = (category: string) => {
    onCategoryChange?.(category);

    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <aside
        className={`hidden shrink-0 border-r border-border bg-surface transition-[width] duration-300 ease-out lg:block ${
          isSidebarVisible ? "w-72" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-border p-4">
            {isSidebarVisible && (
              <div className="min-w-0">
                <span className="block truncate font-display text-sm font-semibold text-text-primary">
                  Project Explorer
                </span>

                <p className="mt-1 truncate text-xs text-text-secondary">
                  Filter projects and access portfolio tools
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => toggleSidebar()}
              aria-label={isSidebarVisible ? "Hide sidebar" : "Show sidebar"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
            >
              <span className="text-lg leading-none">☰</span>
            </button>
          </div>

          {isSidebarVisible && (
            <div className="flex-1 space-y-6 overflow-y-auto p-4">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Filter
                </p>

                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.label}
                      type="button"
                      onClick={() => handleCategoryChange(category.label)}
                      className={`sidebar-item flex w-full items-center justify-between rounded-md px-3 py-2 pl-4 text-left text-sm transition-colors duration-200 ${
                        activeCategory === category.label
                          ? "sidebar-item is-active bg-primary/10 text-cyan"
                          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                      }`}
                    >
                      <span>{category.label}</span>

                      <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs text-text-secondary">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Status
                </p>

                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <Tag
                      key={status.label}
                      label={status.label}
                      variant={status.variant}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <a
                  href="https://drive.google.com/file/d/1yTfloB_HYAPraJiFS-DVUCyRc9_J--Z6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md border border-border px-3 py-2 text-center text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
                >
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="border-b border-border bg-surface px-4 py-3 lg:hidden">
        <div className="mb-2">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            aria-expanded={isMobileFilterOpen}
            aria-controls="mobile-project-filters"
            className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
          >
            Filter

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-2.5 w-2.5 transition-transform duration-200 ${
                isMobileFilterOpen ? "rotate-90" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div
          id="mobile-project-filters"
          className={`flex-col gap-1.5 ${
            isMobileFilterOpen ? "flex" : "hidden"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => handleCategoryChange(category.label)}
              className={`sidebar-item flex w-full items-center justify-between rounded-md px-3 py-2 pl-4 text-left text-xs transition-colors duration-200 ${
                activeCategory === category.label
                  ? "sidebar-item is-active bg-primary/10 text-cyan"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              }`}
            >
              <span>{category.label}</span>

              <span className="rounded-full bg-surface-muted px-2 py-0.5 text-[10px] text-text-secondary">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1yTfloB_HYAPraJiFS-DVUCyRc9_J--Z6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block w-full rounded-md border border-border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
        >
          Download CV
        </a>
      </div>
    </>
  );
}