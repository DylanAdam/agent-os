"use client";

import { AgentsPanel } from "@/features/agents/agents-panel";

export function AgentsBar() {
  return (
    <aside className="glass-panel hidden w-80 shrink-0 flex-col gap-4 border-l border-white/5 px-4 py-6 lg:flex">
      <AgentsPanel dense />
    </aside>
  );
}
