"use client";

import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";
import { IconPaths, type IconKind } from "./StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fields: { kind: IconKind; label: string; line: string }[] = [
  { kind: "business", label: "Business & marketing", line: "Clear offers, wider reach" },
  { kind: "technology", label: "Technology", line: "Useful, simple tools" },
  { kind: "sustainability", label: "Sustainability", line: "Practical, greener choices" },
  { kind: "public", label: "Public causes", line: "Solutions that serve people" },
  { kind: "ventures", label: "Ventures", line: "Ideas grown into businesses" },
];

function FieldIcon({ kind, size }: { kind: IconKind; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="var(--brand)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <IconPaths kind={kind} />
    </svg>
  );
}

function Chevron({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={flip ? "rotate-180" : ""}
    >
      <path d="M3 1.5L8 6l-5 4.5" />
    </svg>
  );
}

export default function DesignThinkingGraphic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Mobile: the label sits above, and a vertical line runs down through every tile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="lg:hidden inline-flex items-center rounded-full px-5 py-2 mb-3 text-sm font-semibold tracking-wide text-white"
          style={{ background: "var(--brand)" }}
        >
          Design thinking
        </motion.div>

        <ul className="flex flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-4">
          {fields.map((f, i) => (
            <motion.li
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="relative flex items-center gap-4 rounded-2xl border border-border-subtle bg-background-secondary px-4 py-5 lg:flex-col lg:items-stretch lg:gap-0 lg:min-h-[22rem] lg:px-5 lg:py-6"
            >
              {/* Mobile thread: one segment per tile, bridging the gaps so it reads as a single line */}
              <span
                aria-hidden="true"
                className="lg:hidden absolute left-[42px] -translate-x-1/2 w-[2px] -top-3"
                style={{ background: "var(--brand)", opacity: 0.75, bottom: i === fields.length - 1 ? "50%" : "-0.75rem" }}
              />
              <span
                className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full lg:h-16 lg:w-16 lg:self-start"
                style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1.5px var(--brand)" }}
              >
                <span className="lg:hidden"><FieldIcon kind={f.kind} size={28} /></span>
                <span className="hidden lg:block"><FieldIcon kind={f.kind} size={36} /></span>
              </span>

              <div className="lg:mt-auto">
                <p className="text-base font-bold leading-snug text-foreground">{f.label}</p>
                <p className="text-sm text-muted mt-1 leading-snug">{f.line}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Desktop: ONE horizontal band that crosses all five columns */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease, delay: 0.5 }}
          style={{ originX: 0, background: "var(--brand)" }}
          className="hidden lg:flex absolute z-20 left-[-1rem] right-[-1rem] top-1/2 -translate-y-1/2 h-14 items-center justify-between rounded-full px-6 text-white pointer-events-none"
        >
          <Chevron flip />
          <span className="text-base font-semibold tracking-wide">Design thinking</span>
          <Chevron />
        </motion.div>
      </div>
    </MotionConfig>
  );
}
