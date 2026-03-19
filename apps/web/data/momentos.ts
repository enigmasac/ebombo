export interface CelebrationType {
  title: string;
  description: string;
  color: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface Reason {
  title: string;
  description: string;
}

export interface CompanyType {
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PersonalizationOption {
  title: string;
  items: string[];
}

export interface MomentosCountryData {
  slug: string;
  country: string;
  flag: string;
  cakeWord: string;
  cakeWordPlural: string;
  hero: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    text: string;
  };
  celebrationTypes: CelebrationType[];
  howItWorks: {
    title: string;
    steps: HowItWorksStep[];
  };
  cities: {
    title: string;
    list: string[];
  };
  reasons: {
    title: string;
    items: Reason[];
  };
  companyTypes: {
    title: string;
    items: CompanyType[];
  };
  personalization: {
    title: string;
    subtitle: string;
    options: PersonalizationOption[];
  };
  benefits: {
    title: string;
    items: Benefit[];
  };
  faqs: FaqItem[];
  contact: {
    title: string;
    subtitle: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

const celebrationTypesBase: CelebrationType[] = [
  {
    title: "Cumpleaños",
    description:
      "Sorprende a cada miembro de tu equipo en su día especial con una celebración que no olvidará.",
    color: "#FF6B35",
  },
  {
    title: "Aniversarios laborales",
    description:
      "Reconoce la lealtad y el compromiso de quienes llevan años construyendo empresa contigo.",
    color: "#7A33FF",
  },
  {
    title: "Bienvenida a nuevos empleados",
    description:
      "Haz que el primer día sea memorable con un detalle que diga 'te estábamos esperando'.",
    color: "#00B4D8",
  },
  {
    title: "Baby showers",
    description:
      "Celebra la llegada de un nuevo miembro a la familia de tu colaborador con dulzura.",
    color: "#FF85A1",
  },
  {
    title: "Reconocimientos y logros",
    description:
      "Premia el esfuerzo excepcional con algo más que un correo: un momento real de celebración.",
    color: "#2EC4B6",
  },
  {
    title: "Celebraciones especiales",
    description:
      "Día de la madre, fin de año, metas alcanzadas... cualquier excusa es buena para celebrar juntos.",
    color: "#E71D36",
  },
];

export const momentosCountries: MomentosCountryData[] = [
  {
    slug: "espana",
    country: "España",
    flag: "🇪🇸",
    cakeWord: "tarta",
    cakeWordPlural: "tartas",
    hero: {
      label: "EBOMBO MOMENTOS",
      title: "Tartas para celebrar a tu equipo en España",
      subtitle:
        "Entrega automatizada de tartas artesanales para cumpleaños, aniversarios, baby showers y todas las celebraciones de tu empresa. Sin logística, sin estrés.",
      cta: "Solicitar información",
    },
    intro: {
      title: "El detalle que marca la diferencia",
      text: "Cada celebración en tu empresa es una oportunidad para fortalecer vínculos. Con eBombo Momentos, automatizas la entrega de tartas artesanales para cumpleaños, aniversarios laborales, bienvenidas, baby showers y cualquier ocasión especial. Nosotros nos encargamos de todo: tú solo decides celebrar.",
    },
    celebrationTypes: celebrationTypesBase,
    howItWorks: {
      title: "¿Cómo funciona?",
      steps: [
        {
          number: "01",
          title: "Conecta tu equipo",
          description:
            "Integra tu base de datos de empleados o sube un CSV con fechas de cumpleaños, aniversarios y ocasiones especiales.",
        },
        {
          number: "02",
          title: "Personaliza cada momento",
          description:
            "Elige entre tartas artesanales, opciones sin gluten, veganas y más. Define sabores, tamaños y mensajes personalizados para cada tipo de celebración.",
        },
        {
          number: "03",
          title: "Automatiza las entregas",
          description:
            "Nuestro sistema programa automáticamente cada envío. Cumpleaños, aniversarios, baby showers... cada celebración llega en el momento perfecto.",
        },
        {
          number: "04",
          title: "Celebra sin preocuparte",
          description:
            "Recibe notificaciones de cada entrega y disfruta viendo cómo tu equipo se siente valorado en cada ocasión especial.",
        },
      ],
    },
    cities: {
      title: "Cobertura en toda España",
      list: [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Sevilla",
        "Málaga",
        "Bilbao",
        "Zaragoza",
        "Alicante",
        "Palma de Mallorca",
        "Las Palmas",
      ],
    },
    reasons: {
      title: "¿Por qué confiar en eBombo?",
      items: [
        {
          title: "Pasteleros artesanales locales",
          description:
            "Trabajamos con los mejores obradores de cada ciudad española, garantizando frescura y calidad en cada tarta.",
        },
        {
          title: "100% automatizado",
          description:
            "Una vez configurado, el sistema funciona solo. Cada cumpleaños, cada aniversario, cada celebración cubierta sin intervención manual.",
        },
        {
          title: "Personalización total",
          description:
            "Desde el sabor hasta el mensaje, pasando por opciones dietéticas especiales. Cada tarta se adapta a quien la recibe.",
        },
        {
          title: "Sin compromiso de permanencia",
          description:
            "Planes flexibles que se adaptan al tamaño de tu empresa. Escala hacia arriba o hacia abajo cuando lo necesites.",
        },
      ],
    },
    companyTypes: {
      title: "Para todo tipo de empresa",
      items: [
        {
          title: "Startups y scale-ups",
          description:
            "Construye cultura de equipo desde el día uno con detalles que importan.",
        },
        {
          title: "PYMEs",
          description:
            "Haz que cada empleado se sienta parte de algo especial sin dedicar tiempo a la logística.",
        },
        {
          title: "Grandes corporativos",
          description:
            "Gestiona cientos de celebraciones al mes de forma automática y centralizada.",
        },
        {
          title: "Equipos remotos",
          description:
            "Llega a cada miembro del equipo esté donde esté, en cualquier ciudad de España.",
        },
      ],
    },
    personalization: {
      title: "Personalización y opciones",
      subtitle:
        "Cada persona es única, y su celebración también debería serlo.",
      options: [
        {
          title: "Opciones dietéticas",
          items: [
            "Sin gluten",
            "Veganas",
            "Sin lactosa",
            "Sin frutos secos",
            "Bajas en azúcar",
          ],
        },
        {
          title: "Tamaños disponibles",
          items: [
            "Individual (1 persona)",
            "Pequeña (4-6 personas)",
            "Mediana (8-12 personas)",
            "Grande (15-20 personas)",
          ],
        },
        {
          title: "Complementos",
          items: [
            "Velas y decoración",
            "Mensaje personalizado",
            "Tarjeta corporativa",
            "Packaging premium",
            "Regalos adicionales",
          ],
        },
      ],
    },
    benefits: {
      title: "Beneficios para tu empresa",
      items: [
        {
          title: "Retención de talento",
          description:
            "Los empleados que se sienten valorados permanecen más tiempo. Un simple detalle marca la diferencia.",
        },
        {
          title: "Cultura corporativa",
          description:
            "Construye un ambiente donde celebrar sea parte del ADN de tu empresa.",
        },
        {
          title: "Cero logística",
          description:
            "Olvídate de organizar, comprar y entregar. Todo funciona en automático.",
        },
        {
          title: "Employer branding",
          description:
            "Tus empleados compartirán estos momentos. Tu marca empleadora se fortalece orgánicamente.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Cuánto cuesta el servicio de tartas en España?",
        answer:
          "El precio depende del número de empleados y la frecuencia de celebraciones. Ofrecemos planes desde 15€ por tarta individual hasta planes corporativos con tartas grandes. Solicita una cotización personalizada para tu empresa.",
      },
      {
        question: "¿En qué ciudades de España entregáis?",
        answer:
          "Actualmente cubrimos Madrid, Barcelona, Valencia, Sevilla, Málaga, Bilbao, Zaragoza, Alicante, Palma de Mallorca y Las Palmas. Estamos expandiéndonos constantemente a nuevas ciudades.",
      },
      {
        question: "¿Puedo elegir tartas sin gluten o veganas?",
        answer:
          "Sí, trabajamos con obradores especializados que ofrecen opciones sin gluten, veganas, sin lactosa, sin frutos secos y bajas en azúcar. Cada empleado puede indicar sus preferencias.",
      },
      {
        question: "¿Cómo se integra con mi sistema de RRHH?",
        answer:
          "Ofrecemos integración directa con los principales sistemas de gestión de RRHH, o puedes subir un CSV con los datos de tu equipo. La configuración inicial toma menos de 30 minutos.",
      },
      {
        question: "¿Qué pasa si un empleado no está en la oficina el día de su cumpleaños?",
        answer:
          "Nuestro sistema permite reprogramar entregas fácilmente. También podemos enviar a la dirección personal del empleado si trabaja en remoto.",
      },
      {
        question: "¿Solo hacéis cumpleaños o también otras celebraciones?",
        answer:
          "Cubrimos todo tipo de celebraciones: cumpleaños, aniversarios laborales, bienvenida de nuevos empleados, baby showers, reconocimientos por logros, días especiales y cualquier ocasión que quieras celebrar.",
      },
      {
        question: "¿Hay un mínimo de empleados para contratar el servicio?",
        answer:
          "No hay mínimo. Trabajamos con empresas desde 5 hasta más de 5.000 empleados. Los planes se adaptan al tamaño de tu equipo.",
      },
    ],
    contact: {
      title: "¿Listo para celebrar a tu equipo en España?",
      subtitle:
        "Cuéntanos sobre tu empresa y te enviaremos una propuesta personalizada.",
    },
    meta: {
      title:
        "Tartas para Empresas en España | Celebraciones Corporativas | eBombo Momentos",
      description:
        "Entrega automatizada de tartas artesanales para cumpleaños, aniversarios y celebraciones corporativas en España. Madrid, Barcelona, Valencia y más.",
    },
  },
  {
    slug: "mexico",
    country: "México",
    flag: "🇲🇽",
    cakeWord: "pastel",
    cakeWordPlural: "pasteles",
    hero: {
      label: "EBOMBO MOMENTOS",
      title: "Pasteles para celebrar a tu equipo en México",
      subtitle:
        "Entrega automatizada de pasteles artesanales para cumpleaños, aniversarios, baby showers y todas las celebraciones de tu empresa. Sin logística, sin estrés.",
      cta: "Solicitar información",
    },
    intro: {
      title: "El detalle que marca la diferencia",
      text: "Cada celebración en tu empresa es una oportunidad para fortalecer vínculos. Con eBombo Momentos, automatizas la entrega de pasteles artesanales para cumpleaños, aniversarios laborales, bienvenidas, baby showers y cualquier ocasión especial. Nosotros nos encargamos de todo: tú solo decides celebrar.",
    },
    celebrationTypes: celebrationTypesBase,
    howItWorks: {
      title: "¿Cómo funciona?",
      steps: [
        {
          number: "01",
          title: "Conecta tu equipo",
          description:
            "Integra tu base de datos de empleados o sube un CSV con fechas de cumpleaños, aniversarios y ocasiones especiales.",
        },
        {
          number: "02",
          title: "Personaliza cada momento",
          description:
            "Elige entre pasteles artesanales, opciones sin gluten, veganas y más. Define sabores, tamaños y mensajes personalizados para cada tipo de celebración.",
        },
        {
          number: "03",
          title: "Automatiza las entregas",
          description:
            "Nuestro sistema programa automáticamente cada envío. Cumpleaños, aniversarios, baby showers... cada celebración llega en el momento perfecto.",
        },
        {
          number: "04",
          title: "Celebra sin preocuparte",
          description:
            "Recibe notificaciones de cada entrega y disfruta viendo cómo tu equipo se siente valorado en cada ocasión especial.",
        },
      ],
    },
    cities: {
      title: "Cobertura en todo México",
      list: [
        "Ciudad de México",
        "Guadalajara",
        "Monterrey",
        "Querétaro",
        "Puebla",
        "Cancún",
        "Mérida",
        "León",
        "Tijuana",
        "Toluca",
      ],
    },
    reasons: {
      title: "¿Por qué confiar en eBombo?",
      items: [
        {
          title: "Pasteleros artesanales locales",
          description:
            "Trabajamos con las mejores pastelerías de cada ciudad mexicana, garantizando frescura y sabor auténtico en cada pastel.",
        },
        {
          title: "100% automatizado",
          description:
            "Una vez configurado, el sistema funciona solo. Cada cumpleaños, cada aniversario, cada celebración cubierta sin intervención manual.",
        },
        {
          title: "Personalización total",
          description:
            "Desde el sabor hasta el mensaje, pasando por opciones dietéticas especiales. Cada pastel se adapta a quien lo recibe.",
        },
        {
          title: "Sin compromiso de permanencia",
          description:
            "Planes flexibles que se adaptan al tamaño de tu empresa. Escala hacia arriba o hacia abajo cuando lo necesites.",
        },
      ],
    },
    companyTypes: {
      title: "Para todo tipo de empresa",
      items: [
        {
          title: "Startups y scale-ups",
          description:
            "Construye cultura de equipo desde el día uno con detalles que importan.",
        },
        {
          title: "PYMEs",
          description:
            "Haz que cada empleado se sienta parte de algo especial sin dedicar tiempo a la logística.",
        },
        {
          title: "Grandes corporativos",
          description:
            "Gestiona cientos de celebraciones al mes de forma automática y centralizada.",
        },
        {
          title: "Equipos remotos",
          description:
            "Llega a cada miembro del equipo esté donde esté, en cualquier ciudad de México.",
        },
      ],
    },
    personalization: {
      title: "Personalización y opciones",
      subtitle:
        "Cada persona es única, y su celebración también debería serlo.",
      options: [
        {
          title: "Opciones dietéticas",
          items: [
            "Sin gluten",
            "Veganos",
            "Sin lactosa",
            "Sin frutos secos",
            "Bajos en azúcar",
          ],
        },
        {
          title: "Tamaños disponibles",
          items: [
            "Individual (1 persona)",
            "Chico (4-6 personas)",
            "Mediano (8-12 personas)",
            "Grande (15-20 personas)",
          ],
        },
        {
          title: "Complementos",
          items: [
            "Velitas y decoración",
            "Mensaje personalizado",
            "Tarjeta corporativa",
            "Empaque premium",
            "Regalos adicionales",
          ],
        },
      ],
    },
    benefits: {
      title: "Beneficios para tu empresa",
      items: [
        {
          title: "Retención de talento",
          description:
            "Los colaboradores que se sienten valorados permanecen más tiempo. Un simple detalle marca la diferencia.",
        },
        {
          title: "Cultura corporativa",
          description:
            "Construye un ambiente donde celebrar sea parte del ADN de tu empresa.",
        },
        {
          title: "Cero logística",
          description:
            "Olvídate de organizar, comprar y entregar. Todo funciona en automático.",
        },
        {
          title: "Employer branding",
          description:
            "Tus colaboradores compartirán estos momentos. Tu marca empleadora se fortalece orgánicamente.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Cuánto cuesta el servicio de pasteles en México?",
        answer:
          "El precio depende del número de colaboradores y la frecuencia de celebraciones. Ofrecemos planes desde $250 MXN por pastel individual hasta planes corporativos con pasteles grandes. Solicita una cotización personalizada para tu empresa.",
      },
      {
        question: "¿En qué ciudades de México entregan?",
        answer:
          "Actualmente cubrimos Ciudad de México, Guadalajara, Monterrey, Querétaro, Puebla, Cancún, Mérida, León, Tijuana y Toluca. Estamos expandiéndonos constantemente a nuevas ciudades.",
      },
      {
        question: "¿Puedo elegir pasteles sin gluten o veganos?",
        answer:
          "Sí, trabajamos con pastelerías especializadas que ofrecen opciones sin gluten, veganas, sin lactosa, sin frutos secos y bajas en azúcar. Cada colaborador puede indicar sus preferencias.",
      },
      {
        question: "¿Cómo se integra con mi sistema de RRHH?",
        answer:
          "Ofrecemos integración directa con los principales sistemas de gestión de RRHH, o puedes subir un CSV con los datos de tu equipo. La configuración inicial toma menos de 30 minutos.",
      },
      {
        question: "¿Qué pasa si un colaborador no está en la oficina el día de su cumpleaños?",
        answer:
          "Nuestro sistema permite reprogramar entregas fácilmente. También podemos enviar a la dirección personal del colaborador si trabaja en remoto o home office.",
      },
      {
        question: "¿Solo hacen cumpleaños o también otras celebraciones?",
        answer:
          "Cubrimos todo tipo de celebraciones: cumpleaños, aniversarios laborales, bienvenida de nuevos colaboradores, baby showers, reconocimientos por logros, días especiales y cualquier ocasión que quieras celebrar.",
      },
      {
        question: "¿Hay un mínimo de colaboradores para contratar el servicio?",
        answer:
          "No hay mínimo. Trabajamos con empresas desde 5 hasta más de 5,000 colaboradores. Los planes se adaptan al tamaño de tu equipo.",
      },
    ],
    contact: {
      title: "¿Listo para celebrar a tu equipo en México?",
      subtitle:
        "Cuéntanos sobre tu empresa y te enviaremos una propuesta personalizada.",
    },
    meta: {
      title:
        "Pasteles para Empresas en México | Celebraciones Corporativas | eBombo Momentos",
      description:
        "Entrega automatizada de pasteles artesanales para cumpleaños, aniversarios y celebraciones corporativas en México. CDMX, Guadalajara, Monterrey y más.",
    },
  },
  {
    slug: "peru",
    country: "Perú",
    flag: "🇵🇪",
    cakeWord: "torta",
    cakeWordPlural: "tortas",
    hero: {
      label: "EBOMBO MOMENTOS",
      title: "Tortas para celebrar a tu equipo en Perú",
      subtitle:
        "Entrega automatizada de tortas artesanales para cumpleaños, aniversarios, baby showers y todas las celebraciones de tu empresa. Sin logística, sin estrés.",
      cta: "Solicitar información",
    },
    intro: {
      title: "El detalle que marca la diferencia",
      text: "Cada celebración en tu empresa es una oportunidad para fortalecer vínculos. Con eBombo Momentos, automatizas la entrega de tortas artesanales para cumpleaños, aniversarios laborales, bienvenidas, baby showers y cualquier ocasión especial. Nosotros nos encargamos de todo: tú solo decides celebrar.",
    },
    celebrationTypes: celebrationTypesBase,
    howItWorks: {
      title: "¿Cómo funciona?",
      steps: [
        {
          number: "01",
          title: "Conecta tu equipo",
          description:
            "Integra tu base de datos de colaboradores o sube un CSV con fechas de cumpleaños, aniversarios y ocasiones especiales.",
        },
        {
          number: "02",
          title: "Personaliza cada momento",
          description:
            "Elige entre tortas artesanales, opciones sin gluten, veganas y más. Define sabores, tamaños y mensajes personalizados para cada tipo de celebración.",
        },
        {
          number: "03",
          title: "Automatiza las entregas",
          description:
            "Nuestro sistema programa automáticamente cada envío. Cumpleaños, aniversarios, baby showers... cada celebración llega en el momento perfecto.",
        },
        {
          number: "04",
          title: "Celebra sin preocuparte",
          description:
            "Recibe notificaciones de cada entrega y disfruta viendo cómo tu equipo se siente valorado en cada ocasión especial.",
        },
      ],
    },
    cities: {
      title: "Cobertura en todo Perú",
      list: [
        "Lima",
        "Arequipa",
        "Trujillo",
        "Chiclayo",
        "Piura",
        "Cusco",
        "Huancayo",
        "Ica",
        "Tacna",
        "Cajamarca",
      ],
    },
    reasons: {
      title: "¿Por qué confiar en eBombo?",
      items: [
        {
          title: "Pasteleros artesanales locales",
          description:
            "Trabajamos con las mejores pastelerías de cada ciudad peruana, garantizando frescura y sabor auténtico en cada torta.",
        },
        {
          title: "100% automatizado",
          description:
            "Una vez configurado, el sistema funciona solo. Cada cumpleaños, cada aniversario, cada celebración cubierta sin intervención manual.",
        },
        {
          title: "Personalización total",
          description:
            "Desde el sabor hasta el mensaje, pasando por opciones dietéticas especiales. Cada torta se adapta a quien la recibe.",
        },
        {
          title: "Sin compromiso de permanencia",
          description:
            "Planes flexibles que se adaptan al tamaño de tu empresa. Escala hacia arriba o hacia abajo cuando lo necesites.",
        },
      ],
    },
    companyTypes: {
      title: "Para todo tipo de empresa",
      items: [
        {
          title: "Startups y scale-ups",
          description:
            "Construye cultura de equipo desde el día uno con detalles que importan.",
        },
        {
          title: "PYMEs",
          description:
            "Haz que cada colaborador se sienta parte de algo especial sin dedicar tiempo a la logística.",
        },
        {
          title: "Grandes corporativos",
          description:
            "Gestiona cientos de celebraciones al mes de forma automática y centralizada.",
        },
        {
          title: "Equipos remotos",
          description:
            "Llega a cada miembro del equipo esté donde esté, en cualquier ciudad del Perú.",
        },
      ],
    },
    personalization: {
      title: "Personalización y opciones",
      subtitle:
        "Cada persona es única, y su celebración también debería serlo.",
      options: [
        {
          title: "Opciones dietéticas",
          items: [
            "Sin gluten",
            "Veganas",
            "Sin lactosa",
            "Sin frutos secos",
            "Bajas en azúcar",
          ],
        },
        {
          title: "Tamaños disponibles",
          items: [
            "Individual (1 persona)",
            "Pequeña (4-6 personas)",
            "Mediana (8-12 personas)",
            "Grande (15-20 personas)",
          ],
        },
        {
          title: "Complementos",
          items: [
            "Velitas y decoración",
            "Mensaje personalizado",
            "Tarjeta corporativa",
            "Empaque premium",
            "Regalos adicionales",
          ],
        },
      ],
    },
    benefits: {
      title: "Beneficios para tu empresa",
      items: [
        {
          title: "Retención de talento",
          description:
            "Los colaboradores que se sienten valorados permanecen más tiempo. Un simple detalle marca la diferencia.",
        },
        {
          title: "Cultura corporativa",
          description:
            "Construye un ambiente donde celebrar sea parte del ADN de tu empresa.",
        },
        {
          title: "Cero logística",
          description:
            "Olvídate de organizar, comprar y entregar. Todo funciona en automático.",
        },
        {
          title: "Employer branding",
          description:
            "Tus colaboradores compartirán estos momentos. Tu marca empleadora se fortalece orgánicamente.",
        },
      ],
    },
    faqs: [
      {
        question: "¿Cuánto cuesta el servicio de tortas en Perú?",
        answer:
          "El precio depende del número de colaboradores y la frecuencia de celebraciones. Ofrecemos planes desde S/35 por torta individual hasta planes corporativos con tortas grandes. Solicita una cotización personalizada para tu empresa.",
      },
      {
        question: "¿En qué ciudades del Perú entregan?",
        answer:
          "Actualmente cubrimos Lima, Arequipa, Trujillo, Chiclayo, Piura, Cusco, Huancayo, Ica, Tacna y Cajamarca. Estamos expandiéndonos constantemente a nuevas ciudades.",
      },
      {
        question: "¿Puedo elegir tortas sin gluten o veganas?",
        answer:
          "Sí, trabajamos con pastelerías especializadas que ofrecen opciones sin gluten, veganas, sin lactosa, sin frutos secos y bajas en azúcar. Cada colaborador puede indicar sus preferencias.",
      },
      {
        question: "¿Cómo se integra con mi sistema de RRHH?",
        answer:
          "Ofrecemos integración directa con los principales sistemas de gestión de RRHH, o puedes subir un CSV con los datos de tu equipo. La configuración inicial toma menos de 30 minutos.",
      },
      {
        question: "¿Qué pasa si un colaborador no está en la oficina el día de su cumpleaños?",
        answer:
          "Nuestro sistema permite reprogramar entregas fácilmente. También podemos enviar a la dirección personal del colaborador si trabaja en remoto.",
      },
      {
        question: "¿Solo hacen cumpleaños o también otras celebraciones?",
        answer:
          "Cubrimos todo tipo de celebraciones: cumpleaños, aniversarios laborales, bienvenida de nuevos colaboradores, baby showers, reconocimientos por logros, días especiales y cualquier ocasión que quieras celebrar.",
      },
      {
        question: "¿Hay un mínimo de colaboradores para contratar el servicio?",
        answer:
          "No hay mínimo. Trabajamos con empresas desde 5 hasta más de 5,000 colaboradores. Los planes se adaptan al tamaño de tu equipo.",
      },
    ],
    contact: {
      title: "¿Listo para celebrar a tu equipo en Perú?",
      subtitle:
        "Cuéntanos sobre tu empresa y te enviaremos una propuesta personalizada.",
    },
    meta: {
      title:
        "Tortas para Empresas en Perú | Celebraciones Corporativas | eBombo Momentos",
      description:
        "Entrega automatizada de tortas artesanales para cumpleaños, aniversarios y celebraciones corporativas en Perú. Lima, Arequipa, Trujillo y más.",
    },
  },
];

export function getMomentosCountry(
  slug: string
): MomentosCountryData | undefined {
  return momentosCountries.find((c) => c.slug === slug);
}

export function getMomentosSlugs(): string[] {
  return momentosCountries.map((c) => c.slug);
}
