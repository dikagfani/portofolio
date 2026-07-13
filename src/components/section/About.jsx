"use client";

import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "24/7", label: "Inside VS Code", color: "bg-yellow", tilt: "-rotate-1" },
  { value: "00", label: "Fear of Coding", color: "bg-blue", tilt: "rotate-1" },
  { value: "100%", label: "Eager to Learn", color: "bg-purple", tilt: "-rotate-1" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:items-center">
        <motion.div {...fadeUp} className="lg:col-span-3">
          <Badge color="purple" classname="-rotate-3">
            THE ARCHITECT
          </Badge>

          <h2 className="font-display mt-10 font-bold text-5xl leading-[0.9] sm:text-6xl md:text-8xl">
            WRITING
            <br />
            <span className="inline-block rotate-2 text-pink">THE NEXT</span>
            <br />
            <mark className="inline-block rounded-lg bg-blue px-3 text-surface -rotate-2 shadow-[4px_4px_0px_var(--color-ink)]">CODE.</mark>
          </h2>

          <p className="mt-8 -rotate-1 rounded-2xl border-2 border-ink bg-surface p-6 text-base font-medium shadow-[4px_4px_0px_var(--color-ink)]">
            I break the rules of boring web design to
            <span className="text-pink"> create interactive digital spaces</span>.
            By blending experimental layouts with rock-solid functionality, I build websites that feel alive, engage users, and tell a story from the very
            <span className="text-blue"> first click</span>.
          </p>

          <blockquote className="mt-6 border-l-4 border-ink pl-4 text-base font-medium italic text-ink/50">
            "Design the stage, write the code, and let the user <span className="font-bold text-ink">enjoy</span> the show."
          </blockquote>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {stats.map(stat => (
              <div
                key={stat.label}
                className={`${stat.tilt} ${stat.color} rounded-2xl border-2 border-ink p-4 text-center shadow-[3px_3px_0px_var(--color-ink)]`}
              >
                <dt className="font-display text-3xl font-bold sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="text-xs font-bold uppercase tracking-wide">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div {...fadeUp} className="relative lg:col-span-2">
          <div className="absolute inset-0 rotate-3 rounded-3xl border-2 border-ink bg-mint" />

          <div className="relative -rotate-1 overflow-hidden rounded-3xl border-2 border-ink shadow-[6px_6px_0px_var(--color-ink)]">
            <Image
              src="/images/profil.jpg"
              alt="Ardika Ghathfani Portofolio"
              width={800}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <span className="absolute -top-4 -left-4 flex h-20 w-20 rotate-6 items-center justify-center rounded-2xl border-2 border-ink bg-yellow shadow-[3px_3px_0px_var(--color-ink)]">
            <Sparkles size={30} aria-hidden="true" />
          </span>

          <span className="absolute -bottom-4 right-6 rotate-3 rounded-full border-2 border-ink bg-pink px-4 py-2 text-xs font-bold uppercase shadow-[3px_3px_0px_var(--color-ink)]">
            BLUEPRINT
          </span>
        </motion.div>
      </div>
    </section>
  )
}