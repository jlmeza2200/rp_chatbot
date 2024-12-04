"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Capa oscura sobre la imagen */}
        <div className="absolute inset-0 bg-black opacity-60 z-0" />

        {/* Imagen fija */}
        <div className="relative z-10 w-full h-full">
          <img
            src="/backend.jpg" // Ruta correcta para tu imagen
            alt="Kelly Smith"
            className="object-cover w-full h-full" // Ajustes de ancho y alto
            style={{ position: 'absolute', top: 0, left: 0 }} // Ajustes de posición
          />
        </div>
      </div>

      {/* Animaciones para las letras optimizadas */}
      <motion.div 
        className="relative z-20 mt-0" // Cambia mt-56 a mt-0
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} // Animación más rápida
      >
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold" // Tamaño de texto más pequeño en móviles
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Con un pequeño retraso
        >
          Hola, Soy Francisco Romero.
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg md:text-xl mt-4" // Ajuste de tamaño para el subtítulo
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Mayor retraso para el subtítulo
        >
          Abogado, CEO & Founder Romero Porres consultora 
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
