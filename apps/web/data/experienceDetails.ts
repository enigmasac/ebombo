type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

interface ExperienceDetail {
  slug: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  badge: string;
  metaPills: string[];
  bodyContent: ContentBlock[];
}

export const experienceDetails: ExperienceDetail[] = 
[
  {
    "slug": "penka-corporativa-uruguay",
    "title": "Penka corporativa en Uruguay para empresas",
    "heroDescription": "Organiza una penka corporativa en Uruguay para motivar equipos, fortalecer la cultura y generar una competencia interna divertida.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/03/Penka-Corporativa-Uruguay-.jpg",
    "badge": "Deporte",
    "metaPills": [
      "Integración",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organizá una penka corporativa en tu empresa y convertí cada partido del Mundial en un momento de conexión real, competencia sana y fútbol compartido entre todo el equipo."
      },
      {
        "type": "h2",
        "text": "¿Qué es una penka corporativa y por qué funciona tan bien en Uruguay?"
      },
      {
        "type": "p",
        "text": "En Uruguay la penka no necesita presentación. Es parte del ritual futbolero de toda la vida: antes de cada torneo importante, cada uno anota sus pronósticos, los compara con los del resto y durante semanas el fútbol se convierte en el tema de conversación que une a personas que de otra forma quizás nunca hablarían de nada fuera del trabajo."
      },
      {
        "type": "p",
        "text": "Lo que quizás no habías pensado es lo bien que funciona ese mismo formato dentro de una empresa."
      },
      {
        "type": "p",
        "text": "Cuando organizás una penka corporativa, pasa algo que pocas dinámicas de team building logran: la gente participa de forma genuina, sin que nadie la obligue, porque quiere. El contador que normalmente solo habla de balances de repente tiene una opinión muy firme sobre si Uruguay llega a cuartos."
      },
      {
        "type": "p",
        "text": "La gerenta que parece inalcanzable resulta ser la más fanática de todos. Y el equipo que trabaja remoto desde el interior del país está tan metido en el ranking interno como el que está en la oficina de Montevideo."
      },
      {
        "type": "p",
        "text": "En Uruguay el fútbol no es solo un deporte: es identidad. Somos el país más pequeño en ganar dos Mundiales, la cuna de la Celeste, una nación que respira fútbol de una forma que pocos países en el mundo pueden igualar."
      },
      {
        "type": "p",
        "text": "Eso hace que la penka corporativa tenga acá una resonancia especial, una naturalidad y una intensidad que en otros contextos simplemente no existe."
      },
      {
        "type": "p",
        "text": "En eBombo llevamos años organizando penkas corporativas para empresas uruguayas y de toda la región."
      },
      {
        "type": "p",
        "text": "Sabemos lo que genera participación masiva, lo que mantiene el interés vivo durante todo el torneo y cómo convertir una quiniela en una experiencia de cohesión que el equipo recuerda mucho después de que se apague el último partido."
      },
      {
        "type": "h2",
        "text": "La Penka del Mundial: el Formato que Paraliza las Oficinas Uruguayas"
      },
      {
        "type": "h3",
        "text": "Por Qué el Mundial es el Torneo Ideal para una Penka Corporativa"
      },
      {
        "type": "p",
        "text": "El Mundial es el único evento deportivo capaz de unir a toda una oficina sin importar edades, gustos ni perfiles. No hace falta ser un fanático para tener una opinión sobre si la Celeste pasa la fase de grupos, sobre si Messi puede con todo o sobre qué selección africana va a dar la sorpresa del torneo."
      },
      {
        "type": "p",
        "text": "Con el nuevo formato de 48 selecciones, hay partidos durante más de un mes, lo que significa más de cuatro semanas de conversación, de actualizaciones de ranking, de predicciones cumplidas y de pronósticos que salen desastrosamente mal. Ese arco largo es exactamente lo que necesita una penka corporativa para generar cohesión real: no es un evento de un día, es un proceso compartido que construye vínculos semana a semana."
      },
      {
        "type": "h3",
        "text": "Cómo Funciona la Penka del Mundial en tu Empresa"
      },
      {
        "type": "p",
        "text": "El formato clásico es simple y efectivo: antes del inicio del torneo, cada participante rellena su quiniela completa. Pronostica quién gana cada grupo, quién pasa a octavos, quién llega a semis, quién juega la final y quién se lleva la Copa del Mundo. También puede incluir pronósticos sobre el máximo goleador, la selección más goleadora o el jugador revelación del torneo."
      },
      {
        "type": "p",
        "text": "A partir de ahí, cada resultado real suma o resta puntos según lo que cada uno predijo. El ranking se actualiza después de cada jornada y la competencia interna sigue su propio camino paralelo al torneo, con sus propios líderes, sus propias remontadas y sus propios momentos de gloria y drama."
      },
      {
        "type": "p",
        "text": "Diseñamos el sistema de puntuación para que no sea necesario saber de fútbol para tener opciones reales de ganar. Las predicciones aleatorias a veces aciertan más que las expertas, y esa imprevisibilidad es parte esencial del encanto."
      },
      {
        "type": "h3",
        "text": "La Penka de la Celeste: Cuando Uruguay Está en el Mundial"
      },
      {
        "type": "p",
        "text": "Cuando la Celeste clasifica, la penka corporativa adquiere otra dimensión. Los partidos de Uruguay se convierten en eventos colectivos dentro de la empresa, la tensión del ranking interno se mezcla con la tensión del partido, y cada resultado de la selección tiene consecuencias en la clasificación de la penka que generan conversaciones que se extienden durante días."
      },
      {
        "type": "p",
        "text": "Organizamos penkas que tienen en cuenta el calendario de la Celeste, con comunicaciones especiales antes y después de cada partido de Uruguay y dinámicas adicionales centradas en el rendimiento de la selección que multiplican el engagement interno durante las semanas en que la Celeste está compitiendo."
      },
      {
        "type": "h2",
        "text": "Otros Torneos para tu Penka Corporativa en Uruguay"
      },
      {
        "type": "h3",
        "text": "Penka de la Copa América"
      },
      {
        "type": "p",
        "text": "La Copa América es el segundo torneo de mayor pasión en Uruguay. Con la historia de la Celeste en el torneo continental y la rivalidad permanente con Argentina y Brasil, cada edición genera una intensidad que convierte la penka corporativa en algo casi obligatorio para cualquier empresa que quiera aprovechar ese momento."
      },
      {
        "type": "h3",
        "text": "Penka de la Champions League"
      },
      {
        "type": "p",
        "text": "Para empresas donde hay mucho seguimiento del fútbol europeo, la Champions es ideal. Real Madrid, Liverpool, Bayern, los grandes clubes tienen seguidores apasionados en toda Uruguay, y la fase de eliminatorias directas genera debates semana a semana que la penka corporativa puede canalizar perfectamente."
      },
      {
        "type": "h3",
        "text": "Penka del Torneo Uruguayo"
      },
      {
        "type": "p",
        "text": "Para equipos con fuerte identidad de clubes locales, el Campeonato Uruguayo ofrece un formato de temporada larga. Nacional, Peñarol y el resto del fútbol uruguayo generan pasiones intensas que no necesitan ningún estímulo externo para encenderse, y la penka corporativa simplemente les da un cauce organizado."
      },
      {
        "type": "h2",
        "text": "Cómo Organizamos tu Penka Corporativa"
      },
      {
        "type": "h3",
        "text": "Diseño y Configuración a Medida"
      },
      {
        "type": "p",
        "text": "Definimos juntos el formato, las reglas y el sistema de puntuación que mejor se adapta a tu equipo. ¿Predicciones de resultados exactos o solo ganadores de cada fase? ¿Puntos extra por el campeón y el goleador? ¿La quiniela es definitiva desde el inicio o se puede ajustar antes de cada ronda?"
      },
      {
        "type": "p",
        "text": "Diseñamos todo para que sea sencillo de entender, justo para todos los niveles de conocimiento futbolístico y suficientemente emocionante para que nadie quiera abandonar a mitad del torneo."
      },
      {
        "type": "h3",
        "text": "Lanzamiento con Comunicación Interna"
      },
      {
        "type": "p",
        "text": "El lanzamiento es tan importante como la penka misma. Una comunicación bien diseñada, con el tono correcto y enviada por los canales adecuados, puede marcar la diferencia entre que participe la mitad de la empresa o que participe casi todo el mundo."
      },
      {
        "type": "p",
        "text": "Diseñamos las piezas de comunicación para el lanzamiento adaptadas a la identidad y al tono de tu empresa, desde el mensaje inicial que genera expectativa hasta las instrucciones claras para rellenar la quiniela."
      },
      {
        "type": "h3",
        "text": "Ranking en Tiempo Real y Updates de Jornada"
      },
      {
        "type": "p",
        "text": "Durante el torneo, actualizamos el ranking después de cada fecha y enviamos comunicaciones internas que comentan los resultados, destacan las predicciones más acertadas y celebran, con buen humor, los pronósticos que salieron peor."
      },
      {
        "type": "p",
        "text": "Estos updates son el motor de la penka: son los que generan los comentarios en el grupo de WhatsApp del trabajo, las discusiones en el almuerzo y esa energía colectiva que hace que la gente llegue el lunes preguntando cómo quedó el ranking."
      },
      {
        "type": "h3",
        "text": "Premiación y Cierre"
      },
      {
        "type": "p",
        "text": "El final del torneo merece un momento especial. Organizamos el anuncio del ganador con una comunicación que le dé el protagonismo que merece, y si la empresa quiere, coordinamos una pequeña ceremonia de premiación que puede integrarse en una reunión de equipo o en un evento de empresa."
      },
      {
        "type": "p",
        "text": "El premio puede ser lo que defina la empresa. A veces lo más valorado es simplemente el reconocimiento público y el derecho a presumir durante el próximo año."
      },
      {
        "type": "h2",
        "text": "Por Qué Hacer una Penka Corporativa en tu Empresa"
      },
      {
        "type": "h3",
        "text": "Cohesión Real entre Personas que Apenas se Conocen"
      },
      {
        "type": "p",
        "text": "La penka crea un contexto común que conecta personas que en otro contexto no interactúan. El fútbol rompe jerarquías y distancias de una forma que ninguna dinámica formal puede replicar."
      },
      {
        "type": "h3",
        "text": "Engagement Genuino sin Presupuesto Elevado"
      },
      {
        "type": "p",
        "text": "La penka tiene una de las mejores relaciones impacto-costo de todas las dinámicas de cohesión que existen. El nivel de participación y conversación que genera es difícil de igualar con actividades que requieren mucho más inversión."
      },
      {
        "type": "h3",
        "text": "Funciona para Equipos Remotos y Presenciales"
      },
      {
        "type": "p",
        "text": "Da igual si tu equipo trabaja en la oficina de Montevideo, desde casa o distribuido en el interior del país. La penka corporativa digital nivela la experiencia y asegura que todos participen con la misma intensidad."
      },
      {
        "type": "h3",
        "text": "Integra a Nuevos Colaboradores de Forma Natural"
      },
      {
        "type": "p",
        "text": "Para alguien que se acaba de incorporar a la empresa, la penka es una entrada perfecta a la cultura del equipo: un contexto informal, sin presión, donde conocer gente y empezar a sentirse parte de algo antes de que lo haga ningún proceso de onboarding formal."
      },
      {
        "type": "h3",
        "text": "Añade Levedad en Momentos de Alta Exigencia"
      },
      {
        "type": "p",
        "text": "Los grandes torneos suelen coincidir con períodos de trabajo intenso. Tener algo divertido y compartido en lo que pensar entre reunión y reunión transforma el ambiente de trabajo de formas que son difíciles de medir pero muy fáciles de notar."
      },
      {
        "type": "h2",
        "text": "¿Listo para que tu empresa viva el próximo Mundial con una penka que lo haga memorable?"
      },
      {
        "type": "p",
        "text": "Contanos cuántas personas forman tu equipo, qué torneo te interesa y cuándo querés lanzarla. En eBombo diseñamos tu penka corporativa de principio a fin y nos aseguramos de que funcione tan bien como la Celeste en sus mejores noches."
      }
    ]
  },
  {
    "slug": "agencia-eventos-madrid",
    "title": "Agencia de eventos en Madrid para empresas",
    "heroDescription": "Descubre cómo una agencia de eventos en Madrid puede ayudarte a diseñar experiencias corporativas exitosas y memorables.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/03/Agencia-de-Eventos-en-Madrid-.jpg",
    "badge": "Outdoor",
    "metaPills": [
      "Agencia de Eventos en Madrid",
      "Resolución de Problemas",
      "60 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organiza eventos corporativos y empresariales en Madrid que conectan personas, refuerzan cultura organizacional y generan resultados reales para tu negocio."
      },
      {
        "type": "p",
        "text": "Aquí tienes el texto corregido con la jerarquía correcta:"
      },
      {
        "type": "h2",
        "text": "¿Qué hace diferente a una agencia de eventos en Madrid?"
      },
      {
        "type": "p",
        "text": "Madrid no es simplemente la capital de España: es uno de los centros de negocios más dinámicos de Europa, una ciudad con infraestructura de primer nivel, conectividad internacional y una oferta de venues que combina historia, modernidad y versatilidad. Organizar un evento aquí implica aprovechar todo ese potencial, y hacerlo bien requiere algo más que reservar un salón y contratar catering."
      },
      {
        "type": "p",
        "text": "Una agencia de eventos en Madrid de verdad entiende la ciudad desde adentro. Conoce los espacios que funcionan para cada tipo de evento, las empresas de producción audiovisual confiables, los proveedores gastronómicos que no fallan y los trucos logísticos que marcan la diferencia entre un evento que sale bien y uno que se recuerda años después."
      },
      {
        "type": "p",
        "text": "En eBombo llevamos más de una década organizando eventos en Madrid para empresas nacionales e internacionales."
      },
      {
        "type": "p",
        "text": "Hemos trabajado en salas históricas del centro, en rooftops con vistas a la Gran Vía, en centros de convenciones del eje empresarial de la M-30 y en espacios industriales reconvertidos en los nuevos polos creativos de la ciudad."
      },
      {
        "type": "p",
        "text": "Conocemos Madrid como escenario, y sabemos cómo convertir ese escenario en el marco perfecto para tus objetivos."
      },
      {
        "type": "p",
        "text": "Trabajamos con empresas de todos los sectores, desde startups tecnológicas hasta multinacionales del IBEX 35, con departamentos de Recursos Humanos que buscan cohesionar equipos, con áreas de Marketing que necesitan lanzar productos con impacto, y con directivos que quieren organizar convenciones de ventas que realmente motiven."
      },
      {
        "type": "p",
        "text": "Nuestro enfoque combina creatividad con rigor ejecutivo. Cada evento que organizamos en Madrid tiene detrás un plan detallado, un equipo especializado y una obsesión compartida: que nada falle y que todo sorprenda."
      },
      {
        "type": "h2",
        "text": "Tipos de Eventos que Organizamos en Madrid"
      },
      {
        "type": "h3",
        "text": "Eventos Corporativos y Convenciones de Empresa"
      },
      {
        "type": "p",
        "text": "Gestionamos convenciones anuales, kick-offs de año, town halls y grandes encuentros corporativos para empresas que necesitan reunir a sus equipos en Madrid con un propósito claro."
      },
      {
        "type": "p",
        "text": "Diseñamos el programa, la producción audiovisual, la comunicación interna previa al evento y la experiencia completa para los asistentes, desde su llegada hasta el cierre."
      },
      {
        "type": "p",
        "text": "Sabemos que una convención corporativa bien ejecutada alinea equipos, refuerza la cultura y activa la energía colectiva de una organización."
      },
      {
        "type": "p",
        "text": "Por eso tratamos cada uno con la misma atención que si fuera el evento más importante del año, porque para tu empresa probablemente lo es."
      },
      {
        "type": "h3",
        "text": "Team Buildings en Madrid"
      },
      {
        "type": "p",
        "text": "Madrid ofrece un escenario excepcional para actividades de team building: desde gymkhanas por el barrio de las Letras hasta experiencias de cocina en mercados emblemáticos, talleres creativos en estudios de arte, retos deportivos en el Parque del Retiro o dinámicas de innovación en espacios coworking de vanguardia."
      },
      {
        "type": "p",
        "text": "Diseñamos actividades que van mucho más allá del entretenimiento. Cada team building que organizamos tiene objetivos claros: mejorar la comunicación, reforzar la confianza, integrar equipos nuevos o simplemente celebrar logros colectivos con una experiencia que valga la pena vivir."
      },
      {
        "type": "h3",
        "text": "Lanzamientos de Producto y Eventos de Marketing"
      },
      {
        "type": "p",
        "text": "Cuando una marca necesita presentar algo nuevo en Madrid, el evento tiene que estar a la altura. Gestionamos lanzamientos de producto, presentaciones a prensa, eventos para clientes VIP y experiencias de marca que generan conversación, cobertura y recuerdo."
      },
      {
        "type": "p",
        "text": "Nos encargamos de la producción creativa, el montaje, la comunicación, la gestión de invitados y todos los detalles que hacen que un lanzamiento se convierta en noticia y en referencia."
      },
      {
        "type": "h3",
        "text": "Conferencias y Jornadas Profesionales"
      },
      {
        "type": "p",
        "text": "Organizamos conferencias sectoriales, jornadas de formación, seminarios ejecutivos y encuentros profesionales en Madrid para asociaciones empresariales, colegios profesionales y empresas que quieren posicionarse como referentes en su industria."
      },
      {
        "type": "p",
        "text": "Gestionamos la selección de ponentes, el programa de contenidos, la infraestructura técnica para presentaciones y la experiencia completa del asistente, asegurándonos de que cada participante salga con valor real."
      },
      {
        "type": "h3",
        "text": "Cenas de Empresa y Eventos de Reconocimiento"
      },
      {
        "type": "p",
        "text": "Las cenas de empresa y las galas de premiación son momentos clave en la vida organizacional. En Madrid tenemos acceso a los mejores venues para este tipo de eventos: palacios históricos, restaurantes con estrella Michelin, azoteas con vistas panorámicas y espacios únicos que convierten una cena en una experiencia inolvidable."
      },
      {
        "type": "p",
        "text": "Nos ocupamos de todo: ambientación, entretenimiento, gastronomía, protocolo y los detalles que transforman una reunión formal en un momento que refuerza el sentido de pertenencia."
      },
      {
        "type": "h3",
        "text": "Eventos Híbridos con Alcance Internacional"
      },
      {
        "type": "p",
        "text": "Madrid es sede de numerosas empresas con equipos distribuidos por toda España y Europa. Por eso diseñamos eventos híbridos que combinan la experiencia presencial en la capital con participación remota de alta calidad para quienes no pueden estar físicamente."
      },
      {
        "type": "p",
        "text": "Implementamos tecnología de streaming profesional, gestión de interacción en tiempo real entre audiencias presenciales y remotas, y sistemas de networking virtual que no sacrifican la calidez del contacto humano."
      },
      {
        "type": "h2",
        "text": "Organiza Tu Evento en Madrid en 3 Pasos"
      },
      {
        "type": "h3",
        "text": "Consultoría y Diseño"
      },
      {
        "type": "p",
        "text": "Todo empieza con una conversación. Nos sentamos contigo para entender qué quieres lograr, quiénes son los asistentes, cuál es el tono que buscas y qué presupuesto tienes disponible. A partir de ahí, diseñamos una propuesta creativa y un plan de trabajo detallado."
      },
      {
        "type": "p",
        "text": "Incluimos en esta fase la recomendación de venues en Madrid, la propuesta de programa, el concepto creativo del evento y una estimación de costes realista y transparente. Sin sorpresas."
      },
      {
        "type": "h3",
        "text": "Producción y Logística"
      },
      {
        "type": "p",
        "text": "Con el plan aprobado, nos ponemos en marcha. Gestionamos la reserva del espacio, los proveedores de producción audiovisual, catering, decoración, transporte y todos los elementos que requiere tu evento."
      },
      {
        "type": "p",
        "text": "En Madrid conocemos el mercado de proveedores en profundidad y trabajamos con los mejores de cada categoría. Coordinamos cada parte del engranaje para que llegues el día del evento con todo bajo control, sin tener que preocuparte por nada."
      },
      {
        "type": "h3",
        "text": "Ejecución y Seguimiento"
      },
      {
        "type": "p",
        "text": "El día del evento, nuestro equipo está sobre el terreno gestionando cada detalle en tiempo real. Coordinamos montaje, pruebas técnicas, recepción de invitados, timing del programa y cualquier imprevisto que pueda surgir."
      },
      {
        "type": "p",
        "text": "Después del evento, te entregamos un informe de resultados, encuestas de satisfacción si se requieren, materiales audiovisuales del evento y todas las métricas que necesites para evaluar el impacto."
      },
      {
        "type": "h2",
        "text": "Por Qué Elegir eBombo como tu Agencia de Eventos en Madrid"
      },
      {
        "type": "h3",
        "text": "Conocimiento Local Profundo"
      },
      {
        "type": "p",
        "text": "No somos una agencia genérica que trabaja igual en cualquier ciudad. Madrid es nuestro territorio y lo conocemos a fondo: sus espacios, sus proveedores, su logística, sus tiempos y sus oportunidades. Ese conocimiento local marca una diferencia real en cada evento que organizamos."
      },
      {
        "type": "h3",
        "text": "Red de Venues y Proveedores Consolidada"
      },
      {
        "type": "p",
        "text": "Años de trabajo en la ciudad nos han permitido construir relaciones sólidas con los mejores venues de Madrid y con proveedores de confianza en cada categoría. Eso nos da acceso a espacios exclusivos, mejores condiciones y garantías de calidad que una empresa que empieza de cero no puede ofrecer."
      },
      {
        "type": "h3",
        "text": "Equipo Creativo con Orientación a Resultados"
      },
      {
        "type": "p",
        "text": "Creemos que un buen evento tiene que ser bonito y funcionar. Nuestro equipo combina talento creativo con mentalidad ejecutiva, y eso se nota en los resultados. Diseñamos experiencias que impactan y gestionamos proyectos que se entregan en tiempo, forma y presupuesto."
      },
      {
        "type": "h3",
        "text": "Escalabilidad para Cualquier Tamaño de Evento"
      },
      {
        "type": "p",
        "text": "Hemos organizado en Madrid desde dinámicas de team building para 15 personas hasta convenciones corporativas para más de 2.000 asistentes. Tenemos la estructura y la experiencia para adaptarnos a cualquier escala sin perder calidad ni atención al detalle."
      },
      {
        "type": "h3",
        "text": "Gestión Integral sin Fricción"
      },
      {
        "type": "p",
        "text": "Somos el único interlocutor que necesitas. Nos encargamos de todo para que tú puedas centrarte en tu negocio y en disfrutar del evento. Sin dispersión entre múltiples proveedores, sin coordinación interminable, sin incertidumbre sobre si las cosas van a salir bien."
      },
      {
        "type": "h3",
        "text": "Transparencia y Comunicación Constante"
      },
      {
        "type": "p",
        "text": "Sabemos que organizar un evento puede generar incertidumbre. Por eso mantenemos una comunicación clara y constante durante todo el proceso, con actualizaciones regulares, documentación detallada y disponibilidad real cuando nos necesitas."
      },
      {
        "type": "h2",
        "text": "¿Listo para organizar tu próximo evento en Madrid?"
      },
      {
        "type": "p",
        "text": "Cuéntanos qué tienes en mente: el tipo de evento, el número de asistentes, la fecha aproximada y los objetivos que quieres conseguir. Juntos diseñaremos una experiencia que refleje lo mejor de tu empresa y deje huella en quienes participen."
      }
    ]
  },
  {
    "slug": "clase-mixologia-team-building",
    "title": "Clase de mixología de cócteles para team building",
    "heroDescription": "Descubre cómo una clase de mixología de cócteles para team building fortalece la colaboración y crea experiencias memorables en equipos.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/01/Clase-de-Mixologia-de-Cocteles-para-Team-Building.jpg",
    "badge": "Cocina",
    "metaPills": [
      "Clase de Mixología para Team Building",
      "Motivación",
      "60 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "La Clase de Mixología de Cócteles para Team Building es mucho más que preparar tragos: se trata de mezclar ideas, generar conversaciones y brindar por el trabajo en equipo. Guiado por mixólogos expertos, tu equipo aprenderá a preparar cócteles clásicos, crear bebidas de autor y conectar a través de una experiencia práctica, dinámica y entretenida."
      },
      {
        "type": "p",
        "text": "Esta actividad única combina diversión, aprendizaje y colaboración, convirtiéndose en una opción memorable para celebraciones corporativas, eventos con clientes y retiros de equipo."
      },
      {
        "type": "h2",
        "text": "¿Por qué elegir una actividad de team building con mixología?"
      },
      {
        "type": "p",
        "text": "La mixología es una actividad social, creativa y basada en habilidades que potencia el trabajo en equipo y la participación de todos. No se necesita experiencia previa en coctelería, solo ganas de pasarlo bien y una mente abierta."
      },
      {
        "type": "ul",
        "items": [
          "Refuerza el espíritu de equipo: todos colaboran, prueban y celebran juntos.",
          "Desata la creatividad: inventa nuevos cócteles con el sello único de tu equipo.",
          "Rompe el hielo: ideal para networking, equipos híbridos o nuevos integrantes.",
          "Celebra los logros: termina con un brindis por los objetivos compartidos."
        ]
      },
      {
        "type": "h2",
        "text": "Cómo funciona la clase de mixología"
      },
      {
        "type": "p",
        "text": "Lo hacemos fácil y entretenido:"
      },
      {
        "type": "ul",
        "items": [
          "Planifica el menú – Elige entre cócteles clásicos, opciones de temporada o temáticas personalizadas.",
          "Aprende y mezcla – Con la guía de expertos, el equipo aprende técnicas de coctelería, agitado, mezclado y arte en la decoración.",
          "Prueba y brinda – Degusten sus creaciones y celebren la creatividad y el trabajo en equipo."
        ]
      },
      {
        "type": "h2",
        "text": "Evento de un vistazo"
      },
      {
        "type": "p",
        "text": "🍸 Tamaño del grupo: 6–100+ participantes ⏰ Duración: 1,5 – 2,5 horas 🏢 Ubicación: Oficina, centro de eventos, rooftop, lounge o formato virtual (con kits enviados) 🎯 Focos: colaboración, creatividad, networking y motivación"
      },
      {
        "type": "h2",
        "text": "¿Para quién es ideal la experiencia de mixología?"
      },
      {
        "type": "h3",
        "text": "🏢 Equipos corporativos"
      },
      {
        "type": "ul",
        "items": [
          "Fomenta la comunicación y el trabajo en equipo en un ambiente relajado y social."
        ]
      },
      {
        "type": "h3",
        "text": "🎉 Celebraciones de empresa"
      },
      {
        "type": "ul",
        "items": [
          "Perfecta para fiestas de fin de año, hitos importantes o cierres postconferencia."
        ]
      },
      {
        "type": "h3",
        "text": "🌍 Eventos con clientes y partners"
      },
      {
        "type": "ul",
        "items": [
          "Sorprende a clientes o aliados con una experiencia compartida, diferente y participativa."
        ]
      },
      {
        "type": "h3",
        "text": "👩‍💼 Equipos de liderazgo"
      },
      {
        "type": "ul",
        "items": [
          "Estimula la creatividad y la colaboración más allá de la sala de reuniones."
        ]
      },
      {
        "type": "h3",
        "text": "💡 Equipos híbridos o remotos"
      },
      {
        "type": "ul",
        "items": [
          "Envío de kits de mixología a cualquier parte del mundo y conexión virtual para un happy hour inclusivo e interactivo."
        ]
      },
      {
        "type": "h2",
        "text": "Reserva hoy tu clase de mixología para team building"
      },
      {
        "type": "p",
        "text": "¿Listos para mezclar diversión, creatividad y trabajo en equipo en tu próximo evento corporativo? 👉 Agenda tu Clase de Mixología de Cócteles con eBombo y transforma tu evento en una experiencia para brindar y recordar. 🍸"
      }
    ]
  },
  {
    "slug": "conferencias",
    "title": "Conferencias: qué son y cómo organizarlas con éxito",
    "heroDescription": "Descubre qué son las conferencias, cómo organizarlas de forma efectiva y por qué son clave para compartir conocimiento y posicionar marcas.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/02/Conferencias.jpg",
    "badge": "Innovación",
    "metaPills": [
      "Conferencias",
      "Motivación",
      "60 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Crea eventos educativos de alto impacto donde las ideas fluyen, las conexiones se multiplican y el conocimiento transforma carreras e industrias."
      },
      {
        "type": "h2",
        "text": "¿Qué hace que una conferencia sea verdaderamente memorable?"
      },
      {
        "type": "p",
        "text": "Una conferencia exitosa va mucho más allá de reunir personas en un auditorio. Es un ecosistema cuidadosamente diseñado donde el conocimiento se comparte, las ideas se desafían, las conexiones profesionales florecen y los asistentes regresan a sus organizaciones transformados e inspirados."
      },
      {
        "type": "p",
        "text": "Las mejores conferencias crean momentos de revelación, facilitan conversaciones significativas y generan un impacto que perdura mucho después de que el evento termina."
      },
      {
        "type": "p",
        "text": "En eBombo entendemos que cada conferencia tiene objetivos únicos: algunas buscan posicionar liderazgo de pensamiento en una industria, otras pretenden educar y capacitar profesionales, algunas celebran innovación y tendencias emergentes, y otras construyen comunidades duraderas alrededor de temas especializados."
      },
      {
        "type": "p",
        "text": "Independientemente del propósito, nos especializamos en diseñar y ejecutar conferencias que cumplen esos objetivos mientras superan las expectativas de asistentes, ponentes y patrocinadores."
      },
      {
        "type": "p",
        "text": "Trabajamos con una filosofía integral: una gran conferencia necesita contenido excepcional, pero también requiere producción impecable, networking facilitado, tecnología confiable y una experiencia fluida desde el registro hasta el seguimiento post-evento."
      },
      {
        "type": "p",
        "text": "Nuestro enfoque combina expertise en gestión de eventos con profundo conocimiento de dinámicas de aprendizaje adulto, engagement de audiencias y creación de experiencias educativas que realmente impactan."
      },
      {
        "type": "h2",
        "text": "Tipos de Conferencias que Organizamos"
      },
      {
        "type": "h3",
        "text": "Conferencias Corporativas y Summits Ejecutivos"
      },
      {
        "type": "p",
        "text": "Diseñamos eventos de alto nivel para líderes empresariales y ejecutivos."
      },
      {
        "type": "p",
        "text": "Desde summits estratégicos internos hasta conferencias de clientes que fortalecen relaciones comerciales, creamos experiencias premium que combinan contenido de vanguardia con networking exclusivo."
      },
      {
        "type": "p",
        "text": "Incluimos keynotes inspiracionales, paneles de expertos, sesiones de trabajo estratégico y experiencias diseñadas para generar insights accionables que impulsen resultados de negocio."
      },
      {
        "type": "h3",
        "text": "Conferencias Académicas y Científicas"
      },
      {
        "type": "p",
        "text": "Organizamos eventos que avanzan el conocimiento en campos especializados."
      },
      {
        "type": "p",
        "text": "Coordinamos congresos académicos, simposios de investigación y conferencias científicas donde expertos presentan hallazgos, debaten metodologías y colaboran en el avance de sus disciplinas."
      },
      {
        "type": "p",
        "text": "Gestionamos procesos de revisión de abstracts, publicación de proceedings, exhibiciones de pósters y todo lo necesario para cumplir con estándares académicos rigurosos."
      },
      {
        "type": "h3",
        "text": "Conferencias Tecnológicas y de Innovación"
      },
      {
        "type": "p",
        "text": "Creamos eventos que exploran el futuro de la tecnología y la innovación."
      },
      {
        "type": "p",
        "text": "Desde conferencias de desarrollo de software hasta eventos de inteligencia artificial, blockchain o transformación digital, diseñamos experiencias donde innovadores, emprendedores y early adopters se conectan."
      },
      {
        "type": "p",
        "text": "Incluimos demostraciones tecnológicas en vivo, hackatones, pitch competitions y exhibiciones de productos que hacen tangible la innovación."
      },
      {
        "type": "h3",
        "text": "Conferencias de Industria y Asociaciones Profesionales"
      },
      {
        "type": "p",
        "text": "Producimos los eventos anuales que definen industrias. Ya sea la conferencia anual de una asociación médica, un congreso de la industria de la construcción o el evento insignia de profesionales de marketing, creamos experiencias que educan, certifican, actualizan y conectan a comunidades profesionales completas."
      },
      {
        "type": "p",
        "text": "Gestionamos programas de educación continua, certificaciones, exhibiciones comerciales y ceremonias de premiación."
      },
      {
        "type": "h3",
        "text": "Conferencias Híbridas y Virtuales"
      },
      {
        "type": "p",
        "text": "Diseñamos conferencias que funcionan tanto presencial como virtualmente, maximizando alcance sin sacrificar engagement."
      },
      {
        "type": "p",
        "text": "Implementamos plataformas tecnológicas que permiten participación remota significativa, networking virtual efectivo y acceso on-demand al contenido."
      },
      {
        "type": "p",
        "text": "Creamos experiencias donde asistentes presenciales y virtuales se sienten igualmente incluidos y valorados."
      },
      {
        "type": "h3",
        "text": "Conferencias de Múltiples Tracks y Formatos"
      },
      {
        "type": "p",
        "text": "Organizamos eventos complejos con agendas paralelas que permiten a asistentes personalizar su experiencia."
      },
      {
        "type": "p",
        "text": "Coordinamos keynotes plenarios, sesiones breakout especializadas, talleres hands-on, mesas redondas íntimas, sesiones de Q&A y espacios de networking."
      },
      {
        "type": "p",
        "text": "Diseñamos el flujo para maximizar oportunidades de aprendizaje mientras evitamos la fatiga de conferencia."
      },
      {
        "type": "h2",
        "text": "Haz Realidad Tu Conferencia En 3 Pasos:"
      },
      {
        "type": "h3",
        "text": "Diseña"
      },
      {
        "type": "p",
        "text": "Todo comienza con entender profundamente tus objetivos. ¿Buscas educar a tu industria sobre tendencias emergentes? ¿Fortalecer tu comunidad profesional? ¿Posicionar a tu organización como líder de pensamiento? ¿Generar leads calificados?"
      },
      {
        "type": "p",
        "text": "Trabajamos contigo para definir objetivos claros, identificar tu audiencia objetivo y crear una propuesta de valor convincente. Diseñamos la agenda temática, identificamos y reclutamos ponentes destacados, definimos formatos de sesión óptimos y creamos una experiencia educativa coherente."
      },
      {
        "type": "p",
        "text": "También desarrollamos la estrategia de marketing para atraer a los asistentes correctos y asegurar que tu conferencia alcance su máximo potencial."
      },
      {
        "type": "h3",
        "text": "Produce"
      },
      {
        "type": "p",
        "text": "La producción de una conferencia involucra orquestar cientos de elementos móviles simultáneamente."
      },
      {
        "type": "p",
        "text": "Nos encargamos de todo: selección y negociación de venues, diseño de espacios que faciliten networking, coordinación logística con ponentes (viajes, hospedaje, requerimientos técnicos), gestión de sistemas de registro y acreditación, producción audiovisual de alto nivel (pantallas, audio, iluminación, grabación), coordinación de catering y breaks, gestión de patrocinadores y exhibidores, implementación de plataformas tecnológicas, y coordinación de personal y voluntarios."
      },
      {
        "type": "p",
        "text": "Creamos manuales operativos detallados, realizamos ensayos técnicos y nos aseguramos de que cada elemento esté perfectamente sincronizado."
      },
      {
        "type": "h3",
        "text": "Inspira"
      },
      {
        "type": "p",
        "text": "Durante la conferencia, nuestro equipo coordina la ejecución impecable minuto a minuto. Gestionamos tiempos de sesiones, soportamos técnicamente a cada ponente, facilitamos transiciones fluidas entre actividades, monitoreamos la experiencia de asistentes en tiempo real y resolvemos cualquier imprevisto instantáneamente."
      },
      {
        "type": "p",
        "text": "Capturamos contenido profesional, gestionamos redes sociales en vivo y creamos momentos especiales que elevan la experiencia."
      },
      {
        "type": "p",
        "text": "Post-evento, procesamos feedback, entregamos grabaciones y materiales a asistentes, generamos reportes con métricas de éxito (asistencia, engagement, satisfacción, ROI para patrocinadores) y proporcionamos insights para mejorar futuras ediciones."
      },
      {
        "type": "h2",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Todas Las Soluciones Que Necesitas En Un Solo Lugar"
      },
      {
        "type": "p",
        "text": "Simplifica la organización de tu conferencia con servicios integrales en una sola plataforma."
      },
      {
        "type": "h3",
        "text": "Gestión de Ponentes y Contenido"
      },
      {
        "type": "p",
        "text": "Reclutamiento, coordinación y soporte completo para speakers, además de curación de contenido de alto valor"
      },
      {
        "type": "h3",
        "text": "Tecnología y Producción Audiovisual"
      },
      {
        "type": "p",
        "text": "Plataformas de registro, apps de eventos, streaming, grabación profesional y toda la infraestructura técnica"
      },
      {
        "type": "h3",
        "text": "Marketing y Promoción"
      },
      {
        "type": "p",
        "text": "Estrategias completas para maximizar asistencia, desde campañas digitales hasta relaciones públicas"
      },
      {
        "type": "h2",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Por qué Elegir eBombo para tus Conferencias"
      },
      {
        "type": "h3",
        "text": "Expertise en Gestión de Contenido Educativo"
      },
      {
        "type": "p",
        "text": "Entendemos cómo diseñar agendas que maximicen el aprendizaje y la retención. Sabemos cuándo usar keynotes inspiracionales versus talleres interactivos, cómo balancear sesiones plenarias con breakouts especializados, y cómo crear ritmos que mantengan energía alta sin abrumar a los asistentes."
      },
      {
        "type": "p",
        "text": "Esta comprensión profunda de dinámicas educativas asegura que tu conferencia no solo entretenga, sino que verdaderamente eduque y transforme."
      },
      {
        "type": "h3",
        "text": "Red de Speakers y Expertos de Clase Mundial"
      },
      {
        "type": "p",
        "text": "A través de los años hemos construido relaciones con ponentes destacados, keynote speakers internacionales, facilitadores expertos y líderes de pensamiento en múltiples industrias."
      },
      {
        "type": "p",
        "text": "Esta red nos permite identificar y reclutar speakers perfectos para tu conferencia, negociar términos favorables y asegurar que el contenido presentado sea de la más alta calidad y relevancia."
      },
      {
        "type": "h3",
        "text": "Producción Técnica Impecable"
      },
      {
        "type": "p",
        "text": "Las conferencias modernas requieren producción audiovisual sofisticada. Contamos con expertise técnico profundo y trabajamos con los mejores proveedores de equipos audiovisuales, plataformas de streaming, sistemas de traducción simultánea y tecnologías de engagement de audiencia."
      },
      {
        "type": "p",
        "text": "Ya sea una conferencia de 100 personas o un mega-evento de 5,000 asistentes, garantizamos que cada presentación se vea y escuche perfectamente."
      },
      {
        "type": "h3",
        "text": "Facilitación de Networking Genuino"
      },
      {
        "type": "p",
        "text": "Sabemos que muchos asistentes valoran las conexiones tanto como el contenido."
      },
      {
        "type": "p",
        "text": "Diseñamos espacios y momentos específicamente para facilitar networking: desde coffee breaks estratégicamente cronometrados hasta sesiones de speed networking, lounges temáticos y cenas que promueven conversaciones significativas."
      },
      {
        "type": "p",
        "text": "Utilizamos tecnología como apps de matchmaking para conectar a asistentes con intereses comunes."
      },
      {
        "type": "h3",
        "text": "Experiencia en Conferencias Híbridas"
      },
      {
        "type": "p",
        "text": "Dominamos la complejidad de crear experiencias igualmente valiosas para asistentes presenciales y remotos."
      },
      {
        "type": "p",
        "text": "Sabemos cómo diseñar interacciones que incluyan a ambas audiencias, cómo producir contenido que funcione en ambos formatos y cómo usar tecnología para crear comunidad sin importar la ubicación física. Esta capacidad amplía dramáticamente el alcance e impacto de tu conferencia."
      },
      {
        "type": "h3",
        "text": "Gestión de Patrocinios y Exhibiciones"
      },
      {
        "type": "p",
        "text": "Entendemos que muchas conferencias dependen de patrocinadores para su viabilidad financiera."
      },
      {
        "type": "p",
        "text": "Ayudamos a diseñar paquetes de patrocinio atractivos, gestionamos relaciones con sponsors, coordinamos exhibiciones comerciales y aseguramos que los patrocinadores reciban el ROI que esperan, creando asociaciones de largo plazo que benefician a todos."
      },
      {
        "type": "h2",
        "text": "¿Listo para crear una conferencia que inspire y transforme?"
      },
      {
        "type": "p",
        "text": "Cuéntanos tu visión, tus objetivos educativos y tu audiencia. Juntos diseñaremos una conferencia memorable que comparta conocimiento valioso, facilite conexiones poderosas y genere impacto duradero en tu industria o comunidad."
      }
    ]
  },
  {
    "slug": "duelo-de-companeros",
    "title": "Duelo de Compañeros",
    "heroDescription": "Compite en un show virtual lleno de juegos y encuestas.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2025/12/6a2PyEck.jpeg",
    "badge": "Trivia",
    "metaPills": [
      "Duelo de Compañeros",
      "Integración",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "¿Listos para competir en un verdadero show virtual de juegos? Choque de Compañeros transforma a tu equipo en protagonistas de un concurso lleno de encuestas, retos dinámicos y pruebas de ingenio que garantizan diversión de principio a fin."
      },
      {
        "type": "p",
        "text": "Conducida por un facilitador, esta experiencia recrea el ambiente vibrante de un programa de televisión, donde los participantes se enfrentan en rondas rápidas que exigen creatividad, agilidad mental y trabajo en equipo. La competencia amistosa mantiene la emoción en lo alto mientras los equipos buscan sumar puntos y llegar a la cima del marcador."
      },
      {
        "type": "p",
        "text": "Llena de risas, interacción y momentos memorables, Choque de Compañeros es perfecta para romper la rutina, motivar a los equipos y reforzar la conexión en un entorno divertido y colaborativo."
      }
    ]
  },
  {
    "slug": "team-building-solidario",
    "title": "Team Building Solidario: conecta equipos con propósito",
    "heroDescription": "Descubre cómo un evento de team building solidario fortalece equipos, genera impacto social y conecta a las personas con un propósito comú",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/01/Evento-de-Team-Building-Solidario.jpg",
    "badge": "Voluntariado",
    "metaPills": [
      "Evento de Team Building Solidario",
      "Integración",
      "120 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Un Evento de Team Building Solidario es una forma poderosa de aportar a la comunidad mientras acercas a tu equipo. En lugar de una actividad tradicional, los colaboradores trabajan juntos en proyectos prácticos que benefician directamente a fundaciones, organizaciones sin fines de lucro o iniciativas comunitarias locales."
      },
      {
        "type": "p",
        "text": "Desde armar kits de ayuda hasta construir bicicletas para niños, estas experiencias combinan propósito y trabajo en equipo, dejando a los participantes con lazos más fuertes, un profundo sentido de orgullo y la satisfacción de generar un impacto real."
      },
      {
        "type": "h2",
        "text": "¿Por qué elegir una actividad de team building solidario?"
      },
      {
        "type": "p",
        "text": "Los eventos con foco social generan un impacto significativo tanto dentro como fuera de la empresa."
      },
      {
        "type": "ul",
        "items": [
          "Fortalece el trabajo en equipo: los equipos se unen en torno a una causa común.",
          "Aumenta la motivación: ayudar a otros inspira orgullo y una energía positiva.",
          "Refuerza la cultura organizacional: alinea al equipo con valores de responsabilidad social.",
          "Experiencias memorables: el impacto trasciende el evento y llega a la comunidad."
        ]
      },
      {
        "type": "h2",
        "text": "Cómo funciona la experiencia de Team Building Solidario"
      },
      {
        "type": "ul",
        "items": [
          "Planifica con propósito – Elige una causa o proyecto solidario alineado con los valores de tu empresa.",
          "Construyan y creen – Los equipos colaboran en actividades prácticas como armar kits, construir productos o preparar donaciones.",
          "Conecten y contribuyan – Entreguen los resultados finales o aportes a los beneficiarios.",
          "Celebren el impacto – Reflexionen sobre los logros, compartan historias y destaquen la diferencia que lograron juntos."
        ]
      },
      {
        "type": "h2",
        "text": "Evento de un vistazo"
      },
      {
        "type": "p",
        "text": "👥 Tamaño del grupo: 10–300+ participantes ⏰ Duración: 2–4 horas 🏢 Ubicación: Oficina, centro de conferencias o espacio externo 🎯 Focos: colaboración, motivación, responsabilidad social e impacto comunitario"
      },
      {
        "type": "h2",
        "text": "¿Para quién es ideal el Evento de Team Building Solidario?"
      },
      {
        "type": "h3",
        "text": "🏢 Equipos corporativos"
      },
      {
        "type": "ul",
        "items": [
          "Fortalece vínculos mientras se conectan con causas significativas."
        ]
      },
      {
        "type": "h3",
        "text": "🎉 Celebraciones de empresa"
      },
      {
        "type": "ul",
        "items": [
          "Agrega un componente emocional y positivo a hitos y eventos de fin de año."
        ]
      },
      {
        "type": "h3",
        "text": "🌍 Conferencias y retiros"
      },
      {
        "type": "ul",
        "items": [
          "Une a los participantes a través de una colaboración con propósito."
        ]
      },
      {
        "type": "h3",
        "text": "👩‍💼 Liderazgo y equipos interfuncionales"
      },
      {
        "type": "ul",
        "items": [
          "Inspira a líderes y áreas a unirse más allá de los objetivos del día a día."
        ]
      },
      {
        "type": "h3",
        "text": "💡 Equipos nuevos o remotos"
      },
      {
        "type": "ul",
        "items": [
          "Fomenta la conexión mientras generan un impacto positivo juntos."
        ]
      },
      {
        "type": "h2",
        "text": "Reserva hoy tu Evento de Team Building Solidario"
      },
      {
        "type": "p",
        "text": "¿Listos para unir a tu equipo mientras hacen una diferencia real? 👉🏼Con la planificación experta de eBombo, tu Evento de Team Building Solidario será significativo, fluido e inolvidable."
      }
    ]
  },
  {
    "slug": "team-building-cocina",
    "title": "Team Cooking: experiencia de team building con cocina",
    "heroDescription": "Descubre qué es el team cooking, cómo funciona y por qué es una experiencia de team building con cocina ideal para fortalecer equipos.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/01/Team-Cooking-–-Experiencia-de-Team-Building-con-Cocina.jpg",
    "badge": "Cocina",
    "metaPills": [
      "Experiencia de Team Building con Cocina",
      "Integración",
      "120 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "La Team Cooking – Experiencia de Team Building con Cocina es mucho más que una clase de cocina: es una forma poderosa de reunir a los equipos, fortalecer la colaboración y elevar la motivación. Cocinar en grupo fomenta la comunicación, la resolución de problemas y la creatividad, mientras se crean recuerdos duraderos alrededor de una comida gourmet compartida."
      },
      {
        "type": "h2",
        "text": "¿Por qué elegir una actividad de team building con cocina?"
      },
      {
        "type": "p",
        "text": "La cocina ofrece un entorno práctico e interactivo donde los colaboradores salen de su zona de confort y asumen nuevos roles. Desde picar y mezclar hasta emplatar y presentar, cada persona aporta al éxito del equipo."
      },
      {
        "type": "ul",
        "items": [
          "Construye vínculos más fuertes: rompe barreras y fomenta relaciones auténticas.",
          "Estimula la creatividad: experimenta con sabores, presentación y trabajo en equipo.",
          "Aumenta la motivación y el ánimo: celebra logros de una forma divertida y gratificante.",
          "Promueve la colaboración: todos trabajan juntos por un mismo objetivo delicioso."
        ]
      },
      {
        "type": "h2",
        "text": "Cómo funciona la experiencia Team Cooking"
      },
      {
        "type": "p",
        "text": "Lo hacemos simple, entretenido y sin estrés:"
      },
      {
        "type": "ul",
        "items": [
          "Planifica el menú – Elige entre nuestras temáticas culinarias cuidadosamente curadas.",
          "Cocinen como equipo – No se requieren recetas ni experiencia previa; solo trabajo en equipo y la guía de nuestros facilitadores.",
          "Disfruten y celebren – Reúnanse para degustar los platos gourmet que el propio equipo creó."
        ]
      },
      {
        "type": "h2",
        "text": "Evento de un vistazo"
      },
      {
        "type": "p",
        "text": "👥 Tamaño del grupo: 4–100+ ⏰ Duración: 3–4 horas (incluye comida y cierre reflexivo) 🏢 Ubicación: En tu oficina, hotel, centro de conferencias o espacio externo seleccionado 🎯 Focos: colaboración en equipo, motivación, comunicación y creatividad"
      },
      {
        "type": "h2",
        "text": "¿Para quién es ideal la experiencia Team Cooking?"
      },
      {
        "type": "p",
        "text": "La Experiencia Team Cooking está diseñada para organizaciones que quieren fortalecer la colaboración mientras viven una actividad memorable. Ya sea para un retiro corporativo, la celebración de un hito o simplemente para devolver energía al equipo, este evento culinario es la opción perfecta."
      },
      {
        "type": "h3",
        "text": "🏢 Equipos corporativos"
      },
      {
        "type": "ul",
        "items": [
          "Fortalece la conexión entre colegas.",
          "Fomenta la comunicación y la resolución de problemas en un entorno distendido."
        ]
      },
      {
        "type": "h3",
        "text": "🎉 Celebraciones de empresa"
      },
      {
        "type": "ul",
        "items": [
          "Celebra aniversarios, promociones o viajes de incentivo.",
          "Comparte una comida festiva preparada por el propio equipo."
        ]
      },
      {
        "type": "h3",
        "text": "🌍 Retiros y conferencias"
      },
      {
        "type": "ul",
        "items": [
          "Incorpora un componente interactivo y de alta energía a eventos offsite.",
          "Involucra a los participantes con un desafío creativo más allá de presentaciones y reuniones."
        ]
      },
      {
        "type": "h3",
        "text": "👩‍💼 Liderazgo y equipos interfuncionales"
      },
      {
        "type": "ul",
        "items": [
          "Rompe silos haciendo que líderes y áreas trabajen codo a codo.",
          "Inspira nuevas formas de pensar y colaborar."
        ]
      },
      {
        "type": "h3",
        "text": "💡 Equipos nuevos o remotos"
      },
      {
        "type": "ul",
        "items": [
          "Refuerza vínculos entre nuevos integrantes o equipos híbridos.",
          "Crea recuerdos compartidos que reducen la distancia y construyen confianza."
        ]
      },
      {
        "type": "h2",
        "text": "Reserva hoy tu evento corporativo de cocina"
      },
      {
        "type": "p",
        "text": "¿Listos para reunir a tu equipo de una forma divertida, deliciosa e inolvidable? 👉 Agenda tu Team Cooking – Experiencia de Team Building con Cocina con eBombo y convierte la colaboración en algo que también se saborea."
      }
    ]
  },
  {
    "slug": "ferias-gastronomicas",
    "title": "Ferias gastronómicas: experiencias que conectan marcas",
    "heroDescription": "Descubre qué son las ferias gastronómicas, cómo organizarlas y por qué son eventos ideales para atraer público y potenciar marcas.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/02/Ferias-Gastronomicas.jpg",
    "badge": "Cocina",
    "metaPills": [
      "Ferias Gastronómicas",
      "Integración",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organiza ferias gastronómicas que deleiten los sentidos, conecten culturas y creen momentos memorables para cada asistente."
      },
      {
        "type": "h2",
        "text": "¿Qué hace especial a una feria gastronómica exitosa?"
      },
      {
        "type": "p",
        "text": "Una feria gastronómica es mucho más que una colección de puestos de comida. Es un viaje sensorial, un punto de encuentro cultural y una celebración de la pasión culinaria."
      },
      {
        "type": "p",
        "text": "Las mejores ferias gastronómicas crean ecosistemas completos donde chefs talentosos pueden brillar, emprendedores pueden crecer, marcas pueden conectar con su audiencia y, sobre todo, donde los comensales viven experiencias que recordarán y compartirán."
      },
      {
        "type": "p",
        "text": "En eBombo entendemos que el éxito de una feria gastronómica radica en los detalles: la curación cuidadosa de participantes, el diseño de espacios que inviten al descubrimiento, la logística impecable que permite que todo fluya sin contratiempos, y la creación de momentos especiales que van más allá de simplemente comer."
      },
      {
        "type": "p",
        "text": "Ya sea una feria de street food urbano, un festival de vinos y quesos, un mercado de productos orgánicos o una celebración de cocina internacional, nos especializamos en diseñar y ejecutar eventos gastronómicos que superan expectativas."
      },
      {
        "type": "p",
        "text": "Trabajamos con una filosofía clara: cada feria que producimos debe ser una experiencia integral donde la calidad de la comida se complementa con entretenimiento, educación, ambiente y servicio excepcional."
      },
      {
        "type": "p",
        "text": "Nuestro enfoque combina la pasión por la gastronomía con expertise en producción de eventos, marketing experiencial y gestión operativa de alto nivel."
      },
      {
        "type": "h2",
        "text": "Tipos de Ferias Gastronómicas que Organizamos"
      },
      {
        "type": "h3",
        "text": "Festivales de Street Food"
      },
      {
        "type": "p",
        "text": "Celebra la cultura culinaria urbana con ferias de comida callejera que reúnen lo mejor de la gastronomía popular."
      },
      {
        "type": "p",
        "text": "Curamos cuidadosamente food trucks, carritos gourmet y puestos de cocina fusión que ofrecen desde tacos auténticos hasta hamburguesas innovadoras."
      },
      {
        "type": "p",
        "text": "Creamos ambientes vibrantes con música en vivo, áreas de picnic y zonas instagrameables que convierten la comida callejera en una experiencia premium."
      },
      {
        "type": "h3",
        "text": "Mercados de Productores y Productos Artesanales"
      },
      {
        "type": "p",
        "text": "Conecta a productores locales directamente con consumidores conscientes. Organizamos mercados donde agricultores orgánicos, queseros artesanales, panaderos tradicionales y productores de especialidades pueden mostrar y vender sus productos."
      },
      {
        "type": "p",
        "text": "Incluimos demostraciones de cocina, degustaciones guiadas y talleres educativos que profundizan la apreciación por los alimentos de calidad y la producción sostenible."
      },
      {
        "type": "h3",
        "text": "Festivales Temáticos de Cocina Internacional"
      },
      {
        "type": "p",
        "text": "Lleva a tus asistentes en un viaje culinario alrededor del mundo sin salir de la ciudad. Desde festivales de cocina asiática hasta celebraciones de gastronomía mediterránea, creamos experiencias inmersivas donde cada área transporta a los visitantes a una región diferente."
      },
      {
        "type": "p",
        "text": "Complementamos la comida con música tradicional, decoración temática y actividades culturales que enriquecen la experiencia."
      },
      {
        "type": "h3",
        "text": "Ferias de Vino, Cerveza y Bebidas Artesanales"
      },
      {
        "type": "p",
        "text": "Diseñamos eventos especializados para amantes de las bebidas premium. Nuestras ferias de vino incluyen catas guiadas por sommeliers, maridajes cuidadosamente diseñados y charlas con productores."
      },
      {
        "type": "p",
        "text": "Para cerveza artesanal, creamos festivales con decenas de cervecerías, competencias de brewing y food pairing. Cada evento educa mientras entretiene, creando comunidades de entusiastas."
      },
      {
        "type": "h3",
        "text": "Eventos Gastronómicos Corporativos"
      },
      {
        "type": "p",
        "text": "Transforma tu evento corporativo en una experiencia culinaria memorable. Organizamos ferias gastronómicas privadas para empresas que buscan impresionar a clientes, celebrar logros con empleados o crear experiencias únicas de team building."
      },
      {
        "type": "p",
        "text": "Incluimos desde estaciones de cocina en vivo hasta competencias culinarias interactivas y cenas temáticas espectaculares."
      },
      {
        "type": "h3",
        "text": "Ferias de Repostería y Dulces"
      },
      {
        "type": "p",
        "text": "Celebra el arte de la pastelería con eventos dedicados al mundo dulce. Reunimos reposteros artesanales, chocolatiers, heladeros y creadores de postres innovadores."
      },
      {
        "type": "p",
        "text": "Incluimos demostraciones de técnicas, talleres para niños y familias, y competencias de decoración que convierten cada feria en un espectáculo visual y gustativo."
      },
      {
        "type": "h2",
        "text": "Haz Realidad Tu Feria Gastronómica En 3 Pasos:"
      },
      {
        "type": "h3",
        "text": "Planifica"
      },
      {
        "type": "p",
        "text": "Comenzamos con una sesión de planificación profunda donde definimos la visión, escala y objetivos de tu feria gastronómica. ¿Buscas crear un evento comunitario regular? ¿Un festival de gran escala que atraiga turismo? ¿Una experiencia premium exclusiva?"
      },
      {
        "type": "p",
        "text": "Definimos el concepto, identificamos el público objetivo, establecemos el presupuesto y creamos un plan maestro que incluye todo: desde la curación de participantes hasta la estrategia de marketing."
      },
      {
        "type": "p",
        "text": "Nos encargamos de la selección de locación, diseño de layout, permisos y licencias, y coordinación con autoridades locales."
      },
      {
        "type": "h3",
        "text": "Ejecuta"
      },
      {
        "type": "p",
        "text": "La logística de una feria gastronómica es compleja, pero nosotros la dominamos."
      },
      {
        "type": "p",
        "text": "Coordinamos la instalación de infraestructura (carpas, electricidad, agua, gas, refrigeración), gestionamos a todos los proveedores gastronómicos asegurando estándares de calidad e higiene, organizamos el entretenimiento y actividades complementarias, implementamos sistemas de pago eficientes, y coordinamos seguridad y servicios médicos."
      },
      {
        "type": "p",
        "text": "Capacitamos al personal, gestionamos el flujo de personas y nos aseguramos de que cada visitante tenga una experiencia fluida desde que llega hasta que se va."
      },
      {
        "type": "h3",
        "text": "Deleita"
      },
      {
        "type": "p",
        "text": "Durante el evento, nuestro equipo está presente garantizando que todo funcione perfectamente."
      },
      {
        "type": "p",
        "text": "Monitoreamos la satisfacción de los asistentes en tiempo real, coordinamos la logística minuto a minuto, resolvemos cualquier imprevisto inmediatamente y capturamos contenido profesional para tus redes sociales y futuros esfuerzos de marketing."
      },
      {
        "type": "p",
        "text": "Después del evento, te entregamos un reporte completo con métricas de asistencia, feedback de participantes, cobertura mediática alcanzada y recomendaciones para futuras ediciones."
      },
      {
        "type": "h2",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Todas Las Soluciones Que Necesitas En Un Solo Lugar"
      },
      {
        "type": "p",
        "text": "Simplifica la organización de tu feria gastronómica con servicios integrales en una sola plataforma."
      },
      {
        "type": "h3",
        "text": "Curación de Participantes"
      },
      {
        "type": "p",
        "text": "Seleccionamos y coordinamos chefs, restaurantes, food trucks y productores que eleven la calidad de tu evento"
      },
      {
        "type": "h3",
        "text": "Logística Especializada"
      },
      {
        "type": "p",
        "text": "Gestión completa de infraestructura, permisos, seguridad, limpieza y todos los servicios necesarios"
      },
      {
        "type": "h3",
        "text": "Marketing y Promoción"
      },
      {
        "type": "p",
        "text": "Estrategias digitales y tradicionales para atraer a tu audiencia objetivo y generar expectativa"
      },
      {
        "type": "h2",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Por qué Elegir eBombo para tus Ferias Gastronómicas"
      },
      {
        "type": "h3",
        "text": "Experiencia Comprobada en Eventos Gastronómicos"
      },
      {
        "type": "p",
        "text": "Hemos producido decenas de ferias gastronómicas de todos los tamaños y tipos. Conocemos íntimamente los desafíos únicos de estos eventos: desde cumplir con regulaciones sanitarias hasta gestionar múltiples proveedores de alimentos simultáneamente."
      },
      {
        "type": "p",
        "text": "Esta experiencia nos permite anticipar problemas antes de que ocurran y ofrecer soluciones probadas que garantizan el éxito."
      },
      {
        "type": "h3",
        "text": "Red de Contactos en la Industria Culinaria"
      },
      {
        "type": "p",
        "text": "A lo largo de los años hemos construido relaciones con chefs destacados, restaurantes innovadores, productores artesanales, food trucks populares y proveedores especializados."
      },
      {
        "type": "p",
        "text": "Esta red nos permite curar participantes de alta calidad que elevan el nivel de tu feria y aseguran que los asistentes vivan experiencias gastronómicas auténticas y memorables."
      },
      {
        "type": "h3",
        "text": "Gestión Logística Impecable"
      },
      {
        "type": "p",
        "text": "Las ferias gastronómicas tienen requerimientos logísticos complejos: electricidad de alto voltaje, suministro de gas, sistemas de refrigeración, manejo de residuos, cumplimiento de normas sanitarias."
      },
      {
        "type": "p",
        "text": "Dominamos cada aspecto técnico y trabajamos con proveedores especializados que garantizan que todo funcione perfectamente, permitiendo que los participantes se enfoquen en crear comida excepcional."
      },
      {
        "type": "h3",
        "text": "Creación de Experiencias Integrales"
      },
      {
        "type": "p",
        "text": "Para nosotros, una gran feria gastronómica es más que comida deliciosa."
      },
      {
        "type": "p",
        "text": "Diseñamos experiencias completas que incluyen entretenimiento musical, áreas de descanso cómodas, actividades para niños, talleres educativos, espacios instagrameables y elementos sorpresa que mantienen a los asistentes comprometidos durante horas."
      },
      {
        "type": "p",
        "text": "Cada elemento está cuidadosamente pensado para complementar la experiencia culinaria."
      },
      {
        "type": "h3",
        "text": "Enfoque en Sostenibilidad"
      },
      {
        "type": "p",
        "text": "Entendemos la responsabilidad ambiental de producir eventos que generan residuos."
      },
      {
        "type": "p",
        "text": "Implementamos prácticas sostenibles como programas de reciclaje y compostaje, incentivos para reducir plásticos de un solo uso, coordinación con bancos de alimentos para donar excedentes, y educación a participantes y asistentes sobre prácticas responsables."
      },
      {
        "type": "h2",
        "text": "¿Listo para crear la feria gastronómica de tus sueños?"
      },
      {
        "type": "p",
        "text": "Cuéntanos tu visión culinaria y juntos diseñaremos un evento que deleite paladares, conecte personas y cree momentos memorables alrededor de la comida que todos amamos."
      }
    ]
  },
  {
    "slug": "fiesta-casino",
    "title": "Fiesta Casino: una experiencia temática para eventos",
    "heroDescription": "Descubre qué es una fiesta casino, cómo organizarla y por qué es una experiencia temática ideal para eventos corporativos memorables.",
    "heroImage": "https://ebombo.com/wp-content/uploads/2026/01/Fiesta-Casino-2.jpg",
    "badge": "Trivia",
    "metaPills": [
      "Fiesta Casino",
      "Creatividad"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "La Fiesta Casino de eBombo convierte tu evento corporativo en una experiencia temática al estilo Vegas, con mesas interactivas, decoración inmersiva y competencias amistosas usando fichas y dinero ficticio, sin apuestas reales."
      },
      {
        "type": "p",
        "text": "Pocas cosas generan tanta energía y conexión como un evento temático que saca a tu equipo de la rutina. La Fiesta Casino de eBombo combina entretenimiento, interacción social y desafíos amistosos para crear una celebración realmente inolvidable."
      },
      {
        "type": "p",
        "text": "Nuestro formato utiliza juegos simulados, fichas personalizadas y decoraciones temáticas, sin dinero real, para que el equipo disfrute la emoción de las mesas de cartas, la ruleta y los juegos de dados de manera segura, inclusiva y divertida."
      },
      {
        "type": "p",
        "text": "Ya sea un aniversario corporativo, una fiesta de fin de año o una salida de equipo, diseñamos una experiencia donde todos se sientan como grandes jugadores… en el mejor sentido."
      },
      {
        "type": "h2",
        "text": "Por Qué Funciona una Fiesta Casino en las Empresas"
      },
      {
        "type": "p",
        "text": "Las fiestas temáticas tipo casino no solo destacan visualmente; están diseñadas para activar la interacción, fomentar el movimiento, generar conversación y crear un ambiente relajado, cuatro elementos esenciales para fortalecer equipos."
      },
      {
        "type": "p",
        "text": "Cuando las personas participan en actividades lúdicas con una temática envolvente, ocurre algo clave: las jerarquías se diluyen, las áreas se mezclan, se comparte la risa y hasta los más reservados encuentran una forma natural de integrarse."
      },
      {
        "type": "p",
        "text": "Esto es lo que una Fiesta Casino aporta a tu organización:"
      },
      {
        "type": "ul",
        "items": [
          "Energía y emoción: La dinámica del casino genera un ambiente vibrante donde la conversación fluye de manera espontánea.",
          "Interacción inclusiva: Con múltiples estaciones y roles, todos pueden participar: jugadores, espectadores, estrategas y animadores.",
          "Desconexión del día a día: Este tipo de celebraciones actúa como un respiro mental, reduce el estrés y mejora el clima laboral.",
          "Competencia saludable: El uso de fichas ficticias y premios simbólicos mantiene la experiencia ligera, divertida y motivadora.",
          "Experiencia memorables: Una buena temática transforma un evento en un recuerdo; la estética, la música y el ambiente hacen que la gente hable del evento por mucho tiempo."
        ]
      },
      {
        "type": "h2",
        "text": "Juegos, Temáticas y Actividades"
      },
      {
        "type": "p",
        "text": "Diseñamos cada Fiesta Casino de acuerdo con el tamaño del equipo, los objetivos del evento y la atmósfera deseada. Puede ser en salones, oficinas transformadas, hoteles, terrazas o espacios híbridos."
      },
      {
        "type": "h3",
        "text": "🎲 Mesa de Blackjack"
      },
      {
        "type": "p",
        "text": "Juego rápido y dinámico con reglas simples; ideal para generar conversación y movimiento constante."
      },
      {
        "type": "h3",
        "text": "🎰 Estación de Ruleta"
      },
      {
        "type": "p",
        "text": "Un clásico visual que reúne grupos alrededor de la mesa para “apostar” con fichas ficticias y celebrar giros afortunados."
      },
      {
        "type": "h3",
        "text": "🎟️ Tienda de Premios"
      },
      {
        "type": "p",
        "text": "Las fichas recolectadas se canjean por boletos o recompensas temáticas, reforzando la participación y el juego en equipo."
      },
      {
        "type": "h3",
        "text": "🃏 Poker para Principiantes"
      },
      {
        "type": "p",
        "text": "Una mesa guiada por facilitadores donde todos pueden aprender y jugar, sin presión ni apuestas reales."
      },
      {
        "type": "h3",
        "text": "🎤 Cabina de Fotos & Reconocimientos"
      },
      {
        "type": "p",
        "text": "Cierra la noche con fotos temáticas y premios divertidos como “Jugador Más Estratégico”, “Mejor Suerte” o “Espíritu del Casino”."
      },
      {
        "type": "h2",
        "text": "Cómo Funciona"
      },
      {
        "type": "p",
        "text": "En eBombo hacemos que planear eventos temáticos sea simple y que vivirlos sea inolvidable."
      },
      {
        "type": "h3",
        "text": "1. Planifica"
      },
      {
        "type": "p",
        "text": "Comenzamos con una breve consulta para entender la cultura de tu empresa, el tipo de celebración, el tamaño del equipo y la experiencia que buscas. Con eso diseñamos un plan personalizado."
      },
      {
        "type": "h3",
        "text": "2. Reserva"
      },
      {
        "type": "p",
        "text": "Una vez aprobado, nos encargamos de todo: mesas, decoraciones, facilitadores, materiales, música y ambientación. Tú eliges la fecha y el lugar; nosotros nos ocupamos del resto."
      },
      {
        "type": "h3",
        "text": "3. Ejecuta"
      },
      {
        "type": "p",
        "text": "El día del evento, nuestro equipo coordina la instalación, el flujo de actividades y la experiencia en cada mesa, asegurando una noche fluida, divertida y bien organizada."
      },
      {
        "type": "h3",
        "text": "4. Celebra y Recuerda"
      },
      {
        "type": "p",
        "text": "Cerramos el evento con premios simbólicos, fotos y reconocimientos, dejando un recuerdo compartido y una energía positiva que se siente más allá del evento."
      },
      {
        "type": "h2",
        "text": "Por Qué Elegir eBombo"
      },
      {
        "type": "p",
        "text": "En eBombo creemos que una experiencia temática bien diseñada puede transformar una celebración en un momento de cultura, conexión y diversión auténtica."
      },
      {
        "type": "p",
        "text": "Nuestra Fiesta Casino va más allá de la decoración: cuidamos la ambientación, la conducción, el ritmo y la interacción humana para que el evento se sienta dinámico, inclusivo y perfectamente alineado con tu equipo."
      },
      {
        "type": "p",
        "text": "Diseñamos cada detalle según la identidad de tu empresa. Y desde la planificación hasta la ejecución, nuestro equipo de expertos en eventos corporativos asegura una experiencia fluida y memorable."
      },
      {
        "type": "p",
        "text": "Únete a más de 2,000 empresas, incluyendo Adidas, Louis Vuitton, SAP y Allianz, que han confiado en eBombo para crear experiencias que sus equipos siguen recordando."
      },
      {
        "type": "h2",
        "text": "¿Listo para una Noche Temática que Tu Equipo No Olvidará?"
      },
      {
        "type": "p",
        "text": "Tu gente merece celebraciones que sorprendan, conecten y generen recuerdos compartidos. Deja que eBombo transforme tu evento corporativo en una experiencia casino llena de diversión, risas y emoción, sin apuestas reales."
      },
      {
        "type": "p",
        "text": "👉 Comienza a planificar tu Fiesta Casino con eBombo hoy mismo y lleva tu próximo evento al siguiente nivel."
      }
    ]
  }
];
