import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroBadge from "@/components/ui/HeroBadge";
import StatCard from "@/components/ui/StatCard";
import FeatureCard from "@/components/ui/FeatureCard";
import CTABanner from "@/components/ui/CTABanner";
import { stats, values, story, craftsmanship } from "@/data/about";
import { Shield, Gem, Heart } from "lucide-react";

const iconMap = { Shield, Gem, Heart } as const;

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="px-6 lg:px-10 pt-8 pb-16 lg:pb-24 text-center">
          <div className="flex flex-col items-center gap-6 max-w-[720px] mx-auto">
            <HeroBadge label="ABOUT US" />
            <h1 className="font-primary text-[40px] lg:text-[64px] font-extrabold tracking-[-2px] lg:tracking-[-3px] text-[var(--foreground)] leading-[1.05]">
              THE ART OF
              <br />
              <span className="text-[var(--primary)]">PRECISION</span>
            </h1>
            <p className="text-[16px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              For over two decades, Watch Pro has been at the forefront of luxury
              watchmaking — combining Swiss precision with bold, contemporary design.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                description={stat.description}
              />
            ))}
          </div>
        </section>

        {/* Our Story - Split Layout */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src={story.image}
                alt="Our story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <HeroBadge label="OUR STORY" />
              <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
                {story.headline}
              </h2>
              <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                {story.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
              Our Values
            </h2>
            <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              The principles that guide every watch we create.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <FeatureCard
                key={value.title}
                icon={iconMap[value.icon]}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </section>

        {/* Craftsmanship - Split Layout (reversed) */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src={craftsmanship.image}
                alt="Craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <HeroBadge label="CRAFTSMANSHIP" />
              <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
                {craftsmanship.headline}
              </h2>
              <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                {craftsmanship.description}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <CTABanner
            headline="Ready to Find Your Watch?"
            subline="Browse our collection and discover the timepiece that speaks to you."
            buttonLabel="SHOP NOW"
            buttonHref="/products"
          />
        </section>

        <Footer heroLine1="CRAFTED WITH" heroLine2="PASSION" />
      </main>
    </>
  );
}
