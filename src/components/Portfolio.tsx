"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const projects = [
  {
    name: "Mele Roller",
    category: "E-commerce · Argentina",
    url: "https://www.meleroller.com.ar/",
    screenshot: "/clients/meleroller.jpg",
    tags: ["Shopify", "CRO"],
  },
  {
    name: "Farmapiel",
    category: "E-commerce · México",
    url: "https://farmapiel.com/",
    screenshot: "/clients/farmapiel.jpg",
    tags: ["Shopify", "Paid Media"],
  },
  {
    name: "Swiss Brand World",
    category: "E-commerce · Argentina",
    url: "https://www.swissbrandworld.com.ar/",
    screenshot: "/clients/swissbrand.jpg",
    tags: ["Shopify", "Diseño"],
  },
  {
    name: "CompactFit",
    category: "Membresías · Argentina",
    url: "https://compactfit-pilatesbasics.com/",
    screenshot: "/clients/compactfit.jpg",
    tags: ["Next.js", "VOD", "Pagos"],
  },
  {
    name: "Luz de Mar",
    category: "E-commerce · Argentina",
    url: "https://www.luzdemar.com.ar/",
    screenshot: "/clients/luzdemar.jpg",
    tags: ["Shopify", "Diseño"],
  },
  {
    name: "Abolu",
    category: "Marketplace · Panamá",
    url: "https://pedidos.abolu.com/",
    screenshot: "/clients/abolu.jpg",
    tags: ["Custom Dev", "Pedidos"],
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface border border-border-light mb-4">
        <Image
          src={project.screenshot}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            // Fallback to gradient placeholder if screenshot not found
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Placeholder gradient shown if image fails */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-hover to-surface -z-0" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 text-white text-xs font-semibold">
            Ver sitio <ArrowUpRight size={12} />
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-text-main text-sm group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-text-muted text-xs mt-0.5">{project.category}</p>
        </div>
        <ArrowUpRight
          size={14}
          className="text-text-muted group-hover:text-white transition-colors shrink-0 mt-0.5"
        />
      </div>

      {/* Tags */}
      <div className="flex gap-1.5 flex-wrap mt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium text-white/30 border border-white/8 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Portfolio() {
  const { locale } = useLocale();

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              {locale === "es" ? "Proyectos" : "Work"}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-text-main mt-6 mb-3 tracking-tight"
              style={{ fontFamily: "'Barrio', cursive" }}
            >
              {locale === "es" ? "Lo que construimos" : "What we build"}
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              {locale === "es"
                ? "Proyectos reales. Resultados reales."
                : "Real projects. Real results."}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
