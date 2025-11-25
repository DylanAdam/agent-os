export type ProjectStage = "ideation" | "blueprint" | "backlog" | "architecture";

export interface ProjectIdea {
  id: string;
  name: string;
  summary: string;
  targetUsers: string;
  painPoints: string[];
  constraints: string[];
}

export interface BlueprintSection {
  title: string;
  description: string;
  insights?: string;
  callToAction?: string;
}

export interface BacklogItem {
  id: string;
  epic: string;
  title: string;
  priority: "P0" | "P1" | "P2";
  status: "Planned" | "In Progress" | "Review";
  estimate: string;
  tags?: string[];
}

export interface ArchitectureRecommendation {
  id: string;
  area: string;
  stack: string[];
  rationale: string;
  integrationNotes?: string;
}

export interface AgentPersona {
  id: string;
  name: string;
  role: string;
  status: "idle" | "running" | "ready";
  lastAction: string;
  focusArea: string;
}

export interface AgentEvent {
  id: string;
  agentId: string;
  summary: string;
  timestamp: string;
  severity?: "info" | "warning" | "success";
}
