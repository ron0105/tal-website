"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HomeHero() {
  return (
    <section
      className="relative bg-background overflow-hidden"
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
          The Adda Labs: Where Good Ideas Get Built Right
        </motion.p>

        {/* ── DOMINANT HEADLINE ── */}
        <div className="mb-14">
          {[
            { text: "IDEAS ARE", delay: 0.08, muted: false },
            { text: "EASY.", delay: 0.16, muted: true },
            { text: "DECISIONS", delay: 0.24, muted: false },
            { text: "TAKE COURAGE.", delay: 0.32, muted: true },
          ].map(({ text, delay, muted }) => (
            <div key={text} className="overflow-hidden mb-1">
              <motion.h1
                initial={{ filter: "blur(20px)", y: "40%", opacity: 0 }}
                animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
                transition={{ duration: 1, ease, delay }}
                className="text-display block"
                style={{
                  color: muted ? "var(--text-muted)" : "var(--text-primary)",
                  fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="max-w-[700px]"
        >
          <p className="body-copy mb-16 max-w-[600px]">
            We run structured experiments that tell you exactly what to do next, before you spend a rupee on the wrong thing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/work-with-us" className="btn-primary uppercase tracking-widest font-black text-sm" style={{ padding: "14px 40px" }}>
              GET CLARITY ON YOUR IDEA
            </Link>
            <Link href="#system" className="btn-ghost uppercase tracking-widest font-bold text-sm" style={{ padding: "14px 40px" }}>
              SEE HOW IT WORKS
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
