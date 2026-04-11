"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Framework", href: "#framework" },
  { label: "Models", href: "#engagement" },
  { label: "Manifesto", href: "#manifesto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled
          ? "rgba(13,13,13,0.85)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
        <div
          className="w-6 h-6 flex items-center justify-center"
          style={{ border: "1.5px solid #2563EB", borderRadius: "4px" }}
        >
          <div
            className="w-2.5 h-2.5"
            style={{ background: "#2563EB", borderRadius: "2px" }}
          />
        </div>
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: "#F0F0F0" }}
        >
          The Adda Labs
        </span>
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs font-medium tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ color: "#666", letterSpacing: "0.02em" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F0F0F0")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#666")
            }
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide cursor-pointer transition-all duration-200"
        style={{
          background: "#2563EB",
          color: "#fff",
          borderRadius: "6px",
          letterSpacing: "0.02em",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#3B82F6")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "#2563EB")
        }
      >
        Start a Sprint
      </a>
    </motion.header>
  );
}
