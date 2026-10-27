"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { RotatingBadge } from "@/components/motion/RotatingBadge";
import { SplitLetters } from "@/components/motion/Reveal";
import { Notch } from "@/components/ui/Notch";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";
import { EASE, INTRO } from "@/lib/motion";
import { Nav } from "./Nav";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(true);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const lampY = useTransform(scrollYProgress, [0, 1], [0, 170]);

  return (
    <section id="top" ref={ref} className="bg-moss p-2.5 sm:p-3.5">
      <div className="flex h-[max(700px,calc(100svh-28px))] flex-col overflow-hidden rounded-[26px] bg-paper p-2.5 sm:p-3.5">
        <Nav delay={INTRO} />

        <motion.h1 style={{ y: titleY }} className="mt-3 select-none whitespace-nowrap text-center text-[18.6vw] font-extrabold uppercase leading-[0.82] tracking-[-0.055em] text-moss">
          <SplitLetters text="SITECRAFT" delay={INTRO + 0.15} stagger={0.05} />
        </motion.h1>

        <div className="relative mt-[0.8vw] min-h-[300px] flex-1">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
            transition={{ duration: 1.3, ease: EASE, delay: INTRO + 0.5 }}
            className="absolute inset-0 bg-moss-deep"
          >
            <Notch corner="tr" w={124} h={124} r={34} bg="var(--color-paper)">
              <Magnetic strength={0.2}>
                <a href="#about" aria-label="Explore more">
                  <RotatingBadge text="EXPLORE • MORE • EXPLORE • MORE •" size={92}>
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
                  </RotatingBadge>
                </a>
              </Magnetic>
            </Notch>

            <Notch corner="bl" w={158} h={178} r={30} bg="var(--color-paper)">
              <a href="#collection" data-cursor="View" className="group block w-[142px] rounded-2xl bg-[#f1f1ec] p-1.5">
                <div className="overflow-hidden rounded-xl">
                  <Photo src={images.hero.thumb} alt="Sitecraft 01 lamp" className="h-[108px] w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="mt-2 flex items-center justify-between px-0.5 text-[9px] uppercase">
                  <span>Sitecraft 01</span>
                  <span className="underline underline-offset-2">View object</span>
                </div>
              </a>
            </Notch>

            <p className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-paper/60 md:flex">
              <motion.i animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="block h-4 w-px bg-paper/60" />
              Scroll
            </p>
          </motion.div>

          <motion.div style={{ y: lampY }} className="pointer-events-none absolute inset-x-0 -top-[26%] bottom-[3%] z-10 grid place-items-center">
            <motion.span
              aria-hidden
              className="absolute aspect-square h-[64%] rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(255,236,160,.95), transparent 65%)" }}
              animate={{ opacity: lit ? [0.55, 0.95, 0.55] : 0.06 }}
              transition={lit ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6 }}
            />
            <motion.div className="h-full" initial={{ opacity: 0, y: 70, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3, ease: EASE, delay: INTRO + 0.9 }}>
              <motion.div className="h-full" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <button
                  type="button"
                  aria-pressed={lit}
                  aria-label="Switch the lamp on or off"
                  data-cursor={lit ? "Light off" : "Light on"}
                  onClick={() => setLit((v) => !v)}
                  className="pointer-events-auto h-full cursor-pointer transition-[filter] duration-700"
                  style={{ filter: lit ? "none" : "brightness(.7) saturate(.75)" }}
                >
                  <Photo src={images.hero.lamp} alt="Sitecraft mushroom lamp" loading="eager" className="h-full w-auto max-w-none object-contain" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}