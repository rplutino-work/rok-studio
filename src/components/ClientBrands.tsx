"use client";

import { motion } from "framer-motion";

// POW agency brands
const powBrands = [
  { name: "HEYAS", style: "tracking-[0.2em]" },
  { name: "SWEET", style: "font-black tracking-tight" },
  { name: "47 STREET", style: "font-black tracking-tight" },
  { name: "EQUUS", style: "tracking-[0.25em] font-light" },
  { name: "COMO QUIERES", style: "tracking-[0.15em] font-light" },
  { name: "VOLTA", style: "font-black italic tracking-tight" },
  { name: "WANAMA", style: "tracking-[0.2em] font-light" },
  { name: "CHEEKY", style: "font-black tracking-tight" },
  { name: "TUCCI", style: "tracking-[0.3em] font-light" },
  { name: "ZADIG & VOLTAIRE", style: "font-black tracking-tight text-sm" },
  { name: "PAULA CAHEN D'ANVERS", style: "tracking-[0.08em] font-light text-sm" },
];

// Freelance clients
const freelanceBrands = [
  { name: "MELE ROLLER", style: "tracking-[0.2em] font-light" },
  { name: "COMPACTFIT", style: "font-black tracking-tight" },
  { name: "SWISS BRAND", style: "tracking-[0.18em] font-light" },
  { name: "LUZ DE MAR", style: "tracking-[0.2em] italic font-light" },
  { name: "FARMAPIEL", style: "font-bold tracking-tight" },
  { name: "ABOLU", style: "tracking-[0.25em] font-light" },
];

// Combine all brands for both rows
const row1 = [...powBrands, ...freelanceBrands];
const row2 = [...freelanceBrands, ...powBrands];

function MarqueeRow({
  brands,
  reverse = false,
  speed = 60,
}: {
  brands: typeof row1;
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate enough times to fill
  const items = [...brands, ...brands, ...brands];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center gap-0 whitespace-nowrap"
        animate={{
          x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((brand, i) => (
          <span key={i} className="inline-flex items-center shrink-0">
            <span
              className={`px-8 md:px-12 text-lg md:text-xl text-white/25 hover:text-white/60 transition-colors duration-300 uppercase ${brand.style}`}
            >
              {brand.name}
            </span>
            <span className="text-white/8 text-xl select-none">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ClientBrands() {
  return (
    <section className="py-16 md:py-20 border-y border-white/[0.05] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          Marcas que confían en nuestro equipo
        </span>
      </motion.div>

      <div className="space-y-1">
        <MarqueeRow brands={row1} reverse={false} speed={55} />
        <MarqueeRow brands={row2} reverse={true} speed={50} />
      </div>
    </section>
  );
}
