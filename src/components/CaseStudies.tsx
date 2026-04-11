"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const cases = [
  {
    name: "Women Sea",
    category: "Fashion E-commerce",
    description: "Full Shopify redesign + conversion optimization for a women's apparel brand.",
    metrics: [
      { value: "+200%", label: "ROI" },
      { value: "3.8×", label: "Conversion rate" },
    ],
    gradient: "from-rose-400 via-pink-400 to-fuchsia-500",
    mockupBg: "from-rose-100 to-pink-50",
    accent: "text-rose-600",
    accentBg: "bg-rose-50 border-rose-100",
  },
  {
    name: "Disminart CRO",
    category: "Growth & Analytics",
    description: "Data-driven funnel overhaul that cut cart abandonment by 40% in 60 days.",
    metrics: [
      { value: "+2,272", label: "Monthly orders" },
      { value: "-40%", label: "Cart abandonment" },
    ],
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    mockupBg: "from-violet-100 to-indigo-50",
    accent: "text-violet-600",
    accentBg: "bg-violet-50 border-violet-100",
  },
  {
    name: "Restaura",
    category: "Custom Dev",
    description: "Headless storefront with custom inventory system and multi-warehouse logic.",
    metrics: [
      { value: "18 days", label: "To launch" },
      { value: "100%", label: "Uptime SLA" },
    ],
    gradient: "from-amber-400 via-orange-400 to-red-400",
    mockupBg: "from-amber-100 to-orange-50",
    accent: "text-orange-600",
    accentBg: "bg-orange-50 border-orange-100",
  },
];

function MockupScreen({ gradient, mockupBg }: { gradient: string; mockupBg: string }) {
  return (
    <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${mockupBg} overflow-hidden relative`}>
      {/* Simulated browser chrome */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-black/5 px-3 py-2 flex items-center gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="ml-2 flex-1 h-4 rounded-md bg-black/5" />
      </div>
      {/* Page mockup */}
      <div className="p-4 space-y-2">
        <div className={`h-20 rounded-xl bg-gradient-to-r ${gradient} opacity-80`} />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-black/6" />
          <div className="h-12 rounded-lg bg-black/4" />
          <div className="h-12 rounded-lg bg-black/6" />
        </div>
        <div className="h-8 rounded-lg bg-black/5 w-4/5" />
        <div className="h-6 rounded-lg bg-black/4 w-3/5" />
      </div>
    </div>
  );
}

export default function CaseStudies() {
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
            <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-secondary px-4 py-1.5 rounded-full">
              Our work
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-text-main mt-5 mb-3 tracking-tight"
              style={{ fontFamily: "'Barrio', cursive" }}
            >
              Case Studies
            </h2>
            <p className="text-text-muted text-lg max-w-md">
              Real results for real brands. Here&apos;s what happens when strategy meets execution.
            </p>
          </div>
          <motion.a
            href="#project-builder"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
          >
            See all projects <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cases.map((c, idx) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-surface border border-border-light rounded-3xl overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-400"
            >
              {/* Mockup visual */}
              <div className="p-4 pb-2">
                <MockupScreen gradient={c.gradient} mockupBg={c.mockupBg} />
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-3">
                <span className={`text-xs font-semibold uppercase tracking-widest ${c.accent}`}>
                  {c.category}
                </span>
                <h3 className="text-xl font-bold text-text-main mt-1 mb-2 group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {c.description}
                </p>

                {/* Metrics */}
                <div className={`flex gap-4 p-4 rounded-2xl border ${c.accentBg}`}>
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className={`text-2xl font-black ${c.accent} leading-none`}>{m.value}</div>
                      <div className="text-xs text-text-muted mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
