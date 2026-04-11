"use client";

import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Cpu, Workflow } from "lucide-react";

const services = [
  {
    title: "E-commerce Dev",
    description: "End-to-end commerce experiences tailored for conversions.",
    icon: ShoppingCart,
  },
  {
    title: "Shopify/VTEX Experts",
    description: "Certified partners for the best e-commerce platforms.",
    icon: Workflow,
  },
  {
    title: "Growth & CRO",
    description: "Data-driven strategies to maximize your ROI & sales.",
    icon: TrendingUp,
  },
  {
    title: "Custom Solutions",
    description: "Complex integrations, headless commerce & bespoke apps.",
    icon: Cpu,
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6" style={{ fontFamily: "'Barrio', cursive" }}>Services & Tech</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Custom technology solutions built to scale your business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border-light shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
