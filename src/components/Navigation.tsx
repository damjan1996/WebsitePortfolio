"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/90 backdrop-blur-md shadow-[var(--shadow-sm)] border-b border-border-primary"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-xl md:text-2xl font-bold text-text-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              DS<span className="text-accent">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button variant="primary" size="sm">
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-bg-secondary border border-border-primary text-text-primary"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-bg-primary border-l border-border-primary z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-secondary border border-border-primary text-text-primary"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile Links */}
              <div className="px-6 py-4">
                <motion.div
                  className="flex flex-col gap-2"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium text-text-primary hover:bg-bg-secondary transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: 20, opacity: 0 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="mt-6 pt-6 border-t border-border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </Button>
                </motion.div>

                {/* Social/Contact Info */}
                <motion.div
                  className="mt-8 pt-6 border-t border-border-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-text-muted mb-2">Get in touch</p>
                  <a
                    href="mailto:hello@damjansavic.com"
                    className="text-sm text-text-primary hover:text-accent transition-colors"
                  >
                    hello@damjansavic.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
