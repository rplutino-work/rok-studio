"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Cpu, Layers } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const icons = [ShoppingCart, Layers, TrendingUp, Cpu];
const iconStyles = [
  { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", logos: ["shopify", "custom"], featured: false },
  { iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", logos: ["shopify", "vtex", "tiendanube"], featured: true },
  { iconBg: "bg-violet-500/10", iconColor: "text-violet-400", logos: [], featured: false },
  { iconBg: "bg-orange-500/10", iconColor: "text-orange-400", logos: [], featured: false },
];

function PlatformLogo({ name }: { name: string }) {
  const styles: Record<string, string> = {
    shopify:    "text-[#96bf48] border-[#96bf48]/15 bg-[#96bf48]/8",
    vtex:       "text-[#f71963] border-[#f71963]/15 bg-[#f71963]/8",
    tiendanube: "text-[#00c2ff] border-[#00c2ff]/15 bg-[#00c2ff]/8",
  };
  const labels: Record<string, string> = {
    shopify: "Shopify", vtex: "VTEX", tiendanube: "Tiendanube",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-xs font-bold tracking-tight ${styles[name] ?? "text-text-muted border-border-light"}`}>
      {labels[name] ?? name}
    </span>
  );
}

export default function ServicesGrid() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full">
            {t.servicesGrid.label}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-text-main mt-6 mb-4 tracking-tight"
            style={{ fontFamily: "'Barrio', cursive" }}
          >
            {t.servicesGrid.title}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {t.servicesGrid.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.servicesGrid.services.map((service, idx) => {
            const Icon = icons[idx];
            const style = iconStyles[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-surface rounded-3xl p-8 border transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5 ${
                  style.featured
                    ? "border-primary/20 shadow-[0_0_0_1px_rgba(77,142,248,0.06)]"
                    : "border-border-light"
                }`}
              >
                {style.featured && (
                  <span className="absolute top-5 right-5 text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    Partners
                  </span>
                )}

                <div className={`w-12 h-12 rounded-2xl ${style.iconBg} ${style.iconColor} flex items-center justify-center mb-5`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-text-main mb-2">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">{service.description}</p>

                {style.logos.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {style.logos.map((logo) => (
                      <PlatformLogo key={logo} name={logo} />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
