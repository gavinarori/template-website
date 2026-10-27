"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";

/** The image starts as a rounded card and grows to fill the whole screen as you scroll. */
export function Lookbook() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const inset = useTransform(scrollYProgress, [0, 0.55], [16, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.55], [48, 0]);
  const clip = useMotionTemplate`inset(${inset}% ${inset}% ${inset}% ${inset}% round ${radius}px)`;
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]);
  const textY = useTransform(scrollYProgress, [0.35, 0.75], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.7], [0, 1]);
  const f1 = useTransform(scrollYProgress, [0, 0.5], [0, -140]);
  const f2 = useTransform(scrollYProgress, [0, 0.5], [0, 60]);
  const floatOpacity = useTransform(scrollYProgress, [0.25, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[240svh] bg-paper">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 bg-moss-deep">
          <motion.div style={{ scale }} className="size-full">
            <Photo src={images.lookbook.main} alt="Sitecraft lamps in a living space" className="size-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.6),transparent_55%)]" />
        </motion.div>

        {/* Three small details that drift away as the image opens up */}
        <motion.div style={{ opacity: floatOpacity }} className="pointer-events-none absolute inset-0 hidden md:block">
          <motion.div style={{ y: f1 }} className="absolute left-[7%] top-[26%] w-[11vw] overflow-hidden rounded-2xl"><Photo src={images.lookbook.floating[0]} alt="" className="aspect-[4/5] w-full object-cover" /></motion.div>
          <motion.div style={{ y: f2 }} className="absolute right-[8%] top-[20%] w-[13vw] overflow-hidden rounded-2xl"><Photo src={images.lookbook.floating[1]} alt="" className="aspect-[4/5] w-full object-cover" /></motion.div>
          <motion.div style={{ y: f1 }} className="absolute bottom-[14%] right-[22%] w-[9vw] overflow-hidden rounded-2xl"><Photo src={images.lookbook.floating[2]} alt="" className="aspect-[4/5] w-full object-cover" /></motion.div>
        </motion.div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-8 px-[clamp(16px,2.2vw,40px)] pb-[clamp(24px,4vw,64px)] text-paper md:flex-row md:items-end">
          <h2 className="text-[clamp(44px,8.4vw,150px)] font-medium uppercase leading-[0.92] tracking-tight">Light for<br />every room.</h2>
          <a href="#collection" className="inline-flex w-fit items-center gap-3 rounded-full bg-paper py-2 pl-6 pr-2 text-sm text-ink transition hover:bg-sage">
            Shop the look
            <span className="grid size-9 place-items-center rounded-full bg-black text-white">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}