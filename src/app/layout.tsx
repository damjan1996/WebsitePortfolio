import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://website-snowy-six-31.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Watch Pro | Luxury Swiss Watches & Premium Timepieces",
    template: "%s | Watch Pro",
  },
  description:
    "Shop luxury Swiss watches crafted with precision and passion. Explore our collection of premium chronographs, dive watches, and elegant dress timepieces. Free worldwide shipping.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Watch Pro",
    title: "Watch Pro | Luxury Swiss Watches & Premium Timepieces",
    description:
      "Shop luxury Swiss watches crafted with precision and passion. Explore our collection of premium chronographs, dive watches, and elegant dress timepieces.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1627794145862-2a82883c251b?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Watch Pro luxury Swiss timepiece collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Pro | Luxury Swiss Watches & Premium Timepieces",
    description:
      "Shop luxury Swiss watches crafted with precision and passion. Premium chronographs, dive watches, and elegant timepieces.",
    images: [
      "https://images.unsplash.com/photo-1627794145862-2a82883c251b?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Watch Pro",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "Luxury Swiss watch brand crafting precision timepieces since 1999. Premium chronographs, dive watches, and elegant dress watches.",
    foundingDate: "1999",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-307-232-1692",
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/watchpro",
      "https://twitter.com/watchpro",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Watch Pro",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
