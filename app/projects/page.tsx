import { Container } from "@/components/layout/Container";
import ProjectsSection from "@/components/workspace/ProjectsSection";
import { TopBar } from "@/components/workspace/TopBar";
import { StatusBar } from "@/components/workspace/StatusBar";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <main className="flex-1 overflow-y-auto">
        <Container className="py-16">
          <ProjectsSection />
        </Container>
      </main>

      <StatusBar />
    </div>
  );
}