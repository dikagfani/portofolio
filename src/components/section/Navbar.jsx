"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Projects", href: "#projects"},
  {label: "Contact", href: "#contact"},
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="sticky top-4 z-50 px-4 py-4">
      <nav aria-label="Navigasi Utama" className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border-2 border-ink bg-surface px-4 py-2 shadow-[4px_4px_0px_var(--color-ink)]">
        
        <Link href="/" className="flex h-1- w-10 items-center justify-center rounded-full border-2 border-ink bg-blue font-display font-bold shadow-[3px_3px_0px_var(--color-ink)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--color-ink)]">
        DK
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-bold uppercase md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <span className="h-6 w-px bg-ink/20" aria-hidden="true" />
          <Button variant="dark" className="gap-2">Hire Me <Zap size={14} /></Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24}></Menu>}
        </button>
      </nav>


        {isOpen && (
          <ul className="mx-auto mt-3 flex max-w-4xl flex-col gap-4 rounded-3xl border-2 border-ink bg-surface px-6 py-6 text-sm font-bold uppercase shadow-[4px_4px_0px_var(--color-ink)] md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Button variant="dark" className="w-full justify-center gap-2">
                Hire Me <Zap size={14} />
              </Button>
            </li>
          </ul>
        )}
    </header>
  )
}