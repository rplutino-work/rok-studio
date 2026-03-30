"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import MagneticButton from "./magnetic-button";
import Image from "next/image";

export default function Hero() {
  const { t } = useLocale();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const ring2Rotate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const headlineWords = t.hero.headline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Geometric decorations */}
      <motion.div
        style={{ rotate: ringRotate }}
        className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full border border-sage/10 animate-geo-float-slow"
      />
      <motion.div
        style={{ rotate: ring2Rotate }}
        className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full border border-accent-warm/15"
      />
      <div className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-accent-warm/40 animate-geo-float" />
      <div className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full bg-sage/40 animate-geo-float-slow" />
      <div className="absolute top-[35%] right-[12%] w-5 h-5 rounded-full border border-accent-warm/20 animate-geo-float" />

      <svg className="absolute top-[15%] left-[8%] w-[200px] h-[200px] opacity-10" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#a8d48a" strokeWidth="0.5" strokeDasharray="8 12" />
      </svg>
      <svg className="absolute bottom-[20%] right-[10%] w-[160px] h-[160px] opacity-10" viewBox="0 0 160 160">
        <path d="M 20 140 Q 80 20 140 140" fill="none" stroke="#83988E" strokeWidth="0.5" />
      </svg>

      {/* Radial glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(168,212,138,0.07) 0%, rgba(131,152,142,0.03) 40%, transparent 65%)",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-5xl mx-auto px-6 text-center"
      >
        {/* Brand logo — prominent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center pt-20"
        >
          <Image
            src="/logo.svg"
            alt="ROK Studio"
            width={100}
            height={40}
            className="invert opacity-80"
            priority
          />
        </motion.div>

        {/* Brand name text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-mono text-[11px] uppercase tracking-[0.5em] text-sage/50 mb-12"
        >
          Studio
        </motion.p>

        {/* Headline — word-by-word reveal, fixed line-height for descenders */}
        <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[1.05] tracking-[-0.04em] mb-10 pb-1">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden text-reveal-clip mr-[0.25em] pb-2">
              <motion.span
                className={`inline-block ${
                  i === 2 || i === 3 ? "text-accent-warm" : ""
                }`}
                initial={{ y: "120%", rotateX: -40 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.6 + i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-lg md:text-xl text-sage max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <MagneticButton
            href="#contact"
            className="group relative bg-accent-warm text-dark px-10 py-4 rounded-full font-semibold text-base overflow-hidden inline-flex items-center gap-3"
          >
            <span className="relative z-10">{t.hero.cta}</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
            <span className="absolute inset-0 bg-accent-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
          </MagneticButton>

          <MagneticButton
            href="#projects"
            className="text-sage hover:text-text-white px-10 py-4 rounded-full border border-sage/30 hover:border-accent-warm/50 transition-all duration-500 text-base inline-block"
          >
            {t.hero.ctaSecondary}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage/60">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-accent-warm/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
