"use client";

import { motion } from "framer-motion";

export function ScalingMapVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid background */}
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="var(--border-subtle)" />
      </pattern>
      <rect width="200" height="200" fill="url(#grid)" />

      {/* Main vertical stem */}
      <motion.line
        initial={{ y2: 180 }}
        whileInView={{ y2: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        x1="100"
        y1="180"
        x2="100"
        stroke="var(--text-primary)"
        strokeWidth="3"
      />

      {/* Branches */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        d="M 100 140 L 150 140 L 150 100 M 100 100 L 50 100 L 50 60 M 100 60 L 150 60"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Nodes */}
      {[
        { cx: 100, cy: 180, delay: 0 },
        { cx: 100, cy: 140, delay: 0.2 },
        { cx: 150, cy: 100, delay: 0.8 },
        { cx: 100, cy: 100, delay: 0.4 },
        { cx: 50, cy: 60, delay: 1.0 },
        { cx: 100, cy: 60, delay: 0.6 },
        { cx: 150, cy: 60, delay: 1.2 },
        { cx: 100, cy: 20, delay: 1.0 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: node.delay, duration: 0.4 }}
          cx={node.cx}
          cy={node.cy}
          r="4"
          fill="var(--bg)"
          stroke="var(--text-primary)"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
