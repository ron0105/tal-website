"use client";

import Link from "next/link";
import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";
import { IconPaths, type IconKind } from "@/components/home/graphics/StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lines: {
  kind: IconKind;
  label: string;
  promise: string;
  bullets: string[];
  cta?: { label: string; href: string };
}[] = [
  {
    kind: "business",
    label: "Business & marketing",
    promise: "Clear offers and a wider reach.",
    bullets: ["Positioning and offer design", "Websites and content that bring enquiries", "Follow-up systems that reply for you"],
    cta: { label: "Book a call", href: "/call" },
  },
  {
    kind: "technology",
    label: "Technology",
    promise: "Simple tools people enjoy using.",
    bullets: ["Websites and web apps", "Workflow automation", "AI assistants for everyday tasks"],
    cta: { label: "See services", href: "/services" },
  },
  {
    kind: "sustainability",
    label: "Sustainability",
    promise: "Practical, greener choices.",
    bullets: ["Reuse and waste ideas", "Low-cost green operations", "Awareness campaigns"],
  },
  {
    kind: "public",
    label: "Public causes",
    promise: "Solutions that serve people.",
    bullets: ["Community programmes", "Tools for non-profits and campaigns", "Research with the people involved"],
  },
  {
    kind: "ventures",
    label: "Ventures",
    promise: "Ideas grown into businesses.",
    bullets: ["Testing ideas with real people", "Validation, one step at a time", "Early prototypes and first customers"],
  },
];

export default function WorkCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      {/* Equal-width cards in a centred, wrapping row: 3 + 2 on desktop, 2 + 2 + 1 on tablet, never a left-hanging orphan */}
      <ul ref={ref} className="flex flex-wrap justify-center gap-4">
        {lines.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="flex w-full flex-col rounded-2xl border border-border-subtle bg-background-secondary p-6 sm:w-[calc((100%_-_1rem)/2)] lg:w-[calc((100%_-_2rem)/3)]"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full mb-5"
              style={{ background: "var(--bg)", boxShadow: "inset 0 0 0 1.5px var(--brand)" }}
            >
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
                <IconPaths kind={l.kind} />
              </svg>
            </span>
            <h3 className="text-foreground">{l.label}</h3>
            <p className="mt-1 mb-4 text-sm leading-relaxed text-muted">{l.promise}</p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-body">
              {l.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--brand)" }} />
                  {b}
                </li>
              ))}
            </ul>
            {l.cta && (
              <div className="mt-auto pt-6">
                <Link href={l.cta.href} className="btn-ghost">
                  {l.cta.label}
                </Link>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </MotionConfig>
  );
}
