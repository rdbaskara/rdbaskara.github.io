import { Container } from "@/components/layout/Container";
<<<<<<< HEAD
import { ProjectsSection } from "@/components/workspace/ProjectsSection";
import { TopBar } from "@/components/workspace/TopBar";
import { SideBar } from "@/components/workspace/SideBar";
=======
import ProjectsSection from "@/components/workspace/ProjectsSection";
import { TopBar } from "@/components/workspace/TopBar";
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
import { StatusBar } from "@/components/workspace/StatusBar";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

<<<<<<< HEAD
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 overflow-y-auto">
          <Container className="py-16">
            <ProjectsSection />
          </Container>
        </main>
      </div>
=======
      <main className="flex-1 overflow-y-auto">
        <Container className="py-16">
          <ProjectsSection />
        </Container>
      </main>
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f

      <StatusBar />
    </div>
  );
}