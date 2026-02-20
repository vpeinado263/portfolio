import React from "react"; 
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projectsData = [
  {
    category: "Mis comienzos con HTML",
    icon: <FaHtml5 />,
    color: "#e36226",
    description:
      "Proyectos simples que me ayudaron a entender la estructura básica de las páginas web y la semántica de HTML.",
    technologies: ["HTML5", "Semántica"],
    projects: [
      {
        title: "Gamer Master Kanives - Versión 1",
        description: "Primera maquetación de sitio web para gamers",
        link: "https://tarea-1-clase-html.vercel.app/",
        github: "#",
      },
      {
        title: "Gamer Master Kanives - Versión 2",
        description: "Mejora de estructura y contenido",
        link: "https://tarea-2-clase-html.vercel.app/",
      },
    ],
  },
  {
    category: "Explorando CSS",
    icon: <FaCss3Alt />,
    color: "#1572b6",
    description:
      "Aprendí sobre estilos, diseño responsivo, y cómo dar vida a las interfaces.",
    technologies: ["CSS3", "Flexbox", "Grid", "Responsive"],
    projects: [
      {
        title: "Gamer Master - Con Estilos",
        description: "Aplicando estilos básicos",
        link: "https://tarea-3-clase-css.vercel.app/",
      },
      {
        title: "Gamer Master - Layouts",
        description: "Explorando Flexbox y Grid",
        link: "https://tarea-4-clase-css.vercel.app/",
      },
      {
        title: "Tarjetas Interactivas - v1",
        description: "Primer versión de tarjetas con hover",
        link: "https://tarea-5-clase-css.vercel.app/",
      },
      {
        title: "Tarjetas Interactivas - v2",
        description: "Mejora de animaciones",
        link: "https://tarea-6-clase-css.vercel.app/",
      },
      {
        title: "Gamer Master - Diseño Final",
        description: "Versión responsive completa",
        link: "https://tarea-7-clase-css.vercel.app/",
      },
    ],
  },
  {
    category: "JavaScript Vanilla",
    icon: <FaJsSquare />,
    color: "#efd81d",
    description:
      "Desarrollé habilidades de programación, manejo de APIs y lógica en proyectos interactivos.",
    technologies: ["JavaScript", "APIs", "DOM", "Fetch"],
    projects: [
      {
        title: "Conversor de Peso Argentino",
        description: "Conversor de divisas con tasas actualizadas",
        link: "https://peso-argentino.vercel.app/",
      },
      {
        title: "Explorando Países",
        description: "API REST Countries - Información mundial",
        link: "https://consumiendo-api-rest-contries.vercel.app/",
      },
      {
        title: "Elocuent JavaScript",
        description: "Portada interactiva del libro",
        link: "https://consumiendo-api-rest-contries-yhyq.vercel.app/",
      },
      {
        title: "Herramientas de Cálculo",
        description: "Utilidades matemáticas y conversiones",
        link: "https://herramientas-de-precisi-n.vercel.app/",
      },
      {
        title: "Notas Interactivas",
        description: "CRUD de notas con localStorage",
        link: "https://notas-interactivas.vercel.app/",
      },
      {
        title: "API NASA",
        description: "Astronomy Picture of the Day",
        link: "https://nasa-api-wheat.vercel.app/",
      },
    ],
  },
  {
    category: "React & Next.js",
    icon: <FaReact />,
    color: "#149eca",
    description:
      "Implementé componentes dinámicos, manejo de rutas y despliegues modernos.",
    technologies: ["React", "Next.js", "Hooks", "Context"],
    projects: [
      {
        title: "Figuritas App",
        description: "Colección de figuritas con React",
        link: "https://2da-tarea-react-next-js.vercel.app/",
      },
      {
        title: "Relojes Mundiales",
        description: "Zonas horarias interactivas",
        link: "https://4ta-tarea-react-next-js.vercel.app/",
      },
      {
        title: "Theme Switcher",
        description: "Modo claro/oscuro con Context",
        link: "https://5ta-tarea-react-next-js.vercel.app/",
      },
      {
        title: "Shopping Cart",
        description: "Carrito de compras con estado global",
        link: "https://shopping-cart-jade-two.vercel.app/",
      },
      {
        title: "Breaking Bad API",
        description: "Personajes y citas de la serie",
        link: "https://7ma-tarea-react-next-js.vercel.app/",
      },
      {
        title: "Infinito JG",
        description: "Scroll infinito con imágenes",
        link: "https://infinito-jg.vercel.app/",
      },
    ],
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="projects"
      className="
        min-h-screen
        px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24
        w-full max-w-7xl mx-auto
        lg:ml-56 lg:w-[calc(100%-14rem)]
        xl:max-w-350
      "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="
          text-3xl md:text-4xl lg:text-5xl
          text-center
          mb-12 md:mb-16
          font-second
          text-gray-800 dark:text-gray-200
        "
        variants={itemVariants}
      >
        Mi Trayectoria de Aprendizaje
      </motion.h2>

      {projectsData.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          className="
            mb-12 md:mb-16
            p-6 md:p-8 lg:p-10
            border-2 border-gray-200 dark:border-gray-800
            rounded-2xl
            bg-white dark:bg-gray-900
            transition-colors duration-300
            hover:border-opacity-100
          "
          variants={itemVariants}
          style={{ borderColor: category.color }}
        >
          {/* Header de categoría */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="text-3xl md:text-4xl leading-none"
              style={{ color: category.color }}
            >
              {category.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-first text-gray-800 dark:text-gray-200">
              {category.category}
            </h3>
          </div>

          {/* Descripción */}
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
            {category.description}
          </p>

          {/* Tecnologías */}
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

          {/* Grid de proyectos */}
          <div
            className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-4 md:gap-5 lg:gap-6
          "
          >
            {category.projects.map((project, projIndex) => (
              <motion.div
                key={projIndex}
                className="
                  bg-gray-50 dark:bg-gray-800
                  rounded-xl
                  overflow-hidden
                  transition-all duration-300
                  border border-gray-200 dark:border-gray-700
                  hover:border-blue-500 dark:hover:border-blue-400
                  hover:shadow-lg
                "
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block no-underline text-inherit"
                >
                  <div className="p-5">
                    {/* Icono del proyecto */}
                    <div
                      className="text-2xl mb-3"
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>

                    {/* Título */}
                    <h4 className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {project.title}
                    </h4>

                    {/* Descripción */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Link text con icono */}
                    <span
                      className="
                      inline-flex items-center gap-2
                      text-blue-500 dark:text-blue-400
                      text-sm font-medium
                      transition-all duration-200
                      group-hover:gap-3
                    "
                    >
                      Ver proyecto
                      <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
