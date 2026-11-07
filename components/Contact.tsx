"use client";
import { useState } from "react"; import { brand } from "@/data/brand"; import { services } from "@/data/services";
type S = { kind: "idle" | "sending" | "ok" | "error"; msg?: string };
const field = "w-full rounded border border-line bg-bg2 px-4 py-3 outline-none focus:border-accent";
export default function Contact() {
  const [s, setS] = useState<S>({ kind: "idle" });
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const f = e.currentTarget; const data = Object.fromEntries(new FormData(f));
    if (!/^\S+@\S+\.\S+$/.test(String(data.email))) return setS({ kind: "error", msg: "Please enter a valid email." });
    setS({ kind: "sending" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const j = await r.json();
      if (r.ok) { setS({ kind: "ok", msg: "Thanks — your message was sent." }); f.reset(); } else setS({ kind: "error", msg: j.error ?? "Something went wrong." });
    } catch { setS({ kind: "error", msg: "Network error. Please email us directly." }); }
  }
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-6 pb-32 md:grid-cols-2">
      <div>
        <h2 className="font-head text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none">LET’S CREATE SOMETHING <span className="text-accent">REMARKABLE.</span></h2>
        <p className="mt-6 text-muted">Have an idea, a brand, or a project that deserves attention? Let’s bring it to life.</p>
        <ul className="mt-8 space-y-2 text-muted">
          <li><a className="hover:text-white" href={`mailto:${brand.email}`}>{brand.email}</a></li>
          <li><a className="hover:text-white" href={brand.whatsapp}>WhatsApp</a></li>
          <li><a className="hover:text-white" href={brand.instagram}>Instagram</a></li>
          <li><a className="hover:text-white" href={brand.behance}>Behance</a></li>
          <li><a className="hover:text-white" href={brand.youtube}>YouTube</a></li>
        </ul>
      </div>
      <form onSubmit={submit} className="space-y-4" noValidate>
        <input name="name" required placeholder="Name" aria-label="Name" className={field} />
        <input name="email" type="email" required placeholder="Email" aria-label="Email" className={field} />
        <input name="company" placeholder="Company / Brand" aria-label="Company" className={field} />
        <select name="service" required aria-label="Service" className={field} defaultValue="">
          <option value="" disabled>Service required</option>{services.map(x => <option key={x.title}>{x.title}</option>)}</select>
        <input name="budget" placeholder="Project budget (optional)" aria-label="Budget" className={field} />
        <textarea name="details" required rows={5} placeholder="Project details" aria-label="Project details" className={field} />
        <button disabled={s.kind === "sending"} className="rounded-full bg-accent px-8 py-3 font-medium disabled:opacity-60">{s.kind === "sending" ? "Sending…" : "Send Message"}</button>
        <p role="status" className={s.kind === "error" ? "text-red-400" : "text-green-400"}>{s.msg}</p>
      </form>
    </section>);
}
