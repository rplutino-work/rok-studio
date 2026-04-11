"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

const styles = [
  {
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.15)",
    blob1: "from-blue-500/20 to-cyan-400/15",
    blob2: "from-sky-400/15 to-blue-300/10",
    textAccent: "text-blue-400",
    borderAccent: "border-blue-500/20 hover:border-blue-400/40",
    iconBg: "bg-blue-500/10",
  },
  {
    gradient: "from-violet-500 to-pink-500",
    glow: "rgba(139,92,246,0.15)",
    blob1: "from-violet-500/20 to-purple-400/15",
    blob2: "from-pink-400/15 to-rose-300/10",
    textAccent: "text-violet-400",
    borderAccent: "border-violet-500/20 hover:border-violet-400/40",
    iconBg: "bg-violet-500/10",
  },
  {
    gradient: "from-orange-500 to-amber-400",
    glow: "rgba(249,115,22,0.15)",
    blob1: "from-orange-500/20 to-amber-400/15",
    blob2: "from-yellow-400/15 to-orange-300/10",
    textAccent: "text-orange-400",
    borderAccent: "border-orange-500/20 hover:border-orange-400/40",
    iconBg: "bg-orange-500/10",
  },
];

export default function ServiceCards() {
  const { t } = useLocale();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.serviceCards.items.map((card, idx) => {
            const s = styles[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="#project-builder" className="block group h-full">
                  <div
                    className={`relative h-full rounded-3xl p-7 border bg-surface overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 ${s.borderAccent}`}
                    style={{
                      boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset`,
                    }}
                  >
                    {/* Glow blob */}
                    <div
                      className={`absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-gradient-to-br ${s.blob1} blur-2xl group-hover:opacity-[1.4] opacity-100 transition-all duration-700 group-hover:scale-125`}
                    />
                    <div
                      className={`absolute right-16 bottom-20 w-20 h-20 rounded-full bg-gradient-to-br ${s.blob2} blur-xl animate-float-slow`}
                    />

                    {/* Badge */}
                    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-[0.15em] ${s.textAccent} mb-5 opacity-80`}>
                      {card.badge}
                    </span>

                    <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-8">
                      {card.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-xs tracking-wide ${s.textAccent}`}>
                        {card.cta}
                      </span>
                      <div className={`w-8 h-8 rounded-full border border-current flex items-center justify-center ${s.textAccent} group-hover:bg-gradient-to-br group-hover:${s.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300`}>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
