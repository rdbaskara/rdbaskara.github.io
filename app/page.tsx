import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { highlights, services, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container className="py-16">
        <section className="mb-16">
          <Tag label={siteConfig.status} variant="cyan" />

          <h1 className="mt-4 font-display text-4xl font-bold text-text-primary md:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-2 text-lg font-medium text-cyan">
            {siteConfig.role}
          </p>

          <p className="mt-4 max-w-3xl text-text-secondary">
            {siteConfig.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button>View Projects</Button>
            <Button variant="secondary">Contact Me</Button>
            <ThemeToggle />
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading
            eyebrow="Highlights"
            title="Operational impact through data"
            description="Selected outcomes from supply chain operations and data analytics work."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.title}>
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
        </section>

        <section>
          <SectionHeading
            eyebrow="What I Do"
            title="Data analysis for operational decisions"
            description="From raw operational data to actionable business insights."
          />

          <div className="grid gap-4 md:grid-cols-2">
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
        </section>
      </Container>
    </main>
  );
}