"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppState } from "@/store/app-state";
import { Badge } from "@/components/ui/badge";

export function Dashboard() {
  const project = useAppState((state) => state.project);
  const blueprint = useAppState((state) => state.blueprint);
  const backlog = useAppState((state) => state.backlog);
  const architecture = useAppState((state) => state.architecture);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Project Summary</CardTitle>
            <CardDescription>{project.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground">Users:</span> {project.targetUsers}
            </p>
            <div>
              <p className="text-foreground">Pain Points</p>
              <ul className="list-disc space-y-1 pl-5">
                {project.painPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Jump back into the guided flow or review outputs.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button asChild>
              <Link href="/intake">Continue Intake</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/blueprint">Review Blueprint</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/backlog">Prioritize Backlog</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Exports</CardTitle>
            <CardDescription>Ready-made outputs for AI IDEs.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button variant="outline">Markdown</Button>
            <Button variant="outline">JSON</Button>
            <Button variant="outline">Vercel</Button>
            <Button variant="outline">Supabase</Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blueprint">
        <TabsList>
          <TabsTrigger value="blueprint">Blueprint</TabsTrigger>
          <TabsTrigger value="backlog">Backlog</TabsTrigger>
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
        </TabsList>
        <TabsContent value="blueprint">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {blueprint.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-base">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {section.insights && <p className="text-primary">{section.insights}</p>}
                  {section.callToAction && <p className="text-foreground">{section.callToAction}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="backlog">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {backlog.map((item) => (
              <Card key={item.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                    <CardDescription>
                      {item.epic} • {item.estimate}
                    </CardDescription>
                  </div>
                  <Badge variant="info">{item.priority}</Badge>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Status: {item.status}</span>
                  <div className="flex gap-1">
                    {item.tags?.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="architecture">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {architecture.map((rec) => (
              <Card key={rec.id}>
                <CardHeader>
                  <CardTitle className="text-base">{rec.area}</CardTitle>
                  <CardDescription>{rec.stack.join(", ")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p className="text-foreground">{rec.rationale}</p>
                  {rec.integrationNotes && <p className="text-primary">{rec.integrationNotes}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
