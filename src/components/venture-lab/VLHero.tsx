"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function VLHero() {
  return (
    <section className="relative padding-hero bg-background">
      <div className="layout-grid">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">Venture Lab</span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border-color)" }} />
          <span className="text-xs font-bold tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
            THE VALIDATION PART
          </span>
        </motion.div>

        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="text-display text-foreground block"
            >
              Test the idea.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.16 }}
              className="text-display block text-muted"
            >
              Then build it.
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="text-xl leading-relaxed mb-4 text-body font-normal max-w-[500px]">
              Venture Lab is how we test if an idea actually works. Before you
              spend months building, we find out if customers are ready to pay
              for what you&apos;re offering.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-body max-w-[460px]">
              Every test ends with a clear result: Build it. Change the approach.
              Or stop, and save your time for a better idea.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/work-with-us" className="btn-primary">
                Start a Validation Sprint
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                See the 6-stage process
              </Link>
            </div>
          </div>

          <div style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
            <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <span className="label-eyebrow">
                This is for you if
              </span>
            </div>
            {[
              "You have an idea: but haven't built anything yet",
              "You're not sure: if people will actually pay for it",
              "You've built something: but it's not working as expected",
              "You want to move fast: without making expensive mistakes",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-4 px-7 py-4 ${i < 3 ? "border-b" : ""}`}
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-base text-body">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
