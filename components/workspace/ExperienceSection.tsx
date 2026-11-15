import { ExperienceCard } from "@/components/workspace/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
<<<<<<< HEAD
import { experiences } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12 md:mb-16">
=======
import { achievements, experiences } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12 scroll-mt-20 md:mb-16">
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        description="Experience in supply chain operations, data analysis, and business reporting."
      />

<<<<<<< HEAD
=======
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

>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}