"use client";
import { motion, useReducedMotion } from "framer-motion"; import { ArrowDown } from "lucide-react"; import { brand } from "@/data/brand";
export default function Hero() {
  const rm = useReducedMotion();
  const lines = ["WE TURN IDEAS", "INTO VISUAL", "EXPERIENCES."];
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32">
      {/* Replace with <video autoPlay muted loop playsInline src="/videos/hero.mp4" /> */}
      <div className="absolute -right-40 top-10 h-[60vw] w-[60vw] rounded-full bg-accent/20 blur-3xl" aria-hidden />
      <div className="absolute -left-40 bottom-0 h-[40vw] w-[40vw] rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl">
        <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted"><span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Available for new projects — {brand.name}</p>
        <h1 className="font-head text-[clamp(2.5rem,9vw,8rem)] font-bold leading-[0.95]">
          {lines.map((l, i) => <span key={l} className="block overflow-hidden"><motion.span className={`block ${i === 2 ? "text-accent" : ""}`}
            initial={rm ? false : { y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>{l}</motion.span></span>)}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted">We are an independent creative studio crafting cinematic visuals, distinctive identities, and engaging digital experiences for ambitious brands.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#work" className="rounded-full bg-white px-7 py-3 font-medium text-black">Explore Our Work</a>
          <a href="#contact" className="rounded-full border border-line px-7 py-3 hover:border-accent">Start a Project</a>
        </div>
        <a href="#about" aria-label="Scroll down" className="absolute bottom-0 right-0 hidden md:block"><ArrowDown className="animate-bounce" /></a>
      </div>
    </section>);
}
