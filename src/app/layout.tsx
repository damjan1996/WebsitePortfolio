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

export const metadata: Metadata = {
  title: {
    default: "Watch Pro | Luxury Meets Precision",
    template: "%s | Watch Pro",
  },
  description:
    "Discover exceptional timepieces crafted with precision and passion. Watch Pro - where luxury meets innovation.",
  metadataBase: new URL("https://website-snowy-six-31.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Watch Pro",
    title: "Watch Pro | Luxury Meets Precision",
    description:
      "Discover exceptional timepieces crafted with precision and passion. Watch Pro - where luxury meets innovation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Pro | Luxury Meets Precision",
    description:
      "Discover exceptional timepieces crafted with precision and passion.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
