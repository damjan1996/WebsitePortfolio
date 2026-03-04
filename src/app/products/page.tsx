import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroBadge from "@/components/ui/HeroBadge";
import CategoryTag from "@/components/ui/CategoryTag";
import ProductCard from "@/components/ui/ProductCard";
import FeatureCard from "@/components/ui/FeatureCard";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { products } from "@/data/products";
import { Award, Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Collection",
  description:
    "Explore our curated collection of luxury timepieces. From precision chronographs to elegant dress watches, find the timepiece that defines your style.",
  openGraph: {
    title: "Watch Pro Collection",
    description:
      "Explore our curated collection of luxury timepieces — precision chronographs, dress watches, and more.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="px-6 lg:px-10 pt-8 pb-16 lg:pb-24 text-center">
          <div className="flex flex-col items-center gap-6 max-w-[720px] mx-auto">
            <HeroBadge label="OUR COLLECTION" />
            <h1 className="font-primary text-[40px] lg:text-[64px] font-extrabold tracking-[-2px] lg:tracking-[-3px] text-[var(--foreground)] leading-[1.05]">
              EXPLORE THE
              <br />
              <span className="text-[var(--primary)]">COLLECTION</span>
            </h1>
            <p className="text-[16px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              From precision chronographs to elegant dress watches, find the
              timepiece that defines your style.
            </p>
          </div>
        </section>

        {/* Category Filter + Grid */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            <CategoryTag label="ALL" variant="active" />
            <CategoryTag label="PRECISION SERIES" />
            <CategoryTag label="EXPLORER SERIES" />
            <CategoryTag label="ELEGANCE SERIES" />
            <CategoryTag label="FUSION SERIES" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                badge={product.badge}
              />
            ))}
          </div>
        </section>

        {/* Featured Product - Split Layout */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src="https://images.unsplash.com/photo-1704782709398-b41f86135e4a?w=800&q=80"
                alt="Titanium Force"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <HeroBadge label="FEATURED" />
              <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
                Titanium Force
              </h2>
              <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                Our flagship model combines ultra-light Grade 5 titanium with a
                scratch-resistant ceramic bezel. Water-resistant to 200m, powered
                by an in-house automatic movement with 72-hour power reserve.
              </p>
              <span className="font-primary text-[32px] font-extrabold text-[var(--primary)]">
                $4,199
              </span>
              <Button label="VIEW DETAILS" variant="accent" />
            </div>
          </div>
        </section>

        {/* Why Choose Watch Pro */}
        <section className="px-6 lg:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="flex flex-col items-center text-center gap-4 mb-10">
            <h2 className="font-primary text-[32px] lg:text-[48px] font-extrabold tracking-[-2px] text-[var(--foreground)]">
              Why Choose Watch Pro
            </h2>
            <p className="text-[14px] leading-[1.6] text-[var(--muted-foreground)] max-w-[560px]">
              Every timepiece tells a story of precision, passion, and perfection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Award}
              title="Certified Excellence"
              description="Every watch is COSC-certified and tested to meet the highest standards of Swiss chronometry."
            />
            <FeatureCard
              icon={Wrench}
              title="Lifetime Service"
              description="Complimentary servicing and maintenance for the life of your timepiece."
            />
            <FeatureCard
              icon={Clock}
              title="72-Hour Power Reserve"
              description="Our in-house movements provide extended power reserve for uninterrupted precision."
            />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 lg:px-10 py-16 lg:py-24">
          <CTABanner
            headline="Can't Decide?"
            subline="Our watch experts are here to help you find the perfect timepiece."
            buttonLabel="CONTACT US"
            buttonHref="#"
          />
        </section>

        <Footer heroLine1="FIND YOUR" heroLine2="TIMEPIECE" />
      </main>
    </>
  );
}
