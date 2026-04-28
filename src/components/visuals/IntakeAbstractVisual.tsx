"use client";

import { motion } from "framer-motion";

export function IntakeAbstractVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Funnel/Intake lines */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        d="M 40 20 L 80 80 L 80 130"
        stroke="var(--border-subtle)"
        strokeWidth="1.5"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        d="M 160 20 L 120 80 L 120 130"
        stroke="var(--border-subtle)"
        strokeWidth="1.5"
      />

      {/* Abstract data points falling in */}
      {[
        { x: 60, y: 30, delay: 0.2 },
        { x: 100, y: 20, delay: 0.5 },
        { x: 140, y: 40, delay: 0.8 },
        { x: 90, y: 60, delay: 1.1 },
        { x: 110, y: 70, delay: 1.4 }
      ].map((point, i) => (
        <motion.circle
          key={`data-${i}`}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: point.y, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: point.delay, duration: 0.5, type: "spring" }}
          cx={point.x} cy={0} r="3"
          fill="var(--text-muted)"
        />
      ))}

      {/* Processed/Structured output block */}
      <motion.rect
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.5 }}
        x="90" y="100" width="20" height="30"
        fill="var(--bg)"
        stroke="var(--text-primary)"
        strokeWidth="2"
        style={{ transformOrigin: "bottom" }}
      />
      
      {/* System output arrow */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, duration: 0.4 }}
        d="M 100 130 L 100 150 M 95 145 L 100 150 L 105 145"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
