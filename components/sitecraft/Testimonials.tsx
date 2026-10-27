"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { Label } from "@/components/ui/Label";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/lib/images";

const quotes = [
  { name: "Amara Okafor", role: "Interior designer", text: "It does what no other lamp I have used does: it makes a room feel finished. Clients ask about it every single time." },
  { name: "Daniel Mwangi", role: "Architect", text: "The glow is soft enough to read by and sculptural enough to be the centrepiece. Packaging and finish are flawless." },
  { name: "Sofia Alvarez", role: "Hotel owner", text: "We put one in every suite. Guests photograph them, and our bookings now mention the lighting by name." },
  { name: "Kenji Watanabe", role: "Photographer", text: "The light is warm and even, and I love that it is repairable. This is how products should be made." },
];

/** Drag the cards sideways (or swipe on a phone). */
export function Testimonials() {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (outer.current && inner.current) setLimit(Math.max(0, inner.current.scrollWidth - outer.current.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="overflow-hidden py-[clamp(80px,11vw,190px)]">
      <div className="px-[clamp(16px,2.2vw,40px)]">
        <Reveal><Label>Kind words</Label></Reveal>
        <h2 className="mt-5 text-[clamp(40px,6.2vw,108px)] font-medium uppercase leading-[0.98] tracking-tight">
          <RevealLines lines={["Loved by people", "who care about light."]} />
        </h2>
      </div>

      <div ref={outer} className="mt-14 px-[clamp(16px,2.2vw,40px)]" data-cursor="Drag">
        <motion.div ref={inner} drag="x" dragConstraints={{ left: -limit, right: 0 }} dragElastic={0.08} className="flex w-max cursor-grab gap-4 active:cursor-grabbing">
          {quotes.map((q, i) => (
            <figure key={q.name} className="flex w-[clamp(290px,34vw,560px)] select-none flex-col justify-between gap-12 rounded-[26px] bg-[#f1f1ec] p-7 sm:p-9">
              <blockquote className="text-[clamp(17px,1.7vw,26px)] font-medium leading-snug">“{q.text}”</blockquote>
              <figcaption className="flex items-center gap-3">
                <Photo src={images.people[i]} alt={q.name} draggable={false} className="size-12 rounded-full object-cover" />
                <span><span className="block text-sm font-medium">{q.name}</span><span className="block text-[11px] text-black/50">{q.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}