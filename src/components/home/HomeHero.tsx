"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedLine } from "../shared/AnimateOnScroll";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function HomeHero() {
  return (
    <section
      className="relative bg-background"
      style={{
        paddingTop: "clamp(10rem, 20vh, 16rem)",
        paddingBottom: "clamp(6rem, 12vh, 10rem)",
      }}
    >
      <div className="layout-grid px-6 md:px-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="label-eyebrow mb-14"
        >
          The Adda Labs · Mumbai
        </motion.p>

        {/* ── DOMINANT HEADLINE ── */}
        <div className="mb-24">
          {[
            { text: "Ideas are cheap.", delay: 0.04 },
            { text: "Building the", delay: 0.12 },
            { text: "right thing", delay: 0.2 },
            { text: "is everything.", delay: 0.28, muted: true },
          ].map(({ text, delay, muted }) => (
            <div key={text} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease, delay }}
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.92,
                  color: muted ? "var(--text-muted)" : "var(--text-primary)",
                  display: "block",
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* ── SUB CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.36 }}
          style={{ maxWidth: "760px" }}
        >
          <p
            style={{
              fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
              lineHeight: 1.8,
              color: "var(--text-body)",
              marginBottom: "1.5rem",
            }}
          >
            Most new businesses fail because founders build what they *think*
            people want, instead of what people actually need. We help you
            stop guessing and start testing.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--text-body)",
              marginBottom: "3.5rem",
              maxWidth: "520px",
            }}
          >
            We help you talk to real customers, fix the holes in your business
            model, and only build what the data says will work. No more
            wasted time. No more expensive mistakes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/venture-lab" className="btn-primary">
              Validate an Idea
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/tal-vi" className="btn-ghost">
              Explore TAL VI
            </Link>
          </div>
        </motion.div>

        {/* ── Pipeline strip — flat, no container ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          style={{
            marginTop: "clamp(4rem, 8vh, 7rem)",
            paddingTop: "2rem",
          }}
        >
          <AnimatedLine className="mb-10" />
          <p className="label-eyebrow mb-8">How it flows</p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } }
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 4rem",
              rowGap: "1.5rem",
            }}
          >
            {[{ n: "01", label: "Idea", sub: "You have a hypothesis" },
                { n: "02", label: "Validate", sub: "Adda Labs tests it" },
                { n: "03", label: "Structure", sub: "TAL VI builds the systems" },
                { n: "04", label: "Scale", sub: "Growth on solid ground" },
              ].map((step) => (
                <motion.div 
                  key={step.n} 
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: "2px" }}
                >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                  }}
                >
                  {step.n}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {step.sub}
                </span>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
