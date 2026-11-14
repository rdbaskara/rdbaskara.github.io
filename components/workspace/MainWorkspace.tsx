"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { highlights, services, siteConfig } from "@/lib/site-config";
import ProjectsSection from "@/components/workspace/ProjectsSection";
import { ExperienceSection } from "@/components/workspace/ExperienceSection";
import { SkillsSection } from "@/components/workspace/SkillsSection";
import { ContactSection } from "@/components/workspace/ContactSection";
import { AboutSection } from "@/components/workspace/AboutSection";
import { SideBar } from "@/components/workspace/SideBar";
import { Parallax } from "@/components/ui/Parallax";

export function MainWorkspace() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  return (
    <div className="flex flex-1 overflow-hidden">
      <SideBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="flex-1 overflow-y-auto">
        <Container className="pb-10 md:pb-16 pt-6 md:pt-10">
          <SectionTransition delay={0}>
            <section
              id="overview"
              className="relative mb-12 overflow-hidden scroll-mt-6 md:mb-16"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <Parallax speed={0.03}>
                  <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
                </Parallax>

                <Parallax speed={0.05}>
                  <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                </Parallax>
              </div>

              <Tag label={siteConfig.status} variant="cyan" />

              <h1 className="mt-4 font-display text-3xl font-bold text-text-primary md:text-5xl xl:text-6xl">
                {siteConfig.name}
              </h1>

              <p className="mt-2 text-lg font-medium text-cyan">
                {siteConfig.role}
              </p>

              <p className="mt-4 max-w-3xl text-sm text-text-secondary md:text-base">
                {siteConfig.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button>View Projects</Button>
                <Button variant="secondary">Contact Me</Button>
              </div>

              <div className="mt-12">
                <SectionHeading
                  eyebrow="Highlights"
                  title="Operational impact through data"
                  description="Selected outcomes from supply chain operations and data analytics work."
                />

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {highlights.map((item) => (
                    <Card key={item.title} className="metric-card">
                      <div className="mb-3 text-2xl">{item.icon}</div>

                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-text-secondary">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <SectionHeading
                  eyebrow="What I Do"
                  title="Data analysis for operational decisions"
                  description="From raw operational data to actionable business insights."
                />

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {services.map((item) => (
                    <Card key={item.title}>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-text-secondary">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </SectionTransition>

          <SectionTransition delay={100}>
            <AboutSection />
          </SectionTransition>

          <SectionTransition delay={150}>
            <ExperienceSection />
          </SectionTransition>

          <SectionTransition delay={200}>
            <ProjectsSection activeCategory={activeCategory} />
          </SectionTransition>

          <SectionTransition delay={250}>
            <SkillsSection />
          </SectionTransition>

          <SectionTransition delay={300}>
            <ContactSection />
          </SectionTransition>
        </Container>
      </main>
    </div>
  );
}