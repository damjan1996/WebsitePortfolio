import { cn } from "@/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

/**
 * Clean card component with subtle shadow and smooth hover animations
 * Based on Component/Card from portfolio.pen design system
 */
export function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-bg-card rounded-xl border border-border-secondary",
        "shadow-[var(--shadow-md)]",
        "transition-all duration-300 ease-out",
        hover && "hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 hover:border-border-primary",
        paddingSizes[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

// Keep GlassCard as alias for backwards compatibility
export const GlassCard = Card;
