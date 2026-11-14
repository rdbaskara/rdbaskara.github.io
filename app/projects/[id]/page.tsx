import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { TopBar } from "@/components/workspace/TopBar";
import { SideBar } from "@/components/workspace/SideBar";
import { StatusBar } from "@/components/workspace/StatusBar";
import { projects } from "@/lib/site-config";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const statusVariant =
    project.status === "Live"
      ? "cyan"
      : project.status === "Ongoing"
        ? "yellow"
        : "default";

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 overflow-y-auto">
          <Container className="py-10 md:py-16">
            <div className="mb-6 md:mb-8">
              <a
                href="/projects"
                className="text-sm text-cyan transition-colors hover:text-text-primary"
              >
                ← Back to projects
              </a>
            </div>

            <section className="mb-10 md:mb-12">
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                <Tag label={project.category} />

                <Tag label={project.status} variant={statusVariant} />

                <span className="text-xs text-text-secondary md:text-sm">
                  {project.year}
                </span>
              </div>

              <h1 className="mt-4 font-display text-2xl font-bold text-text-primary md:text-4xl xl:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-3xl text-sm text-text-secondary md:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 md:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface-muted px-2.5 py-1 text-[11px] leading-none text-text-secondary md:px-3 md:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
                Project overview
              </h2>

              <p className="mt-4 text-sm text-text-secondary md:text-base">
                This case study will contain the business context, dataset,
                analytical approach, key findings, and recommendations.
              </p>
            </section>

            <section className="mb-10 md:mb-12">
              <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
                Key insights
              </h2>

              <div className="mt-5 grid gap-4 md:mt-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    Business context
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary">
                    Details about the operational challenge and objective of
                    the analysis will be added here.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    Analytical approach
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary">
                    Data sources, cleaning process, metrics, and analytical
                    methods will be documented here.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    Findings
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary">
                    Key findings and visual insights will be presented here.
                  </p>
                </Card>

                <Card>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    Recommendations
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary">
                    Actionable recommendations and expected business impact
                    will be added here.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <div className="rounded-lg border border-border bg-surface p-6 text-center md:p-8">
                <h2 className="font-display text-lg font-semibold text-text-primary md:text-xl">
                  Interested in this project?
                </h2>

                <p className="mt-2 text-sm text-text-secondary">
                  Let’s discuss how similar analysis can support your business.
                </p>

                <div className="mt-6 flex justify-center">
                  <a href="/contact">
                    <Button>Contact Me</Button>
                  </a>
                </div>
              </div>
            </section>
          </Container>
        </main>
      </div>

      <StatusBar />
    </div>
  );
}