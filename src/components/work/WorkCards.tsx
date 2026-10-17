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
  span: string;
}[] = [
  {
    kind: "business",
    label: "Business & marketing",
    promise: "Clear offers and a wider reach.",
    bullets: ["Positioning and offer design", "Websites and content that bring enquiries", "Follow-up systems that reply for you"],
    cta: { label: "Book a call", href: "/call" },
    span: "lg:col-span-2",
  },
  {
    kind: "technology",
    label: "Technology",
    promise: "Simple tools people enjoy using.",
    bullets: ["Websites and web apps", "Workflow automation", "AI assistants for everyday tasks"],
    span: "lg:col-span-2",
  },
  {
    kind: "sustainability",
    label: "Sustainability",
    promise: "Practical, greener choices.",
    bullets: ["Reuse and waste ideas", "Low-cost green operations", "Awareness campaigns"],
    span: "lg:col-span-2",
  },
  {
    kind: "public",
    label: "Public causes",
    promise: "Solutions that serve people.",
    bullets: ["Community programmes", "Tools for non-profits and campaigns", "Research with the people involved"],
    span: "lg:col-span-3",
  },
  {
    kind: "ventures",
    label: "Ventures",
    promise: "Ideas grown into businesses.",
    bullets: ["Testing ideas with real people", "Validation, one step at a time", "Early prototypes and first customers"],
    span: "lg:col-span-3",
  },
];

export default function WorkCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      <ul ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 max-w-5xl mx-auto">
        {lines.map((l, i) => (
          <motion.li
            key={l.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className={`flex flex-col rounded-2xl border border-border-subtle bg-background-secondary px-6 py-7 ${l.span}`}
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
            <h3 className="text-lg font-bold leading-snug text-foreground">{l.label}</h3>
            <p className="text-sm text-muted mt-1 mb-4 leading-snug">{l.promise}</p>
            <ul className="flex flex-col gap-2 text-sm text-body">
              {l.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--brand)" }} />
                  {b}
                </li>
              ))}
            </ul>
            {l.cta && (
              <Link href={l.cta.href} className="btn-ghost mt-6 self-start" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
                {l.cta.label}
              </Link>
            )}
          </motion.li>
        ))}
      </ul>
    </MotionConfig>
  );
}
