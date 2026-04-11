"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Venture Lab", href: "/venture-lab" },
  { label: "TAL VI", href: "/tal-vi" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
        style={{
          backdropFilter: scrolled ? "blur(16px)" : "none",
          background: scrolled ? "rgba(13,13,13,0.9)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
          <div
            className="w-6 h-6 flex items-center justify-center"
            style={{ border: "1.5px solid #2563EB", borderRadius: "4px" }}
          >
            <div className="w-2.5 h-2.5" style={{ background: "#2563EB", borderRadius: "2px" }} />
          </div>
          <span className="text-sm font-semibold tracking-tight" style={{ color: "#F0F0F0" }}>
            The Adda Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer relative"
                style={{ color: active ? "#F0F0F0" : "#666" }}
              >
                {link.label}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: "#2563EB" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/work-with-us"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-semibold cursor-pointer transition-all duration-200"
          style={{
            background: "#2563EB",
            color: "#fff",
            borderRadius: "6px",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3B82F6")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#2563EB")}
        >
          Start a Sprint
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 items-center justify-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px"
            style={{ background: "#F0F0F0", transformOrigin: "center" }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px"
            style={{ background: "#F0F0F0" }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px"
            style={{ background: "#F0F0F0", transformOrigin: "center" }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 md:hidden flex flex-col px-6 py-6 gap-1"
            style={{
              background: "rgba(13,13,13,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.25 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 text-base font-medium cursor-pointer"
                  style={{
                    color: pathname === link.href ? "#F0F0F0" : "#888",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2563EB" }} />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/work-with-us"
              className="flex items-center justify-center mt-4 py-3.5 text-sm font-semibold"
              style={{ background: "#2563EB", color: "#fff", borderRadius: "8px" }}
            >
              Start a Sprint
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
