import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MoreInfo: React.FC = () => {
  // Definimos variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza a la parte superior de la página
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-20 px-6">
      {/* Título principal */}
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Francisco Romero Porres
      </motion.h1>

      {/* Descripción */}
      <motion.p
        className="text-lg text-neutral-400 leading-relaxed max-w-3xl text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Abogado, emprendedor y experto en innovación inmobiliaria
      </motion.p>

     {/* Sección de biografía */}
<motion.div
  className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
>
  <h2 className="text-3xl font-semibold mb-4">Biografía</h2>
  {/* Versión corta para móviles */}
  <p className="text-neutral-400 text-lg leading-relaxed mb-4 block md:hidden">
    Francisco Javier Romero Porres es CEO y fundador de Romero Porres Consultora y Capacitadora en Resolución de Conflictos, con más de 14 años de experiencia en la gestión de conflictos en ámbitos gubernamentales, sindicales y empresariales.
  </p>
  {/* Versión larga para pantallas grandes */}
  <p className="text-neutral-400 text-lg leading-relaxed mb-4 hidden md:block">
    Con más de 14 años de experiencia en la gestión de conflictos en ámbitos gubernamentales, sindicales y empresariales, me especializo en procesos de negociación colaborativa. Utilizo enfoques de Programación Neurolingüística (PNL), Coaching y Logoterapia para facilitar el aprendizaje y la resolución de problemas. Poseo un doctorado en Filosofía y he tenido el privilegio de ser ponente en congresos y docente en instituciones de renombre, como la U.C.A. y la UBA, donde imparto clases sobre persuasión y gestión de grupos. Este enfoque interdisciplinario ha permitido desarrollar propuestas efectivas para la resolución de conflictos.
  </p>
</motion.div>


   {/* Sección de educación */}
<motion.div
  className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
>
  <h2 className="text-3xl font-semibold mb-4">Educación</h2>
  <ul className="text-neutral-400 text-lg list-disc pl-6 space-y-2">
    <li><strong>Doctorado en Filosofía</strong> - Universidad Nacional de San Juan (2020 - 2022)</li>
    <li><strong>Posgrado en Logoterapia y Análisis Existencial</strong> - Pontificia Universidad Católica Argentina (2018 - 2019)</li>
    <li><strong>Diplomatura en Complejidad y Epistemología</strong> - Multiversidad Edgar Morin (2020)</li>
    <li><strong>Formación Integral en Mediación</strong> - Escuela de Posgrado del Colegio Público de Abogados de la Capital Federal (2018)</li>
    <li><strong>Master Trainer en Programación Neurolingüística</strong> - IAFI (2017 - 2018)</li>
  </ul>
</motion.div>


      {/* Sección de experiencia */}
<motion.div
  className="bg-neutral-900 p-10 rounded-lg shadow-lg max-w-4xl w-full mb-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
>
  <h2 className="text-3xl font-semibold mb-4">Experiencia</h2>
  <ul className="text-neutral-400 text-lg list-disc pl-6 space-y-2">
    <li><strong>CEO y Fundador</strong> - Conexión Constructiva (2020 - Presente): Lidero iniciativas de verificación de obras y gestión de conflictos en el sector de la construcción, promoviendo prácticas eficientes y responsables.</li>
    <li><strong>Facilitador de Programa</strong> - Romero Porres Consultora (2010 - Presente): Capacito a profesionales en procesos de negociación y resolución de conflictos en contextos gubernamentales, sindicales y empresariales.</li>
    <li><strong>Profesor</strong> - Escuela de Posgrado del Colegio Público de Abogados de la Capital Federal (2016 - Presente): Enseño técnicas de persuasión y gestión de grupos en consorcios de propietarios y conjuntos inmobiliarios.</li>
  </ul>
</motion.div>


      {/* Botones */}
      <div className="w-full flex flex-col items-center mt-12 space-y-4">
        <a
          href="mailto:info@franciscoporres.com?subject=Consulta%20de%20Contacto"
          className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out text-lg font-semibold"
        >
          Get in Touch
        </a>

        <a
          href="/"
          className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out text-md"
        >
          Volver al Home
        </a>
      </div>
    </section>
  );
};

export default MoreInfo;
