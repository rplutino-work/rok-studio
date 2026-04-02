"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar, Mail, ArrowUpRight, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp } from "./text-reveal";
import MagneticButton from "./magnetic-button";
import TypeformContact from "./typeform-contact";

export default function Contact() {
  const { t } = useLocale();
  const [formOpen, setFormOpen] = useState(false);

  const channels = [
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      sublabel: "+54 9 11 0000-0000",
      href: "https://wa.me/5491100000000",
      hoverBorder: "hover:border-green-400/30",
      iconColor: "group-hover:text-green-400",
    },
    {
      icon: Calendar,
      label: t.contact.schedule,
      sublabel: "30 min — Google Meet",
      href: "#",
      hoverBorder: "hover:border-blue-400/30",
      iconColor: "group-hover:text-blue-400",
    },
    {
      icon: Mail,
      label: t.contact.email,
      sublabel: "hello@rokstudio.dev",
      href: "mailto:hello@rokstudio.dev",
      hoverBorder: "hover:border-violet-400/30",
      iconColor: "group-hover:text-violet-400",
    },
  ];

  return (
    <>
      <section id="contact" className="py-32 md:py-44 px-6 bg-cream text-text-dark relative overflow-hidden">
        {/* Decorative geometry */}
        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full border border-light-border/40" />
        <div className="absolute top-[10%] left-[-50px] w-[200px] h-[200px] rounded-full bg-accent-warm/8" />
        <div className="absolute top-[50%] right-[8%] w-4 h-4 rounded-full bg-dark/10 animate-geo-float" />

        <div className="relative max-w-7xl mx-auto">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-sage mb-5 block">
              {t.contact.label}
            </span>
          </FadeUp>

          <div className="mb-16">
            <TextReveal
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6"
            >
              {t.contact.title}
            </TextReveal>
            <FadeUp delay={0.3}>
              <p className="text-text-light-muted text-lg leading-relaxed max-w-xl">
                {t.contact.subtitle}
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* CTA principal — abre el formulario Typeform */}
            <FadeUp className="lg:col-span-3 flex flex-col justify-center">
              <div className="space-y-6">
                <p className="text-text-light-muted text-base leading-relaxed max-w-md">
                  Completá el formulario y te armamos una propuesta a medida. Tarda menos de 2 minutos.
                </p>

                <MagneticButton
                  as="button"
                  onClick={() => setFormOpen(true)}
                  className="group bg-dark text-text-white px-10 py-5 rounded-full font-semibold text-base overflow-hidden inline-flex items-center gap-3 hover:bg-dark-elevated transition-colors duration-300"
                >
                  Empecemos
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </MagneticButton>

                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-light-muted/50">
                  Respuesta en menos de 24 hs
                </p>
              </div>
            </FadeUp>

            {/* Canales alternativos */}
            <FadeUp delay={0.2} className="lg:col-span-2 flex flex-col gap-4">
              {channels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={i}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-6 rounded-2xl border border-cream-dark bg-white hover:shadow-lg hover:shadow-dark/5 transition-all duration-500 ${channel.hoverBorder}`}
                  >
                    <div className="flex items-center gap-5">
                      <Icon size={22} className={`text-text-light-muted transition-colors duration-500 ${channel.iconColor}`} />
                      <div>
                        <span className="font-semibold block text-[15px]">
                          {channel.label}
                        </span>
                        <span className="text-text-light-muted text-sm">
                          {channel.sublabel}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-text-light-muted opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    />
                  </a>
                );
              })}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Typeform modal */}
      <AnimatePresence>
        {formOpen && <TypeformContact onClose={() => setFormOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
