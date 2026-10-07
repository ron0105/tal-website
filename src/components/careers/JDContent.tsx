"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Job, REPLY_PROMISE_DAYS, stepsFor } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Shared sub-components ───────────────────────────────────────────────────

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="label-eyebrow">{children}</span>
      <div className="flex-1 rule" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.45em]"
            style={{ background: "var(--accent)" }}
            aria-hidden="true"
          />
          <span className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SmallLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
      {children}
    </p>
  );
}

// ─── Pay + process panel, shared by the desktop sidebar and the mobile footer ─

function ApplyPanel({ job }: { job: Job }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <SmallLabel>How you&apos;re paid</SmallLabel>
        <p className="font-poppins text-xl leading-snug" style={{ color: "var(--brand)", fontWeight: 500 }}>
          {job.pay.headline}
        </p>
        <ul className="flex flex-col gap-2">
          {job.pay.detail.map((d) => (
            <li key={d} className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
              {d}
            </li>
          ))}
        </ul>
        <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
          {job.statusNote}
        </p>
      </div>

      <div className="rule" />

      <div className="flex flex-col gap-3">
        <SmallLabel>{job.group === "cohort" ? "How the cohort works" : "How it works"}</SmallLabel>
        <ol className="flex flex-col gap-2">
          {stepsFor(job).map((step, i) => (
            <li key={step.name} className="flex items-center gap-2.5">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                style={{ background: "var(--brand)", color: "#fff" }}
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--text-body)" }}>
                {step.name}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
          You&apos;ll hear back within {REPLY_PROMISE_DAYS} days of applying, whatever the answer.
        </p>
      </div>

      <Link
        href={`/careers/${job.slug}/apply`}
        className="btn-primary flex items-center justify-center"
        style={{ padding: "13px 20px" }}
      >
        Apply in 30 minutes →
      </Link>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

interface JDContentProps {
  job: Job;
}

export default function JDContent({ job }: JDContentProps) {
  const { content, workSample } = job;

  return (
    <article
      id="role-details"
      className="padding-section scroll-mt-28"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="layout-grid px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-start">
          <div className="flex flex-col gap-16">
            <Section>
              <SectionLabel>{job.group === "cohort" ? "Why this track exists" : "Why this role exists"}</SectionLabel>
              <div className="flex flex-col gap-4">
                {content.whyExists.map((para) => (
                  <p key={para} className="text-base leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {para}
                  </p>
                ))}
              </div>
            </Section>

            <Section>
              <SectionLabel>What you&apos;ll do</SectionLabel>
              <BulletList items={content.whatYouDo} />
            </Section>

            {content.portfolio && (
              <Section>
                <SectionLabel>What goes in your portfolio</SectionLabel>
                <BulletList items={content.portfolio} />
              </Section>
            )}

            {content.goodLooksLike && (
              <Section>
                <SectionLabel>What good looks like</SectionLabel>
                <BulletList items={content.goodLooksLike} />
              </Section>
            )}

            <Section>
              <SectionLabel>You&apos;ll do well here if</SectionLabel>
              <BulletList items={content.youllFit} />
              {content.tools && (
                <div className="flex flex-wrap gap-2 mt-8">
                  {content.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-bold px-3 py-1.5 rounded-sm"
                      style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </Section>

            <Section>
              <SectionLabel>Worth knowing</SectionLabel>
              <div
                className="p-6 rounded-sm border flex flex-col gap-3"
                style={{ borderColor: "var(--border-color)", background: "var(--bg-secondary)" }}
              >
                {content.worthKnowing.map((note) => (
                  <p key={note} className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
                    {note}
                  </p>
                ))}
              </div>
            </Section>

            <Section>
              <SectionLabel>Your work sample</SectionLabel>
              <div
                className="p-7 rounded-sm"
                style={{ background: "var(--brand)", color: "#fff" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--accent-on-brand)" }}>
                  What we&apos;ll ask you when you apply
                </p>
                <p className="font-poppins text-xl leading-snug mb-4" style={{ fontWeight: 500 }}>
                  {workSample.prompt}
                </p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {workSample.hint} Take your time; your answers save on your device as you type.
                </p>
              </div>
            </Section>
          </div>

          {/* self-stretch gives the column the full row height, so the panel has room to stick */}
          <div className="hidden md:block self-stretch">
            <div
              className="sticky top-40 p-8 border rounded-[4px]"
              style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
            >
              <ApplyPanel job={job} />
            </div>
          </div>
        </div>

        <div className="md:hidden mt-16 pt-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <ApplyPanel job={job} />
        </div>
      </div>
    </article>
  );
}
