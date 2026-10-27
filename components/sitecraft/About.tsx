"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { Notch } from "@/components/ui/Notch";
import { Photo } from "@/components/ui/Photo";
import { Label } from "@/components/ui/Label";
import { images } from "@/lib/images";
import { EASE } from "@/lib/motion";

export function About() {
  const [active, setActive] = useState(0);
  const gallery = images.about.gallery;

  return (
    <section id="about" className="px-[clamp(16px,2.2vw,40px)] py-[clamp(80px,11vw,190px)]">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-16 lg:col-span-5">
          <div>
            <Reveal><Label>About Sitecraft</Label></Reveal>
            <h2 className="mt-6 text-[clamp(44px,6.6vw,118px)] font-medium uppercase leading-[0.98] tracking-tight">
              <RevealLines lines={["Not just", "light.", "A feeling."]} />
            </h2>
          </div>

          <Reveal className="max-w-[360px]">
            <a href="#collection" data-cursor="Play" className="group relative block overflow-hidden rounded-2xl">
              <Photo src={images.about.video} alt="Sitecraft film" className="aspect-[2/1] w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-black/10">
                <span className="grid size-12 place-items-center rounded-full bg-white/90 text-black transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-0.5 size-4" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </span>
            </a>
            <p className="mt-5 text-[13px] leading-relaxed text-black/60">
              SITECRAFT transforms everyday lighting into sculptural objects, softly illuminated, thoughtfully shaped, and made to bring warmth to every space.
            </p>
            <a href="#collection" className="group mt-7 inline-flex items-center gap-1">
              <span className="rounded-full border border-black/20 px-5 py-2.5 text-[10px] uppercase transition group-hover:bg-black group-hover:text-white">Discover Sitecraft</span>
              <span className="grid size-8 place-items-center rounded-full bg-moss text-white transition duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex gap-3 lg:col-span-7">
          <div data-cursor="Zoom" className="relative aspect-[4/4.4] flex-1 overflow-hidden rounded-[26px] bg-moss-deep">
            <AnimatePresence mode="wait">
              <motion.div key={active} className="absolute inset-0" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}>
                <Photo src={gallery[active].full} alt={`Gallery image ${active + 1}`} className="size-full object-cover" />
              </motion.div>
            </AnimatePresence>
            <Notch corner="tr" w={96} h={96} r={30} bg="var(--color-paper)">
              <button type="button" aria-label="Zoom image" className="grid size-14 place-items-center rounded-full bg-black text-white transition hover:scale-110">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>
              </button>
            </Notch>
          </div>
          <div className="flex flex-col gap-3">
            {gallery.map((item, i) => (
              <button key={item.thumb} type="button" aria-label={`Show image ${i + 1}`} aria-current={active === i} onClick={() => setActive(i)}
                className={`h-[clamp(72px,9vw,150px)] w-[clamp(60px,7.5vw,125px)] overflow-hidden rounded-xl ring-2 transition duration-300 hover:scale-105 ${active === i ? "ring-moss" : "opacity-60 ring-transparent hover:opacity-100"}`}>
                <Photo src={item.thumb} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}