"use client";

import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  variant?: "fade" | "blur" | "rise";
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  direction = "up",
  variant = "fade",
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // Reduced motion: no movement and no fade time, the block just appears (rebuild spec section 7)
  const reduce = useReducedMotion();

  const yOffset = variant === "rise" ? 48 : direction === "up" ? 28 : 0;

  const initial = {
    opacity: 0,
    filter: variant === "blur" ? "blur(12px)" : "blur(0px)",
    y: yOffset,
    x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
    scale: variant === "rise" ? 0.97 : 1,
  };

  const animate = inView
    ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)", scale: 1 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={reduce ? { duration: 0 } : { duration: 0.75, delay, ease: EASE }}
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
  stagger = 0.09,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
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
        transition={{ duration: 1.4, delay, ease: EASE }}
        style={{ originX: 0 }}
        className="h-px w-full bg-border-subtle"
      />
    </div>
  );
}
