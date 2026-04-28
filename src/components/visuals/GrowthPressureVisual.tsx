"use client";

import { motion } from "framer-motion";

export function GrowthPressureVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heavy top mass (Growth) */}
      <motion.path
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        d="M 60 20 L 140 20 L 120 60 L 80 60 Z"
        fill="var(--text-muted)"
        fillOpacity="0.1"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />

      {/* Pressure arrows */}
      {[
        { x: 70, y: 70, delay: 0.5 },
        { x: 100, y: 70, delay: 0.6 },
        { x: 130, y: 70, delay: 0.7 }
      ].map((arrow, i) => (
        <motion.path
          key={`arrow-${i}`}
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: arrow.delay, duration: 0.4 }}
          d={`M ${arrow.x} ${arrow.y} L ${arrow.x} ${arrow.y + 15} M ${arrow.x - 3} ${arrow.y + 12} L ${arrow.x} ${arrow.y + 15} L ${arrow.x + 3} ${arrow.y + 12}`}
          stroke="var(--text-primary)"
          strokeWidth="1.5"
        />
      ))}

      {/* Weak foundation */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--text-primary)" strokeWidth="1" />
        <line x1="75" y1="110" x2="125" y2="110" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="70" y1="120" x2="130" y2="120" stroke="var(--text-primary)" strokeWidth="1" />
      </motion.g>

      {/* Cracks in foundation */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.4 }}
        d="M 100 100 L 105 110 L 95 115 L 100 120"
        stroke="var(--text-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
