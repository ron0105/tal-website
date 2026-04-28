"use client";

import { motion } from "framer-motion";

export function TimelineProcessVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 300"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background vertical line */}
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "linear" }}
        x1="50" y1="20" x2="50" y2="280"
        stroke="var(--text-muted)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* Main progress segment */}
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        x1="50" y1="60" x2="50" y2="220"
        stroke="var(--text-primary)"
        strokeWidth="4"
      />

      {/* Stepped Nodes */}
      {[
        { y: 60, r: 6, delay: 0.5 },
        { y: 140, r: 8, delay: 1.0 },
        { y: 220, r: 6, delay: 1.5 }
      ].map((node, i) => (
        <motion.circle
          key={`step-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: node.delay, duration: 0.4, type: "spring" }}
          cx="50"
          cy={node.y}
          r={node.r}
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="3"
        />
      ))}
      
      {/* Horizontal indicator lines */}
      <motion.line
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.3 }}
        x1="50" y1="140" x2="80" y2="140"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
