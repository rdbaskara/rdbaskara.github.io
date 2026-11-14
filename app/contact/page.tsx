import { Container } from "@/components/layout/Container";
import { ContactSection } from "@/components/workspace/ContactSection";
import { TopBar } from "@/components/workspace/TopBar";
import { SideBar } from "@/components/workspace/SideBar";
import { StatusBar } from "@/components/workspace/StatusBar";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 overflow-y-auto">
          <Container className="py-16">
            <ContactSection />
          </Container>
        </main>
      </div>

      <StatusBar />
    </div>
  );
}