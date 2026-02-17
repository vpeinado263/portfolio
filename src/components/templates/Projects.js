import styles from "@/styles/Projects.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaExternalLinkAlt,
  FaGithub,
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
        github: "#", // Si tienes repos
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
        link: "https://shopping-cart-jade-two.vercel.app/", // URL mejorada
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
      className={styles.projectsContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 className={styles.sectionTitle}>Mi Trayectoria de Aprendizaje</h2>

      {projectsData.map((category, catIndex) => (
        <motion.div
          key={catIndex}
          className={styles.projectCategory}
          variants={itemVariants}
          style={{ borderColor: category.color }}
        >
          <div className={styles.categoryHeader}>
            <div
              className={styles.categoryIcon}
              style={{ color: category.color }}
            >
              {category.icon}
            </div>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
          </div>

          <p className={styles.categoryDescription}>{category.description}</p>

          <div className={styles.techStack}>
            {category.technologies.map((tech, i) => (
              <span key={i} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.projectsGrid}>
            {category.projects.map((project, projIndex) => (
              <motion.div
                key={projIndex}
                className={styles.projectCard}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <div className={styles.projectContent}>
                    <div
                      className={styles.projectIcon}
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <span className={styles.projectLinkText}>
                      Ver proyecto{" "}
                      <FaExternalLinkAlt className={styles.externalIcon} />
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
