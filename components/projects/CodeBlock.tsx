"use client";

import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-python";

type CodeBlockProps = {
  code: string;
  language?: "sql" | "python";
  title?: string;
};

export default function CodeBlock({
  code,
  language = "sql",
  title,
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {title ?? language}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:border-cyan hover:text-cyan"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>

      <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-relaxed">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}