"use client";

import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";
import { IconPaths, type IconKind } from "@/components/home/graphics/StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps: { kind: IconKind; title: string; line: string }[] = [
  { kind: "ventures", title: "Ideate", line: "Start with real human needs" },
  { kind: "build", title: "Build", line: "Make it small, fast and frugal" },
  { kind: "test", title: "Test", line: "Learn quickly with real people" },
  { kind: "scale", title: "Scale", line: "Grow what proves its worth" },
];

// One 80 x 80 node: a ring with the step icon inside.
function StepNode({ kind }: { kind: IconKind }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" aria-hidden="true" className="shrink-0">
      <circle cx="40" cy="40" r="38" fill="var(--bg-lift)" stroke="var(--brand)" strokeWidth="1.5" />
      <g
        transform="translate(22 22) scale(1.5)"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <IconPaths kind={kind} />
      </g>
    </svg>
  );
}

// Arrow from one node to the next. Horizontal on desktop, vertical on mobile.
function Connector({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease, delay }}
      className="absolute flex items-center text-muted left-10 -translate-x-1/2 top-[88px] bottom-1 flex-col md:flex-row md:translate-x-0 md:top-10 md:bottom-auto md:-translate-y-1/2 md:left-[calc(50%+52px)] md:right-[calc(-50%+52px)]"
    >
      <span className="block flex-1 bg-current w-px md:w-auto md:h-px" style={{ opacity: 0.55 }} />
      <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 1.5L8 6l-5 4.5" />
      </svg>
    </motion.span>
  );
}

// Ideate -> Build -> Test -> Scale, with an arrow back to Ideate.
export default function HWWLoop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="relative mx-auto w-full max-w-md md:max-w-5xl">
        <ol className="grid md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: i * 0.18 }}
              className="relative flex items-start gap-5 pb-12 pl-0 pr-10 md:flex-col md:items-center md:text-center md:gap-4 md:pb-6 md:pr-4 md:pl-4"
            >
              <StepNode kind={s.kind} />
              <div className="pt-3 md:pt-0">
                <p className="text-xl text-foreground" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}>
                  {s.title}
                </p>
                <p className="text-sm text-body mt-1">{s.line}</p>
              </div>
              {i < steps.length - 1 && <Connector inView={inView} delay={0.45 + i * 0.18} />}
            </motion.li>
          ))}
        </ol>

        {/* Loop back to Ideate: desktop, runs beneath the four steps */}
        <svg
          viewBox="0 0 900 70"
          className="hidden md:block w-full h-auto"
          aria-hidden="true"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M787 6V34Q787 54 767 54H132Q112 54 112 34V13"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.6, ease, delay: 1 }}
          />
          <motion.path
            d="M105 21L112 12L119 21"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 2.4 }}
          />
        </svg>

        {/* Loop back to Ideate: mobile, a bracket down the right side */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease, delay: 1 }}
          className="md:hidden absolute right-1 top-10 bottom-[88px] w-6 rounded-r-2xl border-r-[1.5px] border-t-[1.5px] border-b-[1.5px]"
          style={{ borderColor: "var(--accent)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" className="absolute -top-[7px] -left-[3px]" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 1.5L4 6l5 4.5" />
          </svg>
        </motion.span>

        <p className="sr-only">After Scale, the loop returns to Ideate.</p>
      </div>
    </MotionConfig>
  );
}
