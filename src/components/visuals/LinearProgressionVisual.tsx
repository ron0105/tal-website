"use client";

import { motion } from "framer-motion";

export function LinearProgressionVisual({ className = "" }: { className?: string }) {
  const steps = [
    { x: 30, y: 50 },
    { x: 80, y: 50 },
    { x: 130, y: 50 },
    { x: 180, y: 50 },
    { x: 230, y: 50 },
    { x: 280, y: 50 },
  ];

  return (
    <svg
      viewBox="0 0 310 100"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background track line */}
      <motion.line
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        x1="30" y1="50" x2="280" y2="50"
        stroke="var(--text-muted)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Main progress line */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M 30 50 L 280 50"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Step nodes */}
      {steps.map((step, i) => (
        <motion.circle
          key={`step-${i}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.4, type: "spring" }}
          cx={step.x}
          cy={step.y}
          r={i === steps.length - 1 ? 6 : 4}
          fill={i === steps.length - 1 ? "var(--text-primary)" : "var(--bg)"}
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
