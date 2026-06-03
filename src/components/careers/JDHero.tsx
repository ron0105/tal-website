"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Job } from "@/lib/jobs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface JDHeroProps {
  job: Job;
}

export default function JDHero({ job }: JDHeroProps) {
  return (
    <section
      className="relative bg-background overflow-hidden"
      style={{ padding: "clamp(9rem, 16vh, 13rem) 1.5rem clamp(4rem, 8vh, 6rem)" }}
    >
      {/* Gradient blob — matches HomeHero / CareersHero */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-full h-full rounded-full blur-3xl opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, var(--accent), transparent 65%)",
          }}
        />
      </div>

      <div className="layout-grid px-6 md:px-10 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-center gap-2 mb-10 text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          <Link
            href="/careers"
            className="transition-colors hover:text-accent"
            style={{ color: "var(--text-muted)" }}
          >
            Careers
          </Link>
          <span style={{ color: "var(--border-color)" }}>/</span>
          <span style={{ color: "var(--accent)" }}>{job.shortTitle}</span>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[job.department, job.type, `📍 ${job.location}`].map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
              style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
            >
              {tag}
            </span>
          ))}
          <span
            className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {job.pipeline}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
          className="font-poppins mb-8"
          style={{
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "var(--text-primary)",
            maxWidth: "760px",
          }}
        >
          {job.title}
        </motion.h1>

        {/* Teaser */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: EASE }}
          className="body-copy mb-10"
          style={{ maxWidth: "540px" }}
        >
          {job.teaser}
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href={job.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "12px 28px" }}
          >
            Apply Now →
          </a>
          <Link href="#role-details" className="btn-ghost" style={{ padding: "12px 28px" }}>
            Read the full role
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
