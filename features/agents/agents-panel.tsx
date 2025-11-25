"use client";

import { useAppState } from "@/store/app-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AgentsPanel({ dense = false }: { dense?: boolean }) {
  const agents = useAppState((state) => state.agents);
  const events = useAppState((state) => state.events);

  return (
    <div className="flex flex-col gap-3">
      <Card className="glass-panel border-white/10 bg-gradient-to-b from-white/5 to-white/0">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Agent Roster</CardTitle>
          {!dense && <Badge variant="info">Live</Badge>}
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-2">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex items-start justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2"
            >
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{agent.name}</p>
                <p className="text-xs text-muted-foreground">{agent.role}</p>
                <p className="text-xs text-primary">{agent.focusArea}</p>
              </div>
              <Badge variant={agent.status === "running" ? "info" : "default"}>{agent.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-secondary/40">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Activity</CardTitle>
          <Button size="sm" variant="ghost" className="px-2 text-xs">
            View all
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {events.map((event) => (
            <div key={event.id} className="flex items-start justify-between rounded-md bg-white/5 px-3 py-2">
              <div>
                <p className="text-sm text-foreground">{event.summary}</p>
                <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">{event.timestamp}</p>
              </div>
              <Badge variant={event.severity === "success" ? "success" : event.severity === "info" ? "info" : "outline"}>
                {event.severity ?? "info"}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {!dense && (
        <Card className="border-white/10 bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-base">Integrations</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>Vercel previews</span>
              <Badge variant="outline">Planned</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Supabase auth & data</span>
              <Badge variant="outline">Planned</Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
