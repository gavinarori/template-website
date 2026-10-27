"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";

/** Full-screen counter that lifts away like a curtain. Length is set by INTRO in lib/motion.ts */
export function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1500);
      setCount(Math.round(p * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
      else window.setTimeout(() => setDone(true), 250);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-moss-deep p-6 text-paper sm:p-10"
          exit={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Sitecraft</span>
          <span className="text-[26vw] font-extrabold leading-[0.8] tracking-tighter tabular-nums">{count}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}