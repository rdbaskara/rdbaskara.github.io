import { TopBar } from "@/components/workspace/TopBar";
import { SideBar } from "@/components/workspace/SideBar";
import { MainWorkspace } from "@/components/workspace/MainWorkspace";
import { StatusBar } from "@/components/workspace/StatusBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />

        <MainWorkspace />
      </div>

      <StatusBar />
    </div>
  );
}