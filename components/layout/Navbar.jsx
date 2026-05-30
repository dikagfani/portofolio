"use client";

import Link from "next/link";
import { useTheme } from "@/components/ui/ThemeProvider";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border" />
      <nav className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-semibold text-base tracking-tight text-foreground hover:text-accent transition-colors duration-200">
          yourname<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-accent font-medium"
                    : "text-muted hover:text-foreground hover:bg-surface-hover"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent rounded-full" />
                )}
              </Link>
            );
          })}

          <div className="w-px h-4 bg-border mx-2" />

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-surface-hover transition-colors duration-200"
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>

      </nav>
    </header>
  );
}