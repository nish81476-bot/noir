import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <h2 className="mb-2 font-head text-4xl font-bold">KIND WORDS</h2>
      <p className="mb-10 text-sm text-accent">Demo content — replace with genuine testimonials.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => <figure key={i} className="border border-line bg-bg2 p-8">
          <blockquote className="text-xl">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm text-muted">{t.name}, {t.role}</figcaption></figure>)}
      </div>
    </section>);
}
