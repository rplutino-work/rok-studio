"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const partners = [
  { name: "Shopify", color: "text-[#96bf48]" },
  { name: "VTEX", color: "text-[#f71963]" },
  { name: "Tiendanube", color: "text-[#00c2ff]" },
];

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex flex-col justify-center overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>

      {/* ── Video background ── */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient — darkens video so text reads cleanly */}
        <div className="hero-video-overlay absolute inset-0" />

        {/* Extra side vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(9,9,14,0.5)_100%)]" />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary/90 border border-primary/25 bg-primary/8 px-4 py-2 rounded-full mb-10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[clamp(4rem,10vw,9rem)] font-black tracking-tight leading-[0.9] mb-8 text-white"
            style={{ fontFamily: "'Barrio', cursive" }}
          >
            ROK YOUR
            <br />
            <span className="text-gradient">BUSINESS</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-12 font-light"
          >
            {t.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-16">
            <Link
              href="#project-builder"
              className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-primary-hover transition-all shadow-[0_4px_24px_rgba(77,142,248,0.4)] hover:shadow-[0_8px_32px_rgba(77,142,248,0.5)] hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 text-white/70 font-semibold px-8 py-4 rounded-full border border-white/15 hover:bg-white/8 hover:text-white hover:border-white/25 transition-all text-sm backdrop-blur-sm"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Trusted by */}
          <motion.div {...fadeUp(0.36)} className="flex items-center gap-5 flex-wrap">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
              {t.hero.trustedBy}
            </span>
            <div className="w-px h-4 bg-white/15" />
            <div className="flex items-center gap-5 flex-wrap">
              {partners.map((p) => (
                <span key={p.name} className={`font-bold text-xs tracking-tight ${p.color} opacity-70`}>
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/30" />
        </motion.div>
      </motion.div>

    </section>
  );
}
