"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppState } from "@/store/app-state";

export function ArchitectureView() {
  const architecture = useAppState((state) => state.architecture);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Architecture</p>
          <h2 className="text-2xl font-semibold">Stack & Decisions</h2>
          <p className="text-sm text-muted-foreground">Highlight choices for Vercel + Supabase friendly deploys.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export Stackfile</Button>
          <Button>Send to Agents</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {architecture.map((rec) => (
          <Card key={rec.id}>
            <CardHeader>
              <CardTitle className="text-base">{rec.area}</CardTitle>
              <CardDescription>{rec.stack.join(", ")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p className="text-foreground">{rec.rationale}</p>
              {rec.integrationNotes && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Integrations</p>
                  <p className="text-foreground">{rec.integrationNotes}</p>
                </div>
              )}
              <Badge variant="outline">Ready for Supabase</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
