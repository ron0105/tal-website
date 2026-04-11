"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TALVIHero() {
  return (
    <section
      className="relative grid-texture px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">TAL VI — Venture Infrastructure</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "80px" }} />
          <span
            className="text-xs font-semibold"
            style={{ color: "#6366F1", letterSpacing: "0.06em" }}
          >
            EXECUTION ARM
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="text-display text-white block"
            >
              Structure
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.16 }}
              className="text-display block"
              style={{ color: "#222" }}
            >
              before scale.
            </motion.h1>
          </div>
        </div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p
              className="text-lg md:text-xl leading-relaxed mb-3"
              style={{ color: "#999", maxWidth: "500px" }}
            >
              TAL VI is the execution arm of The Adda Labs. Once your idea is
              validated, we build the infrastructure your venture needs —
              before growth amplifies every weakness.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#555", maxWidth: "460px" }}
            >
              Most founders scale activity before structure. TAL VI fixes that.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/work-with-us" className="btn-primary" style={{ background: "#6366F1" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#818CF8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#6366F1")}
              >
                Book a Diagnostic
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/venture-lab" className="btn-ghost" style={{ color: "#555" }}>
                Need to validate first?
              </Link>
            </div>
          </div>

          {/* Right: who it's for */}
          <div
            style={{
              border: "1px solid rgba(99,102,241,0.15)",
              borderRadius: "4px",
              background: "rgba(99,102,241,0.03)",
            }}
          >
            <div
              className="px-7 py-4"
              style={{ borderBottom: "1px solid rgba(99,102,241,0.1)" }}
            >
              <span className="label-eyebrow" style={{ color: "#6366F1", opacity: 0.6 }}>
                TAL VI is right for you if
              </span>
            </div>
            {[
              "You have a validated idea — but no operating systems",
              "You have early users but no clear revenue model",
              "You hired two people and everything got harder",
              "You can't step back because nothing is documented",
              "Growth is amplifying your problems, not solving them",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-4 px-7 py-4"
                style={{ borderBottom: i < 4 ? "1px solid rgba(99,102,241,0.06)" : "none" }}
              >
                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-sm" style={{ color: "#888" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
