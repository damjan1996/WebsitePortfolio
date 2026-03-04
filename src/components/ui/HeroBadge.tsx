interface HeroBadgeProps {
  label: string;
}

export default function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <span className="self-start inline-flex items-center rounded-full border-[1.5px] border-[var(--border-strong)] px-5 py-2 text-[12px] font-semibold tracking-[1.5px] text-[var(--foreground)]">
      {label}
    </span>
  );
}
