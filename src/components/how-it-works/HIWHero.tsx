"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinearProgressionVisual } from "@/components/visuals";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stages = [
  "Problem Framing",
  "Assumption Mapping",
  "Research & Validation",
  "Business Model Structuring",
  "Frugal Pilot",
  "Decision Gate",
];

export default function HIWHero() {
  return (
    <section
      className="relative bg-background"
      style={{ paddingTop: "clamp(10rem, 20vh, 16rem)", paddingBottom: "clamp(6rem, 12vh, 10rem)" }}
    >
      <div className="layout-grid px-6 md:px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="label-eyebrow mb-14"
        >
          How It Works
        </motion.p>

        {/* ── DOMINANT HEADLINE ── */}
        <div className="mb-10">
          {[
            { text: "A clear process", delay: 0.04 },
            { text: "to test ideas,", delay: 0.08 },
            { text: "remove risk,", delay: 0.12 },
            { text: "and build trust.", delay: 0.16, muted: true },
          ].map(({ text, delay, muted }) => (
            <div key={text} className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay }}
                style={{
                  fontSize: "clamp(3rem, 9.5vw, 7rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.0,
                  color: muted ? "var(--text-muted)" : "var(--text-primary)",
                  display: "block",
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* ── BODY + CTA + STAGE LIST ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.36 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-start"
        >
          {/* Left: statement + CTA */}
          <div>
            <div className="aspect-video bg-bg-secondary border border-border-subtle p-6 mb-10 flex flex-col justify-center items-center text-center">
              <LinearProgressionVisual />
            </div>
            <p className="body-copy mb-14 max-w-[520px]">
              We replace guesswork with a six-stage roadmap. You'll always know where you stand and whether the idea is ready to build.
            </p>
            <Link href="/work-with-us" className="flex-shrink-0 btn-primary px-12 py-6">
              Start a Sprint
            </Link>
            <p className="body-copy !text-muted border-l-2 border-border-subtle pl-8 mt-12">
              Six months of building. One launch day. Zero paying customers.
              That is the cost of skipping validation.
            </p>
          </div>

          {/* Right: raw stage list — no box, no borders */}
          <div>
            <h2 className="text-section-title mb-8">
              The 6-stage framework.
            </h2>
            <motion.ol
              variants={{
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
              }}
              initial="hidden"
              animate="show"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              {stages.map((stage, i) => (
                <motion.li
                  key={stage}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, ease }}
                  className="flex items-baseline gap-5 group cursor-default p-2 -ml-2"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      fontVariantNumeric: "tabular-nums",
                      color: "var(--text-muted)",
                      flexShrink: 0,
                      letterSpacing: "0.06em",
                      minWidth: "22px",
                      transition: "color 0.3s ease",
                    }}
                    className="group-hover:text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: i === 5 ? 800 : 500,
                      color: i === 5 ? "var(--text-primary)" : "var(--text-body)",
                      letterSpacing: "-0.01em",
                      transition: "transform 0.3s ease",
                    }}
                    className="group-hover:translate-x-2"
                  >
                    {stage}
                    {i === 5 && (
                      <span
                        style={{
                          marginLeft: "0.75rem",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        : The Final Decision
                      </span>
                    )}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
            <div className="mt-12">
              <a
                href="#contact-form"
                className="btn-ghost w-full py-6 text-sm font-black uppercase tracking-widest border border-border-subtle hover:border-text-primary transition-colors text-center"
              >
                Enquire: Next Steps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
