"use client";

import { motion } from "framer-motion";
import { Job } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Shared sub-components ───────────────────────────────────────────────────

function Section({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
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

function BulletList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.4em]"
            style={{ background: accent ? "var(--accent)" : "var(--border-color)" }}
            aria-hidden="true"
          />
          <span className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-black uppercase tracking-widest mb-3"
      style={{ color: "var(--text-muted)" }}
    >
      {children}
    </p>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm leading-relaxed" style={{ color: "var(--text-body)" }}>
      {children}
    </p>
  );
}

// ─── Tag pill for tools ──────────────────────────────────────────────────────
function ToolTag({ label }: { label: string }) {
  return (
    <span
      className="text-[11px] font-bold px-3 py-1.5 rounded-sm"
      style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
    >
      {label}
    </span>
  );
}

// ─── Pipeline step indicator ─────────────────────────────────────────────────
function PipelineSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={i} className="flex items-center gap-2">
          <span
            className="text-[11px] font-bold px-3 py-1.5 rounded-sm"
            style={{ background: "var(--bg-lift)", color: "var(--text-primary)" }}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span
              className="text-xs"
              style={{ color: "var(--border-color)" }}
              aria-hidden="true"
            >
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

interface JDContentProps {
  job: Job;
}

export default function JDContent({ job }: JDContentProps) {
  const { content } = job;

  return (
    <article
      id="role-details"
      className="padding-section"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="layout-grid px-6 md:px-10">
        <div
          className="grid md:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-start"
        >
          {/* ── Left column — main content ─────────────────────────────── */}
          <div className="flex flex-col gap-16">

            {/* Who We Are */}
            <Section>
              <SectionLabel>Who We Are</SectionLabel>
              <div className="flex flex-col gap-4">
                {content.whoWeAre.map((para, i) => (
                  <Prose key={i}>{para}</Prose>
                ))}
              </div>
            </Section>

            {/* Why This Role Exists */}
            <Section delay={0.05}>
              <SectionLabel>Why This Role Exists</SectionLabel>
              <div className="flex flex-col gap-6">
                {content.whyExists.problem.map((para, i) => (
                  <Prose key={i}>{para}</Prose>
                ))}
                <div>
                  <SubLabel>What bandwidth you free up</SubLabel>
                  <BulletList items={content.whyExists.bandwidthFreed} accent />
                </div>
                <div>
                  <SubLabel>What a good week looks like</SubLabel>
                  <BulletList items={content.whyExists.weeklyOutcome} accent />
                </div>
              </div>
            </Section>

            {/* What You'll Own */}
            <Section delay={0.05}>
              <SectionLabel>What You'll Own</SectionLabel>
              <div className="flex flex-col gap-8">
                <BulletList items={content.whatYouOwn.items} accent />
                <div>
                  <SubLabel>What's not your job</SubLabel>
                  <BulletList items={content.whatYouOwn.notYourJob} />
                </div>
              </div>
            </Section>

            {/* Must-Haves */}
            <Section delay={0.05}>
              <SectionLabel>What You Must Have</SectionLabel>
              <div className="flex flex-col gap-8">
                <div>
                  <SubLabel>Skills</SubLabel>
                  <BulletList items={content.mustHaves.skills} accent />
                </div>
                <div>
                  <SubLabel>Behaviours</SubLabel>
                  <BulletList items={content.mustHaves.behaviours} accent />
                </div>
                <div>
                  <SubLabel>Tools you should know</SubLabel>
                  <div className="flex flex-wrap gap-2">
                    {content.mustHaves.tools.map((tool) => (
                      <ToolTag key={tool} label={tool} />
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            {/* Ownership Signal */}
            <Section delay={0.05}>
              <SectionLabel>What Ownership Looks Like Here</SectionLabel>
              <blockquote
                className="pl-5 text-sm leading-relaxed italic"
                style={{
                  borderLeft: "2px solid var(--accent)",
                  color: "var(--text-body)",
                }}
              >
                {content.ownershipSignal}
              </blockquote>
            </Section>

            {/* Nice to Haves */}
            <Section delay={0.05}>
              <SectionLabel>Nice to Have</SectionLabel>
              <div className="flex flex-col gap-6">
                <Prose>{content.nicesToHave.signal}</Prose>
                <div>
                  <SubLabel>What will make you stand out</SubLabel>
                  <BulletList items={content.nicesToHave.standOut} accent />
                </div>
              </div>
            </Section>

            {/* Red Flags */}
            <Section delay={0.05}>
              <SectionLabel>An Honest Note on Fit</SectionLabel>
              <div className="flex flex-col gap-8">
                <div>
                  <SubLabel>What we take seriously</SubLabel>
                  <BulletList items={content.redFlags.trust} />
                </div>
                <div>
                  <SubLabel>Worth reflecting on before you apply</SubLabel>
                  <BulletList items={content.redFlags.willFail} />
                </div>
                <div
                  className="p-5 rounded-sm border"
                  style={{
                    borderColor: "var(--border-color)",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <p
                    className="text-sm font-semibold leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {content.redFlags.warningText}
                  </p>
                </div>
              </div>
            </Section>

            {/* 90-Day Goals */}
            <Section delay={0.05}>
              <SectionLabel>90-Day Goals</SectionLabel>
              <Prose>{content.ninetyDays}</Prose>
            </Section>

            {/* Worth It */}
            <Section delay={0.05}>
              <SectionLabel>Why It's Worth It</SectionLabel>
              <Prose>{content.worthIt}</Prose>
            </Section>

          </div>

          {/* ── Right column — sticky sidebar ──────────────────────────── */}
          <div className="hidden md:block">
            <div
              className="sticky top-40 flex flex-col gap-6 p-8 border rounded-[4px]"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
              }}
            >
              {/* Quick facts */}
              <div className="flex flex-col gap-4">
                <p
                  className="text-[10px] font-black uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  Quick Facts
                </p>
                {[
                  { label: "Department", value: job.department },
                  { label: "Type", value: job.type },
                  { label: "Location", value: job.location },
                  { label: "Pipeline", value: job.pipeline },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rule" />

              {/* Hiring pipeline */}
              <div className="flex flex-col gap-3">
                <p
                  className="text-[10px] font-black uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  Hiring Process
                </p>
                <div className="flex flex-col gap-2">
                  {job.pipelineSteps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0"
                        style={{ background: "var(--accent)", color: "#fff" }}
                      >
                        {i + 1}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--text-body)" }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs leading-relaxed mt-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {job.pipelineNote}
                </p>
              </div>

              <div className="rule" />

              {/* Apply CTA */}
              <a
                href={job.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center"
                style={{ padding: "12px 20px" }}
              >
                Apply Now →
              </a>
            </div>
          </div>
        </div>

        {/* Mobile apply CTA — bottom of content */}
        <div
          className="md:hidden mt-16 pt-10"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Hiring Process
              </p>
              <PipelineSteps steps={job.pipelineSteps} />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {job.pipelineNote}
            </p>
            <a
              href={job.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center mt-2"
              style={{ padding: "14px 24px" }}
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
