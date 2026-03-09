type ContentBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] };

interface ExperienceContent {
  slug: string;
  h1: string;
  badge: string;
  pills: string[];
  bodyContent: ContentBlock[];
}

export const experienceContentBatch2: ExperienceContent[] = [
  {
    "slug": "inauguraciones-corporativas",
    "h1": "Inauguraciones",
    "badge": "Innovación",
    "pills": [
      "Motivación"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Las inauguraciones son uno de los eventos corporativos más significativos que puede organizar una empresa. No se trata únicamente de abrir un espacio físico o presentar una operación funcional; una inauguración es un momento cargado de simbolismo donde se comunica visión, confianza y trayectoria."
      },
      {
        "type": "p",
        "text": "En un mundo empresarial donde la percepción pública y la experiencia de marca son cada vez más relevantes, las inauguraciones bien ejecutadas pueden potenciar el posicionamiento de la empresa, fortalecer relaciones con aliados estratégicos y generar visibilidad positiva ante distintos públicos."
      },
      {
        "type": "p",
        "text": "Este artículo explica qué son las inauguraciones corporativas, qué objetivos cumplen, cómo organizarlas paso a paso y qué aspectos debes considerar al elegir proveedores especializados, integrando una visión profesional para maximizar el impacto del evento."
      },
      {
        "type": "h2",
        "text": "¿Qué son las inauguraciones en el ámbito empresarial?"
      },
      {
        "type": "p",
        "text": "En el contexto corporativo, las inauguraciones son eventos que marcan la apertura oficial de un espacio físico, una operación, una sucursal, una planta o una unidad de negocio. También pueden corresponder a la presentación formal de un programa o servicio que la empresa desea comunicar de manera pública y estructurada."
      },
      {
        "type": "p",
        "text": "Lo que distingue a una inauguración de otros eventos no es la logística, sino el significado: representa un nuevo comienzo, un hito estratégico y un mensaje de crecimiento interno y externo."
      },
      {
        "type": "p",
        "text": "Las inauguraciones pueden involucrar a colaboradores, directivos, socios comerciales, medios de comunicación, autoridades locales y público objetivo según el tipo de empresa y sector."
      },
      {
        "type": "h2",
        "text": "¿Para qué sirven las inauguraciones?"
      },
      {
        "type": "p",
        "text": "Las inauguraciones cumplen múltiples funciones dentro del ecosistema corporativo. En términos de comunicación estratégica, permiten transmitir mensajes clave sobre la visión, la expansión o el fortalecimiento de la compañía."
      },
      {
        "type": "p",
        "text": "En términos relacionales, aportan una oportunidad para interactuar con grupos de interés y generar cercanía."
      },
      {
        "type": "p",
        "text": "Además, una inauguración bien planificada puede servir para:"
      },
      {
        "type": "ul",
        "items": [
          "Presentar la empresa ante una nueva comunidad o región",
          "Aumentar la visibilidad mediática y reputacional",
          "Fortalecer la relación con socios, proveedores y autoridades",
          "Desarrollar sentido de pertenencia entre colaboradores internos",
          "Mostrar avances en tecnología, innovación o infraestructura"
        ]
      },
      {
        "type": "p",
        "text": "Más allá de la ceremonia, la inauguración también genera contenido comunicacional que puede aprovecharse en canales digitales, materiales institucionales, estrategias de marketing y branding interno."
      },
      {
        "type": "h2",
        "text": "Tipos de inauguraciones más comunes en el mundo corporativo"
      },
      {
        "type": "p",
        "text": "Aunque todas las inauguraciones comparten el sentido de apertura, existen distintos tipos según su finalidad:"
      },
      {
        "type": "h3",
        "text": "Inauguración de instalaciones"
      },
      {
        "type": "p",
        "text": "Apertura de oficinas, sucursales, plantas de producción, centros logísticos o edificios corporativos. Este tipo suele involucrar recorridos guiados y demostraciones operativas."
      },
      {
        "type": "h3",
        "text": "Inauguración de servicios o unidades de negocio"
      },
      {
        "type": "p",
        "text": "Presentación oficial de nuevas áreas, líneas de servicio o programas corporativos. Su enfoque suele ser más estratégico que físico."
      },
      {
        "type": "h3",
        "text": "Inauguraciones con impacto local"
      },
      {
        "type": "p",
        "text": "Eventos dirigidos a comunidades, cámaras empresariales o autoridades cuando la empresa entra en una nueva región o país."
      },
      {
        "type": "h3",
        "text": "Inauguraciones internas"
      },
      {
        "type": "p",
        "text": "Enfocadas exclusivamente en colaboradores para reforzar cultura, celebrar crecimiento y generar motivación."
      },
      {
        "type": "p",
        "text": "Cada tipo de inauguración requiere matices distintos en su diseño, pero todos comparten un objetivo en común: comunicar de forma clara y simbólica un nuevo inicio."
      },
      {
        "type": "h2",
        "text": "Cómo organizar inauguraciones paso a paso"
      },
      {
        "type": "p",
        "text": "La organización de inauguraciones requiere una combinación de comunicación estratégica, logística y manejo de públicos. No es un evento improvisado; su efectividad depende de la coherencia entre el mensaje y la ejecución."
      },
      {
        "type": "h3",
        "text": "1. Definir el propósito del evento"
      },
      {
        "type": "p",
        "text": "Toda inauguración tiene una intención: ampliar operaciones, mejorar capacidades productivas, abrir una sede regional o modernizar infraestructura. Definir el propósito permite estructurar el mensaje y orientar el diseño del evento."
      },
      {
        "type": "p",
        "text": "Este propósito debe reflejarse en la narrativa del evento: discursos, recorridos, piezas audiovisuales y comunicación externa."
      },
      {
        "type": "h3",
        "text": "2. Identificar públicos clave"
      },
      {
        "type": "p",
        "text": "Una inauguración no siempre está dirigida al mismo público. Algunas son internas, otras mediáticas y otras institucionales. Identificar los públicos permite ajustar la experiencia."
      },
      {
        "type": "p",
        "text": "Entre los más habituales se encuentran:"
      },
      {
        "type": "ul",
        "items": [
          "Colaboradores y líderes internos",
          "Clientes y socios estratégicos",
          "Autoridades y representantes sectoriales",
          "Medios de comunicación",
          "Comunidades locales"
        ]
      },
      {
        "type": "p",
        "text": "No se trata de invitar por invitar, sino de crear un espacio significativo para quienes pueden dar sentido al evento."
      },
      {
        "type": "h3",
        "text": "3. Diseñar la ceremonia y la narrativa"
      },
      {
        "type": "p",
        "text": "El momento de corte de listón, el discurso principal, el recorrido por instalaciones o la presentación audiovisual no son detalles accesorios: son la coreografía simbólica del evento."
      },
      {
        "type": "p",
        "text": "Deben estar cuidadosamente diseñados para transmitir un mensaje coherente con el momento que vive la empresa."
      },
      {
        "type": "p",
        "text": "Este diseño incluye duración, agenda, presentadores, lenguaje, tono institucional y momentos clave como reconocimientos o agradecimientos."
      },
      {
        "type": "h3",
        "text": "4. Planificar la logística estratégica"
      },
      {
        "type": "p",
        "text": "La logística de las inauguraciones implica aspectos como adecuación del espacio, señalética, equipos de sonido, iluminación, montaje de escenario, mobiliario, catering y seguridad."
      },
      {
        "type": "p",
        "text": "Además, deben considerarse accesos, tiempos de traslado, estacionamientos, puntos de registro y control de aforo. Si la inauguración incluye visitas guiadas, también se requiere planificación para flujos de personas, rutas seguras y personal de apoyo."
      },
      {
        "type": "p",
        "text": "Una inauguración puede tener un mensaje poderoso, pero si la experiencia es caótica, pierde impacto."
      },
      {
        "type": "h3",
        "text": "5. Ejecutar el evento con supervisión profesional"
      },
      {
        "type": "p",
        "text": "Durante la inauguración, la ejecución en tiempo real es clave. Cada minuto cuenta: un retraso en discursos, una falla técnica en un video o una mala conducción del evento pueden alterar la percepción del público."
      },
      {
        "type": "p",
        "text": "Por eso, muchas empresas optan por apoyo especializado en producción de eventos empresariales para asegurar una experiencia impecable."
      },
      {
        "type": "h3",
        "text": "6. Cerrar y capitalizar el evento"
      },
      {
        "type": "p",
        "text": "El cierre no es solo despedida. Una buena inauguración deja huella a través de fotografías, videos, comunicados, notas de prensa y piezas institucionales para redes y web corporativa. También abre puertas a futuras colaboraciones y posicionamientos."
      },
      {
        "type": "p",
        "text": "La capitalización posterior es especialmente importante cuando el objetivo incluye reputación, visibilidad o relacionamiento institucional."
      },
      {
        "type": "h2",
        "text": "Beneficios de las inauguraciones para las empresas"
      },
      {
        "type": "p",
        "text": "Las inauguraciones aportan valor en distintas dimensiones. Desde el punto de vista estratégico, refuerzan la identidad corporativa y construyen legitimidad institucional."
      },
      {
        "type": "p",
        "text": "En entornos competitivos, mostrar capacidad de expansión o modernización comunica solidez y visión."
      },
      {
        "type": "p",
        "text": "A nivel interno, fortalecen el sentido de pertenencia, ya que los colaboradores viven la emoción del crecimiento y se conectan con una historia corporativa más amplia. Sentir orgullo por el lugar donde se trabaja es una de las bases del engagement laboral."
      },
      {
        "type": "p",
        "text": "En términos externos, las inauguraciones pueden potenciar la reputación, generar prensa positiva, facilitar la atracción de talento o clientes y mejorar relaciones con autoridades y comunidades."
      },
      {
        "type": "h2",
        "text": "En qué fijarte al contratar proveedores para inauguraciones"
      },
      {
        "type": "p",
        "text": "No todas las empresas están especializadas en eventos empresariales con componente institucional. Al seleccionar proveedores, es importante evaluar experiencia, capacidad logística y sensibilidad comunicacional."
      },
      {
        "type": "p",
        "text": "Un buen aliado para inauguraciones debe comprender que el evento no es solo operativo, sino simbólico; debe saber traducir la identidad corporativa en una experiencia coherente y bien ejecutada."
      },
      {
        "type": "p",
        "text": "En este sentido, plataformas especializadas como eBombo facilitan la planificación y ejecución de inauguraciones corporativas al integrar logística, ceremonial, acompañamiento y diseño de experiencia en un mismo proceso, permitiendo que las empresas se enfoquen en los mensajes estratégicos y no en los detalles operativos."
      },
      {
        "type": "p",
        "text": "Elegir proveedores que actúen como socios, no solo como ejecutores, aumenta la calidad del evento y su impacto posterior."
      },
      {
        "type": "h2",
        "text": "Las inauguraciones son más que una ceremonia"
      },
      {
        "type": "p",
        "text": "Las inauguraciones son eventos con un fuerte componente emocional y simbólico. Marcan hitos, cuentan historias de crecimiento y consolidan la identidad corporativa. No son actividades accesorias; son herramientas estratégicas que fortalecen vínculos internos y externos."
      },
      {
        "type": "p",
        "text": "Cuando se planifican con una narrativa clara, una logística sólida y un acompañamiento profesional, las inauguraciones se convierten en experiencias memorables y en oportunidades de posicionamiento que trascienden el evento en sí."
      }
    ]
  },
  {
    "slug": "mision-escape",
    "h1": "Misión de Escape",
    "badge": "Trivia",
    "pills": [
      "Confianza",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "¿Preparados para poner a prueba la astucia, la comunicación y la capacidad de resolver problemas bajo presión? Misión de Escape es una experiencia virtual inmersiva en la que tu equipo se enfrentará a una serie de acertijos y desafíos diseñados para retar tanto el pensamiento lógico como la colaboración."
      },
      {
        "type": "p",
        "text": "Guiados por un facilitador y con el tiempo en contra, los participantes deberán trabajar unidos para descifrar códigos, superar pruebas y avanzar paso a paso hasta completar la misión final. La emoción crece a medida que el reloj avanza, generando un ambiente lleno de adrenalina, creatividad y momentos inesperados."
      },
      {
        "type": "p",
        "text": "Con un equilibrio perfecto entre diversión y estrategia, Misión de Escape es la actividad ideal para equipos que buscan reforzar la comunicación, fomentar la cooperación y vivir juntos una experiencia única."
      }
    ]
  },
  {
    "slug": "prode-corporativo-para-empresas-argentinas",
    "h1": "Prode Corporativo para Empresas Argentinas",
    "badge": "Deporte",
    "pills": [
      "Integración",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organizá un prode corporativo en tu empresa y convertí cada fecha del torneo en una excusa perfecta para conectar equipos, generar conversación y vivir el fútbol desde adentro."
      },
      {
        "type": "p",
        "text": "¿Qué es el prode corporativo y por qué todas las empresas argentinas deberían tener uno?"
      },
      {
        "type": "p",
        "text": "En Argentina el prode no necesita explicación. Es parte del ADN futbolero del país: antes de cada fecha, cada uno anota sus pronósticos, los compara con los del resto y durante semanas el fútbol se convierte en el tema que une a cualquier grupo de personas, sin importar edad, cargo ni departamento."
      },
      {
        "type": "p",
        "text": "Lo que quizás todavía no probaste es lo bien que funciona ese mismo formato dentro de una empresa."
      },
      {
        "type": "p",
        "text": "Cuando organizás un prode corporativo, sucede algo que pocas dinámicas de recursos humanos logran: la gente participa de forma genuina, sin que nadie la obligue, porque quiere."
      },
      {
        "type": "p",
        "text": "El de sistemas que normalmente solo habla de tickets tiene una opinión muy firme sobre si la Scaloneta llega a la final. La gerenta de finanzas que parece inalcanzable resulta ser la más fanática de todos."
      },
      {
        "type": "p",
        "text": "Y el equipo que trabaja remoto desde Córdoba, Rosario o Mendoza está tan metido en el ranking interno como el que está en la oficina de Buenos Aires."
      },
      {
        "type": "p",
        "text": "Argentina es el país del fútbol por excelencia. Somos bicampeones del mundo con Maradona, tricampeones con Messi, la tierra de los mejores jugadores de la historia y una nación que respira fútbol de lunes a domingo."
      },
      {
        "type": "p",
        "text": "Eso hace que el prode corporativo tenga acá una profundidad cultural que en otros países simplemente no existe: no es una actividad de team building importada, es algo que ya forma parte de quiénes somos."
      },
      {
        "type": "p",
        "text": "En eBombo llevamos años organizando prodes corporativos para empresas argentinas de todos los tamaños y sectores."
      },
      {
        "type": "p",
        "text": "Sabemos qué genera participación masiva, qué mantiene el interés vivo durante todo el torneo y cómo convertir un prode en una experiencia de cohesión que el equipo recuerda mucho después de que se apague el último partido."
      },
      {
        "type": "p",
        "text": "El Prode del Mundial: el Clásico que Paraliza las Oficinas Argentinas"
      },
      {
        "type": "h3",
        "text": "Por Qué el Mundial es el Torneo Ideal para un Prode Corporativo"
      },
      {
        "type": "p",
        "text": "El Mundial es el único evento deportivo capaz de unir a toda una oficina sin importar perfiles, gustos ni niveles de fanatismo. No hace falta ser un experto para tener una opinión sobre si Argentina pasa la fase de grupos, sobre quién va a ser el goleador del torneo o qué selección africana va a dar la sorpresa del año."
      },
      {
        "type": "p",
        "text": "Con el nuevo formato de 48 selecciones, hay partidos durante más de un mes. Eso significa más de cuatro semanas de pronósticos, de actualizaciones de ranking, de predicciones cumplidas y de apuestas que salen desastrosamente mal. Ese arco largo es exactamente lo que necesita un prode corporativo para generar cohesión real: no es un evento puntual, es un proceso compartido que construye vínculos semana a semana."
      },
      {
        "type": "p",
        "text": "Y cuando Argentina está jugando, el prode corporativo adquiere otra dimensión completamente. Los partidos de la Scaloneta se convierten en eventos colectivos dentro de la empresa, la tensión del ranking interno se mezcla con la del partido, y cada resultado tiene consecuencias en la clasificación que generan conversaciones que se extienden durante días."
      },
      {
        "type": "h3",
        "text": "Cómo Funciona el Prode del Mundial en tu Empresa"
      },
      {
        "type": "p",
        "text": "El formato clásico es simple y efectivo. Antes del inicio del torneo, cada participante completa su prode: pronostica quién gana cada grupo, quién avanza a octavos, quién llega a semis, quién disputa la final y quién levanta la Copa del Mundo."
      },
      {
        "type": "p",
        "text": "También puede incluir pronósticos sobre el máximo goleador, la revelación del torneo o el equipo más goleador de la fase de grupos."
      },
      {
        "type": "p",
        "text": "A partir de ahí, cada resultado real suma o resta puntos según lo que cada uno predijo. El ranking se actualiza después de cada fecha y la competencia interna sigue su propio camino paralelo al torneo, con sus propios líderes, sus propias remontadas y sus propios momentos de gloria y de catástrofe."
      },
      {
        "type": "p",
        "text": "Diseñamos el sistema de puntuación para que no sea necesario saber de fútbol para tener opciones reales de ganar. Las predicciones aleatorias a veces aciertan más que las de los que saben, y esa imprevisibilidad es parte esencial del encanto del prode."
      },
      {
        "type": "p",
        "text": "Otros Torneos para tu Prode Corporativo en Argentina"
      },
      {
        "type": "h3",
        "text": "Prode de la Copa América"
      },
      {
        "type": "p",
        "text": "La Copa América es el segundo torneo de mayor intensidad en Argentina. Con la Scaloneta como vigente campeona y la rivalidad histórica con Brasil como telón de fondo, cada edición genera una pasión que convierte el prode corporativo en algo casi obligatorio para cualquier empresa que quiera aprovechar ese momento colectivo."
      },
      {
        "type": "h3",
        "text": "Prode de la Champions League"
      },
      {
        "type": "p",
        "text": "Para empresas donde hay mucho seguimiento del fútbol europeo, la Champions es ideal. Real Madrid, Manchester City, Bayern, los grandes clubes europeos tienen seguidores apasionados en toda Argentina, y la fase de eliminatorias directas genera debates semana a semana que el prode corporativo puede canalizar perfectamente."
      },
      {
        "type": "h3",
        "text": "Prode del Torneo Argentino"
      },
      {
        "type": "p",
        "text": "Para equipos con fuerte identidad de clubes locales, el torneo de la Liga Profesional ofrece un formato de temporada larga que puede convertirse en un hilo conductor de cohesión durante meses."
      },
      {
        "type": "p",
        "text": "Boca, River, Racing, Independiente, San Lorenzo: el fútbol argentino genera pasiones que no necesitan ningún estímulo externo para encenderse, y el prode corporativo simplemente les da un cauce organizado."
      },
      {
        "type": "h3",
        "text": "Prode de la Copa Libertadores"
      },
      {
        "type": "p",
        "text": "La Libertadores es el torneo de clubes más importante de Sudamérica y concentra un seguimiento enorme en Argentina, especialmente cuando hay equipos argentinos fuertes compitiendo por el título. La fase de grupos más las eliminatorias directas ofrecen semanas de pronósticos y debates que funcionan muy bien en formato prode corporativo."
      },
      {
        "type": "h3",
        "text": "Prode Multitorneo"
      },
      {
        "type": "p",
        "text": "Para empresas muy futboleras, diseñamos prodes que abarcan varios torneos simultáneos o consecutivos, con un ranking general que acumula puntos a lo largo del año. Esta modalidad convierte el prode corporativo en una dinámica permanente de engagement, no solo en un evento puntual ligado a un torneo específico."
      },
      {
        "type": "p",
        "text": "Cómo Organizamos tu Prode Corporativo"
      },
      {
        "type": "h3",
        "text": "Diseño y Configuración a Medida"
      },
      {
        "type": "p",
        "text": "Definimos juntos el formato, las reglas y el sistema de puntuación que mejor se adapta a tu equipo. ¿Predicciones de resultados exactos o solo ganadores de cada fase? ¿Puntos extra por acertar el campeón y el goleador? ¿El prode es definitivo desde el arranque o se puede ajustar antes de cada ronda?"
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
        "text": "El lanzamiento es tan importante como el prode mismo. Una comunicación bien diseñada, con el tono correcto y enviada por los canales adecuados, puede marcar la diferencia entre que participe la mitad de la empresa o que participe casi todo el mundo."
      },
      {
        "type": "p",
        "text": "Diseñamos las piezas de comunicación para el lanzamiento adaptadas a la identidad y al tono de tu empresa, desde el mensaje inicial que genera expectativa hasta las instrucciones claras para completar el prode. Si tu equipo usa Slack, Teams o grupos de WhatsApp, nos adaptamos a los canales que ya funcionan."
      },
      {
        "type": "h3",
        "text": "Plataforma Digital y Ranking en Tiempo Real"
      },
      {
        "type": "p",
        "text": "Durante el torneo, los participantes acceden a su prode y al ranking actualizado desde cualquier dispositivo. Saber que estás segundo a tres puntos del líder con dos fechas por delante genera una tensión que mantiene el interés vivo mucho más allá del partido en sí."
      },
      {
        "type": "p",
        "text": "Enviamos actualizaciones periódicas del ranking con el tono y la frecuencia que mejor funcione para tu equipo, celebrando los aciertos, recordando con humor los pronósticos más errados y manteniendo la competencia encendida hasta el último partido."
      },
      {
        "type": "h3",
        "text": "Updates de Fecha que Generan Conversación"
      },
      {
        "type": "p",
        "text": "Después de cada jornada importante enviamos un resumen interno que comenta los resultados, destaca las predicciones más acertadas y celebra, con buen humor, los pronósticos que salieron peor. Estos updates son el corazón del prode corporativo: son los que generan los comentarios en el grupo del trabajo, las discusiones en el café de la oficina y esa energía colectiva que hace que la gente llegue el lunes preguntando cómo quedó el ranking."
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
        "text": "El premio puede ser lo que defina cada empresa. Muchas veces lo más valorado es simplemente el reconocimiento público y el derecho a presumir durante todo el año siguiente."
      },
      {
        "type": "p",
        "text": "Por Qué el Prode Corporativo Funciona Especialmente Bien en Argentina"
      },
      {
        "type": "h3",
        "text": "El Fútbol es Parte de la Identidad Nacional"
      },
      {
        "type": "p",
        "text": "En Argentina el fútbol no es un hobby: es cultura, es historia, es conversación cotidiana. Eso hace que el prode corporativo tenga una tracción natural que en otros países requiere mucho más esfuerzo generar. La gente ya está pensando en fútbol; el prode simplemente canaliza esa energía de forma organizada dentro de la empresa."
      },
      {
        "type": "h3",
        "text": "Conecta Generaciones y Perfiles Muy Distintos"
      },
      {
        "type": "p",
        "text": "Argentina tiene una fuerza laboral multigeneracional donde conviven personas que vieron el Mundial del 78 o el 86 con millennials que crecieron con Messi y centennials que vivieron Qatar 2022 como su primer gran Mundial. El prode es uno de los pocos contextos donde esas generaciones hablan el mismo idioma y comparten referencias comunes con genuino entusiasmo."
      },
      {
        "type": "h3",
        "text": "Ideal para Empresas con Equipos en Todo el País"
      },
      {
        "type": "p",
        "text": "Argentina es un país enorme con empresas que tienen equipos distribuidos entre Buenos Aires, Córdoba, Rosario, Mendoza, Tucumán y muchas ciudades más. El prode corporativo digital elimina la distancia y crea un espacio de competencia compartida donde da igual si estás en casa central o en una sucursal del interior."
      },
      {
        "type": "h3",
        "text": "Funciona en los Momentos de Mayor Presión Laboral"
      },
      {
        "type": "p",
        "text": "Los grandes torneos suelen coincidir con períodos de trabajo intenso. Tener algo divertido y compartido en lo que pensar entre reunión y reunión transforma el ambiente de trabajo de formas que son difíciles de medir pero muy fáciles de notar en el día a día."
      },
      {
        "type": "p",
        "text": "Beneficios Concretos del Prode Corporativo para tu Empresa"
      },
      {
        "type": "h3",
        "text": "Mayor Cohesión entre Áreas y Equipos"
      },
      {
        "type": "p",
        "text": "Las interacciones espontáneas que genera el prode, los comentarios en los canales internos, los debates en el almuerzo, construyen vínculos informales que terminan fortaleciendo la colaboración en el trabajo formal. Es cohesión que no se puede fabricar en un taller de dos horas."
      },
      {
        "type": "h3",
        "text": "Engagement Genuino con Inversión Mínima"
      },
      {
        "type": "p",
        "text": "El prode corporativo tiene una de las mejores relaciones impacto-costo de todas las dinámicas de cohesión que existen. El nivel de participación y conversación que genera es difícil de igualar con actividades que requieren presupuestos mucho más altos."
      },
      {
        "type": "h3",
        "text": "Integración Natural de Nuevos Colaboradores"
      },
      {
        "type": "p",
        "text": "Para alguien que se acaba de sumar a la empresa, el prode es una entrada perfecta a la cultura interna: un contexto sin presión, sin jerarquías, donde conocer gente y empezar a sentirse parte del equipo antes de que lo logre ningún proceso de onboarding formal."
      },
      {
        "type": "h3",
        "text": "Mejora del Clima Laboral en Fechas Clave"
      },
      {
        "type": "p",
        "text": "Una empresa que sabe crear momentos de diversión compartida es una empresa con mejor clima y menor rotación. El prode corporativo es un gesto pequeño con un impacto desproporcionadamente grande en cómo la gente percibe su lugar de trabajo."
      },
      {
        "type": "p",
        "text": "¿Listo para que tu empresa viva el próximo torneo con un prode que lo haga memorable?"
      },
      {
        "type": "p",
        "text": "Contanos cuántas personas forman tu equipo, qué torneo te interesa y cuándo querés lanzarlo. En eBombo diseñamos tu prode corporativo de principio a fin y nos aseguramos de que funcione tan bien como la Scaloneta en sus mejores noches."
      }
    ]
  },
  {
    "slug": "programas-corporativos-mindfulness",
    "h1": "Programas Corporativos de Mindfulness",
    "badge": "Mindfulness",
    "pills": [
      "Motivación",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Los Programas Corporativos de Mindfulness están diseñados para ayudar a los colaboradores a gestionar el estrés, mejorar la concentración y fortalecer el bienestar emocional. Las sesiones incluyen meditaciones guiadas, técnicas de respiración y prácticas de atención plena que pueden integrarse fácilmente en la jornada laboral."
      },
      {
        "type": "p",
        "text": "Ya sea como un workshop puntual, parte de un retiro de bienestar o un programa continuo, estas experiencias invitan a las personas a recargar energía, reenfocarse y aportar mayor calma y claridad a su trabajo diario."
      },
      {
        "type": "h2",
        "text": "¿Por qué elegir un Programa Corporativo de Mindfulness?"
      },
      {
        "type": "ul",
        "items": [
          "Reduce el estrés y la ansiedad en el entorno laboral.",
          "Mejora la concentración, la atención y la productividad.",
          "Fortalece la regulación emocional y la resiliencia.",
          "Aumenta el bienestar y la satisfacción de los colaboradores.",
          "Refuerza la cultura de equipo a través de experiencias compartidas.",
          "Entrega herramientas prácticas de mindfulness para el día a día."
        ]
      },
      {
        "type": "h2",
        "text": "Cómo funciona la experiencia de Mindfulness Corporativo"
      },
      {
        "type": "ul",
        "items": [
          "Definir la intención – Los facilitadores presentan los beneficios del mindfulness y establecen los objetivos de la sesión.",
          "Práctica guiada – Los participantes realizan meditaciones, ejercicios de respiración o actividades de atención plena adaptadas al contexto laboral.",
          "Aplicación práctica – El equipo aprende técnicas simples para mantenerse enfocado y presente durante la jornada de trabajo.",
          "Reflexión y conversación – Espacio de reflexión personal y, de forma opcional, diálogo grupal para reforzar los aprendizajes.",
          "Crecimiento continuo – Las empresas pueden optar por una sesión única o programar encuentros recurrentes para consolidar hábitos de mindfulness."
        ]
      },
      {
        "type": "h2",
        "text": "Evento de un vistazo"
      },
      {
        "type": "p",
        "text": "👥 Tamaño del grupo: 10–200+ participantes ⏰ Duración: 30–60 minutos (disponibles sesiones más largas o recurrentes) 🏢 Ubicación: Oficina, centro de conferencias o plataforma virtual 🎯 Focos: reducción del estrés, concentración, bienestar emocional y resiliencia"
      },
      {
        "type": "h2",
        "text": "¿Para quién son ideales los Programas Corporativos de Mindfulness?"
      },
      {
        "type": "h3",
        "text": "🏢 Equipos corporativos"
      },
      {
        "type": "ul",
        "items": [
          "Reduce el estrés y mejora la productividad."
        ]
      },
      {
        "type": "h3",
        "text": "👩‍💼 Liderazgo y gestión"
      },
      {
        "type": "ul",
        "items": [
          "Aumenta el foco, la claridad mental y la toma de decisiones."
        ]
      },
      {
        "type": "h3",
        "text": "🌍 Conferencias y retiros"
      },
      {
        "type": "ul",
        "items": [
          "Aporta valor con workshops de calma y reconexión."
        ]
      },
      {
        "type": "h3",
        "text": "🎉 Días de bienestar laboral"
      },
      {
        "type": "ul",
        "items": [
          "Apoya la salud mental con prácticas restaurativas."
        ]
      },
      {
        "type": "h3",
        "text": "💡 Equipos híbridos o remotos"
      },
      {
        "type": "ul",
        "items": [
          "Lleva calma y conexión a entornos virtuales."
        ]
      },
      {
        "type": "h2",
        "text": "Reserva hoy tu Programa Corporativo de Mindfulness"
      },
      {
        "type": "p",
        "text": "¿Listos para apoyar el bienestar mental de tu equipo y potenciar su desempeño laboral? Con la facilitación experta de eBombo, tu Programa Corporativo de Mindfulness será práctico, restaurador y verdaderamente transformador."
      }
    ]
  },
  {
    "slug": "rueda-prensa",
    "h1": "Rueda de Prensa",
    "badge": "Innovación",
    "pills": [
      "Comunicación",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organiza ruedas de prensa que generan cobertura real, controlan el mensaje y posicionan a tu organización exactamente donde quieres estar."
      },
      {
        "type": "p",
        "text": "¿Qué determina el éxito de una rueda de prensa?"
      },
      {
        "type": "p",
        "text": "Una rueda de prensa no es simplemente convocar a periodistas y leer un comunicado."
      },
      {
        "type": "p",
        "text": "Es uno de los actos de comunicación más delicados que puede protagonizar una organización: un momento en el que el mensaje, el portavoz, el escenario y la gestión del tiempo tienen que funcionar de forma perfectamente coordinada para generar el impacto deseado."
      },
      {
        "type": "p",
        "text": "Cuando una rueda de prensa sale bien, el resultado es cobertura de calidad en los medios correctos, un mensaje que llega sin distorsiones a la audiencia objetivo y una imagen de marca que sale reforzada."
      },
      {
        "type": "p",
        "text": "Cuando sale mal, las consecuencias pueden ser justo las contrarias: titulares fuera de contexto, preguntas sin respuesta satisfactoria y una oportunidad de comunicación desperdiciada."
      },
      {
        "type": "p",
        "text": "En eBombo entendemos que cada rueda de prensa es única. No existe una fórmula universal porque cada organización tiene objetivos distintos, cada mensaje requiere un enfoque diferente y cada momento mediático tiene su propia lógica."
      },
      {
        "type": "p",
        "text": "Lo que sí existe es una metodología probada para minimizar los riesgos, maximizar el impacto y asegurarse de que todo lo que puede controlarse esté perfectamente controlado."
      },
      {
        "type": "p",
        "text": "Trabajamos con empresas, instituciones públicas, organizaciones sin ánimo de lucro y figuras públicas que necesitan comunicar con precisión en momentos de alta visibilidad."
      },
      {
        "type": "p",
        "text": "Desde el anuncio de una fusión empresarial hasta la presentación de resultados financieros, desde la gestión de una crisis reputacional hasta el lanzamiento de una campaña de relevancia social, nuestra experiencia abarca todos los contextos en los que una rueda de prensa puede ser la herramienta de comunicación adecuada."
      },
      {
        "type": "p",
        "text": "Tipos de Ruedas de Prensa que Gestionamos"
      },
      {
        "type": "h3",
        "text": "Ruedas de Prensa de Lanzamiento"
      },
      {
        "type": "p",
        "text": "Cuando una empresa presenta un nuevo producto, servicio, campaña o línea de negocio, la rueda de prensa es el momento en que la narrativa se fija en el imaginario periodístico."
      },
      {
        "type": "p",
        "text": "Diseñamos el evento para que el mensaje central quede claro, para que los portavoces transmitan confianza y para que los periodistas salgan con todo lo que necesitan para escribir una pieza sólida."
      },
      {
        "type": "p",
        "text": "Nos ocupamos del espacio, la producción audiovisual, los materiales de prensa, la convocatoria y la coordinación en sala para que el lanzamiento tenga el impacto que merece."
      },
      {
        "type": "h3",
        "text": "Ruedas de Prensa Corporativas y Financieras"
      },
      {
        "type": "p",
        "text": "La presentación de resultados, los cambios en la dirección, las fusiones y adquisiciones o los anuncios estratégicos requieren un nivel de precisión comunicativa especialmente alto."
      },
      {
        "type": "p",
        "text": "Los periodistas económicos son exigentes, las preguntas pueden ser incómodas y cada palabra del portavoz será analizada con lupa."
      },
      {
        "type": "p",
        "text": "Preparamos el entorno, coordinamos la logística y apoyamos en la preparación del portavoz para que este tipo de ruedas de prensa transmitan solidez, transparencia y control."
      },
      {
        "type": "h3",
        "text": "Ruedas de Prensa en Situaciones de Crisis"
      },
      {
        "type": "p",
        "text": "En momentos de crisis reputacional, un accidente, una controversia pública o una situación de emergencia, la rueda de prensa puede ser la diferencia entre recuperar la narrativa o perderla definitivamente. La velocidad, el tono y la precisión son críticos."
      },
      {
        "type": "p",
        "text": "Tenemos experiencia gestionando comunicación en situaciones de alta presión. Ayudamos a estructurar el mensaje, preparar al portavoz para preguntas difíciles, elegir el momento y el formato adecuados y gestionar la sala con firmeza y profesionalidad."
      },
      {
        "type": "h3",
        "text": "Ruedas de Prensa Institucionales y Políticas"
      },
      {
        "type": "p",
        "text": "Instituciones públicas, administraciones, partidos políticos y organismos oficiales tienen necesidades de comunicación específicas con protocolos propios, jerarquías de portavoces y sensibilidades particulares alrededor del mensaje."
      },
      {
        "type": "p",
        "text": "Gestionamos ruedas de prensa institucionales respetando los protocolos establecidos, coordinando con gabinetes de comunicación internos y asegurándonos de que la logística nunca interfiera con el mensaje."
      },
      {
        "type": "h3",
        "text": "Ruedas de Prensa de ONG y Sector Social"
      },
      {
        "type": "p",
        "text": "Las organizaciones del tercer sector tienen historias poderosas que contar, pero frecuentemente cuentan con recursos limitados para comunicarlas. Diseñamos ruedas de prensa que maximizan el impacto con presupuestos ajustados, ayudando a que causas importantes lleguen a los medios que pueden amplificarlas."
      },
      {
        "type": "p",
        "text": "Cómo Organizamos tu Rueda de Prensa"
      },
      {
        "type": "h3",
        "text": "Estrategia y Preparación"
      },
      {
        "type": "p",
        "text": "Antes de pensar en el espacio o en la lista de medios, trabajamos contigo para definir el mensaje central, los mensajes secundarios y los límites de lo que se puede y no se puede decir."
      },
      {
        "type": "p",
        "text": "Analizamos el contexto mediático, identificamos los riesgos de la convocatoria y diseñamos una estrategia de comunicación que ponga a tu organización en la mejor posición posible."
      },
      {
        "type": "p",
        "text": "En esta fase también preparamos al portavoz: trabajamos los mensajes clave, anticipamos las preguntas más probables y ensayamos las respuestas para que el día de la rueda de prensa la comunicación fluya con naturalidad y confianza."
      },
      {
        "type": "h3",
        "text": "Convocatoria y Gestión de Medios"
      },
      {
        "type": "p",
        "text": "Una rueda de prensa sin los medios adecuados en la sala es un esfuerzo en vano. Gestionamos la base de datos de contactos periodísticos relevantes para tu sector, redactamos la convocatoria, hacemos el seguimiento necesario para confirmar asistencia y nos aseguramos de que los periodistas que realmente importan estén presentes."
      },
      {
        "type": "p",
        "text": "También gestionamos las acreditaciones, los materiales de prensa en sala y la comunicación con los medios antes y después del evento para maximizar la cobertura."
      },
      {
        "type": "h3",
        "text": "Producción y Logística del Evento"
      },
      {
        "type": "p",
        "text": "Seleccionamos el espacio adecuado para el tamaño y el tono de tu rueda de prensa, coordinamos la producción audiovisual, el atril, la señalética, el fondo corporativo, los micrófonos y todo el equipamiento técnico necesario."
      },
      {
        "type": "p",
        "text": "Nos ocupamos también de los detalles que marcan la diferencia: la iluminación correcta para que las imágenes salgan bien, el sonido limpio para que las grabaciones sean utilizables, y el orden en sala para que los periodistas trabajen cómodamente."
      },
      {
        "type": "h3",
        "text": "Gestión en Sala y Turno de Preguntas"
      },
      {
        "type": "p",
        "text": "El turno de preguntas es el momento de mayor riesgo y también el de mayor oportunidad. Un moderador experto puede dar fluidez a la sesión, gestionar preguntas incómodas con elegancia y asegurarse de que el tiempo se distribuye de forma equilibrada entre los medios presentes."
      },
      {
        "type": "p",
        "text": "Nuestro equipo gestiona la dinámica en sala para que el portavoz pueda concentrarse en comunicar, sin distracciones logísticas ni situaciones inesperadas que no haya anticipado."
      },
      {
        "type": "p",
        "text": "Por Qué Elegir eBombo para tu Rueda de Prensa"
      },
      {
        "type": "h3",
        "text": "Experiencia en Comunicación de Alto Nivel"
      },
      {
        "type": "p",
        "text": "Hemos gestionado ruedas de prensa para empresas del Fortune 500, instituciones públicas de primer nivel y organizaciones en momentos de máxima exposición mediática. Esa experiencia nos da una capacidad de anticipación y gestión del riesgo que solo se desarrolla haciendo, no leyendo manuales."
      },
      {
        "type": "h3",
        "text": "Conocimiento del Ecosistema Mediático"
      },
      {
        "type": "p",
        "text": "Entendemos cómo trabajan los periodistas, qué necesitan para hacer su trabajo bien y qué convierte una rueda de prensa en una noticia que merece espacio. Ese conocimiento nos permite diseñar eventos que no solo son logísticamente impecables, sino que están pensados para generar cobertura real."
      },
      {
        "type": "h3",
        "text": "Preparación Rigurosa del Portavoz"
      },
      {
        "type": "p",
        "text": "El portavoz es el elemento más crítico de cualquier rueda de prensa. Por eso dedicamos tiempo y recursos a la preparación: trabajamos los mensajes, simulamos preguntas difíciles y ayudamos a construir la confianza necesaria para comunicar con claridad bajo presión."
      },
      {
        "type": "h3",
        "text": "Gestión Discreta y Profesional"
      },
      {
        "type": "p",
        "text": "Las ruedas de prensa, especialmente en contextos sensibles, requieren una gestión que sea invisible para el periodista pero sólida para la organización. Trabajamos con discreción, respetamos la confidencialidad de la información y actuamos siempre en beneficio de los intereses comunicativos de nuestro cliente."
      },
      {
        "type": "h3",
        "text": "Cobertura del Evento y Seguimiento Post-Rueda"
      },
      {
        "type": "p",
        "text": "Nuestro trabajo no termina cuando los periodistas salen de la sala. Hacemos seguimiento de la cobertura generada, te informamos de las piezas publicadas y estamos disponibles para gestionar cualquier aclaración o contacto posterior con medios que necesiten información adicional."
      },
      {
        "type": "p",
        "text": "¿Listo para convocar a los medios con confianza?"
      },
      {
        "type": "p",
        "text": "Cuéntanos el motivo de tu rueda de prensa, el plazo que manejas y los objetivos de comunicación que quieres alcanzar. En eBombo te ayudamos a diseñar una convocatoria que genere la cobertura que tu organización merece."
      }
    ]
  },
  {
    "slug": "simposios",
    "h1": "Simposios",
    "badge": "Innovación",
    "pills": [
      "Motivación",
      "60 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Organiza encuentros académicos y profesionales de excelencia donde expertos debaten, colaboran y generan conocimiento que define el futuro de tu campo."
      },
      {
        "type": "h2",
        "text": "¿Qué distingue a un simposio excepcional?"
      },
      {
        "type": "p",
        "text": "Un simposio es mucho más que un evento académico: es un espacio privilegiado donde las mentes más brillantes de una disciplina se reúnen para compartir investigaciones de vanguardia, debatir metodologías, explorar nuevas hipótesis y colaborar en el avance del conocimiento."
      },
      {
        "type": "p",
        "text": "A diferencia de conferencias generales, los simposios se caracterizan por su enfoque especializado, su audiencia experta y su énfasis en el intercambio intelectual profundo y la generación de nuevas ideas."
      },
      {
        "type": "p",
        "text": "En eBombo entendemos la naturaleza única de los simposios académicos y científicos. Sabemos que estos eventos requieren rigor intelectual, atención meticulosa a los detalles académicos, facilidades para presentaciones técnicas complejas y ambientes que propicien discusiones profundas."
      },
      {
        "type": "p",
        "text": "Ya sea un simposio médico sobre terapias emergentes, un encuentro de investigadores en física cuántica, un coloquio de ciencias sociales o un simposio interdisciplinario sobre cambio climático, nos especializamos en crear las condiciones perfectas para el intercambio académico de alto nivel."
      },
      {
        "type": "p",
        "text": "Trabajamos con instituciones académicas, sociedades científicas, centros de investigación y organizaciones profesionales que buscan excelencia en sus eventos."
      },
      {
        "type": "p",
        "text": "Nuestro enfoque respeta la tradición académica mientras incorpora las mejores prácticas modernas en gestión de eventos, asegurando que los investigadores puedan enfocarse en lo que mejor hacen: generar y compartir conocimiento que transforma disciplinas enteras."
      },
      {
        "type": "h2",
        "text": "Tipos de Simposios que Organizamos"
      },
      {
        "type": "h3",
        "text": "Simposios Científicos y de Investigación"
      },
      {
        "type": "p",
        "text": "Producimos encuentros especializados donde investigadores presentan hallazgos originales, comparten metodologías innovadoras y debaten interpretaciones de datos."
      },
      {
        "type": "p",
        "text": "Gestionamos procesos de revisión por pares, coordinamos sesiones de presentaciones orales y pósters, facilitamos discusiones de panel con expertos y creamos ambientes propicios para colaboraciones futuras."
      },
      {
        "type": "p",
        "text": "Desde simposios de biología molecular hasta encuentros de investigación climática, manejamos la complejidad técnica y académica con expertise comprobado."
      },
      {
        "type": "h3",
        "text": "Simposios Médicos y de Ciencias de la Salud"
      },
      {
        "type": "p",
        "text": "Organizamos encuentros especializados para comunidades médicas y de salud. Coordinamos simposios sobre nuevos tratamientos, técnicas quirúrgicas emergentes, protocolos clínicos innovadores y avances en investigación médica."
      },
      {
        "type": "p",
        "text": "Gestionamos acreditación de educación médica continua (CME), cumplimiento con regulaciones de la industria farmacéutica, sesiones de casos clínicos y talleres prácticos con equipamiento médico especializado."
      },
      {
        "type": "h3",
        "text": "Simposios Interdisciplinarios"
      },
      {
        "type": "p",
        "text": "Creamos espacios donde disciplinas diversas convergen para abordar problemas complejos."
      },
      {
        "type": "p",
        "text": "Organizamos simposios que reúnen a físicos con biólogos, economistas con científicos ambientales, o ingenieros con diseñadores, facilitando el tipo de polinización cruzada de ideas que genera innovación verdadera."
      },
      {
        "type": "p",
        "text": "Diseñamos formatos que superan las barreras del lenguaje técnico especializado y fomentan diálogo genuino entre campos."
      },
      {
        "type": "h3",
        "text": "Simposios de Humanidades y Ciencias Sociales"
      },
      {
        "type": "p",
        "text": "Producimos encuentros académicos en filosofía, historia, literatura, sociología, antropología y otras disciplinas humanísticas."
      },
      {
        "type": "p",
        "text": "Coordinamos presentaciones de papers, paneles temáticos, mesas redondas, keynotes de académicos distinguidos y sesiones de discusión que profundizan en debates teóricos y metodológicos."
      },
      {
        "type": "p",
        "text": "Creamos ambientes que honran la tradición humanística del debate riguroso y la argumentación cuidadosa."
      },
      {
        "type": "h3",
        "text": "Simposios de Sociedades Profesionales"
      },
      {
        "type": "p",
        "text": "Organizamos los encuentros anuales o especiales de sociedades científicas y profesionales."
      },
      {
        "type": "p",
        "text": "Gestionamos elecciones de juntas directivas, asambleas generales, ceremonias de premiación académica, publicación de memorias y proceedings, y todas las actividades que mantienen vivas las comunidades académicas organizadas."
      },
      {
        "type": "p",
        "text": "Entendemos las particularidades de gobernanza y tradiciones de estas instituciones."
      },
      {
        "type": "h3",
        "text": "Simposios Híbridos con Alcance Global"
      },
      {
        "type": "p",
        "text": "Diseñamos simposios que combinan participación presencial con acceso remoto internacional, permitiendo que investigadores de todo el mundo contribuyan sin las limitaciones de viajes y visas."
      },
      {
        "type": "p",
        "text": "Implementamos tecnologías que facilitan presentaciones remotas de alta calidad, participación en discusiones desde cualquier zona horaria y acceso on-demand a contenido para aquellos que no pueden asistir en tiempo real."
      },
      {
        "type": "h2",
        "text": "Haz Realidad Tu Simposio En 3 Pasos"
      },
      {
        "type": "h3",
        "text": "Planifica"
      },
      {
        "type": "p",
        "text": "Comenzamos comprendiendo profundamente los objetivos académicos de tu simposio. Trabajamos con tu comité organizador para definir el tema central, identificar subtemas relevantes, establecer criterios de aceptación de trabajos y diseñar el programa científico."
      },
      {
        "type": "p",
        "text": "Coordinamos la formación de comités académicos (científico, revisor, editorial), gestionamos la convocatoria y recepción de abstracts, facilitamos procesos de revisión por pares cuando es necesario, y ayudamos a seleccionar keynote speakers y chairs de sesión de alto prestigio."
      },
      {
        "type": "p",
        "text": "También establecemos el calendario académico completo, desde deadlines de submisión hasta publicación de proceedings."
      },
      {
        "type": "h3",
        "text": "Organiza"
      },
      {
        "type": "p",
        "text": "La logística de un simposio académico tiene requerimientos únicos que dominamos completamente."
      },
      {
        "type": "p",
        "text": "Seleccionamos venues apropiados para presentaciones técnicas (con acústica adecuada, visibilidad óptima, conectividad confiable), coordinamos alojamiento para ponentes internacionales, gestionamos visas y cartas de invitación cuando es necesario, implementamos sistemas de registro especializados que capturan afiliaciones académicas."
      },
      {
        "type": "p",
        "text": "Además, organizamos exhibiciones de pósters con infraestructura adecuada, coordinamos publicaciones de memorias o proceedings, y gestionamos aspectos técnicos como sesiones simultáneas, traducción cuando se requiere, y grabación de presentaciones para archivos institucionales."
      },
      {
        "type": "h3",
        "text": "Facilita"
      },
      {
        "type": "p",
        "text": "Durante el simposio, nos enfocamos en crear las condiciones perfectas para el intercambio intelectual."
      },
      {
        "type": "p",
        "text": "Gestionamos tiempos de presentación estrictamente (crítico en ambientes académicos), proveemos soporte técnico experto para presentaciones complejas con ecuaciones, simulaciones o visualizaciones de datos."
      },
      {
        "type": "p",
        "text": "Además, facilitamos sesiones de Q&A que permiten debates robustos, coordinamos networking durante breaks que facilite colaboraciones futuras, y capturamos contenido de manera que respete derechos de propiedad intelectual y publicación."
      },
      {
        "type": "p",
        "text": "Post-evento, compilamos materiales presentados, procesamos feedback académico y ayudamos con la publicación de proceedings o números especiales de revistas cuando aplica."
      },
      {
        "type": "p",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Todas Las Soluciones Que Necesitas En Un Solo Lugar"
      },
      {
        "type": "p",
        "text": "Simplifica la organización de tu simposio con servicios especializados en eventos académicos."
      },
      {
        "type": "h3",
        "text": "Gestión de Submissions y Revisión"
      },
      {
        "type": "p",
        "text": "Plataformas para recepción de abstracts, coordinación de revisores y comunicación con autores"
      },
      {
        "type": "h3",
        "text": "Producción de Proceedings Académicos"
      },
      {
        "type": "p",
        "text": "Edición, formateo y publicación de memorias y actas del simposio con estándares académicos"
      },
      {
        "type": "h3",
        "text": "Tecnología para Presentaciones Técnicas"
      },
      {
        "type": "p",
        "text": "Infraestructura especializada para ecuaciones, simulaciones, visualizaciones de datos complejas"
      },
      {
        "type": "p",
        "text": "Comienza a planificar"
      },
      {
        "type": "h2",
        "text": "Por qué Elegir eBombo para tus Simposios"
      },
      {
        "type": "h3",
        "text": "Comprensión Profunda de Ambientes Académicos"
      },
      {
        "type": "p",
        "text": "Entendemos las particularidades de eventos académicos: la importancia del rigor intelectual, la necesidad de tiempo adecuado para discusión y debate, las sensibilidades alrededor de jerarquías académicas y reconocimiento, y la criticidad de cumplir con estándares de publicación y acreditación."
      },
      {
        "type": "p",
        "text": "Esta comprensión nos permite navegar exitosamente las expectativas únicas de comunidades académicas."
      },
      {
        "type": "h3",
        "text": "Experiencia con Procesos de Revisión y Publicación"
      },
      {
        "type": "p",
        "text": "Hemos gestionado procesos completos de call for papers, revisión por pares, notificación de aceptaciones, y publicación de proceedings para docenas de simposios."
      },
      {
        "type": "p",
        "text": "Conocemos las plataformas especializadas, los flujos de trabajo editoriales y los estándares de calidad que la comunidad académica espera. Podemos coordinar desde simposios pequeños con 50 submissions hasta grandes encuentros con 500+ papers presentados."
      },
      {
        "type": "h3",
        "text": "Infraestructura Técnica para Presentaciones Complejas"
      },
      {
        "type": "p",
        "text": "Presentaciones académicas frecuentemente incluyen ecuaciones matemáticas complejas, simulaciones computacionales, visualizaciones de datos de alta resolución, videos científicos y otros elementos técnicamente demandantes."
      },
      {
        "type": "p",
        "text": "Proveemos la infraestructura audiovisual necesaria y el soporte técnico experto para que estas presentaciones se vean perfectas, sin importar cuán complejas sean."
      },
      {
        "type": "h3",
        "text": "Red de Contactos en Comunidades Académicas"
      },
      {
        "type": "p",
        "text": "A través de años trabajando con instituciones académicas, hemos construido relaciones con investigadores destacados, sociedades científicas, editoriales académicas y universidades prestigiosas."
      },
      {
        "type": "p",
        "text": "Esta red nos permite ayudarte a identificar y reclutar keynote speakers de alto calibre, conectar con potenciales patrocinadores académicos y difundir tu convocatoria en las comunidades correctas."
      },
      {
        "type": "h3",
        "text": "Gestión de Acreditaciones y Certificaciones"
      },
      {
        "type": "p",
        "text": "Para simposios médicos y de otras profesiones reguladas, gestionamos el proceso completo de acreditación de educación continua."
      },
      {
        "type": "p",
        "text": "Conocemos los requerimientos de diferentes cuerpos acreditadores, documentamos apropiadamente las actividades educativas y facilitamos la entrega de certificados a asistentes, asegurando que tu simposio cumpla con todos los estándares profesionales."
      },
      {
        "type": "h3",
        "text": "Facilitación de Networking Académico"
      },
      {
        "type": "p",
        "text": "Entendemos que gran parte del valor de un simposio está en las conversaciones informales donde surgen colaboraciones futuras."
      },
      {
        "type": "p",
        "text": "Diseñamos espacios y momentos que facilitan estos encuentros: coffee breaks con duración adecuada, cenas que permiten conversaciones profundas, sesiones de pósters con tiempo suficiente para discusión, y lounges diseñados para conversaciones pequeñas pero significativas."
      },
      {
        "type": "h2",
        "text": "¿Listo para organizar un simposio que avance tu disciplina?"
      },
      {
        "type": "p",
        "text": "Cuéntanos sobre tu campo de estudio, tus objetivos académicos y tu comunidad científica. Juntos diseñaremos un simposio riguroso que facilite intercambio intelectual profundo, genere conocimiento valioso y fortalezca tu comunidad académica."
      }
    ]
  },
  {
    "slug": "trivia-clasica",
    "h1": "Trivia Clásica",
    "badge": "Trivia",
    "pills": [
      "Integración",
      "60 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "Si lo tuyo son las preguntas ingeniosas y la sana competencia, Trivia Clásica es la experiencia perfecta para tu equipo. Este dinámico juego virtual pondrá a prueba conocimientos generales, rapidez mental y la capacidad de trabajar en conjunto bajo la presión del tiempo."
      },
      {
        "type": "p",
        "text": "Los equipos se enfrentarán a rondas de preguntas divertidas y desafiantes en múltiples categorías, desde cultura popular hasta historia, ciencia y más. Cada respuesta correcta suma puntos, pero la estrategia y la comunicación en grupo son clave para alcanzar la victoria."
      },
      {
        "type": "p",
        "text": "Con risas aseguradas y un ambiente lleno de energía, Trivia Clásica combina entretenimiento y aprendizaje, ofreciendo a tu equipo la oportunidad de fortalecer la unión mientras se divierten compitiendo."
      }
    ]
  },
  {
    "slug": "wrokshop-engagement-laboral",
    "h1": "Workshop de Engagement Laboral",
    "badge": "Workshop",
    "pills": [
      "Integración",
      "30 minutos"
    ],
    "bodyContent": [
      {
        "type": "p",
        "text": "El Workshop de Engagement Laboral de eBombo ayuda a las organizaciones a fortalecer su cultura, construir confianza e inspirar propósito a través de un aprendizaje interactivo y basado en la experiencia."
      },
      {
        "type": "p",
        "text": "Los colaboradores comprometidos no solo son productivos: son apasionados, motivados y están realmente involucrados en el éxito de la empresa. El Workshop de Engagement Laboral de eBombo ayuda a las organizaciones a fortalecer su cultura, generar confianza e inspirar propósito mediante experiencias de aprendizaje interactivas y significativas."
      },
      {
        "type": "p",
        "text": "Nuestros workshops combinan psicología, colaboración y creatividad para ayudar a los equipos a reconectar con lo que de verdad importa: su trabajo, sus compañeros y sus objetivos compartidos. Ya sea en formato presencial, híbrido o virtual, diseñamos una experiencia que se adapta perfectamente al ritmo y la cultura de tu equipo."
      },
      {
        "type": "h2",
        "text": "Por qué es importante el Engagement Laboral"
      },
      {
        "type": "p",
        "text": "El compromiso de los colaboradores no es solo una palabra de moda: es la base de toda organización que realmente prospera. Cuando las personas se sienten vistas, valoradas y acompañadas, toda la empresa se beneficia."
      },
      {
        "type": "h3",
        "text": "1. Aumenta la retención y la motivación"
      },
      {
        "type": "p",
        "text": "Los colaboradores comprometidos son más leales, entusiastas y están emocionalmente conectados con la organización. Nuestros workshops reavivan ese sentido de pertenencia y orgullo."
      },
      {
        "type": "h3",
        "text": "2. Fortalece la comunicación y la colaboración"
      },
      {
        "type": "p",
        "text": "A través de actividades guiadas y conversaciones significativas, los participantes aprenden a comunicarse con mayor apertura, compartir ideas y colaborar de forma más efectiva, mejorando el trabajo en equipo y los flujos internos."
      },
      {
        "type": "h3",
        "text": "3. Impulsa el liderazgo y el empoderamiento"
      },
      {
        "type": "p",
        "text": "Cuando las personas entienden el impacto de su rol, asumen mayor responsabilidad e iniciativa. Nuestras sesiones fomentan la autonomía, la creatividad y la confianza en todos los niveles."
      },
      {
        "type": "h3",
        "text": "4. Construye una cultura de reconocimiento"
      },
      {
        "type": "p",
        "text": "El reconocimiento es uno de los mayores motores de la motivación. Ayudamos a los equipos a crear hábitos y rituales que celebran los logros, grandes y pequeños, integrando la apreciación en la cultura diaria."
      },
      {
        "type": "h3",
        "text": "5. Alinea propósito y desempeño"
      },
      {
        "type": "p",
        "text": "Cuando las personas comprenden cómo su trabajo conecta con los objetivos de la empresa, el compromiso aumenta de forma natural. Estos workshops realinean a los equipos en torno a una visión y propósito compartidos."
      },
      {
        "type": "h2",
        "text": "Temáticas y actividades del workshop"
      },
      {
        "type": "p",
        "text": "Diseñamos cada Workshop de Engagement Laboral según las necesidades y el perfil de tu empresa. Ya sea que busques energizar a líderes, reconectar áreas o mejorar el clima general, adaptamos la experiencia para lograr el mayor impacto."
      },
      {
        "type": "h3",
        "text": "🎯 Workshop de Propósito y Alineación"
      },
      {
        "type": "p",
        "text": "Reconecta a los colaboradores con la misión, visión y valores de la empresa mediante ejercicios reflexivos, storytelling y dinámicas grupales."
      },
      {
        "type": "h3",
        "text": "🤝 Laboratorio de Colaboración en Equipo"
      },
      {
        "type": "p",
        "text": "Desafíos de resolución de problemas y juegos de comunicación que fomentan la confianza, la escucha activa y la empatía. Ideal para romper silos y fortalecer la unión."
      },
      {
        "type": "h3",
        "text": "💬 Sesión de Feedback y Reconocimiento"
      },
      {
        "type": "p",
        "text": "Ayuda a tu equipo a dar y recibir feedback de manera positiva y accionable. Aprende el arte de reconocer y construir una cultura donde todos se sientan valorados."
      },
      {
        "type": "h3",
        "text": "🚀 Workshop de Innovación y Empoderamiento"
      },
      {
        "type": "p",
        "text": "Impulsa la creatividad y la toma de iniciativa con desafíos prácticos, sesiones de brainstorming y construcción de ideas en tiempo real. Perfecto para empresas que quieren reactivar la energía de sus equipos."
      },
      {
        "type": "h3",
        "text": "🧘 Workshop de Bienestar y Equilibrio"
      },
      {
        "type": "p",
        "text": "Aborda el burnout, el estrés y el bienestar mental mediante mindfulness guiado, actividades de autoconocimiento y entrenamiento en resiliencia. Porque un equipo comprometido también es un equipo saludable."
      },
      {
        "type": "h2",
        "text": "Cómo funciona"
      },
      {
        "type": "p",
        "text": "En eBombo hacemos que el engagement sea fácil de planificar y poderoso de vivir."
      },
      {
        "type": "h3",
        "text": "1. Planificación"
      },
      {
        "type": "p",
        "text": "Comenzamos con una consultoría para entender la cultura, los objetivos y los desafíos de engagement de tu empresa. A partir de ahí, diseñamos un workshop completamente a medida."
      },
      {
        "type": "h3",
        "text": "2. Reserva"
      },
      {
        "type": "p",
        "text": "Nuestro equipo se encarga de todo: agenda, logística, facilitadores y materiales. Tú eliges la fecha y nosotros hacemos que todo ocurra."
      },
      {
        "type": "h3",
        "text": "3. Ejecución"
      },
      {
        "type": "p",
        "text": "El día del evento, nuestros facilitadores profesionales guían a tu equipo a través de actividades interactivas, conversaciones guiadas y ejercicios prácticos que construyen compromiso desde adentro."
      },
      {
        "type": "h3",
        "text": "4. Reflexión y aplicación"
      },
      {
        "type": "p",
        "text": "Cerramos con una sesión de reflexión para reforzar aprendizajes, celebrar logros y transformar los insights en acciones concretas, para que el impacto continúe después del workshop."
      },
      {
        "type": "h2",
        "text": "Por qué elegir eBombo"
      },
      {
        "type": "p",
        "text": "En eBombo creemos que el engagement comienza con la experiencia. Nuestros Workshop de Engagement Laboral van mucho más allá de una charla: son dinámicos, participativos y profundamente humanos."
      },
      {
        "type": "p",
        "text": "Diseñamos cada sesión según la cultura única de tu empresa, combinando metodologías probadas con creatividad y sensibilidad. Desde la planificación hasta la ejecución, nuestro equipo experto se asegura de que cada momento sea fluido y memorable."
      },
      {
        "type": "p",
        "text": "Más de 2.000 empresas, entre ellas Adidas, Louis Vuitton, SAP y Allianz, ya han confiado en eBombo para crear experiencias inolvidables para sus equipos."
      },
      {
        "type": "h2",
        "text": "¿Listos para reactivar el engagement en tu empresa?"
      },
      {
        "type": "p",
        "text": "Las personas son tu mayor activo, y merecen experiencias que inspiren conexión, propósito y orgullo."
      },
      {
        "type": "p",
        "text": "👉 Comienza hoy a planificar tu Workshop de Engagement Laboral con eBombo y transformemos el trabajo cotidiano en algo en lo que tu equipo realmente crea."
      }
    ]
  }
];
