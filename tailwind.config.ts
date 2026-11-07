import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { bg: "#080808", bg2: "#111111", muted: "#A1A1AA", line: "#272727", accent: "#FF5C35", violet: "#A855F7" },
    fontFamily: { head: ["var(--font-head)"], body: ["var(--font-body)"] } } },
} satisfies Config;
