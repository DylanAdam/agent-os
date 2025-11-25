import {
  type AgentEvent,
  type AgentPersona,
  type ArchitectureRecommendation,
  type BacklogItem,
  type BlueprintSection,
} from "@/types";

export const blueprintSections: BlueprintSection[] = [
  {
    title: "Problem & Opportunity",
    description: "Builders waste time wrangling multiple agents. Erin provides a guided, agent-aware workspace to turn raw ideas into actionable plans.",
    insights: "Highlight context capture and verification loops as differentiators.",
    callToAction: "Validate problem framing with the Idea Clarifier agent.",
  },
  {
    title: "Target Users",
    description: "Indie makers, product leads, and technical founders who want AI structure without losing control.",
    insights: "Lean into keyboard-first flows for power users.",
    callToAction: "Pull personas into backlog prioritization.",
  },
  {
    title: "Solution Shape",
    description: "Multi-step intake wizard, blueprint composer, backlog/table views, and architecture insights—all wired to agent personas.",
    insights: "Use split-pane layouts to keep outputs visible during conversation.",
    callToAction: "Prototype wizard → blueprint handoff.",
  },
  {
    title: "Success Metrics",
    description: "Time-to-blueprint under 5 minutes; backlog clarity score from user ratings; export-ready specs for AI IDEs.",
    insights: "Track agent response quality and cycle count.",
  },
];

export const backlogItems: BacklogItem[] = [
  {
    id: "B-101",
    epic: "Intake",
    title: "Design idea intake wizard with progressive disclosure",
    priority: "P0",
    status: "In Progress",
    estimate: "3d",
    tags: ["wizard", "UX"],
  },
  {
    id: "B-102",
    epic: "Blueprint",
    title: "Blueprint split-view with live agent insights",
    priority: "P0",
    status: "Planned",
    estimate: "4d",
    tags: ["layout", "agent"],
  },
  {
    id: "B-103",
    epic: "Backlog",
    title: "Board/table hybrid for epic and story drill-down",
    priority: "P1",
    status: "Planned",
    estimate: "3d",
    tags: ["roadmap"],
  },
  {
    id: "B-104",
    epic: "Architecture",
    title: "Architecture recommendations panel with export",
    priority: "P1",
    status: "Review",
    estimate: "2d",
    tags: ["architecture"],
  },
];

export const architectureRecs: ArchitectureRecommendation[] = [
  {
    id: "A-01",
    area: "Front-End",
    stack: ["Next.js App Router", "Tailwind/shadcn", "Radix UI"],
    rationale: "Modern DX with server components, premium UI primitives, and dark-mode theming.",
    integrationNotes: "Add Vercel deploy + preview channels; use Supabase auth as optional baseline.",
  },
  {
    id: "A-02",
    area: "Agents",
    stack: ["Agent OS", "worker queue", "observation store"],
    rationale: "Spec-driven orchestration with clear delegation and verification loops.",
    integrationNotes: "Dual-mode toggle for single vs multi-agent per project.",
  },
  {
    id: "A-03",
    area: "Data",
    stack: ["Supabase", "pgvector", "Drizzle ORM"],
    rationale: "Batteries-included auth/storage and vector search for prompts and artifacts.",
    integrationNotes: "Document retention policies for conversation logs.",
  },
];

export const agentPersonas: AgentPersona[] = [
  {
    id: "agent-clarifier",
    name: "Idea Clarifier",
    role: "Extract requirements and reframe scope",
    status: "ready",
    lastAction: "Tightened scope for onboarding flow",
    focusArea: "Problem framing",
  },
  {
    id: "agent-writer",
    name: "Blueprint Writer",
    role: "Draft PRD sections and UX notes",
    status: "running",
    lastAction: "Updated solution shape and success metrics",
    focusArea: "PRD drafting",
  },
  {
    id: "agent-backlog",
    name: "Backlog Builder",
    role: "Generate epics, stories, and priorities",
    status: "idle",
    lastAction: "Awaiting latest blueprint",
    focusArea: "Roadmap",
  },
  {
    id: "agent-architect",
    name: "Architecture Advisor",
    role: "Recommend stack and integration choices",
    status: "ready",
    lastAction: "Proposed Supabase + Vercel deploy targets",
    focusArea: "Tech stack",
  },
];

export const agentEvents: AgentEvent[] = [
  {
    id: "evt-1",
    agentId: "agent-writer",
    summary: "Blueprint Writer refined success metrics based on intake responses.",
    timestamp: "10:24",
    severity: "success",
  },
  {
    id: "evt-2",
    agentId: "agent-clarifier",
    summary: "Idea Clarifier flagged missing user constraints.",
    timestamp: "10:18",
  },
  {
    id: "evt-3",
    agentId: "agent-architect",
    summary: "Architecture Advisor suggested Supabase for auth + data.",
    timestamp: "10:08",
    severity: "info",
  },
];
