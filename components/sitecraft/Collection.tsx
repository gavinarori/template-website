"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Magnetic } from "@/components/motion/Magnetic";
import { RevealLines } from "@/components/motion/Reveal";
import { Label } from "@/components/ui/Label";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";

/**
 * Scroll-driven horizontal gallery: the section stays pinned while the cards slide sideways.
 * The section's height is measured so the scroll feels 1:1.
 */
export function Collection() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <section id="collection" ref={section} style={{ height: `calc(100svh + ${distance}px)` }} className="relative bg-[#f1f1ec]">
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-8 overflow-hidden">
        <div className="flex items-end justify-between gap-6 px-[clamp(16px,2.2vw,40px)]">
          <div>
            <Label>Collection</Label>
            <h2 className="mt-4 text-[clamp(36px,5vw,84px)] font-medium uppercase leading-[0.98] tracking-tight">
              <RevealLines lines={["Objects that", "glow."]} />
            </h2>
          </div>
          <div className="hidden w-48 sm:block">
            <p className="mb-2 text-right text-[10px] uppercase text-black/50">Scroll to explore</p>
            <div className="h-px bg-black/15"><motion.div style={{ scaleX: scrollYProgress }} className="h-px origin-left bg-moss" /></div>
          </div>
        </div>

        <motion.div ref={track} style={{ x }} className="flex w-max gap-4 px-[clamp(16px,2.2vw,40px)]">
          {images.products.map((p) => (
            <article key={p.name} className="group w-[clamp(270px,30vw,520px)] shrink-0">
              <div data-cursor="View" className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-white">
                <Photo src={p.images[0]} alt={p.name} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105" />
                <Photo src={p.images[1]} alt="" className="absolute inset-0 size-full object-cover opacity-0 transition duration-700 group-hover:opacity-100" />
                {p.tag && <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1.5 text-[10px] uppercase">{p.tag}</span>}
                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <Magnetic strength={0.15}>
                    <button type="button" className="w-full rounded-full bg-black py-3.5 text-[11px] uppercase text-white transition hover:bg-moss">Add to cart</button>
                  </Magnetic>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-medium uppercase">{p.name}</h3>
                  <div className="mt-2 flex gap-1.5">
                    {p.swatches.map((c) => <i key={c} className="size-3.5 rounded-full ring-1 ring-black/15" style={{ background: c }} />)}
                  </div>
                </div>
                <span className="text-sm">{p.price}</span>
              </div>
            </article>
          ))}
          <a href="#contact" className="grid w-[clamp(220px,22vw,360px)] shrink-0 place-items-center rounded-[26px] border border-dashed border-black/25 text-center text-[clamp(22px,2.4vw,40px)] font-medium uppercase leading-tight transition hover:bg-moss hover:text-paper">
            View the<br />full range →
          </a>
        </motion.div>
      </div>
    </section>
  );
}