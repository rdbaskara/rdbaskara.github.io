"use client";

import { useMemo, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/site-config";

const statuses = [
  { label: "Completed", variant: "default" as const },
  { label: "Ongoing", variant: "yellow" as const },
  { label: "Live", variant: "cyan" as const },
];

type SideBarProps = {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
};

export function SideBar({
  activeCategory,
  onCategoryChange,
}: SideBarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = useMemo(() => {
    const categoryCounts = projects.reduce<Record<string, number>>(
      (accumulator, project) => {
        accumulator[project.category] =
          (accumulator[project.category] || 0) + 1;

        return accumulator;
      },
      {}
    );

    return [
      {
        label: "All Projects",
        count: projects.length,
      },
      ...Object.entries(categoryCounts).map(([label, count]) => ({
        label,
        count,
      })),
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
        className={`hidden shrink-0 border-r border-border bg-surface transition-all duration-300 lg:block ${
          isOpen ? "w-72" : "w-16"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            {isOpen && (
              <div>
                <span className="font-display text-sm font-semibold text-text-primary">
                  Project Explorer
                </span>

                <p className="mt-1 text-xs text-text-secondary">
                  Filter projects and access portfolio tools
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
            >
              {isOpen ? "‹" : "›"}
            </button>
          </div>

          {isOpen && (
            <div className="flex-1 space-y-6 overflow-y-auto p-4">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  Project Focus
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

              <div className="space-y-2 border-t border-border pt-4">
                <a
                  href="/cv.pdf"
                  download
                  className="block w-full rounded-md border border-border px-3 py-2 text-center text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
                >
                  Download CV
                </a>

                <button
                  type="button"
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
                >
                  Export Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="border-b border-border bg-surface px-4 py-3 lg:hidden">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-text-secondary">
            Project Focus
          </p>

          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="rounded-md border border-border px-2 py-1 text-[10px] font-semibold text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
          >
            {isMobileFilterOpen ? "Hide" : "Show"}
          </button>
        </div>

        <div
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
      </div>
    </>
  );
}