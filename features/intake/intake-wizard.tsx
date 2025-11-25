"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useAppState } from "@/store/app-state";

const steps = [
  {
    title: "Idea basics",
    description: "Who are we building for and what problem hurts the most?",
  },
  {
    title: "Constraints",
    description: "Capture non-negotiables and success signals.",
  },
  {
    title: "Preview",
    description: "Confirm before handing off to agents.",
  },
];

export function IntakeWizard() {
  const router = useRouter();
  const { project, updateProject, setStage } = useAppState();
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setStage("blueprint");
      router.push("/blueprint");
    }
  };

  const goBack = () => setCurrentStep((s) => Math.max(0, s - 1));

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Guided Flow</p>
          <h2 className="text-2xl font-semibold">Idea Intake Wizard</h2>
          <p className="text-sm text-muted-foreground">Keyboard-first, multi-step intake that feeds agents.</p>
        </div>
        <div className="flex gap-2">
          {steps.map((step, index) => (
            <Badge key={step.title} variant={index === currentStep ? "info" : "outline"}>
              {index + 1}. {step.title}
            </Badge>
          ))}
        </div>
      </header>

      {currentStep === 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Project name</label>
              <Input
                value={project.name}
                onChange={(e) => updateProject({ name: e.target.value })}
                placeholder="Project Erin"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Target users</label>
              <Input
                value={project.targetUsers}
                onChange={(e) => updateProject({ targetUsers: e.target.value })}
                placeholder="Indie builders"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-muted-foreground">Summary</label>
              <Textarea
                rows={3}
                value={project.summary}
                onChange={(e) => updateProject({ summary: e.target.value })}
                placeholder="Describe the vision..."
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Constraints & Signals</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Constraints (comma separated)</label>
              <Input
                value={project.constraints.join(", ")}
                onChange={(e) => updateProject({ constraints: e.target.value.split(",").map((v) => v.trim()) })}
                placeholder="Dark mode, keyboard-first"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Pain points (comma separated)</label>
              <Input
                value={project.painPoints.join(", ")}
                onChange={(e) => updateProject({ painPoints: e.target.value.split(",").map((v) => v.trim()) })}
                placeholder="Context switching, rework"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Preview & Handoff</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2 rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-primary">Scope</p>
              <p className="text-sm text-foreground">{project.summary}</p>
            </div>
            <div className="space-y-2 rounded-lg border border-white/10 bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-foreground">Users: {project.targetUsers}</p>
              <p>Constraints: {project.constraints.join(", ")}</p>
              <p>Pain points: {project.painPoints.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-white/5 bg-white/5">
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {steps.length} — mapped to Idea Clarifier → Blueprint Writer.
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" disabled={currentStep === 0} onClick={goBack}>
              Back
            </Button>
            <Button onClick={goNext}>{currentStep === steps.length - 1 ? "Generate Blueprint" : "Continue"}</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
