"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-blue/30 to-accent-pink/30 rounded-full blur-[100px] -z-10 mix-blend-multiply opacity-70 animate-pulse transition-all duration-1000" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] -z-10 mix-blend-multiply" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-text-main mb-6"
          >
            ROK YOUR <br />
            <span className="text-gradient">BUSINESS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            We design, build and scale e-commerce experiences that turn visitors into loyal customers. Friendly, premium, and built for growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#project-builder"
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-hover hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#work"
              className="w-full sm:w-auto bg-white text-text-main border border-border-light px-8 py-4 rounded-full font-medium hover:bg-surface-hover hover:scale-105 transition-all shadow-sm"
            >
              View Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
