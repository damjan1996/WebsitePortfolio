import Button from "./Button";

interface CTABannerProps {
  headline: string;
  subline: string;
  buttonLabel: string;
  buttonHref?: string;
}

export default function CTABanner({
  headline,
  subline,
  buttonLabel,
  buttonHref = "#",
}: CTABannerProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[var(--secondary)] rounded-[var(--radius-xl)] py-10 lg:py-12 px-8 lg:px-14">
      <div className="flex flex-col gap-4">
        <h2 className="font-primary text-[28px] lg:text-[40px] font-extrabold tracking-[-1px] text-[var(--secondary-foreground)]">
          {headline}
        </h2>
        <p className="text-[16px] leading-[1.5] text-white/50 max-w-[400px]">
          {subline}
        </p>
      </div>
      <Button label={buttonLabel} href={buttonHref} variant="accent" />
    </div>
  );
}
