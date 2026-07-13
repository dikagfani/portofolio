"use client";

import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiPhp, SiLaravel, SiNextdotjs, SiTailwindcss, SiReact, SiFigma } from "react-icons/si";
import { div } from "framer-motion/client";
import { Icon } from "lucide-react";

const skills = [
  {name: "HTML5", icon: FaHtml5, color: "text-orange-500", bg: "bg-orange-500/10"},
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue", bg: "bg-blue/10" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-600", bg: "bg-yellow/15" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-blue", bg: "bg-blue/10" },
  { name: "React", icon: SiReact, color: "text-blue", bg: "bg-blue/15" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-ink", bg: "bg-ink/5" },
  { name: "PHP", icon: SiPhp, color: "text-purple", bg: "bg-purple/20" },
  { name: "Laravel", icon: SiLaravel, color: "text-pink", bg: "bg-pink/10" },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Skills() {
  return (
    <section id="#skills" className="px-4 py-15">
      <div className="mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="mb-12 flex flex-col items-center gap-4 text-center">
          <Badge color="yellow" classname="rotate-2">
            THE LAB
          </Badge>

          <h2 className="font-display text-5xl font-black leading-[0.9] sm:text-6xl md:text-8xl">
            POWER
            <br />
            <mark className="inline-block rounded-lg bg-blue px-3 text-surface -rotate-2 shadow-[4px_4px_0px_var(--color-ink)] ">
              LEVEL
            </mark>
          </h2>

          <p className="mt-6 pl-4 text-base font-medium italic text-ink/50">
            "A tested mixture of frameworks, languages, and tools ready to <span className="text-ink">spark interaction</span>."
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(skill => {
            const Icon = skill.icon

            return (
              <div key={skill.name} className={`flex flex-col items-center gap-3 rounded-2xl border-2 border-ink ${skill.bg} p-5 text-center shadow-[4px_2px_0px_var(--color-ink)] transition-transform duration-150 hover:-translate-y-1`}>
                <Icon size={32} className={skill.color} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wide">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}