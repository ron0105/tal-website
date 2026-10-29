"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { IconPaths, type IconKind } from "@/components/home/graphics/StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const viewport = { once: true, margin: "-80px" } as const;

// Impact-first About (Rohan, Oct 29 2026): the team and why work with us.
// The lab-era story, "How an idea grows" and "Six things we hold to" were cut as vague.
const team = [
  {
    name: "Rohan Tiwarekar",
    role: "Founder · Strategy, websites and automation",
    photo: "/founders/rohan.png",
    view: "A business grows furthest when it runs well beyond one person.",
  },
  {
    name: "Soniya Kubde",
    role: "Founder · Brand, design and video",
    photo: "/founders/soniya.png",
    view: "Design is how quickly someone understands what you offer.",
  },
  {
    name: "Kartik Rajpurohit",
    role: "Marketing and content",
    photo: "/founders/kartik.webp",
    // His own words, from his portfolio
    view: "My work sits where content meets operations.",
  },
];

// The differentiator from 01-tal/tal/how-we-work/Our offer (current).md, in the buyer's words
const reasons: { kind: IconKind; title: string; line: string }[] = [
  { kind: "business", title: "One team, not three vendors", line: "Strategy, marketing and tech in one place, so nothing gets lost between agencies." },
  { kind: "build", title: "We build, not just advise", line: "No deck and a goodbye. We make the website, the posts and the follow-ups." },
  { kind: "scale", title: "Judged by customers, not likes", line: "We watch enquiries and bookings: the numbers that pay your bills." },
];

function SectionHead({ id, eyebrow, heading }: { id: string; eyebrow: string; heading: string }) {
  return (
    <div className="mx-auto mb-10 text-left sm:text-center" style={{ maxWidth: "36rem" }}>
      <span className="label-eyebrow mb-4 block" style={{ color: "var(--accent-text)" }}>
        {eyebrow}
      </span>
      <h2 id={id} style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
        {heading}
      </h2>
    </div>
  );
}

function IconBadge({ kind }: { kind: IconKind }) {
  return (
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
        <IconPaths kind={kind} />
      </svg>
    </span>
  );
}

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition: { duration: 0.7, ease, delay },
});

export default function AboutLab() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Why work with us */}
      <section
        aria-labelledby="about-why-heading"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <div className="layout-grid">
          <SectionHead id="about-why-heading" eyebrow="Why us" heading="What you get that an agency won't give you" />
          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.li
                key={r.title}
                {...rise(i * 0.1)}
                className="flex flex-col rounded-2xl border border-border-subtle bg-background p-6"
              >
                <IconBadge kind={r.kind} />
                <h3 className="text-foreground">{r.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">{r.line}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="about-team-heading" className="bg-background px-6 md:px-10" style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}>
        <div className="layout-grid">
          <SectionHead id="about-team-heading" eyebrow="The team" heading="The people behind the work" />
          <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {team.map((p, i) => (
              <motion.li
                key={p.name}
                {...rise(i * 0.12)}
                className="flex flex-col items-center rounded-2xl border border-border-subtle bg-background-secondary p-6 text-center md:p-8"
              >
                <Image
                  src={p.photo}
                  alt={`Portrait of ${p.name}`}
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-full object-cover object-top"
                />
                <h3 className="mt-5 text-foreground">{p.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent-text)" }}>
                  {p.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-body" style={{ maxWidth: "30ch" }}>
                  &ldquo;{p.view}&rdquo;
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
