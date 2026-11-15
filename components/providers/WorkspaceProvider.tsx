"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type WorkspaceContextValue = {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((previous) => !previous);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isSidebarVisible,
        toggleSidebar,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used inside WorkspaceProvider");
  }

  return context;
}