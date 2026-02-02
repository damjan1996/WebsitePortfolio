import { cn } from "@/utils";
import { ReactNode } from "react";

type BadgeVariant = "accent" | "neutral" | "outline" | "success" | "dark";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

/**
 * Badge/Tag component
 * Based on Component/Badge/* from portfolio.pen design system
 */
export function Badge({
  children,
  variant = "neutral",
  dot = false,
  className,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200";

  const variants: Record<BadgeVariant, string> = {
    accent: "bg-accent-light text-accent",
    neutral: "bg-bg-secondary text-text-secondary",
    outline: "border border-border-primary text-text-secondary",
    success: "bg-[#ECFDF5] text-[#059669]",
    dark: "bg-text-primary text-text-inverse",
  };

  const dotColors: Record<BadgeVariant, string> = {
    accent: "bg-accent",
    neutral: "bg-text-muted",
    outline: "bg-text-secondary",
    success: "bg-[#059669]",
    dark: "bg-text-inverse",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {dot && (
        <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])} />
      )}
      {children}
    </span>
  );
}
