export const projects = [
  {
    slug: "silent-whisper",
    title: "Silent Whisper",
    category: "Landing Page",
    categoryColor: "bg-yellow",
    description:
      "Sistem manajemen relasi pelanggan untuk tim sales, dengan dashboard analitik real-time dan otomasi follow-up.",
    coverImage: "/images/projects/nova-crm-cover.jpg",
    stack: ["Next.JS", "Tailwind CSS"],
    year: "2026",
    role: "Full-stack Developer",
    figmaUrl: "https://figma.com/file/xxxxx",
    liveUrl: "https://nova-crm-demo.example.com",
  },
  {
    slug: "silent-whisper",
    title: "Silent Whisper",
    category: "Landing Page",
    categoryColor: "bg-yellow",
    description:
      "Sistem manajemen relasi pelanggan untuk tim sales, dengan dashboard analitik real-time dan otomasi follow-up.",
    coverImage: "/images/projects/nova-crm-cover.jpg",
    stack: ["Next.JS", "Tailwind CSS"],
    year: "2026",
    role: "Full-stack Developer",
    figmaUrl: "https://figma.com/file/xxxxx",
    liveUrl: "https://nova-crm-demo.example.com",
  },
  {
    slug: "silent-whisper",
    title: "Silent Whisper",
    category: "Landing Page",
    categoryColor: "bg-yellow",
    description:
      "Sistem manajemen relasi pelanggan untuk tim sales, dengan dashboard analitik real-time dan otomasi follow-up.",
    coverImage: "/images/projects/nova-crm-cover.jpg",
    stack: ["Next.JS", "Tailwind CSS"],
    year: "2026",
    role: "Full-stack Developer",
    figmaUrl: "https://figma.com/file/xxxxx",
    liveUrl: "https://nova-crm-demo.example.com",
  },

];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}