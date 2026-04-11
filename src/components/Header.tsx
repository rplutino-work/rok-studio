"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Store, TrendingUp, Code, Check, ChevronDown, Menu, X } from "lucide-react";

const serviceItems = [
  {
    icon: Store,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "I'm just starting",
    description: "Launch your first store the right way.",
    features: ["Online store setup", "Platform selection", "Design & branding"],
    href: "#project-builder",
  },
  {
    icon: TrendingUp,
    color: "text-violet-500",
    bg: "bg-violet-50",
    title: "I want to grow",
    description: "Scale your e-commerce revenue & reach.",
    features: ["CRO & analytics", "Performance tuning", "Omnichannel"],
    href: "#project-builder",
  },
  {
    icon: Code,
    color: "text-pink-500",
    bg: "bg-pink-50",
    title: "I need something custom",
    description: "Complex needs, bespoke solutions.",
    features: ["Custom integrations", "Headless commerce", "API development"],
    href: "#project-builder",
  },
];

const DROP_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const dropVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.22, ease: DROP_EASE } },
  exit:    { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.15 } },
};

export default function Header() {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="text-2xl">👋</span>
            <span className="text-primary text-2xl font-bold tracking-tighter" style={{ fontFamily: "'Barrio', cursive" }}>
              ROK.
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" ref={dropRef}>
            {/* Services dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-all"
              >
                Services
                <ChevronDown size={15} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] glass-card rounded-3xl p-5 border border-border-light shadow-card"
                    style={{ transformOrigin: "top center" }}
                  >
                    <div className="grid grid-cols-3 gap-3">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setDropOpen(false)}
                          className="group flex flex-col gap-3 p-4 rounded-2xl hover:bg-surface-hover transition-all duration-200"
                        >
                          <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="font-semibold text-text-main text-sm mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-text-muted text-xs leading-relaxed mb-2">
                              {item.description}
                            </p>
                            <ul className="space-y-1">
                              {item.features.map((f) => (
                                <li key={f} className="flex items-center gap-1.5 text-xs text-text-muted">
                                  <Check size={11} className={`shrink-0 ${item.color}`} />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {["Work", "About", "Blog"].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#project-builder"
              className="group flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-all shadow-[0_4px_12px_rgba(16,82,202,0.3)] hover:shadow-[0_6px_20px_rgba(16,82,202,0.4)] hover:-translate-y-0.5"
            >
              Start a Project
              <MoveRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-surface-hover transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border-light overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {serviceItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface-hover transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={16} />
                  </div>
                  <span className="font-medium text-sm">{item.title}</span>
                </Link>
              ))}
              <div className="border-t border-border-light mt-2 pt-3">
                {["Work", "About", "Blog"].map((label) => (
                  <Link key={label} href={`#${label.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-text-muted hover:text-text-main">
                    {label}
                  </Link>
                ))}
                <Link href="#project-builder" onClick={() => setMobileOpen(false)} className="mt-3 flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold">
                  Start a Project <MoveRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
