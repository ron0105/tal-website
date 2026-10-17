"use client";

import Image from "next/image";
import { motion, useInView, MotionConfig } from "framer-motion";
import { useRef } from "react";
import { IconPaths, type IconKind } from "@/components/home/graphics/StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const story = [
  "Good ideas deserve a fair chance.",
  "The Adda Labs is a lab built to give them one.",
  "We begin with the people an idea is meant for.",
  "Then we build a small version, test it with them and grow what works.",
  "It is the same way of thinking across business, technology, sustainability and public causes.",
];

const principles: { kind: IconKind; title: string; line: string }[] = [
  { kind: "public", title: "People first", line: "Every idea starts with the people it serves." },
  { kind: "build", title: "Build to learn", line: "A small version teaches us faster than a plan." },
  { kind: "sustainability", title: "Frugal by design", line: "Lean steps give more ideas their chance." },
];

export default function AboutLab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionConfig reducedMotion="user">
      <div ref={ref} className="flex flex-col gap-16 md:gap-20">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-3 text-lg leading-relaxed text-body"
          style={{ maxWidth: "36rem" }}
        >
          {story.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="flex flex-wrap gap-x-10 gap-y-6"
        >
          {[
            { name: "Rohan Tiwarekar", role: "Founder", photo: "/founders/rohan.png" },
            { name: "Soniya", role: "Design and Visual Communication", photo: "/founders/soniya.png" },
          ].map((person) => (
            <div key={person.name} className="flex items-center gap-5">
              <Image
                src={person.photo}
                alt={person.name}
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-full object-cover object-top"
              />
              <div>
                <p className="text-lg font-bold text-foreground leading-tight">{person.name}</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: "var(--accent-text)" }}>
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Principles */}
        <ul className="grid gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
              className="flex flex-col rounded-2xl border border-border-subtle bg-background-secondary p-6"
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
                  <IconPaths kind={p.kind} />
                </svg>
              </span>
              {/* h2 keeps heading order under the page h1; styled to match the h3 card titles elsewhere */}
              <h2 className="text-subsection text-foreground">{p.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-body">{p.line}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </MotionConfig>
  );
}
