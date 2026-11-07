import { NextResponse } from "next/server";
import { brand } from "@/data/brand";
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d?.name || !/^\S+@\S+\.\S+$/.test(d.email ?? "") || !d.details) return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL ?? brand.email, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !from) return NextResponse.json({ error: "Contact form is not configured yet. Please email us directly." }, { status: 501 });
  const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: d.email, subject: `New project enquiry from ${d.name}`,
      text: `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company}\nService: ${d.service}\nBudget: ${d.budget}\n\n${d.details}` }) });
  return r.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Email provider rejected the request." }, { status: 502 });
}
