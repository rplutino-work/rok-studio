"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Rocket, Store } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Starting Out",
    description: "We design, build and scale e-commerce experiences from the ground up.",
    icon: Store,
    link: "#",
    badge: "For new stores",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500"
  },
  {
    title: "Scaling Up",
    description: "Build your brand and scale your e-commerce operations seamlessly.",
    icon: Rocket,
    link: "#",
    badge: "For growing brands",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500"
  },
  {
    title: "Going Custom",
    description: "Personality-driven code and processes for custom requirements.",
    icon: Code,
    link: "#",
    badge: "For enterprise apps",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500"
  }
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white/50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={card.link} className="block group h-full">
                <div className="h-full glass-card rounded-3xl p-8 flex flex-col items-start transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                  {/* Background gradient blob */}
                  <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${card.color} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                  
                  <div className="mb-6 flex justify-between items-start w-full">
                    <div className={`p-4 rounded-2xl bg-white shadow-sm border border-border-light ${card.iconColor}`}>
                      <card.icon className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-muted bg-bg-base px-3 py-1 rounded-full border border-border-light">
                      {card.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-text-muted mb-8 leading-relaxed flex-grow">
                    {card.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between w-full border-t border-border-light pt-6">
                    <span className="font-semibold text-text-main group-hover:text-primary transition-colors">Explore</span>
                    <div className="w-10 h-10 rounded-full bg-bg-base border border-border-light flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      <ArrowUpRight className="w-5 h-5" />
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
