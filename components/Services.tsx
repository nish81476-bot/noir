"use client";
import * as Icons from "lucide-react"; import { motion } from "framer-motion"; import { services, tools } from "@/data/services";
export default function Services() {
  return (
    <>
      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <h2 className="font-head text-[clamp(2rem,6vw,5rem)] font-bold leading-none">CREATIVITY IS OUR LANGUAGE. <span className="text-accent">IMPACT IS OUR GOAL.</span></h2>
        <p className="mt-8 max-w-2xl text-lg text-muted">We combine creativity, design, and technology to transform ideas into powerful visual experiences. From compelling video content to distinctive brand identities, we help businesses communicate, connect, and stand out.</p>
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 pb-32">
        <h2 className="mb-12 font-head text-4xl font-bold">SERVICES</h2>
        <ul className="divide-y divide-line border-y border-line">
          {services.map((s, i) => { const Icon = (Icons as any)[s.icon] ?? Icons.Circle; return (
            <motion.li key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group flex items-center gap-6 py-8 transition-colors hover:bg-bg2 md:px-4">
              <span className="w-10 font-head text-muted">0{i + 1}</span>
              <h3 className="flex-1 font-head text-2xl font-semibold transition-transform group-hover:translate-x-3 md:text-4xl">{s.title}</h3>
              <p className="hidden max-w-xs text-muted md:block">{s.desc}</p>
              <Icon className="text-accent" />
            </motion.li>); })}
        </ul>
        <p className="mt-10 text-sm text-muted">Tools: {tools.join(" · ")}</p>
      </section>
    </>);
}
