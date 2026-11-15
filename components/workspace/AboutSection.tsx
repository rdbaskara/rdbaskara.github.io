import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Education } from "@/components/workspace/Education";

const highlights = [
  "Supply Chain Operations",
  "Inventory Management",
  "Data Analysis",
  "Business Reporting",
  "Process Improvement",
];

export function AboutSection() {
  return (
    <section id="about" className="mb-12 scroll-mt-20 md:mb-16">
      <SectionHeading
        eyebrow="About"
        title="Supply chain and operations professional"
        description="Focused on inventory accuracy, operational efficiency, and data-driven decision-making."
      />

      <div className="rounded-lg border border-border bg-surface p-4 md:p-6">
        <p className="text-sm font-medium text-text-primary md:text-base">
          Supply chain and operations professional with experience in inventory
          management, procurement planning, transaction reconciliation, and
          business reporting.
        </p>

        <p className="mt-4 text-sm text-text-secondary md:text-base">
          Skilled in using Microsoft Excel to analyze operational data, improve
          inventory visibility, and support decision-making across
          administrative, warehouse, and manufacturing operations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <Tag key={item} label={item} />
          ))}
        </div>
      </div>

      <Education />
    </section>
  );
}