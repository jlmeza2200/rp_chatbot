"use client";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsinfo } from "../lib/data/index";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { FloatingNav } from "./ui/FloatingNavbar";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsinfo.find((proj) => proj.id === parseInt(id || "0"));
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-6">Proyecto no encontrado</h2>
        <Link
          to="/"
          className="text-gray-400 hover:text-gray-300 underline inline-flex items-center"
        >
          <FiArrowLeft className="inline mr-2" />
          Volver a la lista de proyectos
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-black flex flex-col items-center py-20 px-4 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <FloatingNav
        navItems={[
          { name: "Inicio", link: "/" },
          { name: "Proyectos", link: "/projects" },
          { name: "Contacto", link: "/contact" },
        ]}
      />

      <div className="relative w-full max-w-5xl mb-12">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[600px] object-cover rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        </motion.div>
      </div>

      <div className="w-full max-w-3xl space-y-8 text-gray-300">
        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Descripción</h2>
          <p className="text-lg">{isMobile ? project.details.detail1.mobile : project.details.detail1.full}</p>
        </motion.div>

        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Aspectos Clave</h2>
          <p className="text-lg">{isMobile ? project.details.detail2.mobile : project.details.detail2.full}</p>
        </motion.div>

        <motion.div
          className="leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-white mb-2">Conclusiones</h2>
          <p className="text-lg">{isMobile ? project.details.detail3.mobile : project.details.detail3.full}</p>
        </motion.div>
      </div>

      {project.additionalImage && (
        <motion.div
          className="w-full max-w-5xl mt-12 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={project.additionalImage}
            alt={`Imagen adicional de ${project.title}`}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}

      {/* Botones minimalistas */}
      <motion.div
        className="mt-12 flex flex-col space-y-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {/* Condición para ocultar el botón si el id es 4 */}
        {project.id !== 4 && (
          <a
            href={project.link} // Suponiendo que 'link' es la propiedad en projectsinfo que contiene el URL
            target="_blank" // Esto abrirá el enlace en una nueva pestaña
            rel="noopener noreferrer" // Mejora la seguridad al abrir el enlace en otra pestaña
            className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out text-md"
          >
            Ir a la página del proyecto
          </a>
        )}
        <Link
          to="/"
          className="inline-block bg-transparent border border-neutral-600 text-neutral-400 px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-500 ease-in-out text-md"
        >
          Volver al Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
