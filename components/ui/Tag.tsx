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
<<<<<<< HEAD
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
=======
      className={`interactive-button inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variants[variant]}`}
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
    >
      {label}
    </span>
  );
}