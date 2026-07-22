"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          {...fadeUp}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <h2 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl">
            RECENT
            <br />
            <mark className="inline-block rotate-1 rounded-lg bg-yellow px-3 italic text-ink">
              CREATIONS.
            </mark>
          </h2>
          <Button variant="secondary" className="gap-2">
            View All <ArrowUpRight size={16} />
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.1 }}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border-2 border-ink shadow-[4px_4px_0px_var(--color-ink)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--color-ink)]"
              >
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-ink">
                  <Image
                    src={project.coverImage}
                    alt={`Tampilan proyek ${project.title}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full border-2 border-ink ${project.categoryColor} px-3 py-1 text-xs font-bold uppercase`}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-surface p-5">
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {project.stack.slice(0, 2).join(" · ")}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform duration-150 group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}