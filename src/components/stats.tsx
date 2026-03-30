"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

const statsData = {
  es: [
    { value: 50, suffix: "+", label: "Proyectos entregados" },
    { value: 98, suffix: "%", label: "Clientes satisfechos" },
    { value: 3, suffix: "x", label: "Más rápido con IA" },
    { value: 24, suffix: "hs", label: "Tiempo de respuesta" },
  ],
  en: [
    { value: 50, suffix: "+", label: "Projects delivered" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
    { value: 3, suffix: "x", label: "Faster with AI" },
    { value: 24, suffix: "hs", label: "Response time" },
  ],
  pt: [
    { value: 50, suffix: "+", label: "Projetos entregues" },
    { value: 98, suffix: "%", label: "Clientes satisfeitos" },
    { value: 3, suffix: "x", label: "Mais rápido com IA" },
    { value: 24, suffix: "hs", label: "Tempo de resposta" },
  ],
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { locale } = useLocale();
  const stats = statsData[locale];

  return (
    <section className="py-24 md:py-32 px-6 bg-dark relative overflow-hidden">
      {/* Decorative arcs */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 1200 400">
        <ellipse cx="600" cy="200" rx="500" ry="180" fill="none" stroke="#BCDEA5" strokeWidth="0.5" />
        <ellipse cx="600" cy="200" rx="350" ry="120" fill="none" stroke="#83988E" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-dark-border" />
              )}
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent-warm mb-3 tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-mono text-sage text-xs uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
