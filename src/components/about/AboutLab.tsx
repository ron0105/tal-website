"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { IconPaths, type IconKind } from "@/components/home/graphics/StepIcons";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const viewport = { once: true, margin: "-80px" } as const;

const story = [
  "Good ideas deserve a fair chance.",
  "The Adda Labs exists to give them one.",
  "We begin with the people an idea is meant for.",
  "We build a small version, test it with them and grow what works.",
  "A clear foundation early saves time later.",
];

// TAL's method, in this order.
const journey = [
  { title: "Observe", line: "Listen closely to people and places." },
  { title: "Structure", line: "Give the idea a clear shape." },
  { title: "Validate", line: "Check it with real evidence." },
  { title: "Build", line: "Make it, then grow what works." },
];

const team = [
  {
    name: "Rohan Tiwarekar",
    role: "Founder",
    photo: "/founders/rohan.png",
    view: "A business grows furthest when it runs well beyond one person.",
  },
  {
    name: "Soniya",
    role: "Founder",
    photo: "/founders/soniya.png",
    view: "Design is how quickly someone understands what you offer.",
  },
];

const beliefs: { kind: IconKind; title: string; line: string }[] = [
  { kind: "public", title: "People first", line: "Every idea starts with the people it serves." },
  { kind: "build", title: "Build to learn", line: "A small version teaches faster than a plan." },
  { kind: "sustainability", title: "Frugal by design", line: "Lean steps give more ideas their chance." },
  { kind: "test", title: "Evidence first", line: "We test assumptions before acting on them." },
  { kind: "scale", title: "Strong foundations", line: "Getting it right early saves time later." },
  { kind: "ventures", title: "Clear expectations", line: "People do their best work when they know what is expected." },
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
      {/* Story */}
      <section aria-labelledby="about-story-heading" className="bg-background px-6 md:px-10" style={{ paddingTop: "clamp(1.5rem, 4vh, 3rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}>
        <div className="layout-grid">
          <SectionHead id="about-story-heading" eyebrow="Why we exist" heading="Our story" />
          <motion.div
            {...rise()}
            className="mx-auto flex flex-col gap-3 text-left text-lg leading-relaxed text-body sm:text-center"
            style={{ maxWidth: "36rem" }}
          >
            {story.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey: Observe, Structure, Validate, Build */}
      <section
        aria-labelledby="about-journey-heading"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <div className="layout-grid">
          <SectionHead id="about-journey-heading" eyebrow="Our method" heading="How an idea grows" />
          <div className="mx-auto max-w-5xl rounded-2xl border border-border-subtle bg-background p-6 md:p-8">
            <ol role="list" className="grid list-none md:grid-cols-4">
              {journey.map((s, i) => (
                <motion.li
                  key={s.title}
                  {...rise(i * 0.12)}
                  className="relative flex items-start gap-4 pb-8 last:pb-0 md:flex-col md:items-center md:gap-4 md:px-4 md:pb-0 md:text-center"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums"
                    style={{
                      background: i === journey.length - 1 ? "var(--brand)" : "var(--bg)",
                      color: i === journey.length - 1 ? "#FFFFFF" : "var(--brand)",
                      boxShadow: "inset 0 0 0 1.5px var(--brand)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < journey.length - 1 && (
                    <>
                      <span
                        aria-hidden="true"
                        className="absolute left-6 top-14 -bottom-1 block w-px md:hidden"
                        style={{ background: "var(--border-strong)", opacity: 0.6 }}
                      />
                      <motion.span
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={viewport}
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
                    </>
                  )}
                  <div className="pt-2 md:pt-0">
                    <h3 className="text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body md:mx-auto" style={{ maxWidth: "26ch" }}>
                      {s.line}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="about-team-heading" className="bg-background px-6 md:px-10" style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}>
        <div className="layout-grid">
          <SectionHead id="about-team-heading" eyebrow="The team" heading="The people behind the lab" />
          <ul className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
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

      {/* Beliefs */}
      <section
        aria-labelledby="about-beliefs-heading"
        className="px-6 md:px-10"
        style={{ background: "var(--bg-secondary)", paddingTop: "clamp(3.5rem, 8vh, 6rem)", paddingBottom: "clamp(3.5rem, 8vh, 6rem)" }}
      >
        <div className="layout-grid">
          <SectionHead id="about-beliefs-heading" eyebrow="What we believe" heading="Six things we hold to" />
          <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <motion.li
                key={b.title}
                {...rise((i % 3) * 0.1)}
                className="flex flex-col rounded-2xl border border-border-subtle bg-background p-6"
              >
                <IconBadge kind={b.kind} />
                <h3 className="text-foreground">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">{b.line}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
