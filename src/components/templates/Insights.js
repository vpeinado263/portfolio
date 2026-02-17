// src/components/templates/Insights.js
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ProjectData = [
  {
    category: "Proyectos con React y Next.js",
    icon: "⚛️",
    description: "Aplicaciones modernas con componentes dinámicos y routing",
    technologies: ["React", "Next.js", "CSS Modules"],
    projects: [
      {
        title: "Ulceras - Guía Médica",
        description: "Información sobre tipos de úlceras y tratamientos",
        link: "https://3ra-tarea-react-next-js.vercel.app/",
        tech: ["Next.js", "CSS Modules"],
      },
      {
        title: "Inventario Hospitalario",
        description: "Sistema básico de gestión de inventario",
        link: "https://8va-tarea-react-next-js.vercel.app/",
        tech: ["React", "Hooks"],
      },
    ],
  },
];

const Insights = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="insights"
      className="
        min-h-screen
        px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24
        w-full max-w-7xl mx-auto
        lg:ml-56 lg:w-[calc(100%-14rem)]
        xl:max-w-350
      "
    >
      <motion.h2
        className="
          text-3xl md:text-4xl lg:text-5xl
          text-center
          mb-12 md:mb-16
          font-second
          text-gray-800 dark:text-gray-200
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos Destacados
      </motion.h2>

      <motion.div
        className="
          grid grid-cols-1 lg:grid-cols-2
          gap-8 md:gap-10 lg:gap-12
          items-start
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ProjectData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="
              bg-white dark:bg-gray-900
              rounded-2xl
              p-6 md:p-8
              border border-gray-200 dark:border-gray-800
              h-fit
            "
            variants={itemVariants}
          >
            {/* Header de categoría */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl md:text-4xl">{category.icon}</span>
              <h3 className="text-xl md:text-2xl font-first text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
            </div>

            {/* Descripción */}
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              {category.description}
            </p>

            {/* Tecnologías de la categoría */}
            <div className="flex flex-wrap gap-2 mb-8">
              {category.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    bg-gray-200 dark:bg-gray-800
                    text-gray-700 dark:text-gray-300
                    rounded-full
                    text-sm font-third
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Lista de proyectos */}
            <div className="flex flex-col gap-3">
              {category.projects.map((project, projIndex) => {
                const projectId = `${catIndex}-${projIndex}`;
                const isExpanded = expandedProject === projectId;

                return (
                  <motion.div
                    key={projIndex}
                    className={`
                      bg-gray-50 dark:bg-gray-800
                      rounded-xl
                      p-4
                      cursor-pointer
                      transition-all duration-300
                      border border-transparent
                      hover:border-blue-500 dark:hover:border-blue-400
                      hover:bg-gray-100 dark:hover:bg-gray-700
                      ${isExpanded ? "border-blue-500 dark:border-blue-400" : ""}
                    `}
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      setExpandedProject(isExpanded ? null : projectId)
                    }
                  >
                    {/* Header del proyecto */}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {project.title}
                      </h4>
                      <span className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-bold">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </div>

                    {/* Descripción del proyecto */}
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Detalles expandidos */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600"
                        >
                          {/* Tecnologías del proyecto */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t, i) => (
                              <span
                                key={i}
                                className="
                                  px-2 py-1
                                  bg-gray-400 dark:bg-gray-600
                                  text-white dark:text-gray-200
                                  rounded-lg
                                  text-xs
                                "
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Link al proyecto */}
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              inline-flex items-center
                              text-blue-500 dark:text-blue-400
                              hover:text-blue-600 dark:hover:text-blue-300
                              font-medium
                              transition-transform duration-200
                              hover:translate-x-1
                            "
                            onClick={(e) => e.stopPropagation()}
                          >
                            Ver proyecto →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Insights;
