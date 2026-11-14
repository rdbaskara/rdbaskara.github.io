import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/site-config";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-12 md:mb-16">
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolkit"
        description="Data analysis, supply chain operations, and workflow tools."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="rounded-lg border border-border bg-surface p-5 md:p-6"
          >
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {group.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-1.5 md:gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface-muted px-2.5 py-1 text-[11px] leading-none text-text-secondary md:px-3 md:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}