"use client";

import { useState } from "react";
import { MessageCircle, Calendar, Mail, Send, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import TextReveal, { FadeUp } from "./text-reveal";
import MagneticButton from "./magnetic-button";

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo proyecto - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:hello@rokstudio.dev?subject=${subject}&body=${body}`);
  };

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

        <div className="mb-20">
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
          {/* Form */}
          <FadeUp className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              {[
                { key: "name", type: "text", label: t.contact.form.name },
                { key: "email", type: "email", label: t.contact.form.email },
              ].map(({ key, type, label }) => (
                <div key={key} className="relative">
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focused === key || formData[key as keyof typeof formData]
                        ? "text-[11px] uppercase tracking-[0.2em] text-dark font-semibold -top-5"
                        : "text-text-light-muted text-base top-4"
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    onFocus={() => setFocused(key)}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b-2 border-cream-dark focus:border-dark px-0 py-4 text-text-dark text-base focus:outline-none transition-colors duration-300"
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focused === "message" || formData.message
                      ? "text-[11px] uppercase tracking-[0.2em] text-dark font-semibold -top-5"
                      : "text-text-light-muted text-base top-4"
                  }`}
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent border-b-2 border-cream-dark focus:border-dark px-0 py-4 text-text-dark text-base focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <MagneticButton
                as="button"
                onClick={() => {}}
                className="group bg-dark text-text-white px-10 py-4 rounded-full font-semibold text-base overflow-hidden inline-flex items-center gap-3 hover:bg-dark-elevated transition-colors duration-300"
              >
                {t.contact.form.send}
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </MagneticButton>
            </form>
          </FadeUp>

          {/* Channels */}
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
  );
}
