import { create } from "zustand";
import {
  type AgentEvent,
  type AgentPersona,
  type ArchitectureRecommendation,
  type BacklogItem,
  type BlueprintSection,
  type ProjectIdea,
  type ProjectStage,
} from "@/types";
import { blueprintSections, backlogItems, architectureRecs, agentPersonas, agentEvents } from "@/mocks/data";

type AppState = {
  stage: ProjectStage;
  project: ProjectIdea;
  blueprint: BlueprintSection[];
  backlog: BacklogItem[];
  architecture: ArchitectureRecommendation[];
  agents: AgentPersona[];
  events: AgentEvent[];
  setStage: (stage: ProjectStage) => void;
  updateProject: (idea: Partial<ProjectIdea>) => void;
};

export const useAppState = create<AppState>((set) => ({
  stage: "ideation",
  project: {
    id: "erin",
    name: "Project Erin",
    summary: "Agentic product builder that turns raw ideas into ship-ready blueprints.",
    targetUsers: "Builders who want structured AI copilots",
    painPoints: ["Fragmented agent UX", "Unclear specs", "Hard-to-follow backlogs"],
    constraints: ["Dark-mode default", "Keyboard-first navigation"],
  },
  blueprint: blueprintSections,
  backlog: backlogItems,
  architecture: architectureRecs,
  agents: agentPersonas,
  events: agentEvents,
  setStage: (stage) => set(() => ({ stage })),
  updateProject: (idea) =>
    set((state) => ({
      project: { ...state.project, ...idea },
    })),
}));
