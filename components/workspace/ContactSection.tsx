import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something useful"
        description="Open to data analyst, supply chain analyst, and business intelligence opportunities."
      />

      <div className="rounded-lg border border-border bg-surface p-5 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary md:text-2xl">
              Let’s discuss your data challenge
            </h3>

            <p className="mt-3 text-sm text-text-secondary">
              Whether you need help with data cleaning, dashboard development,
              operational analysis, or supply chain reporting, I’m open to
              discussing how data can support better decisions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`mailto:${siteConfig.email}`}>
                <Button>Email Me</Button>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">LinkedIn</Button>
              </a>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <div className="rounded-lg border border-border bg-surface-muted p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-secondary md:text-xs">
                Email
              </p>

              <p className="mt-2 text-sm text-text-primary">
                {siteConfig.email}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-muted p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-secondary md:text-xs">
                Location
              </p>

              <p className="mt-2 text-sm text-text-primary">
                {siteConfig.location}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface-muted p-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-secondary md:text-xs">
                Response Time
              </p>

              <p className="mt-2 text-sm text-text-primary">
                {siteConfig.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}