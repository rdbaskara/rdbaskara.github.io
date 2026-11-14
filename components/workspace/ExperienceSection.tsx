import { ExperienceCard } from "@/components/workspace/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements, experiences } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12 scroll-mt-20 md:mb-16">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        description="Experience in supply chain operations, data analysis, and business reporting."
      />

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.label}
            className="rounded-lg border border-border bg-surface p-4 text-center md:p-6"
          >
            <p className="font-display text-2xl font-bold text-cyan md:text-3xl">
              {achievement.value}
            </p>

            <p className="mt-2 text-xs text-text-secondary md:text-sm">
              {achievement.label}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}