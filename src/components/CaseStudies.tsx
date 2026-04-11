"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";

const caseStyles = [
  {
    metrics: [
      { value: "+200%", label: "ROI" },
      { value: "3.8×", label: "Conversion" },
    ],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    mockupBg: "from-rose-950/60 to-pink-950/40",
    accent: "text-rose-400",
    accentBg: "bg-rose-500/8 border-rose-500/15",
    glow: "rgba(244,63,94,0.12)",
  },
  {
    metrics: [
      { value: "+2,272", label: "Monthly orders" },
      { value: "-40%", label: "Cart abandon" },
    ],
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    mockupBg: "from-violet-950/60 to-indigo-950/40",
    accent: "text-violet-400",
    accentBg: "bg-violet-500/8 border-violet-500/15",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    metrics: [
      { value: "18 days", label: "To launch" },
      { value: "100%", label: "Uptime SLA" },
    ],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    mockupBg: "from-amber-950/60 to-orange-950/40",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/8 border-amber-500/15",
    glow: "rgba(245,158,11,0.12)",
  },
];

function MockupScreen({ gradient, mockupBg }: { gradient: string; mockupBg: string }) {
  return (
    <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${mockupBg} overflow-hidden relative border border-white/5`}>
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/5 px-3 py-2 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
        <div className="ml-2 flex-1 h-3.5 rounded-md bg-white/8" />
      </div>
      <div className="p-4 space-y-2">
        <div className={`h-16 rounded-xl bg-gradient-to-r ${gradient} opacity-60`} />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/5" />
          <div className="h-10 rounded-lg bg-white/4" />
          <div className="h-10 rounded-lg bg-white/5" />
        </div>
        <div className="h-7 rounded-lg bg-white/4 w-4/5" />
        <div className="h-5 rounded-lg bg-white/3 w-3/5" />
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="work" className="py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
              {t.caseStudies.label}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-text-main mt-6 mb-3 tracking-tight"
              style={{ fontFamily: "'Barrio', cursive" }}
            >
              {t.caseStudies.title}
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              {t.caseStudies.subtitle}
            </p>
          </div>
          <motion.a
            href="#project-builder"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            {t.caseStudies.seeAll} <ArrowUpRight size={15} />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.caseStudies.cases.map((c, idx) => {
            const s = caseStyles[idx];
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-surface border border-border-light rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-400"
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset`,
                }}
              >
                <div className="p-4 pb-2">
                  <MockupScreen gradient={s.gradient} mockupBg={s.mockupBg} />
                </div>

                <div className="px-6 pb-6 pt-3">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${s.accent}`}>
                    {c.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-main mt-1.5 mb-2 group-hover:text-white transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    {c.description}
                  </p>

                  <div className={`flex gap-5 p-4 rounded-2xl border ${s.accentBg}`}>
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <div className={`text-2xl font-black ${s.accent} leading-none`}>{m.value}</div>
                        <div className="text-[11px] text-text-muted mt-0.5 tracking-wide">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
