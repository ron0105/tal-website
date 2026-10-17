"use client";

import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type FlowStep = { title: string; line: string };

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
  steps: FlowStep[];
  /** Steps per row on tablet and desktop. The list is always vertical on mobile. */
  cols: 3 | 4;
  /** Fill the last circle, to mark where the framework lands. */
  emphasiseLast?: boolean;
};

const gridCols = { 3: "md:grid-cols-3", 4: "md:grid-cols-4" } as const;

// A numbered step visual: circles joined by a line. One row of N on desktop,
// a vertical list on mobile. Used for both TAL frameworks on /how-we-work.
export default function HWWFlow({ id, eyebrow, heading, intro, steps, cols, emphasiseLast }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const lastInRow = (i: number) => i % cols === cols - 1;

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="mx-auto w-full max-w-5xl">
        <div className="mx-auto mb-8 text-left sm:text-center" style={{ maxWidth: "36rem" }}>
          <span className="label-eyebrow mb-4 block" style={{ color: "var(--accent-text)" }}>
            {eyebrow}
          </span>
          <h2 id={id} className="mb-4" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
            {heading}
          </h2>
          <p className="text-base leading-relaxed text-body text-pretty">{intro}</p>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-background-secondary p-6 md:p-8">
          <ol role="list" className={`grid list-none ${gridCols[cols]} md:gap-y-12`}>
            {steps.map((s, i) => {
              const n = String(i + 1).padStart(2, "0");
              const last = emphasiseLast && i === steps.length - 1;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, ease, delay: i * 0.12 }}
                  className="relative flex items-start gap-4 pb-8 last:pb-0 md:flex-col md:items-center md:gap-4 md:px-4 md:pb-0 md:text-center"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums"
                    style={{
                      background: last ? "var(--brand)" : "var(--bg)",
                      color: last ? "#FFFFFF" : "var(--brand)",
                      boxShadow: "inset 0 0 0 1.5px var(--brand)",
                    }}
                  >
                    {n}
                  </span>

                  {/* Mobile: line down to the next circle */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-14 -bottom-1 block w-px md:hidden"
                      style={{ background: "var(--border-strong)", opacity: 0.6 }}
                    />
                  )}

                  {/* Desktop: line across to the next circle in the row */}
                  {!lastInRow(i) && i < steps.length - 1 && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.12 }}
                      className="absolute top-6 hidden h-px md:block"
                      style={{
                        left: "calc(50% + 32px)",
                        right: "calc(-50% + 32px)",
                        background: "var(--border-strong)",
                        opacity: 0.6,
                        transformOrigin: "left",
                      }}
                    />
                  )}

                  <div className="pt-2 md:pt-0">
                    {/* Two lines reserved on desktop so every description starts on the same line */}
                    <h3 className={`text-foreground ${cols === 3 ? "md:min-h-[2.6em]" : ""}`}>{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body md:mx-auto" style={{ maxWidth: "26ch" }}>
                      {s.line}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </MotionConfig>
  );
}
