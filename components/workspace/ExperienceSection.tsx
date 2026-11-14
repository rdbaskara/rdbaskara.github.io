import { ExperienceCard } from "@/components/workspace/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/site-config";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12 md:mb-16">
      <SectionHeading
        eyebrow="Experience"
        title="Professional experience"
        description="Experience in supply chain operations, data analysis, and business reporting."
      />

      <div className="space-y-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}