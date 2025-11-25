"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppState } from "@/store/app-state";

export function BacklogView() {
  const backlog = useAppState((state) => state.backlog);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Backlog</p>
          <h2 className="text-2xl font-semibold">Epics & Stories</h2>
          <p className="text-sm text-muted-foreground">Prioritized stories with agent suggestions inline.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export CSV</Button>
          <Button>Sync to Vercel</Button>
        </div>
      </header>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="board">Board</TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {backlog.map((item) => (
              <Card key={item.id}>
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription>
                      {item.epic} • {item.estimate}
                    </CardDescription>
                  </div>
                  <Badge variant="info">{item.priority}</Badge>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em]">
                    <span>Status: {item.status}</span>
                    <span>Agent: Backlog Builder</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Refine</p>
                    <p className="text-sm text-foreground">Ask agents to re-prioritize by ROI or team capacity.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="board">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { label: "Planned", color: "info" },
              { label: "In Progress", color: "success" },
              { label: "Review", color: "warning" },
            ].map((column) => (
              <Card key={column.label}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base">{column.label}</CardTitle>
                  <Badge variant="outline">Agent sync</Badge>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {backlog
                    .filter((item) => item.status === column.label)
                    .map((item) => (
                      <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
                        <p className="text-sm text-foreground">{item.title}</p>
                        <p className="text-xs uppercase tracking-[0.12em]">{item.epic}</p>
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
