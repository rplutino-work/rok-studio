"use client";

import { useState, useCallback } from "react";
import { LocaleProvider } from "@/lib/locale-context";
import SmoothScroll from "@/lib/smooth-scroll";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Differentiator from "@/components/differentiator";
import Stats from "@/components/stats";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppBadge from "@/components/whatsapp-badge";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <LocaleProvider>
      <Loader onComplete={onComplete} />
      {loaded && (
        <>
          <SmoothScroll />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <div className="gradient-line" />
            <Stats />
            <Projects />
            <Differentiator />
            <Process />
            <Contact />
          </main>
          <Footer />
          <WhatsAppBadge />
        </>
      )}
    </LocaleProvider>
  );
}
