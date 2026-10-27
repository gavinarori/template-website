"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Wraps a site so every animation respects the visitor's "reduce motion" setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}