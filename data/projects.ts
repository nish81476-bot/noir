// ALL ENTRIES ARE SAMPLE PROJECTS. Replace cover/video/gallery with real assets in /public.
export type Project = { slug: string; title: string; category: string; description: string; tools: string[]; cover?: string; video?: string; gallery?: string[]; span: string; hue: string };
export const categories = ["All", "Video Editing", "Graphic Design", "Motion Graphics", "Branding", "Social Media"];
export const projects: Project[] = [
  { slug: "sample-1", title: "Neon Run", category: "Video Editing", description: "Sample: fast-cut brand promo.", tools: ["Premiere Pro", "DaVinci Resolve"], span: "md:col-span-2 md:row-span-2", hue: "from-accent/60 to-bg2" },
  { slug: "sample-2", title: "Kinetic Type", category: "Motion Graphics", description: "Sample: animated typography study.", tools: ["After Effects"], span: "", hue: "from-violet/60 to-bg2" },
  { slug: "sample-3", title: "Atlas Identity", category: "Branding", description: "Sample: identity system concept.", tools: ["Illustrator", "Figma"], span: "", hue: "from-zinc-600/50 to-bg2" },
  { slug: "sample-4", title: "Poster Series", category: "Graphic Design", description: "Sample: poster campaign.", tools: ["Photoshop"], span: "md:row-span-2", hue: "from-accent/40 to-violet/40" },
  { slug: "sample-5", title: "Reel Pack", category: "Social Media", description: "Sample: platform-specific reels.", tools: ["Premiere Pro", "Canva"], span: "md:col-span-2", hue: "from-violet/50 to-accent/30" },
];
