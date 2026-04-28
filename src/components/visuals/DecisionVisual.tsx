"use client";

import { motion } from "framer-motion";

export function DecisionVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Starting point */}
      <motion.circle
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        cx="30" cy="50" r="4"
        fill="var(--bg)"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Main Path */}
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        x1="34" y1="50" x2="80" y2="50"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Decision Node */}
      <motion.rect
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.7 }}
        x="80" y="40" width="20" height="20"
        fill="none"
        stroke="var(--text-muted)"
        strokeWidth="1.5"
        transform="rotate(45 90 50)"
      />

      {/* Outcome Paths */}
      {/* 1. Build (Up and right) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
        d="M 100 50 L 120 20 L 160 20"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />
      <motion.circle
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.5 }}
        cx="160" cy="20" r="4" fill="var(--text-primary)"
      />

      {/* 2. Pivot (Right, then adjusts) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.0 }}
        d="M 100 50 L 130 50 L 130 65 L 160 65"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <motion.circle
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 1.5 }}
        cx="160" cy="65" r="4" fill="var(--bg)" stroke="var(--text-primary)" strokeWidth="1.5"
      />

      {/* 3. Kill (Down and stop) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.0 }}
        d="M 100 50 L 120 80"
        stroke="var(--text-muted)"
        strokeWidth="1.5"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.4 }}
        x1="115" y1="85" x2="125" y2="75"
        stroke="var(--text-muted)"
        strokeWidth="1.5"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 1.4 }}
        x1="115" y1="75" x2="125" y2="85"
        stroke="var(--text-muted)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
