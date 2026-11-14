"use client";

import { useState } from "react";
import { Tag } from "@/components/ui/Tag";

const categories = [
  { label: "All Projects", count: 6 },
  { label: "Data Analytics", count: 2 },
  { label: "Dashboard", count: 1 },
  { label: "Python-ML", count: 1 },
  { label: "SQL", count: 1 },
  { label: "Supply Chain", count: 1 },
];

const statuses = [
  { label: "Completed", variant: "default" as const },
  { label: "Ongoing", variant: "yellow" as const },
  { label: "Live", variant: "cyan" as const },
];

export function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Projects");

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
              <span className="font-display text-sm font-semibold text-text-primary">
                Workspace
              </span>
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
                  Categories
                </p>

                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.label}
                      type="button"
                      onClick={() => setActiveCategory(category.label)}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 ${
                        activeCategory === category.label
                          ? "bg-primary/10 text-cyan"
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
                <button
                  type="button"
                  className="w-full rounded-md border border-border px-3 py-2 text-sm text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
                >
                  New Project
                </button>

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
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-secondary">
          Quick Filters
        </p>

        <div className="flex flex-wrap gap-1.5">
          {categories.slice(0, 4).map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveCategory(category.label)}
              className={`rounded-full border px-2.5 py-1 text-[11px] leading-none transition-colors duration-200 ${
                activeCategory === category.label
                  ? "border-cyan bg-primary/10 text-cyan"
                  : "border-border text-text-secondary hover:border-cyan hover:text-cyan"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}