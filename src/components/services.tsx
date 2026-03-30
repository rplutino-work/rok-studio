"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Code2, GitMerge, Bot } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp, StaggerChildren, staggerItem } from "./text-reveal";

const icons = [ShoppingBag, Code2, GitMerge, Bot];

export default function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-32 md:py-44 px-6 bg-cream text-text-dark relative overflow-hidden">
      {/* Decorative geometry */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full border border-light-border/50 animate-geo-float-slow" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[250px] h-[250px] rounded-full bg-accent-warm/5" />
      <div className="absolute top-[40%] right-[5%] w-4 h-4 rounded-full bg-accent-warm/20 animate-geo-float" />

      <div className="relative max-w-7xl mx-auto">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative p-8 md:p-10 rounded-3xl border border-cream-dark bg-cream-dark/50 hover:bg-white hover:border-light-border transition-all duration-500 hover:shadow-lg hover:shadow-dark/5"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-dark flex items-center justify-center shrink-0 group-hover:bg-dark-elevated transition-all duration-500">
                    <Icon
                      size={24}
                      className="text-accent-warm transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-text-light-muted leading-relaxed text-[15px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner circle */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-cream-dark group-hover:border-accent-warm/30 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
