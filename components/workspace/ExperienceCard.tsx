import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  impact: string[];
  metrics: {
    value: string;
  }[];
  tags: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <TiltCard>
      <article className="interactive-card rounded-lg border border-border bg-surface p-4 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary md:text-xl">
              {experience.role}
            </h3>

            <p className="mt-1 text-sm text-cyan">
              {experience.company}
            </p>

            <p className="mt-1 text-xs text-text-secondary md:text-sm">
              {experience.period} · {experience.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm font-medium text-text-primary md:text-base">
          {experience.description}
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Responsibilities
            </p>

            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              {experience.responsibilities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-cyan/30 bg-cyan/5 p-4 md:p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan">
              Impact
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {experience.metrics.map((metric) => (
                <span
                  key={metric.value}
                  className="interactive-button rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan md:text-sm"
                >
                  {metric.value}
                </span>
              ))}
            </div>

            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              {experience.impact.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}