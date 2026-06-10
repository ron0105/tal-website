"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const navLinks = [
  { label: "For Businesses", href: "/for-businesses" },
  { label: "Think & Build", href: "/think-and-build" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 h-20 w-full"
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
          background: "var(--navbar-bg)",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div className="layout-grid flex items-center justify-between h-full px-6 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0 group">
            {/* Logo mark — brand book Direction B */}
            <Logo size={30} />
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-foreground">
                The Adda Labs
              </span>
              <span
                className="text-[9px] font-medium uppercase"
                style={{ color: "var(--text-muted)", letterSpacing: "0.22em", marginTop: "3px" }}
              >
                Consulting · Execution
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer relative hover:text-accent${active ? " nav-link-active" : ""}`}
                  style={{ color: active ? undefined : "var(--text-muted)" }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="nav-indicator absolute -bottom-1.5 left-0 right-0 h-[1.5px]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: "10px 20px", fontSize: "0.875rem" }}
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile hamburger & controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="flex flex-col gap-1.5 items-center justify-center w-8 h-8 cursor-pointer group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-foreground"
                style={{ transformOrigin: "center" }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-[1.5px] bg-foreground"
                transition={{ duration: 0.25 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-foreground"
                style={{ transformOrigin: "center" }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-x-0 top-16 z-40 md:hidden flex flex-col px-6 py-8 gap-1"
            style={{
              background: "var(--navbar-bg)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border-subtle)",
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
                  className={`flex items-center justify-between py-4 text-base font-semibold cursor-pointer border-b border-border-subtle transition-colors hover:text-accent${pathname === link.href ? " nav-link-active" : ""}`}
                  style={{ color: pathname === link.href ? undefined : "var(--text-muted)" }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <div className="nav-indicator w-1.5 h-1.5 flex-shrink-0 rounded-full" />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center mt-6"
            >
              Start a Conversation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
