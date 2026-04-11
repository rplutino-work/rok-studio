"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Store, TrendingUp, Code, Check, ChevronDown, Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const ICONS = [Store, TrendingUp, Code];
const COLORS = [
  { color: "text-blue-400", bg: "bg-blue-500/10" },
  { color: "text-violet-400", bg: "bg-violet-500/10" },
  { color: "text-pink-400", bg: "bg-pink-500/10" },
];

const DROP_EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const dropVariants = {
  hidden:  { opacity: 0, y: -6, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.2, ease: DROP_EASE } },
  exit:    { opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.12 } },
};

const mobileVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.25, ease: DROP_EASE } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.18 } },
};

export default function Header() {
  const { t, locale, toggleLocale } = useLocale();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceKeys = ["starting", "growing", "custom"] as const;
  const serviceItems = serviceKeys.map((key, i) => ({
    icon: ICONS[i],
    color: COLORS[i].color,
    bg: COLORS[i].bg,
    title: t.serviceMenu[key].title,
    description: t.serviceMenu[key].description,
    features: t.serviceMenu[key].features,
    href: "#project-builder",
  }));

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(9, 9, 14, 0.55)"
          : "rgba(9, 9, 14, 0.08)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(255,255,255,0.0)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-rok-nuevo.png"
              alt="ROK Studio"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav — absolutely centered */}
          <nav
            className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2"
            ref={dropRef}
          >
            {/* Services dropdown — hover */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 transition-all group"
              >
                {t.nav.services}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] rounded-3xl p-2 border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
                    style={{
                      background: "rgba(12,13,20,0.92)",
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      transformOrigin: "top center",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setDropOpen(false)}
                          className="group flex flex-col gap-3 p-4 rounded-2xl hover:bg-white/6 transition-all duration-200 border border-transparent hover:border-white/8"
                        >
                          <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                            <item.icon size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-white/90 text-sm mb-1 group-hover:text-white transition-colors">
                              {item.title}
                            </p>
                            <p className="text-white/40 text-xs leading-relaxed mb-3">
                              {item.description}
                            </p>
                            <ul className="space-y-1.5">
                              {item.features.map((f) => (
                                <li key={f} className="flex items-center gap-1.5 text-xs text-white/35">
                                  <Check size={10} className={`shrink-0 ${item.color}`} />
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

            {[
              { label: t.nav.work, href: "#work" },
              { label: t.nav.about, href: "#about" },
              { label: t.nav.blog, href: "#blog" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/8 transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white/80 hover:bg-white/8 transition-all"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="text-xs font-semibold tracking-wide">{locale === "es" ? "EN" : "ES"}</span>
            </button>
            {/* CTA — neutral gray glass, no blue */}
            <Link
              href="#project-builder"
              className="group flex items-center gap-2 bg-white/10 text-white/85 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/16 hover:text-white hover:border-white/25 transition-all backdrop-blur-sm"
            >
              {t.nav.cta}
              <MoveRight size={14} className="transition-transform group-hover:translate-x-0.5 opacity-60" />
            </Link>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-semibold text-white/50 hover:text-white hover:bg-white/8 transition-colors"
            >
              <Globe size={14} />
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              className="p-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.div animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t border-white/6"
            style={{
              background: "rgba(9,9,14,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="container mx-auto px-4 py-5 space-y-1">

              {/* Services collapsible */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/6 transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-white/80">{t.nav.services}</span>
                  <ChevronDown
                    size={16}
                    className={`text-white/40 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-1 space-y-0.5"
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 px-4 py-3.5 rounded-2xl hover:bg-white/6 transition-colors group"
                        >
                          <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                            <item.icon size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-white/80 group-hover:text-white transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-white/35 mt-0.5 leading-relaxed">{item.description}</p>
                          </div>
                          <ArrowRight size={14} className="text-white/25 mt-1 shrink-0 group-hover:text-white/50 transition-colors" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-px bg-white/6 mx-4" />

              {/* Nav links */}
              <div className="space-y-0.5">
                {[
                  { label: t.nav.work, href: "#work" },
                  { label: t.nav.about, href: "#about" },
                  { label: t.nav.blog, href: "#blog" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-2xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/6 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/6 mx-4" />

              {/* CTA */}
              <div className="pt-1 pb-2">
                <Link
                  href="#project-builder"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-white/10 text-white/85 border border-white/15 px-5 py-3.5 rounded-2xl text-sm font-semibold hover:bg-white/15 hover:text-white transition-all"
                >
                  {t.nav.cta}
                  <MoveRight size={15} className="opacity-60" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
