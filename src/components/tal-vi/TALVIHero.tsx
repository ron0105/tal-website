"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TALVIHero() {
  return (
    <section className="relative padding-hero bg-background">
      <div className="layout-grid">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">TAL VI | Foundation for Growth</span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border-color)" }} />
          <span className="text-xs font-bold tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
            THE EXECUTION PART
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="text-display text-foreground block"
            >
              Structure
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.16 }}
              className="text-display block text-muted"
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
            <p className="text-xl leading-relaxed mb-4 text-body font-normal max-w-[500px]">
            TAL VI is where we actually build what you need. Once we know your
            idea works, we set up the systems your business needs to grow:
            without the usual growing pains and chaos.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-body max-w-[460px]">
            Most founders try to grow before they have a solid foundation.
            TAL VI fixes that before it becomes an expensive problem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/work-with-us" className="btn-primary">
                Book a Diagnostic
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/venture-lab" className="btn-ghost">
                Need to validate first?
              </Link>
            </div>
          </div>

          {/* Right: who it's for */}
          <div style={{ border: "1px solid var(--border-color)", background: "var(--bg-secondary)" }}>
            <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              <span className="label-eyebrow">
                TAL VI is right for you if
              </span>
            </div>
            {[
              "You have a validated idea: but no systems in place",
              "You have early users: but no clear way to make money",
              "You hired people: and suddenly everything got harder",
              "You can't step back: because it all lives in your head",
              "Growth is making your problems worse: not better",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-4 px-7 py-4 ${i < 4 ? "border-b" : ""}`}
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
