"use client";

import { useState } from "react";

type CodePreviewProps = {
  code: string;
  language?: "sql" | "python";
  externalUrl?: string;
  externalLabel?: string;
};

export default function CodePreview({
  code,
  language = "sql",
  externalUrl,
  externalLabel = "View Full Code",
}: CodePreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewCode = isExpanded
    ? code
    : `${code.slice(0, 700)}${code.length > 700 ? "\n\n..." : ""}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
            {language.toUpperCase()}
          </span>
          <span className="text-sm text-slate-400">Code preview</span>
        </div>

        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            {externalLabel}
          </a>
        ) : null}
      </div>

      <pre className="max-h-[420px] overflow-auto rounded-xl bg-black/60 p-4 text-sm leading-relaxed text-slate-200">
        <code>{previewCode}</code>
      </pre>

      {code.length > 700 ? (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-4 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      ) : null}
    </div>
  );
}