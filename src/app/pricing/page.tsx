"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Three ways in, matching the services (Rohan, Oct 29 2026). No prices on the page:
// every quote is fixed after one call, as /services says. The idea-validation track was cut.
const models = [
  {
    label: "Start here",
    title: "A clear look first",
    desc: "We go through your enquiries, website and posts, and show you where customers drop off and what to fix first.",
    details: ["Where enquiries are lost", "What to fix first", "A plan you keep, whoever builds it"],
  },
  {
    label: "One project",
    title: "We build it",
    desc: "A website, a follow-up system, posts or a clear offer, built for you and handed over. A set scope with a clear end.",
    details: ["Fixed quote after one call", "Paid in parts as work lands", "Your team can run it"],
  },
  {
    label: "Month to month",
    title: "We run it with you",
    desc: "Posts, ads and follow-ups, run every month as things grow. No lock-in.",
    details: ["Posts and ads every month", "Follow-ups kept running", "Regular check-ins on the numbers"],
  },
];

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="layout-grid px-6 md:px-10">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="label-eyebrow mb-8 block text-accent"
        >
          Pricing
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          A fixed quote
          <br />
          <span style={{ color: "var(--text-muted)" }}>after one call.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-lg text-body max-w-2xl mb-20"
        >
          No packages to decode. Tell us what&apos;s costing you customers, and we&apos;ll quote for that, before anything starts.
        </motion.p>

        <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle mb-16">
          {models.map((m, i) => (
            <AnimateOnScroll key={i} delay={i * 0.07}>
              <div className="bg-background p-8 md:p-12 grid md:grid-cols-[200px_1fr_1fr] gap-8 items-start">
                <div>
                  <span className="label-eyebrow text-accent block mb-3">{m.label}</span>
                  <h3 className="text-primary">{m.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-body">{m.desc}</p>
                <ul className="flex flex-col gap-3">
                  {m.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm font-semibold text-body">
                      <span className="text-accent mt-0.5">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="border border-border-subtle bg-bg-secondary p-10 md:p-14 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-primary mb-2">
                What would it cost for you?
              </h2>
              <p className="text-base text-muted max-w-lg">
                Answer a few quick questions and pick a time. You get a clear number before any work starts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/call" className="btn-primary" style={{ padding: "14px 32px" }}>
                Book a call
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </main>
  );
}
