"use client";

import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { to: 12, suffix: "k+", label: "Objects shipped" },
  { to: 48, suffix: "", label: "Countries lit" },
  { to: 4.9, suffix: "/5", decimals: 1, label: "Average rating" },
  { to: 100, suffix: "%", label: "Recycled bio-resin" },
];

export function Stats() {
  return (
    <section className="bg-moss-deep px-[clamp(16px,2.2vw,40px)] py-[clamp(64px,8vw,140px)] text-paper">
      <dl className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="border-l border-white/15 pl-5 sm:pl-8">
            <dd className="text-[clamp(44px,7vw,128px)] font-medium leading-none tracking-tight tabular-nums"><Counter to={s.to} suffix={s.suffix} decimals={s.decimals} /></dd>
            <dt className="mt-3 text-[11px] uppercase tracking-wide text-paper/60">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}