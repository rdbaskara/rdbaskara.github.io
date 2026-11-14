"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text-secondary transition-colors hover:border-cyan hover:text-cyan"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}