"use client";

import { motion } from "motion/react";
import { useId, type ReactNode } from "react";

/** A round badge with text running around the edge. The text rotates forever. */
export function RotatingBadge({
  text,
  size = 88,
  className = "",
  children,
}: {
  text: string;
  size?: number;
  className?: string;
  children: ReactNode;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <span
      className={`relative grid place-items-center rounded-full bg-black text-white ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <path id={id} d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" />
        </defs>
        <text fontSize="9" letterSpacing="1.6" fill="currentColor" fontWeight="500">
          <textPath href={`#${id}`} textLength="228">
            {text}
          </textPath>
        </text>
      </motion.svg>
      <span className="relative">{children}</span>
    </span>
  );
}