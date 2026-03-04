interface StatCardProps {
  label: string;
  value: string;
  description: string;
}

export default function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="flex flex-col gap-2 p-7 bg-[var(--card)] rounded-[var(--radius-lg)] border border-[var(--border)]">
      <span className="text-[12px] font-medium tracking-[1px] text-[var(--muted-foreground)]">
        {label}
      </span>
      <span className="font-primary text-[48px] font-extrabold text-[var(--primary)]">
        {value}
      </span>
      <span className="text-[14px] text-[var(--foreground)]">{description}</span>
    </div>
  );
}
