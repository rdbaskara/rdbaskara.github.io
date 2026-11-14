interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-2xl font-bold text-text-primary md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}