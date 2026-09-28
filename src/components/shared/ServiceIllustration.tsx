"use client";

import { motion } from "framer-motion";

export type ServiceKind = "found" | "show" | "run";

/* One small line illustration per service, so the three services read the
   same way wherever they appear. Visible at every screen size. */
export function ServiceIllustration({ kind, onDark = false, className = "" }: { kind: ServiceKind; onDark?: boolean; className?: string }) {
  const line = onDark ? "rgba(255,255,255,0.35)" : "var(--border-color)";
  const accent = onDark ? "var(--accent-on-brand)" : "var(--accent)";
  const soft = onDark ? "rgba(255,255,255,0.08)" : "var(--bg-secondary)";
  const common = { fill: "none", stroke: line, strokeWidth: 1.5, strokeLinecap: "round" as const };

  return (
    <svg viewBox="0 0 160 96" className={`w-full h-auto ${className}`} style={{ maxWidth: 160 }} aria-hidden="true">
      {kind === "found" && (
        <>
          {/* Search bar with a map pin rising out of it */}
          <rect x="8" y="54" width="144" height="26" rx="13" style={{ fill: soft }} {...common} />
          <circle cx="26" cy="67" r="5" {...common} />
          <line x1="30" y1="71" x2="34" y2="75" {...common} />
          <line x1="44" y1="67" x2="100" y2="67" {...common} strokeDasharray="4 5" />
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M120 44 C106 30, 110 12, 120 12 C130 12, 134 30, 120 44 Z" style={{ fill: accent }} />
            <circle cx="120" cy="24" r="4.5" style={{ fill: onDark ? "var(--brand)" : "var(--bg)" }} />
          </motion.g>
        </>
      )}

      {kind === "show" && (
        <>
          {/* A feed of posts, the newest one landing on top */}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={14 + i * 46} y="30" width="38" height="46" rx="6" style={{ fill: soft }} {...common} />
          ))}
          {[0, 1, 2].map((i) => (
            <line key={i} x1={20 + i * 46} y1="68" x2={40 + i * 46} y2="68" {...common} />
          ))}
          <motion.rect
            x="106" y="14" width="38" height="46" rx="6"
            style={{ fill: accent }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="125" cy="32" r="7" style={{ fill: onDark ? "var(--brand)" : "var(--bg)", opacity: 0.9 }} />
        </>
      )}

      {kind === "run" && (
        <>
          {/* Enquiry → reply → booked, looping on its own */}
          <rect x="8" y="34" width="36" height="28" rx="8" style={{ fill: soft }} {...common} />
          <rect x="62" y="34" width="36" height="28" rx="8" style={{ fill: soft }} {...common} />
          <rect x="116" y="34" width="36" height="28" rx="8" style={{ fill: accent, stroke: accent }} />
          <path d="M44 48 H62 M98 48 H116" {...common} />
          <path d="M134 34 C134 8, 26 8, 26 34" {...common} strokeDasharray="4 5" />
          <motion.circle
            r={4} cy={48}
            style={{ fill: accent }}
            initial={{ cx: 26 }}
            animate={{ cx: [26, 80, 134] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <path d="M126 48 L132 54 L142 42" fill="none" stroke={onDark ? "var(--brand)" : "var(--bg)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}
