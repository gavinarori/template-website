"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Label } from "@/components/ui/Label";
import { EASE } from "@/lib/motion";

const faqs = [
  { q: "How long does delivery take?", a: "Most orders ship within 2 days and arrive in 3 to 7 working days. We email tracking as soon as it leaves the workshop." },
  { q: "Are the lamps rechargeable?", a: "Yes. Every lamp has a USB-C battery that lasts around 20 hours on a medium setting, and you can also run it plugged in." },
  { q: "What are the shades made of?", a: "A plant-based, recycled bio-resin printed layer by layer. It is lightweight, durable and fully recyclable at end of life." },
  { q: "Can I return an object?", a: "Within 30 days, for any reason. If it arrives damaged we will replace it at no cost." },
  { q: "Do you offer trade pricing?", a: "We do for designers, architects and hotels. Book a tour or send us a message and we will share the trade catalogue." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="grid gap-12 px-[clamp(16px,2.2vw,40px)] pb-[clamp(80px,11vw,190px)] lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Reveal><Label>FAQ</Label></Reveal>
        <Reveal delay={0.1}><h2 className="mt-5 text-[clamp(36px,4.6vw,76px)] font-medium uppercase leading-[0.98] tracking-tight">Good<br />questions.</h2></Reveal>
      </div>
      <ul className="divide-y divide-black/10 border-y border-black/10 lg:col-span-8">
        {faqs.map((f, i) => (
          <li key={f.q}>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium sm:text-2xl">
              {f.q}
              <span className={`grid size-9 shrink-0 place-items-center rounded-full border border-black/20 text-xl transition duration-300 ${open === i ? "rotate-45 bg-black text-white" : ""}`}>+</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
                  <p className="max-w-2xl pb-6 text-[14px] leading-relaxed text-black/60">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </section>
  );
}