"use client";
import { useEffect, useState } from "react"; import { AnimatePresence, motion } from "framer-motion"; import { Menu, X } from "lucide-react";
import { brand } from "@/data/brand";
const links = ["About", "Services", "Work", "Process", "Contact"];
export default function Navbar() {
  const [solid, setSolid] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setSolid(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${solid || open ? "bg-bg/90 backdrop-blur" : "bg-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-head text-lg font-bold tracking-widest">{brand.name}</a>
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          <li><a href="#top" className="hover:text-white">Home</a></li>
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a></li>)}
          <li><a href="#contact" className="rounded-full bg-accent px-5 py-2 font-medium text-white">Start a Project</a></li>
        </ul>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{open && (
        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden px-6 pb-6 font-head text-3xl md:hidden">
          {["Home", ...links, "Start a Project"].map(l => <li key={l} className="py-2"><a onClick={() => setOpen(false)} href={l === "Home" ? "#top" : l === "Start a Project" ? "#contact" : `#${l.toLowerCase()}`}>{l}</a></li>)}
        </motion.ul>)}</AnimatePresence>
    </header>);
}
