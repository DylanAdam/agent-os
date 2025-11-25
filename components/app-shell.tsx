"use client";

import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { AgentsBar } from "@/components/right-panel";
import { CommandPaletteButton } from "@/components/command-palette";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/store/app-state";

export function AppShell({ children }: { children: React.ReactNode }) {
  const stage = useAppState((state) => state.stage);

  return (
    <div className="flex min-h-screen bg-background/80">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{stage}</p>
            <h1 className="text-2xl font-semibold text-foreground">Erin</h1>
            <p className="text-sm text-muted-foreground">
              Agentic product builder — guided flows, blueprint outputs, backlog clarity.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CommandPaletteButton />
            <Button asChild variant="secondary">
              <Link href="/intake">New Project</Link>
            </Button>
          </div>
        </div>
        {children}
      </main>
      <AgentsBar />
    </div>
  );
}
