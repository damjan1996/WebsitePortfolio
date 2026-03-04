import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroBadge from "@/components/ui/HeroBadge";
import Button from "@/components/ui/Button";
import OfferCard from "@/components/ui/OfferCard";
import FeatureCard from "@/components/ui/FeatureCard";
import CTABanner from "@/components/ui/CTABanner";
import { featuredOffer, perks } from "@/data/offers";
import { dealProducts } from "@/data/products";
import { Truck, RotateCcw, ShieldCheck, Gift } from "lucide-react";

const iconMap = { Truck, RotateCcw, ShieldCheck, Gift } as const;

export default function OffersPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="px-6 lg:px-10 pt-8 pb-16 lg:pb-24 text-center">
          <div className="flex flex-col items-center gap-6 max-w-[720px] mx-auto">
            <HeroBadge label="LIMITED TIME" />
            <h1 className="font-primary text-[40px] lg:text-[64px] font-extrabold tracking-[-2px] lg:tracking-[-3px] text-[var(--foreground)] leading-[1.05]">
              SPECIAL
              <br />
              <span className="text-[var(--primary)]">OFFERS</span>
            </h1>
            <p className="text-[16px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              Exceptional timepieces at exceptional prices. Don&apos;t miss these
              limited-time offers on our finest watches.
            </p>
          </div>
        </section>

        {/* Featured Offer - Split Layout */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src={featuredOffer.image}
                alt={featuredOffer.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 px-4 py-2 text-[13px] font-bold tracking-[0.5px] bg-[var(--primary)] text-white rounded-full">
                {featuredOffer.badge}
              </span>
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <HeroBadge label="FEATURED DEAL" />
              <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
                {featuredOffer.name}
              </h2>
              <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                {featuredOffer.description}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-primary text-[36px] font-extrabold text-[var(--primary)]">
                  {featuredOffer.price}
                </span>
                <span className="text-[20px] text-[var(--muted-foreground)] line-through">
                  {featuredOffer.originalPrice}
                </span>
              </div>
              <Button label="GRAB THIS DEAL" variant="accent" />
            </div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
              More Deals
            </h2>
            <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              Hand-picked deals on premium timepieces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dealProducts.map((product) => (
              <OfferCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice!}
                description={product.description}
                image={product.image}
                badge={product.badge!}
              />
            ))}
          </div>
        </section>

        {/* Perks */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
              The Watch Pro Promise
            </h2>
            <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              Every purchase comes with perks that match the quality of our timepieces.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => (
              <FeatureCard
                key={perk.title}
                icon={iconMap[perk.icon]}
                title={perk.title}
                description={perk.description}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <CTABanner
            headline="Don't Miss Out"
            subline="These offers won't last forever. Secure your dream timepiece today."
            buttonLabel="VIEW ALL OFFERS"
            buttonHref="/offers"
          />
        </section>

        <Footer heroLine1="DON'T MISS" heroLine2="OUT" />
      </main>
    </>
  );
}
