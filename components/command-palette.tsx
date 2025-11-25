import { CommandIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommandPaletteButton() {
  return (
    <Button variant="subtle" className="gap-2 border border-white/10">
      <CommandIcon className="h-4 w-4" />
      Command Palette
      <span className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] text-muted-foreground">⌘K</span>
    </Button>
  );
}
