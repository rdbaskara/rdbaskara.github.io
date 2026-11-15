<<<<<<< HEAD
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
=======
import { Tag } from "@/components/ui/Tag";
import { TiltCard } from "@/components/ui/TiltCard";
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
<<<<<<< HEAD
  achievements: string[];
=======
  responsibilities: string[];
  impact: string[];
  metrics: {
    value: string;
  }[];
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
  tags: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
<<<<<<< HEAD
    <Card>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold text-text-primary">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm text-cyan">{experience.company}</p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-text-secondary">{experience.period}</p>

          <p className="text-xs text-text-secondary">{experience.location}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-text-secondary">
        {experience.description}
      </p>

      <ul className="mt-4 space-y-2">
        {experience.achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex items-start gap-2 text-sm text-text-secondary"
          >
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />

            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Card>
=======
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
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
  );
}