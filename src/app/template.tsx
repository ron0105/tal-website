"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { MOTION, motionScale } from "@/lib/motion";

// Flipped after the first page mounts in the browser (never on the server), so the very
// first load paints at once and only later route changes fade.
let navigated = false;

// M13 page transition: a 200ms fade on the page content only; nav and footer stay put.
export default function Template({ children }: { children: ReactNode }) {
  const fade = navigated;
  const reduce = useReducedMotion();
  useEffect(() => {
    navigated = true;
  }, []);
  return (
    <motion.div initial={fade ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : MOTION.page * motionScale() }}>
      {children}
    </motion.div>
  );
}
