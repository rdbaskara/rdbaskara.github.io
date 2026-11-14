export function StatusBar() {
  return (
    <footer className="flex h-10 items-center justify-between border-t border-border bg-surface px-6 text-xs text-text-secondary">
      <span>Portfolio Workspace</span>

      <span className="hidden md:block">
        Next.js · Tailwind CSS · TypeScript
      </span>
    </footer>
  );
}