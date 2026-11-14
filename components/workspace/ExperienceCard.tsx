import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
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
  );
}