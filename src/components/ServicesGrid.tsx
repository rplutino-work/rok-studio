"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Cpu, Layers } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { ShopifyLogo, VTEXLogo, TiendanubeLogo } from "@/components/PartnerLogos";

const icons = [ShoppingCart, Layers, TrendingUp, Cpu];
const iconStyles = [
  { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", featured: false, showLogos: false },
  { iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", featured: true, showLogos: true },
  { iconBg: "bg-violet-500/10", iconColor: "text-violet-400", featured: false, showLogos: false },
  { iconBg: "bg-orange-500/10", iconColor: "text-orange-400", featured: false, showLogos: false },
];

function PartnerRow() {
  return (
    <div className="flex items-center gap-5 flex-wrap">
      {/* Shopify */}
      <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <ShopifyLogo className="h-5 w-5" />
        <span className="text-xs font-bold text-[#7AB55C] tracking-tight">Shopify</span>
      </div>
      {/* VTEX */}
      <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <VTEXLogo className="h-5 w-5" />
        <span className="text-xs font-bold text-[#ED125F] tracking-tight">VTEX</span>
      </div>
      {/* Tiendanube */}
      <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
        <TiendanubeLogo className="h-3.5 w-auto" style={{ maxWidth: "90px" }} />
      </div>
    </div>
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

                {style.showLogos && <PartnerRow />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
