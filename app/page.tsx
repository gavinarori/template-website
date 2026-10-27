import { Preloader } from "@/components/motion/Preloader";
import { About } from "@/components/sitecraft/About";
import { Collection } from "@/components/sitecraft/Collection";
import { Craft } from "@/components/sitecraft/Craft";
import { Faq } from "@/components/sitecraft/Faq";
import { Features } from "@/components/sitecraft/Features";
import { FloatingNav } from "@/components/sitecraft/FloatingNav";
import { Footer } from "@/components/sitecraft/Footer";
import { Hero } from "@/components/sitecraft/Hero";
import { Lookbook } from "@/components/sitecraft/Lookbook";
import { Stats } from "@/components/sitecraft/Stats";
import { Testimonials } from "@/components/sitecraft/Testimonials";
import { Ticker } from "@/components/sitecraft/Ticker";

export default function SitecraftPage() {
  return (
    <>
      <Preloader />
      <FloatingNav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Collection />
        <Features />
        <Craft />
        <Lookbook />
        <Stats />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}