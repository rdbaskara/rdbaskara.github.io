"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/lib/site-config";

export function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    const main = document.querySelector("main");

    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-white">
            iB
          </span>

          <span className="font-display text-sm font-semibold text-text-primary">
            Rindi Baskara
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (item.href === "#overview") {
                  scrollToTop();
                }
              }}
              className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-surface-muted hover:text-text-primary"
            >
              {item.label}
            </Link>
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setIsMenuOpen(false);

                  if (item.href === "#overview") {
                    scrollToTop();
                  }
                }}
                className="block rounded-md px-3 py-2 text-sm text-text-secondary transition-colors duration-200 hover:bg-surface-muted hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}