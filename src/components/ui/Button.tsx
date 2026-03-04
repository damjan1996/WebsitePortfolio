import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "accent" | "ghost";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-full px-7 py-3.5 gap-2.5",
  outline:
    "border-[1.5px] border-[var(--border-strong)] text-[var(--foreground)] rounded-full px-7 py-3.5 gap-2.5",
  accent:
    "bg-[var(--primary)] text-[var(--primary-foreground)] rounded-full px-7 py-3.5 gap-2.5",
  ghost:
    "text-[var(--foreground)] px-4 py-3.5 gap-2",
};

export default function Button({
  label,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const iconSize = variant === "ghost" ? 16 : 18;
  const Icon = variant === "ghost" ? ArrowRight : ArrowUpRight;

  const inner = (
    <>
      <span
        className={`text-[13px] lg:text-[14px] font-semibold tracking-[0.5px] ${
          variant === "ghost" ? "text-[13px]" : ""
        }`}
      >
        {label}
      </span>
      <Icon className={`w-[${iconSize}px] h-[${iconSize}px]`} style={{ width: iconSize, height: iconSize }} />
    </>
  );

  const classes = `inline-flex items-center transition-opacity hover:opacity-80 ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
