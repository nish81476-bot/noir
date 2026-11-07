"use client";
import { useState } from "react"; import { AnimatePresence, motion } from "framer-motion"; import { X } from "lucide-react";
import { categories, projects, Project } from "@/data/projects"; import { cn } from "@/lib/utils";
function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <motion.div role="dialog" aria-modal="true" aria-label={p.title} className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-line bg-bg2">
        <button aria-label="Close" onClick={onClose} className="absolute right-4 top-4 z-10"><X /></button>
        {p.video ? <video src={p.video} controls className="aspect-video w-full" /> : <div className={`aspect-video bg-gradient-to-br ${p.hue}`} />}
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-accent">{p.category} · Sample project</p>
          <h3 className="mt-2 font-head text-3xl font-bold">{p.title}</h3>
          <p className="mt-3 text-muted">{p.description}</p>
          <p className="mt-4 text-sm text-muted">Tools: {p.tools.join(", ")}</p>
        </div>
      </div>
    </motion.div>);
}
export default function SelectedWork() {
  const [cat, setCat] = useState("All"); const [open, setOpen] = useState<Project | null>(null);
  const list = projects.filter(p => cat === "All" || p.category === cat);
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 pb-32">
      <h2 className="font-head text-[clamp(2.5rem,7vw,6rem)] font-bold">SELECTED WORKS</h2>
      <p className="mt-2 text-muted">A collection of ideas transformed into visual experiences. <span className="text-accent">(Sample projects shown.)</span></p>
      <div className="my-8 flex flex-wrap gap-2">
        {categories.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
          className={cn("rounded-full border px-4 py-1.5 text-sm", cat === c ? "border-accent bg-accent" : "border-line text-muted hover:text-white")}>{c}</button>)}
      </div>
      <motion.div layout className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
        <AnimatePresence>{list.map(p => (
          <motion.button layout key={p.slug} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(p)} className={cn("group relative overflow-hidden rounded-md border border-line text-left", p.span)}>
            <div className={`absolute inset-0 bg-gradient-to-br ${p.hue} transition-transform duration-700 group-hover:scale-110`} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-5">
              <p className="text-xs uppercase tracking-widest text-muted">{p.category}</p>
              <h3 className="font-head text-2xl font-semibold">{p.title}</h3>
            </div>
          </motion.button>))}</AnimatePresence>
      </motion.div>
      <AnimatePresence>{open && <Modal p={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>);
}
