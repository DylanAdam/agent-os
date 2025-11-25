"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppState } from "@/store/app-state";

export function BlueprintView() {
  const blueprint = useAppState((state) => state.blueprint);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Blueprint</p>
          <h2 className="text-2xl font-semibold">PRD & Blueprint</h2>
          <p className="text-sm text-muted-foreground">Split view ready for agent annotations and exports.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Share Markdown</Button>
          <Button>Export JSON</Button>
        </div>
      </header>

      <Tabs defaultValue="sections">
        <TabsList>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="insights">Agent Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="sections">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {blueprint.map((section) => (
              <Card key={section.title}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                  {section.insights && <Badge variant="info">Agent</Badge>}
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {section.insights && <p className="text-primary">{section.insights}</p>}
                  {section.callToAction && <p className="text-foreground">{section.callToAction}</p>}
                  <div className="rounded-lg border border-white/5 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Refine with Erin</p>
                    <p className="text-sm text-foreground">Ask agents to tighten scope, add metrics, or generate UX notes.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="insights">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Insights Stream</CardTitle>
              <CardDescription>Stubbed feed for agent explanations and deltas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Blueprint Writer suggests anchoring success metrics to onboarding drop-off.</p>
              <p>Idea Clarifier wants an explicit problem statement per persona.</p>
              <p>Architecture Advisor ready to sync with Supabase schema.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
