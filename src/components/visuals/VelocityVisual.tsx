"use client";

import { motion } from "framer-motion";

export function VelocityVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <line x1="20" y1="50" x2="180" y2="50" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 4" />
      </motion.g>

      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        d="M 20 50 L 60 50 L 80 20 L 120 80 L 140 50 L 180 50"
        stroke="var(--text-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Speed lines */}
      {[
        { x1: 60, x2: 40, y: 30, delay: 0.5 },
        { x1: 70, x2: 30, y: 70, delay: 0.7 },
        { x1: 140, x2: 100, y: 20, delay: 0.9 },
        { x1: 150, x2: 120, y: 80, delay: 1.1 },
      ].map((line, i) => (
        <motion.line
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: line.delay, duration: 0.3 }}
          x1={line.x1}
          y1={line.y}
          x2={line.x2}
          y2={line.y}
          stroke="var(--text-primary)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
