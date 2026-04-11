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
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          <div className="lg:col-span-5">
            <p className="body-copy mb-8">
              Venture Lab is how we test if an idea actually works. Before you
              spend months building, we find out if customers are ready to pay
              for what you&apos;re offering.
            </p>
            <p className="body-copy !text-muted mb-12">
              Every test ends with a clear result: Build it. Change the approach.
              Or stop, and save your time for a better idea.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work-with-us" className="btn-primary">
                Start a Validation Sprint
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                See the 6-stage process
              </Link>
            </div>
          </div>

          {/* TARGET PROFILE MATRIX */}
          <div className="lg:col-span-7 border border-border-subtle bg-bg-secondary overflow-hidden">
            <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
              <span className="label-eyebrow">Target Profile Matrix</span>
            </div>
            
            <table className="w-full text-left border-collapse">
              <tbody>
                {[
                  { segment: "Pre-Build", status: "Concept Phase", focus: "You have an idea: but haven't built anything yet" },
                  { segment: "Market Check", status: "Demand Check", focus: "You're not sure: if people will actually pay for it" },
                  { segment: "Pivot Phase", status: "Signal Detection", focus: "You've built something: but it's not working as expected" },
                  { segment: "Velocity", status: "Risk Mitigation", focus: "You want to move fast: without making expensive mistakes" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border-subtle last:border-0 hover:bg-bg-lift/10 transition-colors">
                    <td className="p-6 text-xs font-black uppercase tracking-widest text-muted border-r border-border-subtle">
                      [{row.segment}]
                    </td>
                    <td className="p-6 text-xs font-bold uppercase tracking-tight bg-bg-lift/10 border-r border-border-subtle">
                      {row.status}
                    </td>
                    <td className="p-6 text-sm font-bold text-body">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
