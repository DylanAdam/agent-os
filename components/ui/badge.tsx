import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-white/10 text-foreground border-white/10",
        outline: "text-muted-foreground",
        success: "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
        warning: "bg-amber-500/20 text-amber-200 border-amber-500/30",
        info: "bg-primary/20 text-primary-foreground border-primary/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, ...props }: BadgeProps) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
);

export { Badge, badgeVariants };
