"use client";

import { Marquee } from "@/components/motion/Marquee";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";

const words = ["Soft light", "Sculpted forms", "Made to glow", "Slow design"];

/** Scrolling band of words and little photos between the hero and the story. */
export function Ticker() {
  return (
    <div className="overflow-hidden bg-moss py-5 text-paper sm:py-7" aria-label="Soft light, sculpted forms, made to glow">
      <Marquee duration={50}>
        {[...words, ...words].map((word, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 sm:gap-10 sm:pr-10">
            <span className="whitespace-nowrap text-[clamp(32px,6vw,92px)] font-medium uppercase leading-none tracking-tight">{word}</span>
            <Photo src={images.ticker[i % images.ticker.length]} alt="" className="h-[clamp(36px,5vw,76px)] w-[clamp(72px,10vw,150px)] rounded-full object-cover" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}