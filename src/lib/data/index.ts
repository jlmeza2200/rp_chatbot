import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


// data/index.ts
export const projects = [
  {
    id: 1,
    title: "Conexión Constructiva",
    description:
      "Transformamos empresas inmobiliarias mediante coaching ontológico y PNL, fortaleciendo relaciones comerciales y promoviendo un crecimiento estratégico...",
    status: "Coaching",
    link: "/projects/1", // Enlace dinámico basado en el id del proyecto
    image: "/verificacion.jpeg", // Ruta ajustada de la imagen
  },
  {
    id: 2,
    title: "Romero Porres Asociados",
    description:
      "Ofrecemos asistencia integral en el ámbito inmobiliario, guiando a los clientes en cada etapa de sus transacciones y proyectos, con enfoque en seguridad, eficacia y confianza...",
    status: "Legal",
    linkLabel: "What if everything we knew about consulting was wrong?",
    link: "/projects/2", // Enlace dinámico basado en el id del proyecto
    image: "/conexion.jpg", // Ruta ajustada de la imagen
  },
  {
    id: 3,
    title:
      "Verificadora Externa De Obra",
    description:
      "Brindamos consultoría inmobiliaria enfocada en certificación, inspección y verificación de inmuebles, garantizando seguridad, transparencia y calidad en cada proyecto..",
    status: "Verifación",
    linkLabel: "Discover more about Hagerty",
    link: "/projects/3", // Enlace dinámico basado en el id del proyecto
    image: "/estudio.jpg", // Ruta ajustada de la imagen
  },
  {
    id:4,
    title: "Portal Automatizado de Servicios para Consorcios",
    description:
      "Creamos un portal en línea que centraliza la gestión de servicios, pagos y documentación, permitiendo a administradores y residentes acceder y gestionar la información en tiempo real, desde cualquier dispositivo.",
    status: "Gestión Centralizada",
    linkLabel: "Descubre nuestro portal",
    link: "/projects/4", // Enlace dinámico basado en el id del proyecto
    image: "/portal_servicios.jpg", // Ruta ajustada de la imagen
  }
];


// data/projects.ts (o en la ubicación correspondiente)
export const projectsinfo = [
  {
    id: 1,
    title: "Conexión Constructiva",
    image: "../../conexion-details.jpg",
    additionalImage: "../../conexion2.jpg", // Imagen adicional
    details: {
      detail1: {
        full: `
          Conexión Constructiva redefine el éxito en el mercado inmobiliario mediante la transformación emocional de organizaciones. Combinamos el poder del coaching ontológico con la programación neurolingüística (PNL) para crear estrategias efectivas que impulsan el crecimiento y fortalecen relaciones comerciales. Nuestro enfoque único ayuda a empresas inmobiliarias y constructoras a alcanzar metas extraordinarias al reconocer y aprovechar el papel crucial de las emociones en cada transacción. 
        `,
        mobile: `
          Transformamos el mercado inmobiliario a través de coaching y PNL, fortaleciendo relaciones y promoviendo un crecimiento sostenible en cada transacción.
        `,
      },
      detail2: {
        full: `
          En este proyecto, diseñamos planes personalizados basados en la comprensión emocional de las dinámicas de compra y venta en el sector inmobiliario. Entrenamos a los equipos en habilidades de comunicación que impactan directamente en el éxito organizacional, desarrollando un lenguaje que conecta emocionalmente con clientes e inversores. Implementamos técnicas avanzadas de PNL para fortalecer las negociaciones y mejorar la toma de decisiones, garantizando que cada interacción refleje la visión estratégica y emocional de la organización. 
          Fortalecemos las relaciones con proveedores y clientes al identificar sus expectativas y necesidades emocionales, asegurando condiciones de satisfacción que fomenten relaciones sostenibles y mutuamente beneficiosas. 
          Conexión Constructiva transforma tu enfoque empresarial, ayudándote a tomar decisiones más estratégicas y emocionales, logrando así un impacto positivo en todo el ecosistema inmobiliario. En un entorno cada vez más competitivo, nuestro objetivo es que cada organización se convierta en un referente en su sector, destacando por su capacidad de adaptarse y evolucionar junto a las demandas del mercado.
        `,
        mobile: `
          Diseñamos planes personalizados para el sector inmobiliario, entrenando habilidades comunicativas para conectar emocionalmente con clientes y fortalecer relaciones comerciales.
        `,
      },
      detail3: {
        full: `
          A través de talleres y sesiones de coaching grupales, facilitamos un espacio para la reflexión y el crecimiento personal de cada miembro del equipo, fomentando un ambiente de trabajo colaborativo y alineado con los valores de la empresa. Además, utilizamos herramientas de medición para evaluar el progreso y el impacto de nuestras estrategias, permitiendo ajustes en tiempo real que aseguran la eficacia de las acciones implementadas. 
          Con Conexión Constructiva, no solo transformas tu organización, sino que también construyes un legado basado en relaciones auténticas y un propósito claro, donde cada transacción se convierte en una oportunidad para crecer y fortalecer la comunidad inmobiliaria en su conjunto.
        `,
        mobile: `
          Facilitamos reflexión y crecimiento a través de talleres y coaching, promoviendo un ambiente colaborativo y alineado con los valores empresariales.
        `,
      },
    },
    link: "https://www.conexionconstructiva.com.ar"
  },

  {
    id: 2,
    title: "Romero Porres Asociados",
    image: "../../estudio-details.jpg",
    additionalImage: "../../estudio2.jpg", // Imagen adicional
    details: {
      detail1: {
        full: `
          En Romero Porres Asociados, nuestra misión es ofrecer asistencia integral en el ámbito inmobiliario, acompañando a nuestros clientes en cada etapa de sus transacciones y proyectos. Con un enfoque en la seguridad y la eficacia, nuestras áreas de especialización abarcan desde asesoría experta en la compra y venta de inmuebles, asegurando un proceso seguro y eficiente, hasta la consultoría especializada en la planificación y desarrollo de proyectos inmobiliarios. Nuestro equipo multidisciplinario está compuesto por expertos en diversas áreas que colaboran para brindar un servicio excepcional.
        `,
        mobile: `
          Ofrecemos asistencia integral en transacciones inmobiliarias, garantizando procesos seguros y eficientes en cada etapa del proyecto.
        `,
      },
      detail2: {
        full: `
          Esto incluye desde el diseño inicial hasta la estructuración de contratos fiduciarios, garantizando una ejecución exitosa conforme a los estándares del sector. También proporcionamos apoyo en la adquisición y venta de inmuebles, con una gestión eficiente en cada etapa del proceso. Nos especializamos en la creación de contratos fiduciarios que protegen los intereses de nuestros clientes, generando confianza y seguridad en las transacciones inmobiliarias. Además, brindamos asesoramiento en la gestión de riesgos y cumplimiento normativo, asegurando que cada proyecto esté alineado con las regulaciones vigentes y sea económicamente viable.
          En Romero Porres Asociados, entendemos que el inmueble es un reflejo de la organización del mundo humano, y nuestro compromiso es generar nuevas oportunidades de creación de riqueza para nuestros clientes, contribuyendo al crecimiento sostenido de su patrimonio. Nuestro enfoque en la atención personalizada nos permite adaptarnos a las necesidades específicas de cada cliente, estableciendo relaciones de confianza a largo plazo.
        `,
        mobile: `
          Creamos contratos fiduciarios que protegen intereses, generando confianza y seguridad en las transacciones inmobiliarias. Nos adaptamos a las necesidades específicas de cada cliente.
        `,
      },
      detail3: {
        full: `
          Además, realizamos un análisis exhaustivo del mercado para identificar las mejores oportunidades de inversión, asegurando que nuestros clientes siempre estén un paso adelante. Contamos con herramientas tecnológicas avanzadas que nos permiten optimizar los procesos y ofrecer una experiencia fluida y eficiente. También facilitamos la capacitación continua de nuestros clientes en temas relacionados con el mercado inmobiliario, ayudándolos a tomar decisiones informadas y estratégicas. En Romero Porres Asociados, cada proyecto es una oportunidad para innovar y crear valor, trabajando juntos para construir un futuro próspero y sostenible.
        `,
        mobile: `
          Realizamos análisis de mercado para identificar oportunidades de inversión y optimizar procesos, ayudando a nuestros clientes a tomar decisiones informadas y estratégicas.
        `,
      },
    },
    link: "http://romeroporres.com.ar"
  },

  {
    id: 3,
    title: "Verificadora Externa De Obra",
    image: "../../veo-details.jpg",
    additionalImage: "../../veo2.jpg", // Imagen adicional
    details: {
      detail1: {
        full: `
          VEO S.A. se posiciona como líder en el sector de consultoría inmobiliaria, ofreciendo un conjunto integral de servicios enfocados en la certificación, inspección y verificación de inmuebles y obras de infraestructura. Proporcionamos informes detallados que certifican el estado actual de inmuebles, garantizando seguridad en cada transacción, además de analizar la documentación legal y técnica para asegurar transparencia en las operaciones. Nuestra experiencia nos permite abordar cada proyecto con un enfoque meticuloso y riguroso.
        `,
        mobile: `
          Ofrecemos servicios de certificación y verificación de inmuebles, garantizando seguridad y transparencia en cada transacción inmobiliaria.
        `,
      },
      detail2: {
        full: `
          Supervisamos la correcta ejecución de los proyectos mediante auditorías ex post y evaluamos daños o patologías en construcciones para ofrecer soluciones efectivas. Nuestro equipo de expertos realiza auditorías técnicas y de cumplimiento, asegurando que las construcciones cumplan con los estándares de calidad y seguridad. También ofrecemos servicios de mediación en conflictos constructivos, garantizando que cualquier disputa se resuelva de manera justa y eficiente. 
          En VEO S.A., nuestro objetivo es ser reconocidos como el referente en consultoría para compradores e inversores inmobiliarios, destacando por nuestra integridad, innovación y compromiso con la satisfacción del cliente, brindando servicios que protejan sus inversiones a largo plazo. La confianza que nuestros clientes depositan en nosotros es la base de nuestro trabajo.
        `,
        mobile: `
          Supervisamos proyectos con auditorías y ofrecemos soluciones efectivas para garantizar calidad y seguridad en las construcciones, asegurando la satisfacción del cliente.
        `,
      },
      detail3: {
        full: `
          Además, mantenemos una comunicación constante con nuestros clientes para informarles sobre el progreso de cada proyecto y asegurarnos de que todas sus inquietudes sean atendidas. Ofrecemos capacitaciones y asesorías en el uso de nuevas tecnologías para la gestión de obras, promoviendo la innovación en el sector. Nuestro enfoque proactivo y preventivo nos permite anticiparnos a posibles inconvenientes, garantizando que cada proyecto se desarrolle de manera óptima y eficiente. En VEO S.A., creemos que la transparencia y la ética son fundamentales en cada interacción, fortaleciendo la confianza y el valor de nuestros servicios.
        `,
        mobile: `
          Mantenemos comunicación constante y ofrecemos capacitación en nuevas tecnologías para la gestión de obras, asegurando el éxito y la calidad en cada proyecto.
        `,
      },
    },
    link: "http://veosa.com.ar"
  }, 
  {
  id: 4,
  title: "Consorcio Inteligente SA",
  image: "../../consorcio-details.jpg",
  additionalImage: "../../consorcio2.jpg", // Imagen adicional
  details: {
    detail1: {
      full: `
        En Consorcio Inteligente SA, nuestra misión es revolucionar la administración de consorcios con soluciones de inteligencia artificial y automatización. Nos enfocamos en simplificar la gestión, reducir costos operativos y mejorar la eficiencia en cada área. Desde la recolección de datos en tiempo real hasta la generación de reportes personalizados, brindamos herramientas innovadoras que permiten a los administradores y residentes gestionar con facilidad sus espacios y recursos. Con un equipo multidisciplinario, nos aseguramos de ofrecer un servicio integral y adaptado a las necesidades de cada cliente.
      `,
      mobile: `
        Simplificamos la administración de consorcios con IA, mejorando eficiencia y reduciendo costos en la gestión de espacios y recursos.
      `,
    },
    detail2: {
      full: `
        Nuestro enfoque incluye la automatización de tareas rutinarias como el seguimiento de pagos, la generación de informes financieros y la gestión de incidencias, permitiendo una administración más fluida y segura. Además, hemos desarrollado un sistema de comunicación eficiente para conectar a los residentes con la administración en tiempo real, resolviendo problemas de manera rápida y eficaz. Con un fuerte énfasis en la seguridad, aseguramos que cada transacción y cada gestión de información se realicen conforme a los estándares de protección de datos y ciberseguridad, ofreciendo a nuestros clientes la tranquilidad de una plataforma confiable.
      `,
      mobile: `
        Automatizamos tareas como el seguimiento de pagos y la gestión de incidencias, asegurando una administración fluida y segura para cada consorcio.
      `,
    },
    detail3: {
      full: `
        En Consorcio Inteligente SA, entendemos la importancia de estar a la vanguardia tecnológica. Realizamos un análisis exhaustivo de cada consorcio para ofrecer soluciones de IA personalizadas que optimicen sus recursos y mejoren la convivencia. También proporcionamos capacitación continua para administradores y residentes sobre el uso de nuestras herramientas, asegurando que todos puedan aprovechar al máximo nuestras soluciones de automatización. Cada proyecto es una oportunidad para generar valor y construir comunidades más eficientes, seguras y conectadas.
      `,
      mobile: `
        Analizamos cada consorcio para ofrecer IA personalizada, optimizando recursos y mejorando la convivencia entre los residentes.
      `,
    },
  },
  link: "http://consorciointeligente.com",}

 
];
