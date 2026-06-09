"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const models = [
  {
    label: "For Businesses",
    title: "One-time project",
    desc: "We come in, understand your business, build the systems, train your team, and hand it over. A defined scope with a clear end point.",
    details: ["Understand phase", "Structure phase", "Guide phase + handover"],
  },
  {
    label: "For Businesses",
    title: "Ongoing support",
    desc: "After the initial setup, some clients want us to stay involved as things grow and change. This is month-to-month with no lock-in.",
    details: ["Regular check-ins", "System refinement as needed", "Available when things shift"],
  },
  {
    label: "Think & Build",
    title: "Idea validation",
    desc: "We run your idea through our 6-stage validation process. The output is one clear answer: build it, change it, or stop.",
    details: ["Problem framing to decision gate", "Real market testing", "Clear recommendation at the end"],
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
          How We Engage
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-poppins"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--text-primary)",
          }}
        >
          Pricing depends on
          <br />
          <span style={{ color: "var(--text-muted)" }}>scope and hours.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-xl text-body max-w-2xl mb-20"
        >
          We do not have fixed packages. Every engagement is scoped after a conversation, based on what you actually need.
        </motion.p>

        <div className="flex flex-col gap-px bg-border-subtle border border-border-subtle mb-16">
          {models.map((m, i) => (
            <AnimateOnScroll key={i} delay={i * 0.07}>
              <div className="bg-background p-8 md:p-12 grid md:grid-cols-[200px_1fr_1fr] gap-8 items-start">
                <div>
                  <span className="label-eyebrow text-accent block mb-3">{m.label}</span>
                  <h3 className="text-xl font-bold font-poppins text-primary">{m.title}</h3>
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
              <h2 className="text-2xl font-bold font-poppins text-primary mb-2">
                Want to know what it would cost for you?
              </h2>
              <p className="text-base text-muted max-w-lg">
                Tell us what you are working on. We will scope it honestly and give you a clear number before anything starts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="btn-primary" style={{ padding: "14px 32px" }}>
                Start the conversation
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </main>
  );
}
