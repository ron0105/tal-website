"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function VLHero() {
  return (
    <section
      className="relative grid-texture px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
          className="flex items-center gap-5 mb-10"
        >
          <span className="label-eyebrow">Venture Lab</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)", maxWidth: "80px" }} />
          <span className="text-xs font-semibold" style={{ color: "#2563EB", letterSpacing: "0.06em" }}>
            VALIDATION ARM
          </span>
        </motion.div>

        <div className="mb-10">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
              className="text-display text-white block"
            >
              Test the idea.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, ease, delay: 0.16 }}
              className="text-display block"
              style={{ color: "#222" }}
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
            <p
              className="text-lg md:text-xl leading-relaxed mb-3"
              style={{ color: "#999", maxWidth: "500px" }}
            >
              Venture Lab is our idea validation service. Before you write a
              single line of code or spend money, we run a structured process
              to find out if the idea is worth building.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "#555", maxWidth: "460px" }}
            >
              Every sprint ends with one answer: Build it. Change the approach.
              Or stop, and save your resources for something better.
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

          <div
            style={{
              border: "1px solid rgba(37,99,235,0.15)",
              borderRadius: "4px",
              background: "rgba(37,99,235,0.03)",
            }}
          >
            <div className="px-7 py-4" style={{ borderBottom: "1px solid rgba(37,99,235,0.1)" }}>
              <span className="label-eyebrow" style={{ color: "#2563EB", opacity: 0.6 }}>
                This is for you if
              </span>
            </div>
            {[
              "You have an idea but haven't built anything yet",
              "You're not sure if people will actually pay for it",
              "You've built something but it's not working and you don't know why",
              "You want to move fast — without wasting months on the wrong thing",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-4 px-7 py-4"
                style={{ borderBottom: i < 3 ? "1px solid rgba(37,99,235,0.06)" : "none" }}
              >
                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-sm" style={{ color: "#888" }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
