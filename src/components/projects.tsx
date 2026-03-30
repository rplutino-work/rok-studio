"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp } from "./text-reveal";

const projectColors = [
  { bg: "from-[#3A111C] to-[#574951]", dot: "#BCDEA5" },
  { bg: "from-[#574951] to-[#83988E]", dot: "#E6F9BC" },
  { bg: "from-[#83988E] to-[#BCDEA5]", dot: "#3A111C" },
  { bg: "from-[#BCDEA5] to-[#E6F9BC]", dot: "#574951" },
];

export default function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="py-32 md:py-44 px-6 bg-dark text-text-white relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute top-[20%] right-[-8%] w-[350px] h-[350px] rounded-full border border-sage/5 animate-geo-float-slow" />

      <div className="relative max-w-7xl mx-auto">
        <FadeUp>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage mb-5 block">
            {t.projects.label}
          </span>
        </FadeUp>

        <div className="mb-24">
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            {t.projects.title}
          </TextReveal>
          <FadeUp delay={0.3}>
            <p className="text-sage text-lg leading-relaxed max-w-xl">
              {t.projects.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.items.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              colors={projectColors[i]}
              viewLabel={t.projects.viewProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  colors,
  viewLabel,
}: {
  project: { title: string; description: string; tags: readonly string[] };
  index: number;
  colors: { bg: string; dot: string };
  viewLabel: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-dark-border bg-dark-card hover:border-sage/30 transition-all duration-700 cursor-pointer"
    >
      {/* Project visual area */}
      <div className={`relative aspect-[16/10] bg-gradient-to-br ${colors.bg} overflow-hidden`}>
        {/* Geometric decorations */}
        <motion.div style={{ y, rotate }} className="absolute inset-0 flex items-center justify-center">
          {/* Main circle */}
          <div
            className="w-24 h-24 rounded-full border-2 group-hover:scale-125 transition-all duration-700"
            style={{ borderColor: `${colors.dot}33` }}
          />
          {/* Orbiting dots */}
          <div
            className="absolute w-3 h-3 rounded-full group-hover:scale-150 transition-all duration-500"
            style={{ backgroundColor: `${colors.dot}66`, top: "30%", left: "35%" }}
          />
          <div
            className="absolute w-6 h-6 rounded-full border group-hover:scale-110 group-hover:rotate-45 transition-all duration-700"
            style={{ borderColor: `${colors.dot}44`, bottom: "25%", right: "30%" }}
          />
          <div
            className="absolute w-16 h-16 rounded-full border group-hover:scale-90 transition-all duration-500 delay-100"
            style={{ borderColor: `${colors.dot}15`, top: "20%", right: "25%" }}
          />
          {/* Arc */}
          <svg className="absolute w-[80%] h-[80%] opacity-20" viewBox="0 0 200 200">
            <path
              d="M 30 170 Q 100 30 170 170"
              fill="none"
              stroke={colors.dot}
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
          </svg>
        </motion.div>

        {/* Index number */}
        <div className="absolute top-4 left-5 font-mono text-[11px] text-white/30">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
            <ArrowUpRight size={16} className="text-dark" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-7">
        <h3 className="text-xl font-semibold mb-2.5 tracking-tight group-hover:text-accent-warm transition-colors duration-500">
          {project.title}
        </h3>
        <p className="text-sage text-sm leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-sage border border-dark-border px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
