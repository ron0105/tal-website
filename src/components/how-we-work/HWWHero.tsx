"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineReveal } from "@/components/shared/LineReveal";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Two paths merging — visual metaphor for HWW */
function TwoPathsDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease, delay: 0.3 }}
      className="relative w-full mx-auto"
      style={{ maxWidth: "480px" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 480 420" className="w-full h-auto" aria-hidden="true">

          {/* Ghost background number */}
          <text x="240" y="230" textAnchor="middle" dominantBaseline="middle"
            fontFamily="Poppins, sans-serif" fontWeight="900" fontSize="220"
            style={{ fill: "var(--text-primary)", opacity: 0.022 }}>
            2
          </text>

          {/* Path A — top track */}
          <motion.path
            d="M 60 100 C 140 100, 200 200, 240 220"
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Path B — bottom track */}
          <motion.path
            d="M 60 320 C 140 320, 200 240, 240 220"
            style={{ fill: "none", stroke: "var(--border-color)" }}
            strokeWidth="2" strokeLinecap="round" strokeDasharray="7 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 1.0, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Continuation */}
          <motion.path
            d="M 240 220 C 300 220, 380 220, 430 220"
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.65, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Label A — For Businesses */}
          <motion.g initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
            <rect x="0" y="68" width="58" height="64" rx="10"
              style={{ fill: "var(--bg-secondary)", stroke: "var(--accent)" }}
              strokeWidth="1.5"
            />
            <text x="29" y="90" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="11"
              style={{ fill: "var(--accent)" }}>
              FOR
            </text>
            <text x="29" y="108" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="11"
              style={{ fill: "var(--accent)" }}>
              BIZ
            </text>
          </motion.g>

          {/* Label B — Think & Build */}
          <motion.g initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            <rect x="0" y="288" width="58" height="64" rx="10"
              style={{ fill: "var(--bg-secondary)", stroke: "var(--border-color)" }}
              strokeWidth="1.5"
            />
            <text x="29" y="310" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="11"
              style={{ fill: "var(--text-muted)" }}>
              NEW
            </text>
            <text x="29" y="328" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="11"
              style={{ fill: "var(--text-muted)" }}>
              IDEAS
            </text>
          </motion.g>

          {/* Merge dot */}
          <motion.circle cx={240} cy={220} r={10}
            style={{ fill: "var(--accent)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.6, ease }}
          />
          <motion.circle cx={240} cy={220} r={4}
            style={{ fill: "var(--bg)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.75 }}
          />
          <motion.circle cx={240} cy={220} r={10}
            style={{ fill: "none", stroke: "var(--accent)" }}
            strokeWidth="1.5"
            animate={{ r: [10, 24, 10], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* End — Clarity */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            <rect x="398" y="196" width="82" height="48" rx="10"
              style={{ fill: "var(--accent)" }}
            />
            <text x="439" y="216" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="800" fontSize="13"
              style={{ fill: "var(--bg)" }}>
              Clarity
            </text>
            <text x="439" y="234" textAnchor="middle" dominantBaseline="middle"
              fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="10"
              style={{ fill: "var(--bg)", opacity: 0.75 }}>
              + direction
            </text>
          </motion.g>

          {/* One-way thinking label */}
          <motion.text x="240" y="260" textAnchor="middle"
            fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="12"
            style={{ fill: "var(--text-muted)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.7 }}
            transition={{ delay: 1.8 }}
          >
            One way of thinking
          </motion.text>

        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function HWWHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="hww-hero relative bg-background overflow-hidden"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(7rem, 14vh, 12rem)",
      }}
    >
      <style>{`
        .hww-hero h1 span.block > span.block {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--text-primary);
        }
        .hww-hero h1 span.block:last-child > span.block {
          color: var(--accent);
        }
      `}</style>

      {/* Gradient blob */}
      <motion.div
        style={{ y: blobY }}
        className="absolute top-0 right-0 w-[550px] h-[550px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "radial-gradient(circle at 55% 35%, var(--accent), transparent 65%)" }}
        />
      </motion.div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 right-0 w-px h-40 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)" }} aria-hidden="true" />
      <div className="absolute top-28 right-14 w-px h-28 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--border-subtle), transparent)", opacity: 0.4 }} aria-hidden="true" />

      <motion.div style={{ y: textY }} className="layout-grid px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="label-eyebrow text-accent">How We Work</span>
            </motion.div>

            <LineReveal
              lines={["Two paths.", "One way of", "thinking."]}
              delay={0.1}
              stagger={0.12}
              className="font-poppins mb-10"
              as="h1"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.55 }}
            >
              <p className="text-xl leading-relaxed font-medium text-body mb-8" style={{ maxWidth: "480px" }}>
                Whether you run a business or are testing a new idea, the thinking behind our work is the same: understand first, structure clearly, validate before acting.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#for-businesses"
                  className="flex items-center gap-3 px-5 py-3 border border-border-subtle rounded-lg text-sm font-semibold text-body hover:border-accent hover:text-accent transition-colors"
                >
                  <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: "var(--accent)" }} />
                  For Businesses: 3-phase process
                </a>
                <a
                  href="#for-new-ideas"
                  className="flex items-center gap-3 px-5 py-3 border border-border-subtle rounded-lg text-sm font-semibold text-body hover:border-accent hover:text-accent transition-colors"
                >
                  <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: "var(--border-color)" }} />
                  Think & Build: 6-stage framework
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — diagram */}
          <div className="hidden lg:block">
            <TwoPathsDiagram />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
