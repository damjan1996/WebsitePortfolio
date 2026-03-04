import Button from "./Button";

interface SectionHeaderProps {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  descriptionWidth?: string;
}

export default function SectionHeader({
  title,
  description,
  ctaLabel,
  ctaHref,
  descriptionWidth = "max-w-[560px]",
}: SectionHeaderProps) {
  if (ctaLabel) {
    return (
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="font-primary text-[28px] md:text-[36px] lg:text-[48px] font-extrabold tracking-[-1.5px] lg:tracking-[-2px] text-[var(--foreground)]">
            {title}
          </h2>
          {description && (
            <p
              className={`text-[14px] md:text-[15px] leading-[1.6] text-[var(--muted-foreground)] ${descriptionWidth}`}
            >
              {description}
            </p>
          )}
        </div>
        <div className="shrink-0">
          <Button label={ctaLabel} href={ctaHref} variant="outline" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="font-primary text-[28px] md:text-[36px] lg:text-[48px] font-extrabold tracking-[-1.5px] lg:tracking-[-2px] text-[var(--foreground)]">
        {title}
      </h2>
      {description && (
        <p
          className={`text-[15px] md:text-[16px] leading-[1.6] text-[var(--muted-foreground)] ${descriptionWidth}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
