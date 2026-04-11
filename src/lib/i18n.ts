export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      work: "Proyectos",
      about: "Nosotros",
      blog: "Blog",
      cta: "Iniciar proyecto",
    },
    serviceMenu: {
      starting: {
        title: "Estoy empezando",
        description: "Llevá tu negocio al mundo digital.",
        features: ["Tu primera tienda online", "Plataforma recomendada", "Diseño y marca"],
      },
      growing: {
        title: "Quiero crecer",
        description: "Más ventas, más clientes, más presencia.",
        features: ["Optimización de conversión", "Marketing digital", "Estrategia multicanal"],
      },
      custom: {
        title: "Necesito algo a medida",
        description: "Tu idea, nuestra tecnología.",
        features: ["Sistemas personalizados", "Integraciones complejas", "Apps y plataformas"],
      },
    },
    hero: {
      badge: "Estudio de tecnología · Buenos Aires",
      headline: "ROK YOUR\nBUSINESS",
      sub: "Diseñamos, construimos y escalamos soluciones digitales que transforman tu negocio — desde tu primera tienda hasta sistemas que automatizan todo.",
      cta: "Iniciá tu proyecto",
      ctaSecondary: "Ver proyectos",
      trustedBy: "Confían en nosotros",
    },
    serviceCards: {
      label: "Soluciones",
      items: [
        {
          badge: "Para nuevos negocios",
          title: "Arrancando",
          description: "Tenés un producto o una idea. Te ayudamos a tener presencia digital real — sin vueltas, sin tecnicismos.",
          cta: "Explorar",
        },
        {
          badge: "Para negocios en crecimiento",
          title: "Escalando",
          description: "Ya vendés pero querés más. Optimizamos tu funnel, mejoramos conversiones y conectamos tus sistemas.",
          cta: "Explorar",
        },
        {
          badge: "Para necesidades complejas",
          title: "A medida",
          description: "Necesitás algo que no existe. Construimos plataformas, integraciones y apps desde cero.",
          cta: "Explorar",
        },
      ],
    },
    servicesGrid: {
      label: "Lo que hacemos",
      title: "Servicios & Tecnología",
      subtitle: "Las herramientas correctas, el equipo correcto. Construimos para que crezcas.",
      services: [
        {
          title: "Desarrollo E-commerce",
          description: "Tiendas online que venden. Shopify, VTEX, Tiendanube o a medida — con pagos, logística y stock resueltos.",
        },
        {
          title: "Shopify / VTEX / Tiendanube",
          description: "Somos partners certificados de las mejores plataformas. Conocemos cada rincón de sus ecosistemas.",
        },
        {
          title: "Crecimiento & CRO",
          description: "Tests A/B, analítica, optimización del funnel — estrategias basadas en datos que aumentan tus ventas.",
        },
        {
          title: "Desarrollo a medida",
          description: "Integraciones complejas, commerce headless, apps propias. Si lo podés imaginar, lo construimos.",
        },
      ],
    },
    caseStudies: {
      label: "Nuestros proyectos",
      title: "Casos de éxito",
      subtitle: "Resultados reales para marcas reales. Esto pasa cuando la estrategia se encuentra con la ejecución.",
      seeAll: "Ver todos los proyectos",
      cases: [
        {
          name: "Women Sea",
          category: "E-commerce de moda",
          description: "Rediseño completo en Shopify más optimización de conversión para una marca de indumentaria femenina.",
        },
        {
          name: "Disminart CRO",
          category: "Crecimiento & Analítica",
          description: "Overhaul del funnel basado en datos que redujo el abandono de carrito un 40% en 60 días.",
        },
        {
          name: "Restaura",
          category: "Desarrollo a medida",
          description: "Storefront headless con sistema de inventario y lógica multi-depósito personalizada.",
        },
      ],
    },
    projectForm: {
      label: "Empezamos",
      title: "Armemos tu proyecto",
      subtitle: "Te guiamos paso a paso. Tarda menos de 2 minutos.",
      steps: [
        {
          title: "¿Qué necesitás?",
          subtitle: "Elegí la opción más cercana a tu situación.",
          options: [
            { label: "Arrancar de cero", desc: "Primera presencia digital" },
            { label: "Hacer crecer mi marca", desc: "Más ventas, más alcance" },
            { label: "Algo a medida", desc: "Necesidades complejas o únicas" },
          ],
        },
        {
          title: "¿Qué plataforma usás?",
          subtitle: "O cuál estás considerando.",
          options: [
            { label: "Shopify", desc: "La más popular globalmente" },
            { label: "VTEX", desc: "Enterprise" },
            { label: "Tiendanube", desc: "La mejor para LATAM" },
            { label: "Otra / No sé", desc: "Te recomendamos una" },
          ],
        },
        {
          title: "¿Cuál es tu presupuesto?",
          subtitle: "Sin compromiso — nos ayuda a dimensionar la solución.",
          options: [
            { label: "Hasta USD 1.000", desc: "Alcance inicial" },
            { label: "USD 1.000 – 5.000", desc: "Proyecto mediano" },
            { label: "USD 5.000 – 10.000", desc: "Tienda completa" },
            { label: "Más de USD 10.000", desc: "Enterprise / complejo" },
          ],
        },
        {
          title: "¿Para cuándo lo necesitás?",
          subtitle: "Planificamos desde tu fecha límite.",
          options: [
            { label: "Ya mismo", desc: "Arranquemos rápido" },
            { label: "1 – 2 meses", desc: "Hay tiempo razonable" },
            { label: "3 – 6 meses", desc: "Timeline tranquilo" },
            { label: "Sin apuro", desc: "Estoy explorando" },
          ],
        },
      ],
      contactStep: {
        label: "Último paso",
        title: "¿Cómo te contactamos?",
        subtitle: "Email o teléfono — lo que prefieras.",
        placeholder: "tu@email.com o +54 9 11 0000-0000",
        submit: "Enviar proyecto",
        submitting: "Enviando...",
      },
      success: {
        title: "¡Ya lo tenemos!",
        subtitle: "Te respondemos en menos de 24 horas para hablar de tu proyecto.",
      },
    },
    footer: {
      tagline: "Tecnología que transforma negocios.",
      siteMap: "Mapa del sitio",
      social: "Redes sociales",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      links: {
        blog: "Blog",
        ecommerce: "E-commerce",
        services: "Servicios",
        projectBuilder: "Iniciar proyecto",
        contact: "Contacto",
      },
    },
  },

  en: {
    nav: {
      services: "Services",
      work: "Work",
      about: "About",
      blog: "Blog",
      cta: "Start a Project",
    },
    serviceMenu: {
      starting: {
        title: "I'm just starting",
        description: "Launch your business in the digital world.",
        features: ["Your first online store", "Platform selection", "Design & branding"],
      },
      growing: {
        title: "I want to grow",
        description: "More sales, more customers, more reach.",
        features: ["Conversion optimization", "Digital marketing", "Omnichannel strategy"],
      },
      custom: {
        title: "I need something custom",
        description: "Your idea, our technology.",
        features: ["Custom systems", "Complex integrations", "Apps & platforms"],
      },
    },
    hero: {
      badge: "Technology Studio · Buenos Aires",
      headline: "ROK YOUR\nBUSINESS",
      sub: "We design, build and scale digital solutions that transform your business — from your first store to systems that automate everything.",
      cta: "Start a Project",
      ctaSecondary: "View Work",
      trustedBy: "Trusted by growing brands",
    },
    serviceCards: {
      label: "Solutions",
      items: [
        {
          badge: "For new businesses",
          title: "Starting Out",
          description: "You have a product or an idea. We help you get real digital presence — no headaches, no tech jargon.",
          cta: "Explore",
        },
        {
          badge: "For growing brands",
          title: "Scaling Up",
          description: "You already sell but want more. We optimize your funnel, improve conversions and connect your systems.",
          cta: "Explore",
        },
        {
          badge: "For complex needs",
          title: "Going Custom",
          description: "You need something that doesn't exist yet. We build platforms, integrations and apps from scratch.",
          cta: "Explore",
        },
      ],
    },
    servicesGrid: {
      label: "What we do",
      title: "Services & Tech",
      subtitle: "The right tools, the right team. Built to grow with you.",
      services: [
        {
          title: "E-commerce Dev",
          description: "Online stores that sell. Shopify, VTEX, Tiendanube or custom — with payments, logistics and stock sorted.",
        },
        {
          title: "Shopify / VTEX / Tiendanube",
          description: "Certified partners on the best platforms. We know every corner of their ecosystems.",
        },
        {
          title: "Growth & CRO",
          description: "A/B testing, analytics, funnel optimization — data-driven strategies that lift your revenue.",
        },
        {
          title: "Custom Dev",
          description: "Complex integrations, headless commerce, bespoke apps. If you can dream it, we can build it.",
        },
      ],
    },
    caseStudies: {
      label: "Our work",
      title: "Case Studies",
      subtitle: "Real results for real brands. Here's what happens when strategy meets execution.",
      seeAll: "See all projects",
      cases: [
        {
          name: "Women Sea",
          category: "Fashion E-commerce",
          description: "Full Shopify redesign + conversion optimization for a women's apparel brand.",
        },
        {
          name: "Disminart CRO",
          category: "Growth & Analytics",
          description: "Data-driven funnel overhaul that cut cart abandonment by 40% in 60 days.",
        },
        {
          name: "Restaura",
          category: "Custom Dev",
          description: "Headless storefront with custom inventory system and multi-warehouse logic.",
        },
      ],
    },
    projectForm: {
      label: "Get started",
      title: "Project Builder",
      subtitle: "Guides you step by step. Takes less than 2 minutes.",
      steps: [
        {
          title: "What do you need?",
          subtitle: "Pick the option closest to your situation.",
          options: [
            { label: "Starting from scratch", desc: "First digital presence" },
            { label: "Growing my brand", desc: "More sales, bigger reach" },
            { label: "Something custom", desc: "Complex or unique needs" },
          ],
        },
        {
          title: "Which platform?",
          subtitle: "Or which one you're considering.",
          options: [
            { label: "Shopify", desc: "Most popular globally" },
            { label: "VTEX", desc: "Enterprise-grade" },
            { label: "Tiendanube", desc: "Best for LATAM" },
            { label: "Other / Not sure", desc: "We'll recommend one" },
          ],
        },
        {
          title: "What's your budget?",
          subtitle: "No commitment — helps us scope the right solution.",
          options: [
            { label: "Under $1,000", desc: "Starter scope" },
            { label: "$1k – $5k", desc: "Mid-range project" },
            { label: "$5k – $10k", desc: "Full-featured store" },
            { label: "$10k +", desc: "Enterprise / complex" },
          ],
        },
        {
          title: "When do you need it?",
          subtitle: "We'll plan backwards from your deadline.",
          options: [
            { label: "ASAP", desc: "Let's move fast" },
            { label: "1 – 2 months", desc: "Some breathing room" },
            { label: "3 – 6 months", desc: "Relaxed timeline" },
            { label: "No rush", desc: "Just exploring" },
          ],
        },
      ],
      contactStep: {
        label: "Final step",
        title: "How can we reach you?",
        subtitle: "Email or phone — whatever works for you.",
        placeholder: "your@email.com or +1 555 000 0000",
        submit: "Submit Project",
        submitting: "Sending...",
      },
      success: {
        title: "You're in!",
        subtitle: "We'll be in touch within 24 hours to discuss your project.",
      },
    },
    footer: {
      tagline: "Technology that transforms businesses.",
      siteMap: "Site Map",
      social: "Social Links",
      contact: "Contact",
      rights: "All rights reserved.",
      links: {
        blog: "Blog",
        ecommerce: "E-commerce",
        services: "Services",
        projectBuilder: "Start a Project",
        contact: "Contact",
      },
    },
  },
} as const;
