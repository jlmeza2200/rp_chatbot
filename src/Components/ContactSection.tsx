import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ContactSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const checkVisibility = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const fadeInUp = (delay: number) => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col items-center"
    >
      {/* Sección del título */}
      <motion.div
        className="flex flex-col items-center text-center space-y-4 mb-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(0.5)}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
          Trabajemos juntos!
        </h1>
      </motion.div>

      {/* Línea divisora */}
      <motion.hr
        className="w-full max-w-xl my-10 border-gray-700"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(1)}
      />

      {/* Sección de información de contacto */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0 mb-10"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(1.5)}
      >
        <div className="flex items-center bg-gray-800 px-10 py-4 rounded-full shadow-md transition transform hover:scale-105 hover:-translate-y-0.25 duration-500 ease-in-out">
          <span className="text-lg md:text-xl">info@romeroporres.com</span>
        </div>
        <div className="flex items-center bg-gray-800 px-10 py-4 rounded-full shadow-md transition transform hover:scale-105 hover:-translate-y-0.25 duration-500 ease-in-out">
          <span className="text-lg md:text-xl">+31 6 27 84 74 30</span>
        </div>
      </motion.div>

      {/* Botón de contacto */}
      <motion.div
        className="relative"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp(2)}
      >
        <button className="relative group overflow-hidden bg-white text-black border border-gray-400 rounded-full py-5 px-16 md:py-6 md:px-20 text-lg md:text-xl font-semibold shadow-lg">
          {/* Efecto de fondo que se expande */}
          <span className="absolute inset-0 w-full h-full bg-black transform scale-0 transition-transform duration-500 ease-in-out origin-center group-hover:scale-150"></span>
          {/* Texto del botón */}
          <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
            Get in touch
          </span>
          {/* Icono */}
          <FiArrowUpRight className="absolute top-1/2 transform -translate-y-1/2 right-[-35px] md:right-[-45px] text-black text-3xl md:text-4xl transition-colors duration-500 ease-in-out group-hover:text-white" />
        </button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
