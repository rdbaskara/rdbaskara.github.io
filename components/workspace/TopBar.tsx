"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/lib/site-config";
import { useWorkspace } from "@/components/providers/WorkspaceProvider";

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useWorkspace();

  const scrollToSection = (href: string) => {
    const target = href.replace("#", "");
    const element = document.getElementById(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(target);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <button
          type="button"
          onClick={() => scrollToSection("#overview")}
          className="flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-white">
            iB
          </span>

          <span className="font-display text-sm font-semibold text-text-primary">
            Rindi Baskara
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 hover:bg-surface-muted hover:text-text-primary ${
                activeSection === item.href.replace("#", "")
                  ? "bg-primary/10 text-cyan"
                  : "text-text-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-cyan hover:text-cyan md:hidden"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border bg-surface px-6 py-4 md:hidden">
          <div className="space-y-1">
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`block w-full rounded-md px-3 py-2 text-left text-sm transition-colors duration-200 hover:bg-surface-muted hover:text-text-primary ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary/10 text-cyan"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}