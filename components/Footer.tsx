import { brand } from "@/data/brand";
export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="font-head text-[clamp(2.5rem,10vw,9rem)] font-bold leading-none">MAKE IT <span className="text-accent">MEMORABLE.</span></p>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <span>© {new Date().getFullYear()} {brand.name}. {brand.location}</span>
          <span>{brand.positioning}</span>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>);
}
