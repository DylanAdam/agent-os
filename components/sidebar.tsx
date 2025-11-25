"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IdeaIcon, BlueprintIcon, BacklogIcon, ArchitectureIcon, AgentsIcon } from "@/components/icons";

const navItems = [
  { href: "/", label: "Dashboard", icon: <IdeaIcon /> },
  { href: "/intake", label: "Intake Wizard", icon: <IdeaIcon /> },
  { href: "/blueprint", label: "Blueprint", icon: <BlueprintIcon /> },
  { href: "/backlog", label: "Backlog", icon: <BacklogIcon /> },
  { href: "/architecture", label: "Architecture", icon: <ArchitectureIcon /> },
  { href: "/agents", label: "Agents", icon: <AgentsIcon /> },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass-panel flex h-full w-64 flex-col gap-4 border-r border-white/5 px-3 py-4">
      <div className="flex items-center justify-between px-2">
        <div>
          <p className="text-sm text-muted-foreground">Project</p>
          <p className="text-lg font-semibold">Erin</p>
        </div>
        <Badge variant="info">Agent OS</Badge>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={active ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 px-3 py-2 text-sm",
                  active && "shadow-glow"
                )}
              >
                <span className="text-primary/80">{item.icon}</span>
                {item.label}
              </Button>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-2 rounded-lg border border-white/10 bg-secondary/40 p-3">
        <p className="text-sm font-semibold">Exports</p>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="justify-center">
            Markdown
          </Button>
          <Button variant="outline" size="sm" className="justify-center">
            JSON
          </Button>
          <Button variant="outline" size="sm" className="justify-center">
            Vercel
          </Button>
          <Button variant="outline" size="sm" className="justify-center">
            Supabase
          </Button>
        </div>
      </div>
    </aside>
  );
}
