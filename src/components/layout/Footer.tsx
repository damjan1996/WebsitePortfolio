import Link from "next/link";

interface FooterProps {
  heroLine1?: string;
  heroLine2?: string;
}

export default function Footer({
  heroLine1 = "THANK YOU FOR",
  heroLine2 = "WATCHING",
}: FooterProps) {
  return (
    <footer className="px-6 md:px-10 pt-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 bg-[var(--secondary)] rounded-[var(--radius-xl)] rounded-b-none py-12 lg:py-[60px] px-8 lg:px-14">
          <span className="font-primary text-[32px] md:text-[52px] lg:text-[72px] font-black tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-3px] text-[var(--secondary-foreground)] text-center leading-tight">
            {heroLine1}
          </span>
          <span className="font-primary text-[32px] md:text-[52px] lg:text-[72px] font-black tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-3px] text-[var(--primary)] text-center leading-tight">
            {heroLine2}
          </span>
        </div>

        {/* Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-[var(--secondary)] rounded-b-[var(--radius-xl)] h-auto sm:h-16 px-6 lg:px-10 py-4 sm:py-0 gap-3 sm:gap-0">
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[12px] font-medium tracking-[0.5px] text-white/40 hover:text-white/60 transition-colors"
            >
              FACEBOOK
            </Link>
            <Link
              href="#"
              className="text-[12px] font-medium tracking-[0.5px] text-white/40 hover:text-white/60 transition-colors"
            >
              TWITTER
            </Link>
          </div>
          <span className="text-[12px] font-medium tracking-[0.5px] text-white/40">
            2026
          </span>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-[11px] md:text-[12px] text-white/40">+92 3072321692</span>
            <span className="text-[11px] md:text-[12px] font-medium tracking-[0.5px] text-white/40">
              DESIGN BY STUDIO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
