import { cn } from "@/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconRight?: ReactNode;
}

/**
 * Button component with clean light theme variants and smooth hover animations
 * Based on Component/Button/* from portfolio.pen design system
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-accent hover:bg-accent-hover text-text-inverse shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5",
    secondary:
      "bg-text-primary hover:bg-text-secondary text-text-inverse hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5",
    outline:
      "border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-text-inverse hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
      {children}
      {iconRight && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{iconRight}</span>}
    </button>
  );
}
