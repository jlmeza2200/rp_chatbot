import React from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import { Link } from 'react-router-dom';

const Grid = () => {
  // Definimos las variantes de la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-black flex flex-col items-center py-16 w-full">
      <div className="w-full flex flex-col items-center space-y-12 px-6">

        {/* Primera Card: Imagen Grande */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} // Animación solo ocurre una vez al estar visible en el viewport
          variants={fadeInUp}
        >
          <img 
            src="/conexion2.jpg" 
            alt="Speaker" 
            className="w-full h-auto object-cover rounded-t-2xl" 
          />
        </motion.div>

        {/* Segunda Card: Texto Grande */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-16" // Ajuste de padding
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInUp}
        >
          <h2 className="text-white text-4xl font-bold mb-8">
          Bienvenido a mi mundo profesional
          </h2>
          <p className="text-neutral-400 text-xl leading-relaxed mx-2"> {/* Ajuste de margen */}
          Soy Francisco Romero Porres, abogado y emprendedor, comprometido con la transformación del sector inmobiliario a través de soluciones innovadoras y humanas. Detrás de cada transacción hay personas, sueños y aspiraciones, y mi misión es facilitar procesos que aporten claridad y confianza <br /> <br />

A lo largo de mi carrera, fundé VEO S.A y Conexión Constructiva para ofrecer una nueva perspectiva en el mercado inmobiliario, promoviendo transparencia, seguridad y relaciones más sólidas entre los actores del sector.
          </p>
        </motion.div>

        {/* Tercera Card: Información ampliada */}
        <motion.div 
          className="bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-24" // Ajuste de padding
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={fadeInUp}
        >
          <h2 className="text-white text-4xl font-bold mb-8">
            
          Impulsando la Transparencia y la Innovación en el Sector Inmobiliario
          </h2>

          {/* Versión resumida solo para móviles */}
          <p className="text-neutral-400 text-xl leading-relaxed block md:hidden mx-2">
          Dirijo la transformación inmobiliaria y el asesoramiento jurídico desde una perspectiva que combina innovación, transparencia y habilidades interpersonales. Como abogado y Chief Executive Officer de VEOSA, encabezo un equipo dedicado a garantizar la calidad y seguridad en cada desarrollo inmobiliario, ofreciendo auditorías y certificaciones que inspiran confianza en cada transacción.
          </p>

          {/* Versión completa solo para pantallas grandes */}
          <p className="text-neutral-400 text-xl leading-relaxed hidden md:block mx-2">
          Además, fundé Conexión Constructiva con el objetivo de fortalecer las habilidades sociales en el sector inmobiliario. A través de programas de coaching y capacitación, ayudamos a transformar la comunicación y colaboración entre profesionales, creando un mercado más humano y efectivo.


          </p>

          {/* El resto del contenido para pantallas grandes */}
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
          También soy socio en Romero Porres & Asociados, un estudio jurídico especializado en la asesoría legal de adquisiciones y desarrollos inmobiliarios. Nuestro enfoque estratégico asegura que cada cliente cuente con un respaldo legal integral durante todo el proceso de compra y desarrollo.
          </p>
          <p className="text-neutral-400 text-xl leading-relaxed mt-4 hidden md:block mx-2">
          Además, disfruto colaborar como asesor en nuevas empresas del sector inmobiliario y tecnológico, ayudándolas a mejorar sus operaciones y estructuras organizativas. Fuera del ámbito laboral, me encanta dedicar tiempo a la lectura y a los deportes al aire libre, buscando siempre nuevas ideas que impulsen mi visión de un mercado inmobiliario más eficiente y humano.
          </p>
          
          {/* Botón minimalista para más información */}
          <Link to="/more-info">
            <motion.button
              className="mt-8 px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              Mas Información
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Grid;
