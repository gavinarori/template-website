"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { EASE } from "@/lib/motion";
import { navLinks } from "./Nav";

/** A glass pill that drops in after the hero, so navigation is always one click away. */
export function FloatingNav() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));

  return (
    <motion.nav
      aria-label="Quick"
      initial={false}
      animate={{ y: show ? 0 : -90, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-paper/75 p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,.25)] backdrop-blur-xl"
    >
      <a href="#top" className="px-3 text-[11px] font-bold uppercase tracking-wide text-moss">Sitecraft</a>
      <ul className="hidden items-center sm:flex">
        {navLinks.slice(1, 4).map((l) => (
          <li key={l.label}><a href={l.href} className="rounded-full px-3.5 py-2 text-[11px] transition hover:bg-black/5">{l.label}</a></li>
        ))}
      </ul>
      <a href="#contact" className="rounded-full bg-black px-4 py-2 text-[11px] text-white transition hover:bg-moss">Book a Tour</a>
    </motion.nav>
  );
}