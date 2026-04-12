"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

const powBrands = [
  { name: "HEYAS",              style: "tracking-[0.22em] font-light" },
  { name: "SWEET",              style: "font-black tracking-tight" },
  { name: "47 STREET",          style: "font-black tracking-tight" },
  { name: "EQUUS",              style: "tracking-[0.28em] font-extralight" },
  { name: "COMO QUIERES",       style: "tracking-[0.16em] font-light" },
  { name: "VOLTA",              style: "font-black italic tracking-tight" },
  { name: "WANAMA",             style: "tracking-[0.22em] font-light" },
  { name: "CHEEKY",             style: "font-black tracking-tight" },
  { name: "TUCCI",              style: "tracking-[0.32em] font-extralight" },
  { name: "ZADIG & VOLTAIRE",   style: "font-black tracking-tight" },
  { name: "PAULA CAHEN D'ANVERS", style: "tracking-[0.08em] font-light" },
  { name: "PEPE GANGA",         style: "tracking-[0.12em] font-light" },
  { name: "PENGUIN",            style: "tracking-[0.2em] font-light" },
];

const freelanceBrands = [
  { name: "MELE ROLLER",     style: "tracking-[0.2em] font-light" },
  { name: "COMPACTFIT",      style: "font-black tracking-tight" },
  { name: "SWISS BRAND",     style: "tracking-[0.18em] font-light" },
  { name: "LUZ DE MAR",      style: "tracking-[0.2em] italic font-light" },
  { name: "FARMAPIEL",       style: "font-bold tracking-tight" },
  { name: "ABOLU",           style: "tracking-[0.28em] font-light" },
];

const row1 = [...powBrands, ...freelanceBrands];
const row2 = [...freelanceBrands, ...powBrands];

function MarqueeRow({ brands, reverse = false, speed = 55 }: {
  brands: { name: string; style: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const items = [...brands, ...brands, ...brands];
  return (
    <div className="overflow-hidden select-none">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {items.map((brand, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span className={`px-6 md:px-10 text-base md:text-lg text-white/18 hover:text-white/50 transition-colors duration-500 uppercase ${brand.style}`}>
              {brand.name}
            </span>
            <span className="text-white/6 text-base select-none mx-1">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientBrands() {
  const { locale } = useLocale();

  return (
    <section className="py-14 border-y border-white/[0.04] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-7 text-center"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/18">
          {locale === "es" ? "Marcas que confían en nuestro equipo" : "Brands that trust our team"}
        </span>
      </motion.div>

      <div className="space-y-0.5">
        <MarqueeRow brands={row1} reverse={false} speed={60} />
        <MarqueeRow brands={row2} reverse={true}  speed={50} />
      </div>
    </section>
  );
}
