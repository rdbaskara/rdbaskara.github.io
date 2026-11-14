"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-text-primary transition-colors duration-200 hover:border-cyan"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}