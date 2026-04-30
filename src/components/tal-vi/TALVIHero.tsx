"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StaggerContainer, staggerItem } from "../shared/AnimateOnScroll";

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
          <span className="label-eyebrow">TAL VI: Build the Foundation. Then Scale.</span>
          <div className="flex-1 h-px max-w-[80px]" style={{ background: "var(--border-color)" }} />
          <span className="text-xs font-bold tracking-[0.1em] uppercase" style={{ color: "var(--text-muted)" }}>
            THE EXECUTION PART
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ filter: "blur(20px)", y: "40%", opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.08 }}
              className="text-display text-foreground block"
            >
              Structure
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ filter: "blur(20px)", y: "40%", opacity: 0 }}
              animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.16 }}
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
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          <div className="lg:col-span-5">
            <p className="body-copy mb-12">
              Most businesses hit a wall when they grow. Not because the idea is wrong, but because the foundation was never built properly. TAL VI fixes that.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work-with-us" className="btn-primary">
                Start the conversation
              </Link>
            </div>
          </div>

          {/* INFRASTRUCTURE STATUS MATRIX */}
          <div className="lg:col-span-7 border border-border-subtle bg-bg-secondary overflow-hidden">
            <div className="px-8 py-6 border-b border-border-subtle bg-bg-lift/30">
              <span className="label-eyebrow">Infrastructure Status Matrix</span>
            </div>
            
            <StaggerContainer>
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    { segment: "Operations", status: "Running & Growing", focus: "Your business is running. Now build the systems to support growth." },
                    { segment: "Economics", status: "Early Scale", focus: "Early traction. Now build a sustainable revenue model." },
                    { segment: "Team", status: "Growth Clarity", focus: "Team growing. Clarify roles and ownership." },
                    { segment: "Systems", status: "Founder Focus", focus: "Create systems so the business runs without you." },
                    { segment: "Growth", status: "Structure Needed", focus: "Get ahead of growth before it breaks things." },
                  ].map((row, i) => (
                    <motion.tr variants={staggerItem} key={i} className="border-b border-border-subtle last:border-0 hover:bg-bg-lift/10 transition-colors">
                      <td className="p-6 text-xs font-black uppercase tracking-widest text-muted border-r border-border-subtle">
                        [{row.segment}]
                      </td>
                      <td className="p-6 text-xs font-bold uppercase tracking-tight bg-bg-lift/10 border-r border-border-subtle">
                        {row.status}
                      </td>
                      <td className="p-6 text-sm font-bold text-body">
                        {row.focus}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </StaggerContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
