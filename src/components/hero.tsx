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

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >

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
        <div className="hero-video-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(9,9,14,0.5)_100%)]" />
      </div>

      {/* ── Content — vertically centered with header clearance ── */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">

            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] uppercase text-primary/80 border border-primary/20 bg-primary/6 px-4 py-2 rounded-full mb-10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-black tracking-tight leading-[0.88] mb-8 text-white"
              style={{
                fontFamily: "'Barrio', cursive",
                fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
              }}
            >
              ROK YOUR
              <br />
              <span className="text-gradient">BUSINESS</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-base md:text-lg text-white/55 leading-relaxed max-w-md mb-10 font-light"
            >
              {t.hero.sub}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.28)} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="#project-builder"
                className="group inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-primary-hover transition-all shadow-[0_4px_24px_rgba(77,142,248,0.35)] hover:shadow-[0_8px_32px_rgba(77,142,248,0.5)] hover:-translate-y-0.5"
              >
                {t.hero.cta}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-white/60 font-medium px-7 py-3.5 rounded-full border border-white/12 hover:bg-white/6 hover:text-white hover:border-white/20 transition-all text-sm"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} className="text-white/25" />
        </motion.div>
      </motion.div>

    </section>
  );
}
