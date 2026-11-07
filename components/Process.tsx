import { process } from "@/data/services";
export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 pb-32">
      <h2 className="mb-12 font-head text-4xl font-bold">OUR PROCESS</h2>
      <ol className="grid gap-px bg-line md:grid-cols-5">
        {process.map(([t, d], i) => <li key={t} className="bg-bg p-6">
          <span className="font-head text-5xl text-accent">0{i + 1}</span>
          <h3 className="mt-4 font-head text-xl font-semibold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></li>)}
      </ol>
    </section>);
}
