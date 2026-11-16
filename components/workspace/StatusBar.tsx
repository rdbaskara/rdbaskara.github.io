"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { siteConfig } from "@/lib/site-config";

export function StatusBar() {
  return (
    <footer className="flex h-10 items-center justify-between border-t border-border bg-surface px-6 text-[12px] font-medium text-text-secondary">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.55),inset_0_0_6px_rgba(52,211,153,0.35)]">
          iBas
        </span>

        {/* <span className="hidden text-[12px] font-medium sm:inline">
          iBas
        </span> */}
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-semibold transition-colors hover:text-cyan"
        >
          Email
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors hover:text-cyan"
        >
          LinkedIn
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-colors hover:text-cyan"
        >
          GitHub
        </a>

        <ThemeToggle />
      </div>
    </footer>
  );
}