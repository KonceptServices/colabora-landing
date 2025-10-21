export const heroData = {
  title: "A beautifully simple way to build.",
  subtitle: "Oficinas privadas, coworking y salas de reunión listas para entrar. Servicios premium y comunidad creativa en el centro de la ciudad.",
};

export const footerData = {
  description: "Cover Technologies Inc. Transformamos espacios de trabajo con diseño personalizado y construcción rápida.",
  socialLinks: [
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Get in Touch", url: "#" }
  ],
  services: {
    title: "Servicios",
    links: [
      { name: "Explore Features", url: "#" },
      { name: "Our Process", url: "#" },
      { name: "Projects", url: "#" }
    ]
  },
  company: {
    title: "Empresa",
    links: [
      { name: "Our Story", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Fire Rebuild", url: "#" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "FAQ", url: "#" },
      { name: "Terms of Use", url: "#" },
      { name: "Privacy Policy", url: "#" }
    ]
  },
  copyright: {
    company: "Cover Technologies Inc.",
    text: "© 2025 All rights reserved."
  },
  additionalInfo: {
    license: "CSLB Contractor License B Class - 1039029",
    location: "Designed and manufactured in Los Angeles, California."
  }
};

export const contactData = {
  title: "Questions?",
  subtitle: "We're here to help.",
  scheduleCall: {
    text: "Schedule a Call",
    url: "#schedule"
  },
  sendMessage: {
    text: "Send Us a Message",
    url: "#message"
  }
};

export const navbarData = {
  logo: {
    text: "Cover",
    url: "/"
  },
  buttons: [
    {
      id: "explore",
      text: "Explore Features",
      url: "#features",
      variant: "secondary"
    },
    {
      id: "process",
      text: "Our Process",
      url: "#process",
      variant: "secondary"
    },
    {
      id: "get-started",
      text: "Get Started",
      url: "#contact",
      variant: "primary"
    }
  ]
};

export const featuresData = {
  cards: [
    {
      id: "tipo1",
      image: "/5.png",
      description: "Perfecto para emprendedores y freelancers que buscan un espacio profesional.",
      expandedTitle: "Tipo 1 - 400€/mes",
      expandedDescription: "• Puesto de trabajo individual\n• Acceso a todas las instalaciones\n• Conexión fibra óptica incluida\n• Seguridad 24h y acceso 365 días\n• Servicios básicos de impresión\n• Zona de networking y cocina"
    },
    {
      id: "tipo2",
      image: "/3.png", 
      description: "Ideal para pequeños equipos que necesitan más espacio y flexibilidad.",
      expandedTitle: "Tipo 2 - 500€/mes",
      expandedDescription: "• Espacio ampliado para 2-3 personas\n• Mobiliario premium incluido\n• Mayor espacio de almacenamiento\n• 5 horas adicionales sala de juntas\n• Servicios de impresión ilimitados\n• Posibilidad de domiciliación fiscal"
    },
    {
      id: "tipo3",
      image: "/2.png",
      description: "La opción premium para empresas establecidas que buscan máximo confort.",
      expandedTitle: "Tipo 3 - 600€/mes",
      expandedDescription: "• Oficina privada para 4-6 personas\n• Mobiliario ejecutivo de alta gama\n• Espacio de almacenamiento amplio\n• 15 horas mensuales sala de juntas\n• Servicios premium de conserjería\n• Domiciliación social y fiscal incluida"
    }
  ]
};

export const processSteps = [
  {
    id: "internet",
    title: "Fibra Óptica",
    subtitle: "Conectividad de alta velocidad",
    description: "Conexión a internet de banda ancha por fibra óptica para garantizar la máxima velocidad y estabilidad en todas tus actividades profesionales.",
    image: "/1.png",
  },
  {
    id: "security",
    title: "Seguridad 24h",
    subtitle: "Protección total garantizada",
    description: "Seguridad 24 horas con personal especializado y sistemas de vigilancia avanzados para tu tranquilidad y la de tus pertenencias.",
    image: "/2.png",
  },
  {
    id: "access",
    title: "Acceso Total",
    subtitle: "Disponible cuando lo necesites",
    description: "Acceso 24 horas / 365 días al año. Tu oficina está disponible cuando tú la necesites, sin restricciones de horario.",
    image: "/3.png",
  },
  {
    id: "printing",
    title: "Centro de Impresión",
    subtitle: "Servicios de oficina completos",
    description: "Servicio de impresión, fotocopias y escáner de alta calidad disponible para todas tus necesidades documentales.",
    image: "/4.png",
  },
  {
    id: "networking",
    title: "Zona Networking",
    subtitle: "Espacios para conectar",
    description: "Zona de descanso y networking diseñada para fomentar las conexiones profesionales y el intercambio de ideas.",
    image: "/1.png",
  },
  {
    id: "kitchen",
    title: "Cocina Completa",
    subtitle: "Comodidades incluidas",
    description: "Café y té ilimitado con cocina completamente amueblada y equipada para tu comodidad durante toda la jornada laboral.",
    image: "/2.png",
  },
  {
    id: "furniture",
    title: "Mobiliario Premium",
    subtitle: "Todo lo que necesitas",
    description: "Mobiliario completo para despachos: mesa ergonómica, silla de oficina profesional y amplio espacio de almacenamiento.",
    image: "/3.png",
  },
  {
    id: "domiciliation",
    title: "Domiciliación",
    subtitle: "Servicios empresariales",
    description: "Posibilidad de domiciliación social y fiscal para establecer la sede de tu empresa en una ubicación prestigiosa.",
    image: "/4.png",
  },
  {
    id: "meeting-room",
    title: "Sala de Juntas",
    subtitle: "Espacios para reuniones",
    description: "10 horas mensuales de sala de juntas incluidas, perfectamente equipada para tus presentaciones y reuniones importantes.",
    image: "/1.png",
  }
];

export const placesData = {
  places: [
    {
      id: "oficinas-privadas",
      name: "Espacio A",
      description: "Descripción 1",
      image: "/sections/2.png",
    },
    {
      id: "coworking",
      name: "Espacio B",
      description: "Descripción 2",
      image: "/sections/1.png",
    },
    {
      id: "sala-reuniones",
      name: "Espacio C",
      description: "Descripción 3",
      image: "/sections/3.png",
    },
    {
      id: "zona-comun",
      name: "Espacio D",
      description: "Descripción 4",
      image: "/sections/4.png",
    },
    {
      id: "cabinas-privadas",
      name: "Espacio E",
      description: "Descripción 5",
      image: "/sections/5.png",
    }
  ]
};