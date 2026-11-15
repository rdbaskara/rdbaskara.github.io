import { TopBar } from "@/components/workspace/TopBar";
<<<<<<< HEAD
import { SideBar } from "@/components/workspace/SideBar";
=======
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f
import { MainWorkspace } from "@/components/workspace/MainWorkspace";
import { StatusBar } from "@/components/workspace/StatusBar";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />

        <MainWorkspace />
      </div>
=======
    <div className="flex h-screen flex-col overflow-hidden">
      <TopBar />

      <MainWorkspace />
>>>>>>> d2115cb4feb85a2c92eef7af70c10f51e4e9970f

      <StatusBar />
    </div>
  );
}