import { projects } from '../lib/data/index';
import { motion } from "framer-motion"; 
import { Link } from 'react-router-dom'; 

const RecentProjects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-24 px-8 bg-black">
      <h1 className="text-5xl font-bold text-white text-center">
        Un recorrido por {" "}
        <span className="text-[#D3D3D3]">mis proyectos</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Primera tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-[28rem] md:h-96"
          key={projects[0].id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[0].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[0].status}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[0].title}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[0].description}
            </p>
            <div className="relative z-10 mt-6">
              <Link to={`/projects/${projects[0].id}`} className="text-white underline text-lg">
                Ver detalles
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Segunda tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-[28rem] md:h-96"
          key={projects[1].id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[1].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[1].status}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[1].title}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[1].description}
            </p>
            <div className="relative z-10 mt-6">
              <Link to={`/projects/${projects[1].id}`} className="text-white underline text-lg">
                Ver detalles
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Tercera tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-[28rem] md:h-96"
          key={projects[2].id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[2].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[2].status}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[2].title}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[2].description}
            </p>
            <div className="relative z-10 mt-6">
              <Link to={`/projects/${projects[2].id}`} className="text-white underline text-lg">
                Ver detalles
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Cuarta tarjeta */}
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-lg bg-[#1A1A1A] h-[28rem] md:h-96"
          key={projects[3].id}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[3].image})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 p-8">
            <p className="text-sm uppercase text-white opacity-70">
              {projects[3].status}
            </p>
            <h2 className="text-3xl font-bold mt-4 text-white">
              {projects[3].title}
            </h2>
            <p className="mt-4 text-lg text-white">
              {projects[3].description}
            </p>
            <div className="relative z-10 mt-6">
              <Link to={`/projects/${projects[3].id}`} className="text-white underline text-lg">
                Ver detalles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentProjects;