import { cn } from "@/utils";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
}

/**
 * Input field component with clean light theme styling
 * Based on Component/Input/* from portfolio.pen design system
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl",
            "bg-bg-secondary border border-border-primary",
            "transition-all duration-300 ease-out",
            "focus-within:border-accent focus-within:ring-2 focus-within:ring-accent-muted focus-within:shadow-[0_0_0_4px_var(--accent-muted)]",
            "hover:border-text-muted",
            error && "border-red-500 focus-within:border-red-500 focus-within:ring-red-100",
            className
          )}
        >
          {icon && (
            <span className="text-text-muted flex-shrink-0">{icon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted outline-none text-sm"
            {...props}
          />
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
