export type ProjectStatus = "Completed" | "Ongoing" | "Live";

export type ProjectCategory =
  | "Data Analytics"
  | "Dashboard"
  | "Python-ML"
  | "SQL"
  | "Supply Chain";

export interface ProjectLink {
  github?: string;
  liveDemo?: string;
  article?: string;
  dashboard?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  tags: string[];
  status: ProjectStatus;
  year: number;
  role: string;
  summary: string;
  problem: string;
  goal: string[];
  methodology: string[];
  keyFindings: string[];
  recommendations: string[];
  metrics: string[];
  techStack: string[];
  coverImage: string;
  gallery: string[];
  tableau?: {
    enabled: boolean;
    src?: string;
    height?: number;
  };
  code?: {
    enabled: boolean;
    gistUrl?: string;
    language?: string;
  };
  links: ProjectLink;
}