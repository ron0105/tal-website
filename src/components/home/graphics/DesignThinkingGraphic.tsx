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

function FieldIcon({ kind }: { kind: IconKind }) {
  return (
    <svg
      width="32"
      height="32"
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

/*
 * Layout notes
 * - Desktop (lg+): the list is a 5-column grid. Each tile uses subgrid rows
 *   (icon + band slot / title / line), so every title starts on the same line,
 *   every line starts on the same line, and all tiles are the same height.
 * - The "Design thinking" band is ONE strip laid over the grid, sitting in the
 *   empty slot every tile reserves under its icon, so it never covers content.
 *   Its top is: tile border + top padding + icon + gap above the slot.
 * - Below lg: a stacked list, with a vertical line running through the icons.
 */
export default function DesignThinkingGraphic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="relative mx-auto w-full max-w-xl lg:max-w-6xl">
        {/* Stacked: the label sits above, and a vertical line runs down through every icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease }}
          className="lg:hidden inline-flex items-center rounded-full px-5 py-2 mb-3 text-sm font-semibold tracking-wide text-white"
          style={{ background: "var(--brand)" }}
        >
          Design thinking
        </motion.div>

        <div className="relative">
          <ul aria-label="Design thinking across five fields" className="flex flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-x-4 lg:gap-y-0">
            {fields.map((f, i) => (
              <motion.li
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                className="relative flex items-center gap-4 rounded-2xl border border-border-subtle bg-background-secondary px-5 py-5 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:items-stretch lg:gap-0 lg:p-0 lg:text-center"
              >
                {/* Stacked thread: one segment per tile, bridging the gaps so it reads as a single line */}
                <span
                  aria-hidden="true"
                  className="lg:hidden absolute left-12 -translate-x-1/2 w-[2px] -top-[13px]"
                  style={{ background: "var(--brand)", opacity: 0.75, bottom: i === fields.length - 1 ? "50%" : "-13px" }}
                />

                {/* Row 1 (desktop): icon, then an empty slot the band passes through */}
                <div className="shrink-0 lg:px-4 lg:pt-6 xl:px-5">
                  <span
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full lg:mx-auto"
                    style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1.5px var(--brand)" }}
                  >
                    <FieldIcon kind={f.kind} />
                  </span>
                  <span aria-hidden="true" className="hidden lg:block mt-5 h-12" />
                </div>

                {/* On desktop this wrapper dissolves so title and line become rows 2 and 3 of the tile */}
                <div className="min-w-0 lg:contents">
                  <p className="text-base font-bold leading-snug text-foreground lg:px-4 lg:pt-5 xl:px-5 xl:text-[1.2rem]">{f.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted lg:px-4 lg:pb-6 xl:px-5">{f.line}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Desktop: ONE continuous band that passes through all five tiles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-20 left-0 right-0 hidden h-12 items-center justify-center lg:flex"
            style={{ top: "calc(1px + 1.5rem + 3.5rem + 1.25rem)" }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.5 }}
              style={{ originX: 0, background: "var(--brand)" }}
              className="absolute inset-0 rounded-full"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease, delay: 1.1 }}
              className="relative text-sm font-semibold tracking-wide text-white"
            >
              Design thinking
            </motion.span>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
