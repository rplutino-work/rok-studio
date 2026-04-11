"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const partners = [
  { name: "Shopify", color: "text-[#96bf48]" },
  { name: "VTEX", color: "text-[#f71963]" },
  { name: "Tiendanube", color: "text-[#00c2ff]" },
];

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">

      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 12, 0], y: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-purple/20 blur-[90px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, -16, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-accent-pink/25 to-accent-purple/20 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-accent-blue/15 to-primary/10 blur-[70px]"
        />
      </div>

      {/* 3D floating blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-24 right-[8%] w-24 h-24 blob bg-gradient-to-br from-accent-blue to-accent-purple opacity-70 animate-float"
          style={{ filter: "blur(0px)" }}
        />
        <motion.div
          className="absolute top-48 right-[18%] w-14 h-14 blob bg-gradient-to-br from-accent-pink to-accent-purple opacity-60 animate-float-delayed"
        />
        <motion.div
          className="absolute bottom-24 right-[6%] w-10 h-10 blob bg-gradient-to-br from-accent-orange to-accent-pink opacity-50 animate-float-slow"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-secondary px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.08)}
            className="text-6xl sm:text-7xl md:text-[88px] font-black tracking-tight text-text-main leading-[0.95] mb-6"
            style={{ fontFamily: "'Barrio', cursive" }}
          >
            ROK YOUR
            <br />
            <span className="text-gradient">BUSINESS</span>
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.16)} className="text-lg md:text-xl text-text-muted leading-relaxed max-w-xl mb-10">
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-14">
            <Link
              href="#project-builder"
              className="group inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(16,82,202,0.35)] hover:shadow-[0_8px_24px_rgba(16,82,202,0.45)] hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 text-text-main font-semibold px-7 py-3.5 rounded-full border border-border-light hover:bg-surface hover:border-primary/20 transition-all text-base"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trusted by */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-4 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              {t.hero.trustedBy}
            </span>
            <div className="flex items-center gap-5 flex-wrap">
              {partners.map((p) => (
                <span key={p.name} className={`font-bold text-sm tracking-tight ${p.color}`}>
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
