"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const hooks = [
  "Most ideas fail before they reach the market.",
  "The real risk is building the wrong thing.",
  "Before you build — validate.",
  "Ideas are cheap. Validation is hard.",
];

export default function HomeCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0A0A0A" }}
    >
      {/* Ticker */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          style={{ x, opacity: 0.022 }}
          className="flex gap-16 whitespace-nowrap font-black text-white"
        >
          {Array(5).fill("VALIDATE FIRST BUILD RIGHT").map((t, i) => (
            <span key={i} style={{ fontSize: "clamp(5rem, 12vw, 10rem)", letterSpacing: "-0.04em", fontWeight: 900 }}>
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: hooks */}
          <AnimateOnScroll>
            <span className="label-eyebrow block mb-10">Before you build</span>
            <div className="flex flex-col">
              {hooks.map((hook, i) => (
                <p
                  key={hook}
                  className="font-black tracking-tight py-5"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: i % 2 === 0 ? "#fff" : "#2a2a2a",
                    letterSpacing: "-0.025em",
                    lineHeight: "1.1",
                    borderBottom: i < hooks.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  {hook}
                </p>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right: CTA block */}
          <AnimateOnScroll delay={0.15}>
            <div
              className="p-8 md:p-10"
              style={{
                border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: "4px",
                background: "rgba(37,99,235,0.03)",
              }}
            >
              <h2
                className="font-black tracking-tight mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.05",
                }}
              >
                Bring us a problem
                worth solving.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#999" }}>
                You don&apos;t need a finished plan. You need a real problem, an
                honest account of what you know, and the willingness to be
                wrong about your assumptions.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/work-with-us" className="btn-primary">
                  Start a Validation Sprint
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/how-it-works" className="btn-ghost">
                  See how it works first
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
