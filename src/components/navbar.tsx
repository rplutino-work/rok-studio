"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import Image from "next/image";

export default function Navbar() {
  const { t, locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 80);
      setHidden(current > lastScrollY && current > 400);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#process", label: t.nav.process },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/85 backdrop-blur-2xl border-b border-dark-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#" className="relative z-10">
            <Image
              src="/logo.svg"
              alt="ROK Studio"
              width={72}
              height={28}
              className="invert opacity-90 hover:opacity-100 transition-opacity"
              priority
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] text-sage hover:text-text-white transition-colors duration-300 tracking-wide uppercase group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-warm group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <div className="w-px h-5 bg-sage/20 ml-2" />

            <button
              onClick={toggleLocale}
              className="font-mono text-[11px] text-sage hover:text-text-white transition-colors duration-300 uppercase tracking-[0.2em] border border-sage/20 hover:border-accent-warm/40 px-3.5 py-1.5 rounded-full"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>

            <a
              href="#contact"
              className="text-[13px] bg-accent-warm text-dark px-6 py-2.5 rounded-full font-semibold hover:bg-accent-glow transition-colors duration-300"
            >
              {t.hero.cta}
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-10 text-text-white w-10 h-10 flex items-center justify-center"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-start justify-center px-10 gap-2"
          >
            {/* Decorative circles */}
            <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full border border-accent-warm/10" />
            <div className="absolute bottom-[15%] left-[5%] w-[150px] h-[150px] rounded-full border border-sage/10" />

            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-text-white/80 hover:text-accent-warm transition-colors py-3"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <button
                onClick={toggleLocale}
                className="text-sm text-sage hover:text-text-white transition-colors uppercase tracking-widest border border-sage/20 px-5 py-2.5 rounded-full"
              >
                {locale === "es" ? "English" : "Español"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
