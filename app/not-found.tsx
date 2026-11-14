import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="py-16">
        <div className="mx-auto max-w-xl rounded-lg border border-border bg-surface p-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">
            Error 404
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold text-text-primary md:text-5xl">
            Page not found
          </h1>

          <p className="mt-4 text-text-secondary">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/">
              <Button>Back to Overview</Button>
            </Link>

            <Link href="/projects">
              <Button variant="secondary">View Projects</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}