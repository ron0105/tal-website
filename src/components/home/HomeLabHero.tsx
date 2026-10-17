"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HomeLabHero() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        className="relative bg-background overflow-hidden"
        style={{
          paddingTop: "clamp(9rem, 18vh, 13rem)",
          paddingBottom: "clamp(5rem, 11vh, 9rem)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-full h-full rounded-full blur-3xl opacity-[0.07]"
            style={{ background: "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)" }}
          />
        </div>

        <div className="layout-grid px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-6 h-px" style={{ background: "var(--accent)" }} aria-hidden="true" />
            <span className="label-eyebrow text-accent">The Adda Labs</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-poppins mb-8"
            style={{ maxWidth: "14ch" }}
          >
            We build, test and scale ideas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-lg leading-relaxed text-body mb-10"
            style={{ maxWidth: "34rem" }}
          >
            A frugal ideation and venture-building lab across business, technology, sustainability and public causes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="btn-primary btn-lg">
              Start a conversation
            </Link>
            <Link href="/work" className="btn-ghost btn-lg">
              See our work
            </Link>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
