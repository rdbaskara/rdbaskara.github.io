import { TopBar } from "@/components/workspace/TopBar";
import { MainWorkspace } from "@/components/workspace/MainWorkspace";
import { StatusBar } from "@/components/workspace/StatusBar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <TopBar />

      <MainWorkspace />

      <StatusBar />
    </div>
  );
}