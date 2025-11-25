"use client";

import { AgentsPanel } from "@/features/agents/agents-panel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AgentsPanelPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Agents</p>
          <h2 className="text-2xl font-semibold">Orchestration Console</h2>
          <p className="text-sm text-muted-foreground">Map Erin flows to agent personas and delegation mode.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Single Agent</Button>
          <Button>Multi-Agent</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Flow Mapping</CardTitle>
            <CardDescription>Stubbed map tying steps to agents.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Intake</p>
              <p className="text-foreground">Idea Clarifier</p>
              <p>Collects constraints, personas, and success signals.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Blueprint</p>
              <p className="text-foreground">Blueprint Writer</p>
              <p>Drafts PRD, UX notes, and metrics.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Backlog</p>
              <p className="text-foreground">Backlog Builder</p>
              <p>Produces epics, stories, and priorities.</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Architecture</p>
              <p className="text-foreground">Architecture Advisor</p>
              <p>Recommends stack, integrations (Vercel, Supabase).</p>
            </div>
          </CardContent>
        </Card>
        <div>
          <AgentsPanel />
        </div>
      </div>
    </div>
  );
}
