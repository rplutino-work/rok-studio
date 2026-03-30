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

/**
 * Hidden SEO content rendered as semantic HTML for crawlers.
 * Invisible to users but provides rich keyword-dense text for search engines and AI.
 */
function SeoContent() {
  return (
    <div className="sr-only" aria-hidden="true">
      <h1>ROK Studio — Estudio Digital Argentina</h1>
      <article>
        <h2>Desarrollo de Ecommerce en Argentina</h2>
        <p>
          ROK Studio es un estudio digital argentino especializado en desarrollo de tiendas online,
          ecommerce de alto rendimiento, Shopify, headless commerce y soluciones a medida.
          Trabajamos con emprendedores, pymes y marcas en crecimiento de toda Latinoamérica.
          Integramos Mercado Pago, Stripe, logística con Andreani, Correo Argentino y OCA.
          Diseño web profesional, UX/UI, optimización de conversión y velocidad de carga.
        </p>
      </article>
      <article>
        <h2>Desarrollo Web a Medida — Sistemas y Aplicaciones</h2>
        <p>
          Creamos sistemas a medida, plataformas web, paneles de administración, aplicaciones web
          y herramientas internas. Utilizamos Next.js, React, TypeScript, Node.js, PostgreSQL.
          Desarrollo frontend y backend profesional para digitalizar procesos de negocio.
          Sistemas de turnos, reservas online, gestión de inventario, CRM personalizado.
        </p>
      </article>
      <article>
        <h2>Integraciones API — Conectamos tus Sistemas</h2>
        <p>
          Desarrollo de integraciones API, middlewares, webhooks y flujos de datos automatizados.
          Conectamos ERPs, CRMs, pasarelas de pago, sistemas de logística, facturación electrónica
          AFIP y herramientas de marketing. REST API, GraphQL, arquitectura de microservicios.
        </p>
      </article>
      <article>
        <h2>Automatización con Inteligencia Artificial</h2>
        <p>
          Implementamos IA para negocios: bots de WhatsApp inteligentes, chatbots con
          inteligencia artificial, automatización de atención al cliente, workflows automatizados,
          procesamiento de datos con machine learning. OpenAI, Claude, WhatsApp Business API.
          Automatización de ventas, lead qualification, respuestas automáticas 24/7.
        </p>
      </article>
      <article>
        <h2>Agencia Digital para Pymes y Emprendedores</h2>
        <p>
          Soluciones digitales accesibles para pequeñas y medianas empresas. Presencia digital
          profesional sin los costos de una agencia grande. Desarrollo web económico y profesional.
          Consultoría digital, estrategia de ecommerce, transformación digital para pymes.
          Buenos Aires, Argentina. Atendemos clientes en Argentina, Brasil, Chile, Colombia,
          México, Uruguay y toda Latinoamérica.
        </p>
      </article>
      <article lang="pt">
        <h2>Estúdio Digital para Empreendedores — Brasil e América Latina</h2>
        <p>
          ROK Studio é um estúdio digital especializado em ecommerce, desenvolvimento web sob medida,
          integrações API e automação com inteligência artificial. Atendemos empreendedores, PMEs
          e marcas em crescimento no Brasil e toda América Latina. Desenvolvimento de loja online,
          Shopify, sistemas personalizados, bots de WhatsApp com IA.
        </p>
      </article>
      <article lang="en">
        <h2>Digital Agency for Small Businesses — Latin America</h2>
        <p>
          ROK Studio is a digital agency from Argentina specializing in ecommerce development,
          custom web applications, API integrations, and AI automation. We serve entrepreneurs,
          small businesses, and growing brands across Latin America. Shopify development,
          headless commerce, Next.js, React, AI-powered WhatsApp bots, workflow automation.
        </p>
      </article>
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const onComplete = useCallback(() => setLoaded(true), []);

  return (
    <LocaleProvider>
      <SeoContent />
      <Loader onComplete={onComplete} />
      {loaded && (
        <>
          <SmoothScroll />
          <Navbar />
          <main role="main" itemScope itemType="https://schema.org/WebPage">
            <Hero />
            <Services />
            <div className="gradient-line" aria-hidden="true" />
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
