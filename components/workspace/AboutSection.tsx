"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Education } from "@/components/workspace/Education";
import { siteConfig } from "@/lib/site-config";

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
        title="Supply Chain and Operations Professional"
        description="Focused on inventory accuracy, operational efficiency, and data-driven decision-making."
      />

      <div className="interactive-card flex flex-col gap-6 rounded-lg border border-border bg-surface p-4 md:flex-row md:gap-8 md:p-6">
        <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-72 md:w-60">
          <Image
            src="/images/profile/about2.png"
            alt={siteConfig.name}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-text-primary md:text-base">
            Supply chain and operations professional with experience in
            inventory management, procurement planning, transaction
            reconciliation, and business reporting.
          </p>

          <p className="mt-4 text-sm text-text-secondary md:text-base">
            Skilled in using Microsoft Excel to analyze operational data,
            improve inventory visibility, and support decision-making across
            administrative, warehouse, and manufacturing operations.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Tag key={item} label={item} />
            ))}
          </div>
        </div>
      </div>

      <Education />
    </section>
  );
}