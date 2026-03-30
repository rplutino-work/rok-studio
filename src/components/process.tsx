"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp } from "./text-reveal";

export default function Process() {
  const { t } = useLocale();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-32 md:py-44 px-6 bg-dark text-text-white relative overflow-hidden"
    >
      {/* Decorative arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path d="M 0 400 Q 300 100 600 400 Q 900 700 1200 400" fill="none" stroke="#BCDEA5" strokeWidth="1" />
        <path d="M 0 450 Q 300 200 600 450 Q 900 700 1200 450" fill="none" stroke="#83988E" strokeWidth="0.5" />
      </svg>

      {/* Animated top line */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent origin-left"
      />

      <div className="relative max-w-7xl mx-auto">
        <FadeUp>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage mb-5 block">
            {t.process.label}
          </span>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6 mb-28">
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]"
          >
            {t.process.title}
          </TextReveal>
          <FadeUp delay={0.3} className="flex items-end">
            <p className="text-sage text-lg leading-relaxed max-w-lg">
              {t.process.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* Connection curve */}
        <div className="relative">
          <svg className="hidden lg:block absolute top-[60px] left-0 w-full h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M 0 40 Q 300 0 600 40 Q 900 80 1200 40" fill="none" stroke="rgba(131,152,142,0.15)" strokeWidth="1" />
            <motion.path
              d="M 0 40 Q 300 0 600 40 Q 900 80 1200 40"
              fill="none"
              stroke="#BCDEA5"
              strokeWidth="1.5"
              strokeDasharray="1600"
              style={{
                strokeDashoffset: useTransform(scrollYProgress, [0.1, 0.7], [1600, 0]),
              }}
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
}: {
  step: { number: string; title: string; description: string };
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative"
    >
      {/* Dot on curve */}
      <div className="hidden lg:flex absolute top-[56px] left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full border-2 border-dark bg-sage/30 group-hover:bg-accent-warm group-hover:scale-125 transition-all duration-500" />
      </div>

      <div className="p-8 pt-28 lg:pt-32 rounded-3xl border border-dark-border bg-dark-card hover:border-sage/30 transition-all duration-500 h-full group-hover:bg-dark-elevated">
        <span className="text-6xl md:text-7xl font-bold text-dark-border/40 group-hover:text-accent-warm/25 transition-colors duration-700 block mb-6 tabular-nums leading-none">
          {step.number}
        </span>
        <h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-accent-warm transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-sage text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
