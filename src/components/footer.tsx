"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";
import Marquee from "./marquee";

export default function Footer() {
  const { t, locale } = useLocale();

  const marqueeItems =
    locale === "es"
      ? ["Ecommerce", "Desarrollo a medida", "Integraciones", "Automatización con IA", "Estrategia digital", "Consultoría"]
      : locale === "en"
      ? ["Ecommerce", "Custom development", "Integrations", "AI Automation", "Digital strategy", "Consulting"]
      : ["Ecommerce", "Desenvolvimento sob medida", "Integrações", "Automação com IA", "Estratégia digital", "Consultoria"];

  return (
    <footer className="bg-dark text-text-white border-t border-dark-border relative overflow-hidden">
      {/* Decorative ring */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full border border-sage/5" />

      {/* Marquee banner */}
      <div className="py-10 border-b border-dark-border overflow-hidden">
        <Marquee
          items={marqueeItems}
          className="text-3xl md:text-5xl font-bold tracking-tight text-dark-border-light/25"
          separator="·"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/logo.svg"
              alt="ROK Studio"
              width={64}
              height={26}
              className="invert opacity-80 mb-5"
            />
            <p className="text-sage text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">
              {locale === "es" ? "Navegación" : locale === "en" ? "Navigation" : "Navegação"}
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#services", label: t.nav.services },
                { href: "#projects", label: t.nav.projects },
                { href: "#process", label: t.nav.process },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-sage hover:text-accent-warm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">
              {t.contact.label}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@rokstudio.dev"
                className="text-sm text-sage hover:text-accent-warm transition-colors duration-300"
              >
                hello@rokstudio.dev
              </a>
              <a
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-sage hover:text-accent-warm transition-colors duration-300"
              >
                +54 9 11 0000-0000
              </a>
            </div>
          </div>
        </div>

        <div className="gradient-line my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage/60">
            &copy; {new Date().getFullYear()} ROK Studio. {t.footer.rights}
          </p>
          <p className="text-xs text-sage/40">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
