"use client";

import { Magnetic } from "@/components/motion/Magnetic";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

const columns = [
  { title: "Shop", links: ["Table lamps", "Pendants", "Floor lights", "Gift cards"] },
  { title: "Studio", links: ["Our craft", "Journal", "Trade", "Careers"] },
  { title: "Help", links: ["Shipping", "Returns", "Care guide", "Contact"] },
];

export function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-moss px-[clamp(16px,2.2vw,40px)] pt-[clamp(64px,8vw,140px)] text-paper">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-[clamp(48px,8vw,148px)] font-medium uppercase leading-[0.95] tracking-tight">
            <RevealLines lines={["Bring the", "glow home."]} />
          </h2>
          <Reveal delay={0.2} className="mt-10">
            <form action="#" className="flex max-w-md items-center rounded-full bg-white/10 p-1.5 ring-1 ring-white/25 transition focus-within:ring-white/70">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input id="footer-email" type="email" placeholder="Your email for early access" className="min-w-0 flex-1 bg-transparent px-5 text-sm placeholder:text-paper/50 focus:outline-none" />
              <Magnetic strength={0.2}><button type="submit" className="rounded-full bg-paper px-6 py-3 text-[11px] uppercase text-ink transition hover:bg-sage">Join</button></Magnetic>
            </form>
          </Reveal>
        </div>
        <div className="grid grid-cols-3 gap-6 lg:col-span-5">
          {columns.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i}>
              <h3 className="text-[10px] uppercase text-paper/50">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-[13px]">
                {c.links.map((l) => <li key={l}><a href="#" className="transition hover:text-sage">{l}</a></li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6 text-[11px] text-paper/70">
        <p>© 2026 Sitecraft. All rights reserved.</p>
        <ul className="flex gap-6">{["Instagram", "Pinterest", "Journal"].map((l) => <li key={l}><a href="#" className="transition hover:text-white">{l}</a></li>)}</ul>
      </div>

      <p aria-hidden className="-mb-[2.4vw] mt-8 select-none whitespace-nowrap text-center text-[18.6vw] font-extrabold uppercase leading-[0.8] tracking-[-0.055em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.3)]">
        Sitecraft
      </p>
    </footer>
  );
}