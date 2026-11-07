import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/brand";
const head = Space_Grotesk({ subsets: ["latin"], variable: "--font-head" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: `${brand.name} — ${brand.positioning}`, description: brand.positioning,
  openGraph: { title: brand.name, description: brand.positioning, type: "website" },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${head.variable} ${body.variable}`}><body>{children}</body></html>;
}
