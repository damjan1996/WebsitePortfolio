import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-5 p-6 md:p-7 bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--muted)]">
        <Icon className="w-[22px] h-[22px] text-[var(--foreground)]" />
      </div>
      <h3 className="font-primary text-[18px] md:text-[20px] font-bold text-[var(--foreground)]">
        {title}
      </h3>
      <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--muted-foreground)]">
        {description}
      </p>
    </div>
  );
}
