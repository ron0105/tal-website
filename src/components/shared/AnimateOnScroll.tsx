"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Typed cubic-bezier tuple — avoids `number[]` TypeScript incompatibility with Framer Motion's `Easing` type
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  variant?: "fade" | "blur";
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up",
  variant = "fade",
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const initial = {
    opacity: 0,
    filter: variant === "blur" ? "blur(10px)" : "blur(0px)",
    y: direction === "up" ? 20 : 0,
    x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)" } : initial}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  delay = 0,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const variants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const blurItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

export function AnimatedLine({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={`w-full relative ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay, ease: EASE }}
        style={{ originX: 0 }}
        className="h-px w-full bg-border-subtle"
      />
    </div>
  );
}
