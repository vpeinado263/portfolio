import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Insights.module.css";
import { useState } from "react";

const ProjectData = [
  {
    category: "Proyectos con React y Next.js",
    icon: "⚛️",
    description: "Aplicaciones modernas con componentes dinámicos y routing",
    technologies: ["React", "Next.js", "CSS Modules"],
    projects: [
      {
        title: "Deja el Hábito",
        description: "App para dejar de fumar con seguimiento diario",
        link: "https://el-habito-de-fumar.vercel.app/",
        tech: ["React", "LocalStorage"],
        image: "/projects/deja-el-habito.jpg", // Si tienes capturas
      },
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
  {
    category: "Diseño y Prototipado",
    icon: "🎨",
    description: "Explorando frameworks de diseño y maquetación",
    technologies: ["Bootstrap", "CSS", "Responsive Design"],
    projects: [
      {
        title: "Proyecto Bootstrap",
        description: "Diseño responsive con Bootstrap 5",
        link: "https://tarea-8-clase-bootstrap.vercel.app/",
        tech: ["Bootstrap", "HTML5", "CSS3"],
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
    <section id="insights" className={styles.insightsContainer}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Proyectos Destacados
      </motion.h2>

      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ProjectData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className={styles.projectCategory}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>

            <p className={styles.categoryDescription}>{category.description}</p>

            <div className={styles.techTags}>
              {category.technologies.map((tech, i) => (
                <span key={i} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.projectsList}>
              {category.projects.map((project, projIndex) => (
                <motion.div
                  key={projIndex}
                  className={`${styles.projectCard} ${
                    expandedProject === `${catIndex}-${projIndex}`
                      ? styles.expanded
                      : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === `${catIndex}-${projIndex}`
                        ? null
                        : `${catIndex}-${projIndex}`,
                    )
                  }
                >
                  <div className={styles.projectHeader}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <span className={styles.expandIcon}>
                      {expandedProject === `${catIndex}-${projIndex}`
                        ? "−"
                        : "+"}
                    </span>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {expandedProject === `${catIndex}-${projIndex}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className={styles.projectDetails}
                    >
                      <div className={styles.projectTech}>
                        {project.tech.map((t, i) => (
                          <span key={i} className={styles.miniTechTag}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver proyecto →
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Insights;
