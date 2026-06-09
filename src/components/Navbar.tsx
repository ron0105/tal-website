"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "For Businesses", href: "/for-businesses" },
  { label: "Think & Build", href: "/think-and-build" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 20));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-20"
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled
          ? "rgba(255, 255, 255, 0.85)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(0, 0, 0, 0.05)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2.5 group cursor-pointer">
        <div
          className="w-7 h-7 flex items-center justify-center"
          style={{ border: "2px solid var(--accent)", borderRadius: "6px" }}
        >
          <div
            className="w-3 h-3"
            style={{ background: "var(--accent)", borderRadius: "2px" }}
          />
        </div>
        <span
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          TAL Consulting
        </span>
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-accent"
            style={{ color: "var(--text-muted)", letterSpacing: "-0.01em" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="/contact"
        className="btn-primary hidden md:flex"
        style={{
          padding: "10px 20px",
          fontSize: "0.875rem",
        }}
      >
        👉 Start Conversation
      </a>
    </motion.header>
  );
}
