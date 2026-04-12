"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const featured = [
  {
    name: "Ecommerce Kit",
    category: { es: "Plataforma · Multi-marca", en: "Platform · Multi-brand" },
    desc: {
      es: "Kit de ecommerce headless multi-marca con Medusa v2 + Next.js 14. Deploy en Render + Vercel.",
      en: "Multi-brand headless ecommerce kit built with Medusa v2 + Next.js 14. Deployed on Render + Vercel.",
    },
    url: "https://ecommerce-kit-umber.vercel.app/",
    screenshot: "/clients/ecommercekit.jpg",
    tags: ["Medusa v2", "Next.js 14", "Headless", "Multi-brand"],
  },
  {
    name: "Rodrigo Plutino",
    category: { es: "Portfolio · Argentina", en: "Portfolio · Argentina" },
    desc: {
      es: "Portfolio personal con animaciones avanzadas y diseño editorial.",
      en: "Personal portfolio with advanced animations and editorial design.",
    },
    url: "https://rodrigoplutino.com.ar/",
    screenshot: "/clients/rodrigoplutino.jpg",
    tags: ["Next.js", "Framer Motion", "Diseño"],
  },
];

const projects = [
  {
    name: "Mele Roller",
    category: { es: "E-commerce · Argentina", en: "E-commerce · Argentina" },
    url: "https://www.meleroller.com.ar/",
    screenshot: "/clients/meleroller.jpg",
    tags: ["Shopify", "CRO"],
  },
  {
    name: "Farmapiel",
    category: { es: "E-commerce · México", en: "E-commerce · Mexico" },
    url: "https://farmapiel.com/",
    screenshot: "/clients/farmapiel.jpg",
    tags: ["Shopify", "Paid Media"],
  },
  {
    name: "Swiss Brand World",
    category: { es: "E-commerce · Argentina", en: "E-commerce · Argentina" },
    url: "https://www.swissbrandworld.com.ar/",
    screenshot: "/clients/swissbrand.jpg",
    tags: ["Shopify", "Diseño"],
  },
  {
    name: "CompactFit Pilates",
    category: { es: "VOD · Argentina", en: "VOD · Argentina" },
    url: "https://compactfit-pilatesbasics.com/",
    screenshot: "/clients/compactfit.jpg",
    tags: ["Next.js", "Membresías"],
  },
  {
    name: "CompactFit Power",
    category: { es: "VOD · Argentina", en: "VOD · Argentina" },
    url: "https://compactfit-powerseries.com/",
    screenshot: "/clients/compactfit2.jpg",
    tags: ["Next.js", "Membresías"],
  },
  {
    name: "Luz de Mar",
    category: { es: "E-commerce · Argentina", en: "E-commerce · Argentina" },
    url: "https://www.luzdemar.com.ar/",
    screenshot: "/clients/luzdemar.jpg",
    tags: ["Shopify", "Diseño"],
  },
  {
    name: "Abolu",
    category: { es: "Marketplace · Panamá", en: "Marketplace · Panama" },
    url: "https://pedidos.abolu.com/",
    screenshot: "/clients/abolu.jpg",
    tags: ["Custom Dev", "Pedidos"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-medium text-white/35 border border-white/8 px-2.5 py-1 rounded-full">
      {label}
    </span>
  );
}

function FeaturedCard({ project, idx, locale }: { project: typeof featured[0]; idx: number; locale: string }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: EASE }}
      className="group block relative rounded-3xl overflow-hidden bg-surface border border-border-light hover:-translate-y-1 transition-all duration-500"
      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset" }}
    >
      <div className="relative aspect-[16/8] overflow-hidden">
        <Image
          src={project.screenshot}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={idx === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>
      <div className="p-6 pt-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary block mb-1">
              {locale === "es" ? project.category.es : project.category.en}
            </span>
            <h3 className="text-xl font-bold text-text-main group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full border border-border-light flex items-center justify-center text-text-muted group-hover:border-primary group-hover:text-primary transition-all shrink-0">
            <ExternalLink size={14} />
          </div>
        </div>
        <p className="text-text-muted text-sm leading-relaxed mb-4">
          {locale === "es" ? project.desc.es : project.desc.en}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    </motion.a>
  );
}

function ProjectCard({ project, idx, locale }: { project: typeof projects[0]; idx: number; locale: string }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: (idx % 3) * 0.07, ease: EASE }}
      className="group block"
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface border border-border-light mb-3.5">
        <Image
          src={project.screenshot}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/10 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-white text-xs font-semibold flex items-center gap-1.5">
            {locale === "es" ? "Ver sitio" : "Visit site"} <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="font-semibold text-sm text-text-main group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-text-muted text-xs mt-0.5">
            {locale === "es" ? project.category.es : project.category.en}
          </p>
        </div>
        <ArrowUpRight size={13} className="text-text-muted group-hover:text-white transition-colors shrink-0 mt-0.5" />
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {project.tags.map((t) => <Tag key={t} label={t} />)}
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
          className="mb-12"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            {locale === "es" ? "Proyectos" : "Work"}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-text-main mt-6 mb-3 tracking-tight"
            style={{ fontFamily: "'Barrio', cursive" }}
          >
            {locale === "es" ? "Lo que construimos" : "What we build"}
          </h2>
          <p className="text-text-muted text-lg">
            {locale === "es"
              ? "Proyectos reales para negocios reales — en Argentina, México y Panamá."
              : "Real projects for real businesses — in Argentina, Mexico and Panama."}
          </p>
        </motion.div>

        {/* Featured 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {featured.map((p, i) => (
            <FeaturedCard key={p.name} project={p} idx={i} locale={locale} />
          ))}
        </div>

        {/* Regular 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} idx={i} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
