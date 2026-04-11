"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Cpu, Layers } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const icons = [ShoppingCart, Layers, TrendingUp, Cpu];
const iconStyles = [
  { iconBg: "bg-blue-50", iconColor: "text-blue-500", logos: ["shopify", "custom"], featured: false },
  { iconBg: "bg-green-50", iconColor: "text-green-500", logos: ["shopify", "vtex", "tiendanube"], featured: true },
  { iconBg: "bg-violet-50", iconColor: "text-violet-500", logos: [], featured: false },
  { iconBg: "bg-orange-50", iconColor: "text-orange-500", logos: [], featured: false },
];

function PlatformLogo({ name }: { name: string }) {
  const styles: Record<string, string> = {
    shopify:    "text-[#96bf48] border-[#96bf48]/20 bg-[#96bf48]/5",
    vtex:       "text-[#f71963] border-[#f71963]/20 bg-[#f71963]/5",
    tiendanube: "text-[#00c2ff] border-[#00c2ff]/20 bg-[#00c2ff]/5",
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
          <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-secondary px-4 py-1.5 rounded-full">
            {t.servicesGrid.label}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-text-main mt-5 mb-4 tracking-tight"
            style={{ fontFamily: "'Barrio', cursive" }}
          >
            {t.servicesGrid.title}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {t.servicesGrid.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className={`relative bg-surface rounded-3xl p-8 border transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 ${style.featured ? "border-primary/15 shadow-[0_0_0_1px_rgba(16,82,202,0.08)]" : "border-border-light"}`}
              >
                {style.featured && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-widest text-primary bg-secondary px-3 py-1 rounded-full">
                    Partners
                  </span>
                )}

                <div className={`w-13 h-13 rounded-2xl ${style.iconBg} ${style.iconColor} flex items-center justify-center mb-5`}>
                  <Icon size={26} />
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
