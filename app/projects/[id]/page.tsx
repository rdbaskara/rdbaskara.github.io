import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { TopBar } from "@/components/workspace/TopBar";
import { StatusBar } from "@/components/workspace/StatusBar";
import { projects } from "@/lib/site-config";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

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

      <main className="flex-1 overflow-y-auto">
        <Container className="py-10 md:py-16">
          <div className="mb-6 md:mb-8">
            <a
              href="/#projects"
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

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Tools
              </p>

              <p className="mt-2 text-sm text-text-secondary md:text-base">
                {project.tools.join(" · ")}
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Project overview
            </h2>

            <p className="mt-4 text-sm text-text-secondary md:text-base">
              {project.overview}
            </p>

            <div className="mt-6 rounded-lg border border-border bg-surface p-4 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Key metric
              </p>

              <p className="mt-2 font-display text-xl font-bold text-cyan md:text-2xl">
                {project.metric}
              </p>
            </div>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Goals
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary md:text-base">
              {project.goals.map((goal) => (
                <li key={goal}>• {goal}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Methodology
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary md:text-base">
              {project.methodology.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Key findings
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary md:text-base">
              {project.findings.map((finding) => (
                <li key={finding}>• {finding}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-display text-xl font-bold text-text-primary md:text-2xl">
              Recommendations
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-text-secondary md:text-base">
              {project.recommendations.map((recommendation) => (
                <li key={recommendation}>• {recommendation}</li>
              ))}
            </ul>
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
                <a href="/#contact">
                  <Button>Contact Me</Button>
                </a>
              </div>
            </div>
          </section>
        </Container>
      </main>

      <StatusBar />
    </div>
  );
}