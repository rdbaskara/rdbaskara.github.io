import { education } from "@/lib/site-config";

export function Education() {
  return (
    <div className="mt-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
        Education
      </p>

      <div className="mt-4 space-y-4">
        {education.map((item) => (
          <div
            key={item.school}
            className="interactive-card rounded-lg border border-border bg-surface p-4 md:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {item.school}
                </h3>

                <p className="mt-1 text-sm text-cyan">
                  {item.degree}
                </p>

                <p className="mt-1 text-xs text-text-secondary md:text-sm">
                  {item.period} · {item.location}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-text-secondary">
              {item.description}
            </p>

            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              {item.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}