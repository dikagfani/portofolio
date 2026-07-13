import Link from "next/link"
import { MessageCircle, ArrowDown, ArrowRight } from "lucide-react";
import Badge from "../ui/Badge"
import Button from "../ui/Button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 text-center md:pt-20" id="#">
      <div className=" mx-auto flex max-w-3xl flex-col items-center gap-8">
        <Badge color="yellow" withDot classname="shadow-[4px_4px_0px_var(--color-ink)]">
          AVAILABLE FOR NEW PROJECTS
        </Badge>

        <h1 className="font-display text-5xl font-black leading-[0.9] sm:text-6xl md:text-8xl">
          BEYOND
          <br />
          <span className="inline-block rotate-2 text-blue">THE USUAL</span>
          <br />
          <mark className="inline-block rounded-lg bg-pink px-3 text-surface -rotate-2 shadow-[4px_4px_0px_var(--color-ink)] ">
            PIXEL.
          </mark>
        </h1>

        <p className="border-2 rounded-2xl border-ink bg-surface px-4 py-4 text-base font-medium sm:text-lg">
          I design and build <span className="font-bold text-blue">INTERACTIVE</span> web experiences that break the mold.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#projects">
          <Button variant="secondary" className="gap-2">
            Explore Work <ArrowRight size={16} />
          </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" className="gap-2">
              Say Hi <MessageCircle size={16} />
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-15 flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted">
        <span>Scroll Down</span>
        <ArrowDown size={16} aria-hidden="true" />
      </div>
    </section>
  )
}