interface CategoryTagProps {
  label: string;
  variant?: "default" | "active" | "accent";
  onClick?: () => void;
}

const tagStyles = {
  default:
    "border-[1.5px] border-[var(--border-strong)] text-[var(--foreground)]",
  active: "bg-[var(--secondary)] text-[var(--secondary-foreground)]",
  accent: "bg-[var(--primary)] text-[var(--primary-foreground)]",
};

export default function CategoryTag({
  label,
  variant = "default",
  onClick,
}: CategoryTagProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-6 py-3 text-[13px] font-semibold tracking-[0.5px] transition-opacity hover:opacity-80 ${tagStyles[variant]}`}
    >
      {label}
    </button>
  );
}
