"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

/**
 * A soft custom cursor (desktop only). It grows over links and buttons, and shows a label
 * over anything with a  data-cursor="View"  attribute.
 */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 42 });
  const sy = useSpring(y, { stiffness: 520, damping: 42 });
  const [label, setLabel] = useState<string | null>(null);
  const [hot, setHot] = useState(false);
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    setFine(fineQuery.matches);
    if (!fineQuery.matches) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setLabel(el.closest<HTMLElement>("[data-cursor]")?.dataset.cursor ?? null);
      setHot(Boolean(el.closest("a, button, input, label")));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!fine) return null;
  const size = label ? 84 : hot ? 46 : 14;
  return (
    <motion.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[150]" style={{ x: sx, y: sy }}>
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full bg-paper text-[10px] font-semibold uppercase tracking-wide text-ink shadow-[0_0_0_1px_rgba(0,0,0,.18),0_8px_24px_rgba(0,0,0,.18)]"
        animate={{ width: size, height: size, opacity: hot && !label ? 0.75 : 1 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}