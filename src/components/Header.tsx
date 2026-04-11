"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Store, TrendingUp, Code, Check, ChevronDown, Menu, X, Globe, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const ICONS = [Store, TrendingUp, Code];
const COLORS = [
  { color: "text-blue-500", bg: "bg-blue-50", accent: "border-blue-100 bg-blue-50/50" },
  { color: "text-violet-500", bg: "bg-violet-50", accent: "border-violet-100 bg-violet-50/50" },
  { color: "text-pink-500", bg: "bg-pink-50", accent: "border-pink-100 bg-pink-50/50" },
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
  const dropRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceKeys = ["starting", "growing", "custom"] as const;
  const serviceItems = serviceKeys.map((key, i) => ({
    icon: ICONS[i],
    color: COLORS[i].color,
    bg: COLORS[i].bg,
    accent: COLORS[i].accent,
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
    <header className="sticky top-0 z-50 w-full glass border-b border-white/[0.06]">
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
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-all group"
              >
                {t.nav.services}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""} group-hover:text-text-main`}
                />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[660px] glass-card rounded-3xl p-2 border border-border-light shadow-card"
                    style={{ transformOrigin: "top center" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setDropOpen(false)}
                          className="group flex flex-col gap-3 p-4 rounded-2xl hover:bg-surface-hover transition-all duration-200 border border-transparent hover:border-border-light"
                        >
                          <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                            <item.icon size={21} />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-text-main text-sm mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-text-muted text-xs leading-relaxed mb-3">
                              {item.description}
                            </p>
                            <ul className="space-y-1.5">
                              {item.features.map((f) => (
                                <li key={f} className="flex items-center gap-1.5 text-xs text-text-muted">
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
                className="px-4 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-all"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right — lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-all"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="text-xs font-semibold tracking-wide">{locale === "es" ? "EN" : "ES"}</span>
            </button>
            <Link
              href="#project-builder"
              className="group flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-hover transition-all shadow-[0_4px_12px_rgba(16,82,202,0.3)] hover:shadow-[0_6px_20px_rgba(16,82,202,0.4)] hover:-translate-y-0.5"
            >
              {t.nav.cta}
              <MoveRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile right — lang + hamburger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-semibold text-text-muted hover:text-text-main hover:bg-surface-hover transition-colors"
            >
              <Globe size={14} />
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              className="p-2.5 rounded-xl hover:bg-surface-hover transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — full redesign */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-border-light overflow-hidden bg-white/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-5 space-y-1">

              {/* Services section */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-surface-hover transition-colors text-left"
                >
                  <span className="font-semibold text-sm text-text-main">{t.nav.services}</span>
                  <ChevronDown
                    size={16}
                    className={`text-text-muted transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-1 space-y-1"
                    >
                      {serviceItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 px-4 py-3.5 rounded-2xl hover:bg-surface-hover transition-colors group"
                        >
                          <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 mt-0.5`}>
                            <item.icon size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-text-main group-hover:text-primary transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{item.description}</p>
                          </div>
                          <ArrowRight size={14} className="text-text-muted mt-1 shrink-0 group-hover:text-primary transition-colors" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider */}
              <div className="h-px bg-border-light mx-4" />

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
                    className="flex items-center px-4 py-3 rounded-2xl text-sm font-medium text-text-muted hover:text-text-main hover:bg-surface-hover transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border-light mx-4" />

              {/* CTA */}
              <div className="pt-1 pb-2 space-y-2">
                <Link
                  href="#project-builder"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3.5 rounded-2xl text-sm font-semibold shadow-[0_4px_12px_rgba(16,82,202,0.3)] hover:bg-primary-hover transition-all"
                >
                  {t.nav.cta}
                  <MoveRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
