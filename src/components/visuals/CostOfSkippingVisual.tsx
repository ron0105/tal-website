"use client";

import { motion } from "framer-motion";

export function CostOfSkippingVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 150"
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Axes */}
      <line x1="30" y1="20" x2="30" y2="130" stroke="var(--border-subtle)" strokeWidth="1" />
      <line x1="30" y1="130" x2="280" y2="130" stroke="var(--border-subtle)" strokeWidth="1" />
      
      {/* X-axis labels (abstract) */}
      <text x="150" y="145" fill="var(--text-muted)" fontSize="8" textAnchor="middle" letterSpacing="0.1em" className="uppercase font-bold">Time Spent Building</text>
      
      {/* Y-axis label */}
      <text x="15" y="75" fill="var(--text-muted)" fontSize="8" textAnchor="middle" transform="rotate(-90 15 75)" letterSpacing="0.1em" className="uppercase font-bold">Value</text>

      {/* The Cost line (Investment going up) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        d="M 30 130 C 150 130, 200 80, 260 30"
        stroke="var(--text-muted)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* The Reality line (Customer value drops to zero) */}
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
        d="M 260 30 L 260 130"
        stroke="var(--text-primary)"
        strokeWidth="3"
      />

      {/* Zero point marker */}
      <motion.circle
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.3, type: "spring" }}
        cx="260"
        cy="130"
        r="5"
        fill="var(--bg)"
        stroke="var(--text-primary)"
        strokeWidth="2"
      />
      
      {/* Annotation */}
      <motion.text
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8, duration: 0.5 }}
        x="260" y="20" fill="var(--text-primary)" fontSize="10" textAnchor="middle" fontWeight="bold"
      >
        Launch
      </motion.text>
    </svg>
  );
}
