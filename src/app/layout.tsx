import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const SITE_URL = "https://rok.com.ar";
const SITE_NAME = "ROK Studio";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f9fbff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ROK Studio — Estudio Digital Argentina | Ecommerce, Desarrollo Web & IA",
    template: "%s | ROK Studio",
  },

  description:
    "Estudio digital argentino especializado en ecommerce, desarrollo web a medida, integraciones API y automatización con inteligencia artificial para emprendedores, pymes y marcas en crecimiento de Latinoamérica. Shopify, headless commerce, Next.js, sistemas a medida.",

  keywords: [
    // Core services ES
    "estudio digital argentina",
    "desarrollo web argentina",
    "ecommerce argentina",
    "tienda online argentina",
    "desarrollo a medida",
    "agencia digital buenos aires",
    "diseño web profesional",
    "automatización con inteligencia artificial",
    "integraciones API",
    "sistemas a medida",
    // Ecommerce
    "shopify argentina",
    "shopify partner argentina",
    "tienda shopify",
    "headless commerce",
    "ecommerce para pymes",
    "tienda online para emprendedores",
    "mercado pago integración",
    "pasarela de pago argentina",
    "ecommerce alto rendimiento",
    // Dev
    "desarrollo web next.js",
    "aplicaciones web a medida",
    "panel de administración a medida",
    "sistema de gestión a medida",
    "plataforma web personalizada",
    "desarrollo frontend react",
    // IA & Automation
    "automatización whatsapp business",
    "bot whatsapp para negocios",
    "chatbot inteligencia artificial",
    "automatización de procesos",
    "workflows automatizados",
    "IA para pymes",
    "inteligencia artificial para negocios",
    // Integrations
    "integración ERP",
    "integración CRM",
    "API development",
    "middleware desarrollo",
    "conectar sistemas",
    // Target audience
    "soluciones digitales para pymes",
    "desarrollo web para emprendedores",
    "tecnología para marcas pequeñas",
    "presencia digital pyme",
    "digitalización de negocios",
    // PT (Brazil)
    "estúdio digital",
    "ecommerce brasil",
    "desenvolvimento web sob medida",
    "automação com IA",
    "loja online personalizada",
    // EN
    "digital studio latin america",
    "ecommerce development",
    "custom web development",
    "AI automation agency",
    "shopify development agency",
  ],

  authors: [{ name: "ROK Studio", url: SITE_URL }],
  creator: "ROK Studio",
  publisher: "ROK Studio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-AR": SITE_URL,
      "en": `${SITE_URL}/en`,
      "pt-BR": `${SITE_URL}/pt`,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: ["en_US", "pt_BR"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "ROK Studio — Estudio Digital Argentina | Ecommerce, Desarrollo & IA",
    description:
      "Construimos soluciones digitales que impulsan tu negocio. Ecommerce, desarrollo a medida, integraciones y automatización con IA para emprendedores y pymes de Latinoamérica.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ROK Studio — Estudio Digital Argentina",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ROK Studio — Estudio Digital Argentina",
    description:
      "Ecommerce, desarrollo a medida, integraciones y automatización con IA para emprendedores y pymes.",
    images: ["/og-image.png"],
    creator: "@rokstudio",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  category: "technology",

  other: {
    "google-site-verification": "REPLACE_WITH_YOUR_VERIFICATION_CODE",
    "msvalidate.01": "REPLACE_WITH_BING_CODE",
    // AI discovery
    "ai-content-declaration": "human-created",
    "classification": "Digital Agency, Web Development, Ecommerce, AI Automation",
  },
};

// JSON-LD Structured Data
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "ROK Studio",
    alternateName: ["ROK", "ROK Digital Studio", "ROK Estudio Digital"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description:
      "Estudio digital argentino especializado en ecommerce, desarrollo web a medida, integraciones API y automatización con inteligencia artificial.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Brazil" },
      { "@type": "Continent", name: "South America" },
    ],
    knowsLanguage: ["es", "en", "pt"],
    sameAs: [
      "https://github.com/rplutino-work",
      // Add social media URLs here
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["Spanish", "English", "Portuguese"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "ROK Studio",
    description: "Estudio digital argentino — Ecommerce, desarrollo web, integraciones y automatización con IA.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["es-AR", "en", "pt-BR"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "ROK Studio",
    image: `${SITE_URL}/logo.png`,
    url: SITE_URL,
    telephone: "+54-9-11-0000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "12",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios digitales",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ecommerce Development",
            description: "Desarrollo de tiendas online de alto rendimiento. Shopify, headless commerce y soluciones a medida con pasarelas de pago, logística y gestión de stock.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Development",
            description: "Desarrollo de sistemas, plataformas y aplicaciones web a medida para digitalizar procesos de negocio.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Integrations",
            description: "Integración de sistemas mediante APIs, middlewares y flujos de datos entre plataformas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description: "Implementación de inteligencia artificial, bots de WhatsApp, workflows automatizados y optimización de procesos con IA.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué servicios ofrece ROK Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ROK Studio ofrece desarrollo de ecommerce (Shopify, headless, a medida), desarrollo web a medida (sistemas, plataformas, apps), integraciones API (ERP, CRM, pasarelas de pago) y automatización con inteligencia artificial (bots WhatsApp, workflows, optimización de procesos).",
        },
      },
      {
        "@type": "Question",
        name: "¿ROK Studio trabaja con pymes y emprendedores?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ROK Studio se especializa en trabajar con emprendedores, pymes y marcas en crecimiento de Argentina, Brasil y toda Latinoamérica. Ofrecemos soluciones digitales profesionales sin la burocracia de una agencia grande.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda un proyecto de ecommerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del alcance, pero un ecommerce estándar en Shopify puede estar listo en 2-4 semanas. Soluciones headless o a medida pueden tomar de 4 a 8 semanas. Trabajamos con entregas parciales para que veas avances desde la primera semana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tecnologías usan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabajamos con Shopify, Next.js, React, Node.js, PostgreSQL, APIs REST y GraphQL, integraciones con Mercado Pago, WhatsApp Business API, y herramientas de IA como OpenAI y Claude para automatización.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen soporte después del lanzamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos planes de soporte y mantenimiento continuo. Después del lanzamiento, iteramos y optimizamos basándonos en datos reales y feedback de tus usuarios.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barrio&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-mesh min-h-screen flex flex-col font-body text-text-main">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
