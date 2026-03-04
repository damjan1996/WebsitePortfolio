"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid2x2, X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/products", label: "PRODUCTS" },
  { href: "/offers", label: "OFFERS" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)]/50 backdrop-blur-sm bg-[var(--background)]/95 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--primary)]">
            <div className="w-[10px] h-[10px] rounded-full bg-[var(--primary-foreground)]" />
          </div>
          <span className="font-primary text-[16px] font-bold tracking-[1px] text-[var(--foreground)]">
            WATCH PRO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-[0.5px] transition-colors ${
                pathname === link.href
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)]">
            <Grid2x2 className="w-[18px] h-[18px] text-[var(--foreground)]" />
          </button>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[var(--foreground)]" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--foreground)]" />
            )}
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[var(--background)] md:hidden">
          <nav className="flex flex-col gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[18px] font-medium tracking-[0.5px] ${
                  pathname === link.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted-foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
