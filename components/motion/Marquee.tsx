"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Endless horizontal band. Put one set of items inside; it repeats itself seamlessly. */
export function Marquee({ children, duration = 40, className = "" }: { children: ReactNode; duration?: number; className?: string }) {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}