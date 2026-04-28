"use client";

import { motion } from "framer-motion";

export function ProgressionVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M 50 150 C 150 150, 150 50, 250 50 L 350 50"
        stroke="var(--text-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        cx="50"
        cy="150"
        r="4"
        fill="var(--bg)"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />
      <motion.circle
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
        cx="350"
        cy="50"
        r="6"
        fill="var(--text-primary)"
      />
      {/* Abstract structure lines to show the "system" */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <line x1="250" y1="50" x2="250" y2="150" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="350" y1="50" x2="350" y2="150" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="230" y1="150" x2="370" y2="150" stroke="var(--text-primary)" strokeWidth="4" />
      </motion.g>
    </svg>
  );
}
