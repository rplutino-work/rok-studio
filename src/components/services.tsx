"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Code2, GitMerge, Bot, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp } from "./text-reveal";
import MagneticButton from "./magnetic-button";

const serviceMeta = [
  {
    icon: ShoppingBag,
    number: "01",
    label: "Ecommerce",
    // Hexagon wireframe
    geo: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <polygon
          points="60,5 110,30 110,90 60,115 10,90 10,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="4 6"
        />
        <polygon
          points="60,25 90,40 90,80 60,95 30,80 30,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
        />
      </svg>
    ),
  },
  {
    icon: Code2,
    number: "02",
    label: "Dev",
    // Diamond
    geo: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect
          x="25"
          y="25"
          width="70"
          height="70"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          transform="rotate(45 60 60)"
        />
        <rect
          x="35"
          y="35"
          width="50"
          height="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="3 5"
          transform="rotate(45 60 60)"
        />
      </svg>
    ),
  },
  {
    icon: GitMerge,
    number: "03",
    label: "APIs",
    // Arcs
    geo: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 8" />
        <path d="M 20 60 Q 60 20 100 60" fill="none" stroke="currentColor" strokeWidth="0.3" />
        <path d="M 20 60 Q 60 100 100 60" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    ),
  },
  {
    icon: Bot,
    number: "04",
    label: "IA",
    // Triangle constellation
    geo: (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <polygon points="60,10 110,100 10,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <polygon points="60,35 90,90 30,90" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 5" />
        <circle cx="60" cy="10" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="110" cy="100" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="10" cy="100" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  meta,
  index,
  className = "",
}: {
  service: { title: string; description: string };
  meta: (typeof serviceMeta)[number];
  index: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const geoRotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const geoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1]);
  const Icon = meta.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className={`group relative rounded-3xl border border-cream-dark bg-white/60 hover:bg-white hover:border-sage/30 transition-all duration-500 hover:shadow-xl hover:shadow-dark/5 overflow-hidden ${className}`}
    >
      {/* Geometric decoration — top right */}
      <motion.div
        style={{ rotate: geoRotate, scale: geoScale }}
        className="absolute top-4 right-4 w-28 h-28 text-sage/15 group-hover:text-accent-warm/20 transition-colors duration-700 pointer-events-none"
      >
        {meta.geo}
      </motion.div>

      <div className="relative p-8 md:p-10 h-full flex flex-col">
        {/* Number watermark */}
        <span className="font-mono text-[5rem] md:text-[6rem] leading-none font-bold text-dark/[0.04] group-hover:text-accent-warm/[0.08] absolute top-2 left-6 transition-colors duration-700 select-none pointer-events-none">
          {meta.number}
        </span>

        {/* Icon + label */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-11 h-11 rounded-xl bg-dark flex items-center justify-center shrink-0 group-hover:bg-dark-elevated transition-all duration-500">
            <Icon size={20} className="text-accent-warm" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage">
            {meta.label}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1">
          <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-dark-elevated transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-text-light-muted leading-relaxed text-[15px]">
            {service.description}
          </p>
        </div>

        {/* Hover arrow */}
        <div className="relative z-10 mt-6 flex items-center gap-2 text-sage group-hover:text-accent-warm transition-colors duration-500">
          <div className="w-0 group-hover:w-6 overflow-hidden transition-all duration-500">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLocale();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgCircleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.3]);
  const bgCircleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.05, 0.05, 0]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 md:py-44 px-6 bg-cream text-text-dark relative overflow-hidden"
    >
      {/* Background animated circle */}
      <motion.div
        style={{ scale: bgCircleScale, opacity: bgCircleOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-accent-warm/30 pointer-events-none"
      />

      {/* Floating dots */}
      <div className="absolute top-[15%] right-[8%] w-3 h-3 rounded-full bg-accent-warm/15 animate-geo-float" />
      <div className="absolute bottom-[20%] left-[5%] w-4 h-4 rounded-full border border-sage/15 animate-geo-float-slow" />
      <div className="absolute top-[60%] right-[3%] w-2 h-2 rounded-full bg-sage/20 animate-geo-float" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage mb-5 block">
            {t.services.label}
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6 mb-20">
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]"
          >
            {t.services.title}
          </TextReveal>
          <FadeUp delay={0.3} className="flex items-end">
            <p className="text-text-light-muted text-lg leading-relaxed max-w-lg">
              {t.services.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 01 — Ecommerce: tall left */}
          <ServiceCard
            service={t.services.items[0]}
            meta={serviceMeta[0]}
            index={0}
            className="md:col-span-7 md:row-span-2"
          />

          {/* Card 02 — Dev a medida: top right */}
          <ServiceCard
            service={t.services.items[1]}
            meta={serviceMeta[1]}
            index={1}
            className="md:col-span-5"
          />

          {/* Card 03 — Integraciones: bottom right */}
          <ServiceCard
            service={t.services.items[2]}
            meta={serviceMeta[2]}
            index={2}
            className="md:col-span-5"
          />

          {/* Card 04 — IA: full width */}
          <ServiceCard
            service={t.services.items[3]}
            meta={serviceMeta[3]}
            index={3}
            className="md:col-span-12"
          />
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={0.4}>
          <div className="mt-20 text-center">
            <p className="text-text-light-muted text-lg mb-6">
              {t.services.cta}
            </p>
            <MagneticButton
              href="#contact"
              className="group relative bg-dark text-text-white px-10 py-4 rounded-full font-semibold text-base overflow-hidden inline-flex items-center gap-3"
            >
              <span className="relative z-10">{t.services.ctaButton}</span>
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={18} />
              </span>
              <span className="absolute inset-0 bg-dark-elevated scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
