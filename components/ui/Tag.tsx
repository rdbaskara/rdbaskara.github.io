interface TagProps {
  label: string;
  variant?: "default" | "cyan" | "yellow";
}

const variants = {
  default: "border-border bg-surface-muted text-text-secondary",
  cyan: "border-cyan/40 bg-cyan/10 text-cyan",
  yellow: "border-yellow/40 bg-yellow/10 text-yellow",
};

export function Tag({ label, variant = "default" }: TagProps) {
  return (
    <span
      className={`interactive-button inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}