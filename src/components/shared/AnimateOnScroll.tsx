"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 20 : 0,
    x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLine({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={`w-full relative ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="h-px w-full bg-border-subtle"
      />
    </div>
  );
}
