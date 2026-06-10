"use client";

import { motion } from "framer-motion";
import { JOBS } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CareersHero() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ padding: "clamp(10rem, 18vh, 14rem) 1.5rem clamp(5rem, 10vh, 8rem)" }}
    >
      {/* Subtle gradient blob — matches HomeHero */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)",
          }}
        />
      </div>

      <div className="layout-grid px-6 md:px-10 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="label-eyebrow" style={{ color: "var(--accent)" }}>
            We're Hiring
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="font-poppins mb-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            maxWidth: "800px",
          }}
        >
          Build something real.{" "}
          <span style={{ color: "var(--accent)" }}>Do it with us.</span>
        </motion.h1>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-end max-w-4xl"
        >
          <div>
            <p
              className="body-copy mb-4"
              style={{ maxWidth: "540px" }}
            >
              TAL is a three-founder startup. We move fast, hold our work to a
              high standard, and bring in people who take both seriously. If you
              want a comfortable job, this is not the place. If you want real
              work from day one, keep reading.
            </p>
          </div>

          {/* Role count pill */}
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-sm border self-start md:self-end shrink-0"
            style={{
              borderColor: "var(--border-color)",
              background: "var(--bg-secondary)",
            }}
          >
            <span
              className="text-2xl font-black"
              style={{ color: "var(--accent)" }}
            >
              {JOBS.length}
            </span>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Open<br />Roles
            </span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex items-center gap-3 mt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 relative overflow-hidden"
            style={{ background: "var(--border-subtle)" }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2"
              style={{ background: "var(--accent)" }}
              animate={{ y: ["0%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
            Open Roles
          </span>
        </motion.div>
      </div>
    </section>
  );
}
