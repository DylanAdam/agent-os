# Erin Front-End First Plan (Vibecoding Aligned)

## Repo Knowledge Snapshot
- **Existing docs**: `README.md` (Agent OS overview), `CHANGELOG.md` (historical changes). No in-repo content on Erin or Vibecoding; the vision is provided by the user.
- **Constraints**: Front-end first, dark premium aesthetic, agent-ready but backend stubbed initially.

## Product Alignment
- **Primary entity terminology**: Project (per user).
- **Initial flow priority**: Idea Intake wizard comes before Blueprint view.
- **Exports**: Include export buttons (Markdown/JSON) early for PRD/backlog/architecture outputs.
- **Inspirations**: Linear/Cursor/Raycast with additional nods to Vercel (developer polish) and Supabase (friendly dev tooling aesthetic).

## Vibecoding Loop Application
For each milestone: Clarify the task, Outline components/data/flows, Plan file structure and order, Execute in small chunks, Reflect with next-step recommendations.

## Conceptual Architecture (UI)
- **App Shell**: Sidebar (projects, command palette entry), Main workspace (wizard/blueprint/backlog/architecture), Right Insight Panel (agent status, suggestions, actions).
- **Modules**:
  - Guided Flow (Idea Intake wizard)
  - Blueprint Engine UI (mini-PRD, prioritization)
  - Backlog UI (epics/stories/priority)
  - Architecture Advisor (stack/diagram suggestions)
  - Agent Insight Panel (agent cards, logs, dual-mode toggle)
  - Command Palette / Keyboard Layer
  - Session/Workspace State with mock data
  - Export Surface (Markdown/JSON actions)
- **Agent OS Mapping**:
  - Default agents: Idea Clarifier, Spec Writer, Backlog Builder, Architect, QA Verifier.
  - UI surfacing: status badges, run/re-run/refine actions, logs per agent, dual-mode control (single vs multi-agent), contextual “Refine with Erin” entries on cards.

## Front-End First Implementation Plan (sequenced)
1. **Design Tokens & Theme (Dark-first)**
   - Goal: Establish palette, typography, radii, shadows, glassmorphic surfaces.
   - Files: `styles/tokens.(ts|json)`, `styles/theme.css`.

2. **Core Layout Shell**
   - Goal: Persistent app shell with Sidebar, Main, Right Insight Panel.
   - Files: `app/layout.tsx`, `components/layout/AppShell.tsx`, `components/layout/Sidebar.tsx`, `components/layout/RightPanel.tsx`.
   - Dependency: tokens/theme.

3. **Design System Primitives**
   - Goal: Buttons, inputs, cards, tabs, badges, table, dialog, tooltip, toast; shadcn/ui + Radix.
   - Files: `components/ui/*`, `components/typography/*`.
   - Dependency: layout scaffold.

4. **Command Palette & Hotkeys**
   - Goal: Global keyboard-first control; quick actions for creating projects, jumping to wizard, running agents.
   - Files: `components/CommandPalette.tsx`, `hooks/useHotkeys.ts`.
   - Dependency: primitives.

5. **Idea Intake Wizard (Priority)**
   - Goal: Multi-step guided flow for project intake; inline agent hints and validation.
   - Files: `features/intake/*` (Wizard container, Step components, Progress tracker), `mocks/intake.ts`.
   - Dependency: primitives, command palette hooks.

6. **Blueprint View**
   - Goal: Present generated mini-PRD with sections (problem, audience, scope, success metrics, UX notes) and export buttons.
   - Files: `features/blueprint/*`, `mocks/blueprint.ts`.
   - Dependency: intake data shapes.

7. **Backlog View**
   - Goal: Epics/stories with priority chips, filters, inline refine/export actions.
   - Files: `features/backlog/*`, `mocks/backlog.ts`.
   - Dependency: blueprint structures.

8. **Architecture View**
   - Goal: Stack suggestions, decision log, diagram placeholders; emphasize monospace tech cards.
   - Files: `features/architecture/*`, `mocks/architecture.ts`.
   - Dependency: design system, blueprint context.

9. **Agent Insight Panel**
   - Goal: Agent cards (Idea Clarifier, Spec Writer, Backlog Builder, Architect, QA Verifier), run states, logs, dual-mode toggle.
   - Files: `features/agents/*`, `types/agent.ts`, `services/agents/mockClient.ts`.
   - Dependency: accessible from all views.

10. **State Management & Mock Wiring**
    - Goal: Shared store (e.g., Zustand) for project/session state; mock agent events; syncing exports.
    - Files: `store/*`, `types/*`, `mocks/*` integration.

11. **Landing/Dashboard**
    - Goal: Entry point with recent projects and CTA into Idea Intake wizard.
    - Files: `app/page.tsx` (or routes equivalent), `features/dashboard/*`.
    - Dependency: layout & store.

12. **Polish & Accessibility**
    - Goal: Focus states, ARIA labels, skeletons, empty states, responsive tuning.
    - Files: `components/a11y/*`, shared styles.

13. **Documentation & Reflection**
    - Goal: Capture architecture decisions and next steps per Vibecoding.
    - Files: `docs/ui-architecture.md`, `docs/agent-ui-mapping.md` (future).

## Next-Step Focus (per user priorities)
- Start with design tokens/theme, then core layout, then Idea Intake wizard before Blueprint.
- Prepare export buttons in Blueprint/Backlog/Architecture views early (wired to mock data for now).
- Include Vercel/Supabase-inspired micro-interactions (confident gradients, soft glows, developer-friendly feedback) while maintaining Linear-level restraint.

## Open Items (no blocking questions outstanding)
- Proceed with default agent set above unless you prefer edits; can expand in future.
