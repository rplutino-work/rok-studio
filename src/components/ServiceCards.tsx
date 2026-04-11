"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Starting Out",
    description: "You have an idea or a product. We help you launch a store that looks professional and actually sells — no tech headaches.",
    badge: "For new stores",
    href: "#project-builder",
    gradient: "from-blue-500 to-cyan-400",
    lightBg: "from-blue-50 to-cyan-50",
    blob1: "from-blue-400 to-cyan-300",
    blob2: "from-sky-300 to-blue-200",
    textAccent: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    title: "Scaling Up",
    description: "You already sell online but want more. We optimize your funnel, boost conversions and help your brand reach the next level.",
    badge: "For growing brands",
    href: "#project-builder",
    gradient: "from-violet-500 to-pink-500",
    lightBg: "from-violet-50 to-pink-50",
    blob1: "from-violet-400 to-purple-300",
    blob2: "from-pink-300 to-rose-200",
    textAccent: "text-violet-600",
    borderHover: "hover:border-violet-200",
  },
  {
    title: "Going Custom",
    description: "You need something that doesn't exist yet. We build bespoke integrations, headless experiences and custom apps.",
    badge: "For complex needs",
    href: "#project-builder",
    gradient: "from-orange-500 to-amber-400",
    lightBg: "from-orange-50 to-amber-50",
    blob1: "from-orange-400 to-amber-300",
    blob2: "from-yellow-300 to-orange-200",
    textAccent: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card.href} className="block group h-full">
                <div className={`relative h-full rounded-3xl p-7 border border-border-light bg-gradient-to-br ${card.lightBg} overflow-hidden transition-all duration-500 ${card.borderHover} hover:shadow-card hover:-translate-y-1`}>

                  {/* Floating blobs */}
                  <div className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br ${card.blob1} opacity-30 blur-xl group-hover:opacity-50 group-hover:scale-125 transition-all duration-700`} />
                  <div className={`absolute right-12 bottom-16 w-16 h-16 rounded-full bg-gradient-to-br ${card.blob2} opacity-40 blur-lg animate-float-slow`} />

                  {/* Badge */}
                  <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-widest ${card.textAccent} mb-5`}>
                    {card.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-8">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className={`font-semibold text-sm ${card.textAccent} group-hover:gap-2 transition-all`}>
                      Explore
                    </span>
                    <div className={`w-9 h-9 rounded-full border border-current flex items-center justify-center ${card.textAccent} group-hover:bg-gradient-to-br group-hover:${card.gradient} group-hover:text-white group-hover:border-transparent transition-all duration-300`}>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
