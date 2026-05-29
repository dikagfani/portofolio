"use client";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
      >
        Toggle Theme
      </button>
    </main>
  );
}