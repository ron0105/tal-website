"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll, AnimatedLine } from "@/components/shared/AnimateOnScroll";

export default function HomeCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(6rem, 12vh, 10rem)",
        paddingBottom: "clamp(6rem, 12vh, 10rem)",
        background: "var(--bg-secondary)",
      }}
    >
      <AnimatedLine className="opacity-50" />
      {/* Background ticker */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          style={{ x, opacity: 0.03 }}
          className="flex gap-20 whitespace-nowrap font-black text-foreground"
        >
          {Array(4).fill("VALIDATE FIRST BUILD RIGHT VALIDATE FIRST BUILD RIGHT").map((t, i) => (
            <span
              key={i}
              style={{ fontSize: "clamp(5rem, 14vw, 12rem)", letterSpacing: "-0.04em", fontWeight: 900, lineHeight: 1 }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative layout-grid px-6 md:px-10">

        <AnimateOnScroll>
          <p className="label-eyebrow mb-12">Before you build</p>

          {/* Big statement */}
          <h2
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              marginBottom: "clamp(2.5rem, 5vh, 4rem)",
              maxWidth: "820px",
            }}
          >
            Bring us a problem
            <br />
            <span style={{ color: "var(--text-muted)" }}>worth solving.</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.7,
              color: "var(--text-body)",
              maxWidth: "520px",
              marginBottom: "3rem",
            }}
          >
            You don&apos;t need a finished plan. You need a real problem,
            an honest account of what you know, and the willingness to be
            wrong about your assumptions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/work-with-us" className="btn-primary">
              Start a Validation Sprint
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/how-it-works" className="btn-ghost">
              See how it works
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
