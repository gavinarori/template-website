"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { Label } from "@/components/ui/Label";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";
import { EASE } from "@/lib/motion";

const steps = [
  { title: "Sculpt", text: "Each form starts as clay in our studio, then is scanned and refined until the curve feels inevitable." },
  { title: "Print", text: "Shades are printed in recycled bio-resin, layer by layer, which creates the ribbed texture you can feel." },
  { title: "Finish", text: "Every piece is sanded, tinted and quality checked by hand before it leaves the workshop." },
  { title: "Glow", text: "A warm, dimmable light source is fitted last, tuned so the shade glows evenly from edge to edge." },
];

/** Pinned story: scroll and the active step, its text and its image change together. */
export function Craft() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(steps.length - 1, Math.floor(v * steps.length))));

  return (
    <section id="craft" ref={ref} className="relative h-[420svh] bg-moss text-paper">
      <div className="sticky top-0 grid h-svh items-center gap-10 px-[clamp(16px,2.2vw,40px)] py-10 lg:grid-cols-2">
        <div>
          <Label light>The craft</Label>
          <h2 className="mt-5 text-[clamp(40px,6vw,104px)] font-medium uppercase leading-[0.98] tracking-tight">From resin<br />to glow.</h2>
          <ol className="mt-10 max-w-xl divide-y divide-white/15 border-y border-white/15">
            {steps.map((s, i) => (
              <li key={s.title} className="py-4">
                <div className={`flex items-center gap-5 transition-opacity duration-500 ${active === i ? "opacity-100" : "opacity-40"}`}>
                  <span className="text-[11px] tabular-nums">0{i + 1}</span>
                  <h3 className="text-2xl font-medium uppercase sm:text-3xl">{s.title}</h3>
                </div>
                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden pl-10 pt-3 text-[13px] leading-relaxed text-paper/75 sm:pl-12">
                      {s.text}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[26px] bg-moss-deep lg:max-h-[78svh]">
          <AnimatePresence mode="popLayout">
            <motion.div key={active} className="absolute inset-0" initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }} animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: EASE }}>
              <Photo src={images.craft[active]} alt={steps[active].title} className="size-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <span className="absolute bottom-4 right-4 z-10 rounded-full bg-paper px-3 py-1.5 text-[10px] uppercase tabular-nums text-ink">0{active + 1} / 0{steps.length}</span>
        </div>
      </div>
    </section>
  );
}