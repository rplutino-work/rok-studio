"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp, StaggerChildren, staggerItem } from "./text-reveal";

const icons = [Sparkles, Zap, Target];

export default function Differentiator() {
  const { t } = useLocale();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 1.2]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.15, 0.15, 0]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-44 px-6 bg-cream text-text-dark relative overflow-hidden"
    >
      {/* Large animated ring */}
      <motion.div
        style={{ scale: ringScale, opacity: ringOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-accent-warm/30"
      />

      {/* Floating dots */}
      <div className="absolute top-[15%] left-[10%] w-5 h-5 rounded-full bg-accent-warm/15 animate-geo-float" />
      <div className="absolute bottom-[20%] right-[15%] w-3 h-3 rounded-full bg-dark/10 animate-geo-float-slow" />
      <div className="absolute top-[60%] left-[80%] w-8 h-8 rounded-full border border-sage/20 animate-geo-float" />

      <div className="relative max-w-7xl mx-auto">
        <FadeUp>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage mb-5 block">
            {t.differentiator.label}
          </span>
        </FadeUp>

        <div className="mb-20">
          <TextReveal
            as="h2"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]"
          >
            {t.differentiator.title}
          </TextReveal>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.differentiator.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative"
              >
                <div className="p-8 md:p-10 rounded-3xl bg-white border border-cream-dark hover:border-accent-warm/30 transition-all duration-500 h-full hover:shadow-xl hover:shadow-dark/5 hover:-translate-y-1">
                  {/* Icon with ring */}
                  <div className="relative w-16 h-16 mb-8">
                    <div className="absolute inset-0 rounded-full border border-sage/20 group-hover:scale-150 group-hover:border-accent-warm/20 transition-all duration-700" />
                    <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center relative z-10">
                      <Icon size={26} className="text-accent-warm" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-text-light-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
