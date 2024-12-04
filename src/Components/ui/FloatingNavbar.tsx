"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom"; // Importar Link de react-router-dom
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  // Controlar la animación al hacer scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Animación de carga inicial
  useEffect(() => {
    const timeout = setTimeout(() => setInitialLoad(false), 800); // Animación inicial más rápida
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          y: initialLoad ? 0 : visible ? 0 : -100,
          opacity: initialLoad ? 1 : visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4, // Duración de la animación más rápida
          ease: "easeInOut", // Transición suave
        }}
        className={cn(
          "hidden md:flex max-w-full fixed z-[5000] top-0 inset-x-0 mx-auto py-3 items-center justify-between px-6 mt-7", // Cambiado a "hidden md:flex" para ocultar en móviles
          className
        )}
      >
        {/* Nombre/Logo a la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1, // Menor retraso para que aparezca rápido
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-white text-xl font-light tracking-wider mr-4" // Aumentado de text-lg a text-xl
        >
          Francisco Romero
        </motion.div>

        {/* Opciones de navegación a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2, // Un poco más de retraso para los links
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex space-x-4 ml-4" // Añadido ml-4 para margen izquierdo
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link} // Cambiar href a to
              className="text-white text-lg hover:text-gray-400 transition-colors duration-200" // Cambiado de text-base a text-lg
            >
              {navItem.name}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
