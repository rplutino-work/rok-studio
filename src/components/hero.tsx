"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import MagneticButton from "./magnetic-button";
import Image from "next/image";

/* ── 3D Crystalline SVG Shapes ── */
function Icosahedron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      {/* Faces with gradient fill */}
      <defs>
        <linearGradient id="face1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#83988E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a8d48a" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="face2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#574951" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#83988E" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="face3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#a8d48a" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3A111C" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {/* Filled faces */}
      <polygon points="100,15 160,55 140,120" fill="url(#face1)" />
      <polygon points="100,15 40,55 60,120" fill="url(#face2)" />
      <polygon points="60,120 140,120 100,185" fill="url(#face3)" />
      <polygon points="40,55 60,120 20,90" fill="url(#face2)" />
      <polygon points="160,55 140,120 180,90" fill="url(#face1)" />
      <polygon points="100,15 40,55 160,55" fill="url(#face3)" />
      {/* Wireframe edges */}
      <polygon points="100,15 160,55 140,120" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.4" />
      <polygon points="100,15 40,55 60,120" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.4" />
      <polygon points="60,120 140,120 100,185" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.4" />
      <polygon points="40,55 60,120 20,90" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.3" />
      <polygon points="160,55 140,120 180,90" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.3" />
      <line x1="60" y1="120" x2="140" y2="120" stroke="#a8d48a" strokeWidth="0.4" opacity="0.3" />
      <line x1="40" y1="55" x2="160" y2="55" stroke="#a8d48a" strokeWidth="0.4" opacity="0.2" />
      {/* Vertex dots */}
      <circle cx="100" cy="15" r="1.5" fill="#a8d48a" opacity="0.5" />
      <circle cx="160" cy="55" r="1.5" fill="#a8d48a" opacity="0.4" />
      <circle cx="40" cy="55" r="1.5" fill="#a8d48a" opacity="0.4" />
      <circle cx="140" cy="120" r="1.5" fill="#a8d48a" opacity="0.4" />
      <circle cx="60" cy="120" r="1.5" fill="#a8d48a" opacity="0.4" />
      <circle cx="100" cy="185" r="1.5" fill="#a8d48a" opacity="0.5" />
    </svg>
  );
}

function Octahedron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className}>
      <defs>
        <linearGradient id="oct1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8d48a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#574951" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="oct2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#83988E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3A111C" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon points="80,10 140,80 80,80" fill="url(#oct1)" />
      <polygon points="80,10 20,80 80,80" fill="url(#oct2)" />
      <polygon points="80,150 140,80 80,80" fill="url(#oct2)" />
      <polygon points="80,150 20,80 80,80" fill="url(#oct1)" />
      <polygon points="80,10 140,80 80,150 20,80" fill="none" stroke="#83988E" strokeWidth="0.6" opacity="0.35" />
      <line x1="80" y1="10" x2="80" y2="150" stroke="#83988E" strokeWidth="0.4" opacity="0.2" />
      <line x1="20" y1="80" x2="140" y2="80" stroke="#a8d48a" strokeWidth="0.4" opacity="0.2" />
      <circle cx="80" cy="10" r="1.5" fill="#a8d48a" opacity="0.5" />
      <circle cx="140" cy="80" r="1.5" fill="#a8d48a" opacity="0.4" />
      <circle cx="80" cy="150" r="1.5" fill="#a8d48a" opacity="0.5" />
      <circle cx="20" cy="80" r="1.5" fill="#a8d48a" opacity="0.4" />
    </svg>
  );
}

function GemSmall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className}>
      <defs>
        <linearGradient id="gem1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a8d48a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#83988E" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <polygon points="40,5 70,30 55,75 25,75 10,30" fill="url(#gem1)" />
      <polygon points="40,5 70,30 55,75 25,75 10,30" fill="none" stroke="#83988E" strokeWidth="0.5" opacity="0.4" />
      <line x1="40" y1="5" x2="25" y2="75" stroke="#83988E" strokeWidth="0.3" opacity="0.25" />
      <line x1="40" y1="5" x2="55" y2="75" stroke="#83988E" strokeWidth="0.3" opacity="0.25" />
      <line x1="10" y1="30" x2="55" y2="75" stroke="#a8d48a" strokeWidth="0.3" opacity="0.15" />
      <line x1="70" y1="30" x2="25" y2="75" stroke="#a8d48a" strokeWidth="0.3" opacity="0.15" />
      <circle cx="40" cy="5" r="1" fill="#a8d48a" opacity="0.6" />
      <circle cx="70" cy="30" r="1" fill="#a8d48a" opacity="0.4" />
      <circle cx="10" cy="30" r="1" fill="#a8d48a" opacity="0.4" />
    </svg>
  );
}

function WireRing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className}>
      <circle cx="150" cy="150" r="140" fill="none" stroke="#83988E" strokeWidth="0.4" opacity="0.12" />
      <circle cx="150" cy="150" r="120" fill="none" stroke="#83988E" strokeWidth="0.3" opacity="0.08" strokeDasharray="8 12" />
      <circle cx="150" cy="150" r="95" fill="none" stroke="#a8d48a" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 16" />
    </svg>
  );
}

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
  const geo1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const geo2Y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const geo3Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ring1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const ring2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const headlineWords = t.hero.headline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* ── Wire rings ── */}
      <motion.div
        style={{ rotate: ring1Rotate }}
        className="absolute top-[5%] right-[-8%] w-[650px] h-[650px]"
      >
        <WireRing className="w-full h-full" />
      </motion.div>
      <motion.div
        style={{ rotate: ring2Rotate }}
        className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px]"
      >
        <WireRing className="w-full h-full" />
      </motion.div>

      {/* ── 3D Crystalline shapes ── */}
      {/* Large icosahedron — left */}
      <motion.div
        style={{ y: geo1Y }}
        className="absolute top-[8%] left-[3%] w-[280px] h-[280px] animate-geo-float-slow"
      >
        <Icosahedron className="w-full h-full" />
      </motion.div>

      {/* Octahedron — right */}
      <motion.div
        style={{ y: geo2Y }}
        className="absolute top-[12%] right-[5%] w-[220px] h-[220px] animate-geo-float"
      >
        <Octahedron className="w-full h-full" />
      </motion.div>

      {/* Small gem — bottom left */}
      <motion.div
        style={{ y: geo3Y }}
        className="absolute bottom-[15%] left-[8%] w-[120px] h-[120px] animate-geo-float"
      >
        <GemSmall className="w-full h-full" />
      </motion.div>

      {/* Small gem — right center */}
      <motion.div
        style={{ y: geo1Y }}
        className="absolute bottom-[25%] right-[8%] w-[100px] h-[100px] animate-geo-float-slow"
      >
        <GemSmall className="w-full h-full" />
      </motion.div>

      {/* Medium icosahedron — bottom right */}
      <motion.div
        style={{ y: geo2Y }}
        className="absolute bottom-[5%] right-[15%] w-[180px] h-[180px] animate-geo-float"
      >
        <Icosahedron className="w-full h-full opacity-60" />
      </motion.div>

      {/* Tiny octahedron — top center-left */}
      <motion.div
        style={{ y: geo3Y }}
        className="absolute top-[25%] left-[25%] w-[90px] h-[90px] animate-geo-float-slow opacity-50"
      >
        <Octahedron className="w-full h-full" />
      </motion.div>

      {/* Scattered vertex dots */}
      <div className="absolute top-[18%] left-[45%] w-1.5 h-1.5 rounded-full bg-accent-warm/40 animate-geo-float" />
      <div className="absolute top-[70%] right-[25%] w-1 h-1 rounded-full bg-sage/50 animate-geo-float-slow" />
      <div className="absolute top-[55%] left-[12%] w-1 h-1 rounded-full bg-accent-warm/30 animate-geo-float" />
      <div className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-sage/20 animate-geo-float-slow" />

      {/* Connecting lines between shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <line x1="15%" y1="20%" x2="35%" y2="35%" stroke="#83988E" strokeWidth="0.3" opacity="0.08" />
        <line x1="75%" y1="25%" x2="85%" y2="55%" stroke="#83988E" strokeWidth="0.3" opacity="0.06" />
        <line x1="12%" y1="75%" x2="30%" y2="55%" stroke="#a8d48a" strokeWidth="0.3" opacity="0.06" />
        <line x1="80%" y1="70%" x2="65%" y2="50%" stroke="#83988E" strokeWidth="0.3" opacity="0.05" />
      </svg>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-glow-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,212,138,0.06) 0%, rgba(131,152,142,0.03) 30%, transparent 60%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-5xl mx-auto px-6 text-center z-10"
      >
        {/* Brand logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex justify-center pt-8"
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-mono text-[11px] uppercase tracking-[0.5em] text-sage/50 mb-12"
        >
          Studio
        </motion.p>

        {/* Headline */}
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage/60">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-accent-warm/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
