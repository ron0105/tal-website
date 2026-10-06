"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Job } from "@/lib/jobs";
import StatusPill from "./StatusPill";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: EASE }}
      className="card-interactive relative flex flex-col gap-5 p-8 border rounded-[4px]"
      style={{ background: "var(--bg-secondary)", borderColor: "var(--border-color)" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusPill status={job.status} />
        {[job.type, job.location].map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
            style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        <h3 className="mb-2" style={{ color: "var(--text-primary)" }}>
          {/* The stretched link makes the whole card clickable without nesting interactive elements */}
          <Link href={`/careers/${job.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {job.title}
          </Link>
        </h3>
        <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
          {job.pay.headline}
        </p>
      </div>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-body)" }}>
        {job.teaser}
      </p>

      <ul className="flex flex-col gap-1.5">
        {job.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            {h}
          </li>
        ))}
      </ul>

      <div className="rule" />

      <div className="flex items-center justify-between gap-4">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          {job.statusNote}
        </span>
        <span className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--brand)" }}>
          View role →
        </span>
      </div>
    </motion.article>
  );
}
