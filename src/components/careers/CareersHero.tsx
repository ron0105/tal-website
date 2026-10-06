"use client";

import { motion } from "framer-motion";
import { JOBS, REPLY_PROMISE_DAYS } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const openCount = JOBS.filter((j) => j.status === "open").length;

const FACTS = [
  { big: "Per result", small: "Paid per project or per client won. No ceiling." },
  { big: `${REPLY_PROMISE_DAYS} days`, small: "Everyone who applies hears back within a week." },
  { big: "Paid trial", small: "Your first project is real work, paid at the full rate." },
];

export default function CareersHero() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ padding: "clamp(10rem, 18vh, 14rem) 1.5rem clamp(4rem, 9vh, 7rem)" }}
    >
      {/* Gradient blob, matches HomeHero */}
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
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="label-eyebrow" style={{ color: "var(--accent)" }}>
            Careers at TAL · {openCount} roles open now
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
          className="mb-8"
          style={{ color: "var(--text-primary)", maxWidth: "860px" }}
        >
          Help businesses win more customers.{" "}
          <span style={{ color: "var(--accent)" }}>Get paid for every win.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          className="body-copy mb-12"
          style={{ maxWidth: "600px" }}
        >
          TAL helps businesses that grow on enquiries turn more of them into
          customers. We&apos;re a small, AI-first team led by Rohan, and we grow
          by building a bench of sharp people who are paid for what they
          deliver, not the hours they sit. Pick a role, show us your work, and
          you&apos;ll have an answer within a week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a href="#open-roles" className="btn-primary" style={{ padding: "13px 28px" }}>
            See the roles →
          </a>
          <a href="#how-we-hire" className="btn-ghost" style={{ padding: "13px 28px" }}>
            How we hire
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="grid sm:grid-cols-3 gap-px max-w-4xl"
          style={{ background: "var(--border-color)", border: "1px solid var(--border-color)" }}
        >
          {FACTS.map((f) => (
            <div key={f.big} className="p-6" style={{ background: "var(--bg)" }}>
              <p
                className="font-poppins text-2xl mb-2"
                style={{ color: "var(--brand)", fontWeight: 500 }}
              >
                {f.big}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {f.small}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
