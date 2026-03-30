export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      process: "Proceso",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      headline: "Construimos soluciones digitales que impulsan tu negocio.",
      subheadline:
        "Ecommerce, sistemas a medida e inteligencia artificial para emprendedores y pymes que quieren crecer.",
      cta: "Hablemos",
      ctaSecondary: "Ver proyectos",
    },
    services: {
      label: "Servicios",
      title: "Lo que hacemos",
      subtitle:
        "Combinamos estrategia, diseño y tecnología para crear soluciones que generan resultados reales.",
      items: [
        {
          title: "Ecommerce",
          description:
            "Tiendas online de alto rendimiento. Diseño, desarrollo e integración con pasarelas de pago, logística y ERPs.",
        },
        {
          title: "Desarrollo a medida",
          description:
            "Sistemas, plataformas y aplicaciones web construidas desde cero para resolver las necesidades específicas de tu negocio.",
        },
        {
          title: "Integraciones",
          description:
            "Conectamos tus sistemas. APIs, middlewares y flujos de datos entre plataformas para que todo funcione en sintonía.",
        },
        {
          title: "Automatización con IA",
          description:
            "Implementamos inteligencia artificial para automatizar procesos, mejorar la toma de decisiones y escalar operaciones.",
        },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Marcas que confían en nosotros",
      subtitle:
        "Trabajamos con emprendedores, pymes y marcas en crecimiento que necesitan soluciones digitales reales, sin vueltas.",
      viewProject: "Ver proyecto",
      items: [
        {
          title: "Tienda online para marca de indumentaria",
          description:
            "Diseño, desarrollo y lanzamiento de ecommerce para una marca de ropa independiente. Integración con Mercado Pago, logística y gestión de stock.",
          tags: ["Ecommerce", "Moda", "Pyme"],
        },
        {
          title: "Sistema de turnos para estudio de pilates",
          description:
            "App de reservas, pagos online y gestión de clientes para un estudio boutique. Panel de administración a medida.",
          tags: ["Desarrollo a medida", "Salud"],
        },
        {
          title: "Catálogo digital para distribuidora",
          description:
            "Plataforma de pedidos con precios por cliente, listas de productos y seguimiento de entregas para una distribuidora local.",
          tags: ["B2B", "Integraciones"],
        },
        {
          title: "Automatización de ventas para pyme",
          description:
            "Bot de WhatsApp con IA para responder consultas, tomar pedidos y derivar a vendedores. Integrado con CRM y facturación.",
          tags: ["IA", "Automatización", "Pyme"],
        },
      ],
    },
    differentiator: {
      label: "¿Por qué ROK?",
      title: "Tecnología que marca la diferencia",
      items: [
        {
          title: "Potenciados por IA",
          description:
            "Integramos inteligencia artificial en nuestro proceso y en las soluciones que construimos. Más velocidad, más precisión, mejores resultados.",
        },
        {
          title: "Entrega ágil",
          description:
            "Trabajamos con metodologías ágiles y herramientas modernas. Iteramos rápido para que veas resultados desde las primeras semanas.",
        },
        {
          title: "Soluciones a medida",
          description:
            "No usamos plantillas genéricas. Cada proyecto se diseña y construye específicamente para los objetivos de tu negocio.",
        },
      ],
    },
    process: {
      label: "Proceso",
      title: "Cómo trabajamos",
      subtitle:
        "Un proceso claro y colaborativo para transformar tu visión en realidad.",
      steps: [
        {
          number: "01",
          title: "Entender",
          description:
            "Analizamos tu negocio, tus objetivos y los desafíos que enfrentás. Definimos juntos el alcance y la estrategia.",
        },
        {
          number: "02",
          title: "Diseñar",
          description:
            "Creamos la arquitectura, los flujos y el diseño visual. Validamos cada decisión antes de construir.",
        },
        {
          number: "03",
          title: "Construir",
          description:
            "Desarrollamos con las mejores tecnologías, iterando con entregas parciales para mantener el control.",
        },
        {
          number: "04",
          title: "Iterar",
          description:
            "Lanzamos, medimos y optimizamos. El producto evoluciona con datos reales y feedback continuo.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Empecemos a trabajar juntos",
      subtitle:
        "Contanos sobre tu proyecto y te respondemos en menos de 24 horas.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Contanos sobre tu proyecto",
        send: "Enviar mensaje",
      },
      whatsapp: "WhatsApp",
      schedule: "Agendar llamada",
      email: "Email",
    },
    footer: {
      tagline: "Soluciones digitales que impulsan negocios.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      process: "Process",
      about: "About",
      contact: "Contact",
    },
    hero: {
      headline: "We build digital solutions that help businesses grow.",
      subheadline:
        "Ecommerce, custom systems and AI for entrepreneurs and small businesses ready to grow.",
      cta: "Let's talk",
      ctaSecondary: "View projects",
    },
    services: {
      label: "Services",
      title: "What we do",
      subtitle:
        "We combine strategy, design and technology to create solutions that drive real results.",
      items: [
        {
          title: "Ecommerce",
          description:
            "High-performance online stores. Design, development and integration with payment gateways, logistics and ERPs.",
        },
        {
          title: "Custom development",
          description:
            "Systems, platforms and web applications built from scratch to solve your business's specific needs.",
        },
        {
          title: "Integrations",
          description:
            "We connect your systems. APIs, middlewares and data flows between platforms so everything works in sync.",
        },
        {
          title: "AI Automation",
          description:
            "We implement artificial intelligence to automate processes, improve decision-making and scale operations.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Brands that trust us",
      subtitle:
        "We work with entrepreneurs, small businesses and growing brands that need real digital solutions, no fluff.",
      viewProject: "View project",
      items: [
        {
          title: "Online store for clothing brand",
          description:
            "Design, development and launch of an ecommerce for an independent clothing brand. Payment gateway, logistics and stock management.",
          tags: ["Ecommerce", "Fashion", "SMB"],
        },
        {
          title: "Booking system for pilates studio",
          description:
            "Reservation app, online payments and client management for a boutique studio. Custom admin panel.",
          tags: ["Custom Dev", "Health"],
        },
        {
          title: "Digital catalog for distributor",
          description:
            "Ordering platform with per-client pricing, product lists and delivery tracking for a local distributor.",
          tags: ["B2B", "Integrations"],
        },
        {
          title: "Sales automation for small business",
          description:
            "AI-powered WhatsApp bot to answer inquiries, take orders and route to sales reps. Integrated with CRM and invoicing.",
          tags: ["AI", "Automation", "SMB"],
        },
      ],
    },
    differentiator: {
      label: "Why ROK?",
      title: "Technology that makes the difference",
      items: [
        {
          title: "AI-Powered",
          description:
            "We integrate artificial intelligence into our process and the solutions we build. More speed, more precision, better results.",
        },
        {
          title: "Agile delivery",
          description:
            "We work with agile methodologies and modern tools. We iterate fast so you see results from the first weeks.",
        },
        {
          title: "Tailored solutions",
          description:
            "We don't use generic templates. Every project is designed and built specifically for your business goals.",
        },
      ],
    },
    process: {
      label: "Process",
      title: "How we work",
      subtitle:
        "A clear and collaborative process to transform your vision into reality.",
      steps: [
        {
          number: "01",
          title: "Understand",
          description:
            "We analyze your business, your goals and the challenges you face. Together we define the scope and strategy.",
        },
        {
          number: "02",
          title: "Design",
          description:
            "We create the architecture, flows and visual design. Every decision is validated before building.",
        },
        {
          number: "03",
          title: "Build",
          description:
            "We develop with the best technologies, iterating with partial deliveries to maintain control.",
        },
        {
          number: "04",
          title: "Iterate",
          description:
            "We launch, measure and optimize. The product evolves with real data and continuous feedback.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's start working together",
      subtitle:
        "Tell us about your project and we'll get back to you in less than 24 hours.",
      form: {
        name: "Name",
        email: "Email",
        message: "Tell us about your project",
        send: "Send message",
      },
      whatsapp: "WhatsApp",
      schedule: "Schedule a call",
      email: "Email",
    },
    footer: {
      tagline: "Digital solutions that drive businesses.",
      rights: "All rights reserved.",
    },
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
