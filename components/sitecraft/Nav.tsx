"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { EASE } from "@/lib/motion";

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Collection", href: "#collection" },
  { label: "Craft", href: "#craft" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const Dots = () => (
  <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden>
    {[4, 8, 12].flatMap((cx) => [4, 8, 12].map((cy) => <circle key={`${cx}${cy}`} cx={cx} cy={cy} r="1" />))}
  </svg>
);

/** The pill navigation that sits inside the hero card. */
export function Nav({ delay = 0 }: { delay?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      aria-label="Main"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className="relative z-30 flex items-center justify-between rounded-full bg-[#f1f1ec] py-1.5 pl-5 pr-1.5"
    >
      <a href="#top" aria-label="Sitecraft home" className="flex items-center gap-2 text-moss">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19" />
        </svg>
        <span className="text-[12px] font-bold uppercase tracking-wide text-ink">Sitecraft</span>
      </a>

      <ul className="hidden gap-10 text-[11px] md:flex">
        {navLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Magnetic>
          <a href="#contact" className="flex items-center gap-3 rounded-full bg-black py-2 pl-4 pr-2 text-[11px] text-white">
            Book a Tour
            <span className="grid size-7 place-items-center rounded-full bg-white text-black"><Dots /></span>
          </a>
        </Magnetic>
        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid size-10 place-items-center rounded-full bg-white md:hidden">
          <span className="grid gap-1">
            <i className={`block h-px w-4 bg-black transition ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
            <i className={`block h-px w-4 bg-black transition ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-[calc(100%+8px)] grid gap-1 rounded-3xl bg-[#f1f1ec] p-3 shadow-xl md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.label}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm hover:bg-white">{l.label}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}