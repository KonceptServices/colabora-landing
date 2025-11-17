export const heroData = {
  title: "El espacio que necesitas para crecer a tu ritmo.",
  subtitle: "Oficinas privadas y salas de reunión listas para entrar. Servicios premium y comunidad creativa en Tres Cantos.",
};

export const footerData = {
  description: "El espacio que necesitas para crecer a tu ritmo.",
  services: {
    title: "Servicios",
    links: [
      { name: "Nuestros espacios", url: "#places" },
      { name: "Tarifas", url: "#tariffs" },
      { name: "Contactar", url: "#contact" }
    ]
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Términos y condiciones", url: "#" },
      { name: "Política de privacidad", url: "#" }
    ]
  },
  copyright: {
    company: "Paraninfo Business Center",
    text: "© 2025 All rights reserved."
  },
  additionalInfo: {
    license: "CSLB Contractor License B Class - 1039029",
    location: "Madrid, España."
  }
};

export const contactData = {
  title: "¿Preguntas?",
  subtitle: "Estamos aquí para ayudarte.",
  scheduleCall: {
    text: "Llamanos",
    url: "#schedule"
  },
  sendMessage: {
    text: "Enviar un mensaje",
    url: "#message"
  },
  location: {
    address: "Calle Luis Mansilla, 2 Local 5, 28760 Tres Cantos, Madrid",
    mapUrl: "#"
  }
};

export const navbarData = {
  logo: {
    text: "Paraninfo Business Center",
    url: "/"
  },
  buttons: [
    {
      id: "places",
      text: "Nuestros espacios",
      url: "#places",

    },
    {
      id: "tariffs",
      text: "Tarifas",
      url: "#tariffs",
      variant: "secondary"
    },
    {
      id: "contact",
      text: "Contactar",
      url: "#contact",
      variant: "primary"
    }
  ]
};

export const tariffsData = {
  cards: [
    {
      id: "tipo1",
      image: "/tariffs/2.jpeg",
      description: "Perfecto para emprendedores y freelancers que buscan un espacio profesional.",
      expandedTitle: "Tipo 1 - 400€/mes",
      expandedDescription: "• Puesto de trabajo individual\n• Mobiliario premium incluido\n• Acceso a todas las instalaciones\n• Conexión fibra óptica incluida\n• Seguridad 24h y acceso 365 días\n• Recepción de correo y paquetería\n• Zona de networking y cocina\n• Servicios básicos de impresión\n• 10 horas incluidas sala de juntas\n• Domiciliación social y fiscal incluida"
    },
    {
      id: "tipo2",
      image: "/tariffs/3.jpeg", 
      description: "Ideal para pequeños equipos que necesitan más espacio y flexibilidad.",
      expandedTitle: "Tipo 2 - 500€/mes",
      expandedDescription: "• Todos los servicios incluidos en el Tipo 1\n• Espacio ampliado para 2-3 personas\n• Mayor espacio de almacenamiento\n• 5 horas adicionales sala de juntas\n• Servicios avanzados de impresión"
    },
    {
      id: "tipo3",
      image: "/tariffs/1.jpeg",
      description: "La opción premium para empresas establecidas que buscan máximo confort.",
      expandedTitle: "Tipo 3 - 600€/mes",
      expandedDescription: "• Todos los servicios incluidos en el Tipo 2\n• Oficina privada para 4-6 personas\n• Mayor espacio de almacenamiento\n• 5 horas adicionales sala de juntas\n• Servicios premium de impresión"
    }
  ]
};

export const featuresData = [
  {
    id: "access",
    title: "Acceso Total",
    subtitle: "Disponible cuando lo necesites",
    description: "Acceso 24 horas / 365 días al año. Tu oficina está disponible cuando tú la necesites, sin restricciones de horario.",
    image: "/features/open.jpeg",
  },
  {
    id: "security",
    title: "Seguridad 24h",
    subtitle: "Protección total garantizada",
    description: "Seguridad 24 horas con personal especializado y sistemas de vigilancia avanzados para tu tranquilidad y la de tus pertenencias.",
    image: "/features/security.jpeg",
  },
  {
    id: "printing",
    title: "Centro de Impresión",
    subtitle: "Servicios de oficina completos",
    description: "Servicio de impresión, fotocopias y escáner de alta calidad disponible para todas tus necesidades documentales.",
    image: "/features/printing.jpeg",
  },
  {
    id: "networking",
    title: "Zona Networking",
    subtitle: "Espacios para conectar",
    description: "Zona de descanso y networking diseñada para fomentar las conexiones profesionales y el intercambio de ideas.",
    image: "/features/networking.jpeg",
  },
  {
    id: "kitchen",
    title: "Cocina Completa",
    subtitle: "Comodidades incluidas",
    description: "Café y té ilimitado con cocina completamente amueblada y equipada para tu comodidad durante toda la jornada laboral.",
    image: "/features/kitchen.jpeg",
  },
  {
    id: "meeting-room",
    title: "Sala de Juntas",
    subtitle: "Espacios para reuniones",
    description: "10 horas mensuales de sala de juntas incluidas, perfectamente equipada para tus presentaciones y reuniones importantes.",
    image: "/features/meeting.jpeg",
    additionalPricing: {
      hourly: "25 € / hora",
      daily: "200 € / día",
      bonus: "200 € / bono 10 horas"
    }
  },
  {
    id: "internet",
    title: "Fibra Óptica",
    subtitle: "Conectividad de alta velocidad",
    description: "Conexión a internet de banda ancha por fibra óptica para garantizar la máxima velocidad y estabilidad en todas tus actividades profesionales.",
    image: "/features/internet.jpeg",
  },
  {
    id: "furniture",
    title: "Mobiliario Premium",
    subtitle: "Todo lo que necesitas",
    description: "Mobiliario completo para despachos: mesa ergonómica, silla de oficina profesional y amplio espacio de almacenamiento.",
    image: "/features/premium.jpeg",
  },
  {
    id: "domiciliation",
    title: "Domiciliación",
    subtitle: "Servicios empresariales",
    description: "Posibilidad de domiciliación social y fiscal para establecer la sede de tu empresa en una ubicación prestigiosa.",
    image: "/features/domiciliation.jpeg",
  }
];

export const placesData = {
  places: [
    {
      id: "oficinas-privadas",
      name: "Cibeles",
      description: "Tipo 3",
      image: "/places/1.jpeg",
    },
    {
      id: "coworking",
      name: "Alcalá",
      description: "Tipo 1",
      image: "/places/2.jpeg",
    },
    {
      id: "sala-reuniones",
      name: "Neptuno",
      description: "Tipo 2",
      image: "/places/3.jpeg",
    },
    {
      id: "zona-comun",
      name: "Retiro",
      description: "Tipo 2",
      image: "/places/4.jpeg",
    },
    {
      id: "cabinas-privadas",
      name: "Debod",
      description: "Tipo 2",
      image: "/places/5.jpeg",
    }
  ]
};