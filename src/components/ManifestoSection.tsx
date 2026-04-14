"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const statements = [
  "Most ideas don't fail because the market isn't ready.",
  "They stall because of building before validating.",
  "Clarity is what makes speed possible.",
  "It's what you build everything else on.",
  "We celebrate decisions made on solid ground.",
  "Evidence collected. Conviction earned.",
  "Validate first. Then build exactly what works.",
  "Then build the right thing. Once.",
];

export default function ManifestoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "#0D0D0D",
      }}
    >
      {/* Scrolling ticker background */}
      <div
        className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
        style={{ opacity: 0.03 }}
        aria-hidden
      >
        <motion.div
          style={{ x }}
          className="flex gap-16 whitespace-nowrap text-8xl md:text-9xl font-black tracking-tight text-white"
        >
          {Array(4).fill("VALIDATE BEFORE BUILD").map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#2563EB" }} />
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#555", letterSpacing: "0.14em" }}
          >
            Manifesto
          </span>
        </motion.div>

        {/* Statements */}
        <div className="flex flex-col">
          {statements.map((s, i) => {
            const isAccent = i % 4 === 2 || i % 4 === 3;
            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.06 * i,
                  ease: EASE,
                }}
                className="font-bold leading-none py-6 md:py-8"
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 4rem)",
                  color: isAccent ? "#333" : "#E0E0E0",
                  letterSpacing: "-0.03em",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  lineHeight: "1.05",
                }}
              >
                {s}
              </motion.p>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold cursor-pointer transition-all duration-200"
            style={{
              background: "#2563EB",
              color: "#fff",
              borderRadius: "8px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#3B82F6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#2563EB")
            }
          >
            Tell us what you&apos;re working on
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-sm" style={{ color: "#555" }}>
            We&apos;ll start with a problem framing conversation
            <br className="hidden sm:block" /> and figure out the best next step together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
