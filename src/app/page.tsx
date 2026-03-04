import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import HeroBadge from "@/components/ui/HeroBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import ProductCard from "@/components/ui/ProductCard";
import CategoryTag from "@/components/ui/CategoryTag";
import BlogCard from "@/components/ui/BlogCard";
import { products, blogPosts } from "@/data/products";
import { Watch, Shield, Award } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-10 pt-8 md:pt-12 pb-16 lg:pb-24">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex flex-col gap-6 flex-1">
              <HeroBadge label="NEW COLLECTION 2026" />
              <h1 className="font-primary text-[36px] md:text-[48px] lg:text-[64px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-3px] text-[var(--foreground)] leading-[1.05]">
                Precision in Every
                <br />
                <span className="text-[var(--primary)]">Moment</span>
              </h1>
              <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                Discover exceptional timepieces crafted with Swiss precision and
                contemporary design. Where luxury meets innovation.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Button label="EXPLORE COLLECTION" href="/products" variant="primary" />
                <Button label="ABOUT WATCH PRO" href="/about" variant="ghost" />
              </div>
            </div>
            <div className="relative w-full max-w-[520px] aspect-square rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src="https://images.unsplash.com/photo-1627794145862-2a82883c251b?w=800&q=80"
                alt="Watch Pro featured timepiece"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </div>
        </section>

        {/* Luxury Features */}
        <section className="px-6 md:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader
              title="Why Watch Pro"
              description="Every detail matters. From movement to case, we craft watches that stand the test of time."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              <FeatureCard
                icon={Watch}
                title="Swiss Precision"
                description="Every movement is assembled and tested by master Swiss watchmakers for unmatched accuracy."
              />
              <FeatureCard
                icon={Shield}
                title="Built to Last"
                description="Premium materials including sapphire crystal, surgical steel, and Italian leather ensure durability."
              />
              <FeatureCard
                icon={Award}
                title="Award-Winning Design"
                description="Recognized worldwide for designs that seamlessly blend heritage with modern aesthetics."
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-6 md:px-10 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader title="The Gallery" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
              {[
                "https://images.unsplash.com/photo-1546118729-b9a3e4812724?w=500&q=80",
                "https://images.unsplash.com/photo-1589988574803-455587b19171?w=500&q=80",
                "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500&q=80",
                "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=500&q=80",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden bg-[var(--muted)] group"
                >
                  <Image
                    src={src}
                    alt={`Watch gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section className="px-6 md:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader
              title="Our Products"
              description="Explore our curated collection of luxury timepieces, each one a masterpiece of precision engineering."
              ctaLabel="VIEW ALL"
              ctaHref="/products"
            />
            <div className="flex items-center gap-3 mt-8 flex-wrap">
              <CategoryTag label="ALL" variant="active" />
              <CategoryTag label="PRECISION SERIES" />
              <CategoryTag label="EXPLORER SERIES" />
              <CategoryTag label="ELEGANCE SERIES" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {products.slice(0, 3).map((product) => (
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
          </div>
        </section>

        {/* Timeless Collection Split */}
        <section className="px-6 md:px-10 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-[var(--radius-xl)] overflow-hidden bg-[var(--muted)]">
              <Image
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80"
                alt="Timeless collection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col items-start gap-6 flex-1">
              <HeroBadge label="TIMELESS" />
              <h2 className="font-primary text-[28px] md:text-[36px] lg:text-[48px] font-extrabold tracking-[-1.5px] lg:tracking-[-2px] text-[var(--foreground)]">
                A Collection That
                <br />
                Transcends Time
              </h2>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--muted-foreground)] max-w-[480px]">
                Our timeless collection embodies the perfect balance of classic
                elegance and modern innovation. Each piece is designed to be
                cherished for generations.
              </p>
              <Button
                label="DISCOVER MORE"
                href="/products"
                variant="outline"
              />
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-6 md:px-10 py-16 lg:py-24 bg-[var(--card)]">
          <div className="max-w-[1400px] mx-auto">
            <SectionHeader
              title="From the Journal"
              description="Insights, stories, and guides from the world of horology."
              ctaLabel="READ ALL"
              ctaHref="/about"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  category={post.category}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
