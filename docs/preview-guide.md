# Erin Front-End Preview Guide

This repo already contains the design attempts created in the last pass. Use this guide to preview each screen one by one.

## Prerequisites
- Node 18+ (Next.js 14).
- Install dependencies: `npm install` (if the registry is blocked, use your own proxy or offline cache and rerun the command).

## Running the dev server
1. From the repo root: `npm run dev`
2. Open `http://localhost:3000` in your browser.

## Screens to preview
- **Dashboard**: `http://localhost:3000/` — entry point with recent projects and CTA into the intake wizard.
- **Idea Intake Wizard (priority)**: `http://localhost:3000/intake` — guided project intake flow.
- **Blueprint view**: `http://localhost:3000/blueprint` — mini-PRD presentation with export buttons.
- **Backlog view**: `http://localhost:3000/backlog` — epics/stories with priority chips and filters.
- **Architecture view**: `http://localhost:3000/architecture` — stack suggestions and decision log placeholders.
- **Agents console**: `http://localhost:3000/agents` — agent cards/logs and dual-mode toggle stubs.

## Keyboard & exports
- Command palette entry is stubbed and wired for keyboard-first navigation via the sidebar CTA.
- Export buttons are present on the Blueprint/Backlog/Architecture views (wired to mock data placeholders).

## Notes
- All data is mocked; no backend/agent calls are required.
- Layout is dark-mode by default with sidebar + main content + right insight rail.
- If you need a static snapshot instead of running the app, open the page files inside `features/*` for JSX structure and design tokens in `app/globals.css` and `components/ui/*`.
