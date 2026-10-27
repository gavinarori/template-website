"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/Parallax";
import { Label } from "@/components/ui/Label";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";

const points = [
  { n: "01", title: "Soft, diffused glow", text: "Ribbed shades scatter light so it feels warm, never harsh." },
  { n: "02", title: "Touch dimming", text: "Tap to brighten or soften. Hold to move from warm to cool." },
  { n: "03", title: "Made to last", text: "Rechargeable, repairable and shaped from recycled bio-resin." },
];

export function Features() {
  const [tone, setTone] = useState(20); // 0 warm -> 100 cool
  const [level, setLevel] = useState(3); // 1..4
  const glow = `hsl(${42 + (tone / 100) * 150} 95% ${70 + (tone / 100) * 16}%)`;

  return (
    <section id="stories" className="px-[clamp(16px,2.2vw,40px)] py-[clamp(80px,11vw,190px)]">
      <div className="flex items-start justify-between gap-6">
        <Reveal><Label>Features</Label></Reveal>
        <h2 className="text-right text-[clamp(40px,6.2vw,108px)] font-medium uppercase leading-[0.98] tracking-tight">
          <RevealLines lines={["Light that", "adapts to you."]} />
        </h2>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        {/* Tone slider: the glow behind the lamp changes colour */}
        <Reveal className="lg:col-span-5 lg:row-span-2">
          <div className="relative h-full min-h-[520px] overflow-hidden rounded-[26px] bg-moss">
            <motion.span aria-hidden className="absolute left-1/2 top-[38%] aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${glow}, transparent 65%)` }} animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            <Photo src={images.features.toneLamp} alt="Sitecraft lamp" className="absolute inset-x-0 top-[6%] mx-auto h-[66%] w-auto object-contain" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-black/25 p-4 text-white backdrop-blur-md">
              <label htmlFor="tone" className="flex items-center justify-between text-[10px] uppercase tracking-wide"><span>Warm</span><span>Light tone</span><span>Cool</span></label>
              <input id="tone" type="range" min={0} max={100} value={tone} onChange={(e) => setTone(Number(e.target.value))} className="mt-3 w-full accent-white" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div data-cursor="View" className="relative h-[clamp(260px,32vw,520px)] overflow-hidden rounded-[26px] bg-moss-deep">
            <ParallaxImage src={images.features.resin} alt="Close-up of recycled bio-resin" className="size-full" />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,.65),transparent)] p-6 text-paper sm:p-8">
              <h3 className="text-2xl font-medium uppercase sm:text-4xl">Recycled bio-resin</h3>
              <p className="mt-2 max-w-sm text-[12px] text-paper/80">Every shade is printed layer by layer from plant-based, recycled material.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-4">
          <div data-cursor="View" className="group relative aspect-[4/4.6] overflow-hidden rounded-[26px] bg-[#d9cdb9]">
            <Photo src={images.features.portrait} alt="A person enjoying the warm light" className="size-full object-cover transition duration-[1400ms] group-hover:scale-105" />
            <span className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-4 py-2 text-[10px] uppercase backdrop-blur">Gentle on the eyes</span>
          </div>
        </Reveal>

        {/* Dimmer: tap to step through four brightness levels */}
        <Reveal delay={0.2} className="lg:col-span-3">
          <button type="button" onClick={() => setLevel((l) => (l % 4) + 1)} aria-label={`Brightness ${level} of 4. Tap to change`} data-cursor="Tap"
            className="flex aspect-[4/4.6] w-full flex-col items-center justify-between rounded-[26px] bg-ink p-6 text-paper lg:aspect-auto lg:h-full">
            <span className="self-start text-[10px] uppercase text-paper/60">Touch dimming</span>
            <span className="relative grid size-40 place-items-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="3" />
                <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#f3e6a8" strokeWidth="3" strokeLinecap="round" animate={{ pathLength: level / 4 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
              </svg>
              <motion.span className="size-16 rounded-full bg-[#f3e6a8] blur-[2px]" animate={{ opacity: 0.25 + level * 0.19, scale: 0.7 + level * 0.12 }} />
            </span>
            <span className="text-3xl font-medium tabular-nums">{level * 25}%</span>
          </button>
        </Reveal>
      </div>

      <ul className="mt-20 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-3">
        {points.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.1}>
            <li className="list-none">
              <span className="text-[10px] text-moss">{p.n}</span>
              <h3 className="mt-3 text-xl font-medium uppercase">{p.title}</h3>
              <p className="mt-2 max-w-[320px] text-[13px] leading-relaxed text-black/60">{p.text}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}