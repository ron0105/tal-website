"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Job } from "@/lib/jobs";

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
      transition={{ duration: 0.65, delay: index * 0.1, ease: EASE }}
      className="card-interactive flex flex-col gap-5 p-8 border rounded-[4px]"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Tags row */}
      <div className="flex flex-wrap gap-2">
        <span
          className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
          style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
        >
          {job.department}
        </span>
        <span
          className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
          style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
        >
          {job.type}
        </span>
        <span
          className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm"
          style={{ background: "var(--bg-lift)", color: "var(--text-muted)" }}
        >
          📍 {job.location}
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-xl font-bold tracking-tight leading-snug"
        style={{ color: "var(--text-primary)" }}
      >
        {job.title}
      </h2>

      {/* Teaser */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--text-body)" }}
      >
        {job.teaser}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1.5">
        {job.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-xs font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="rule" />

      {/* CTA */}
      <Link
        href={`/careers/${job.slug}`}
        className="btn-primary self-start"
        style={{ padding: "10px 20px", fontSize: "0.875rem" }}
      >
        View Role →
      </Link>
    </motion.article>
  );
}
