import styles from "@/styles/About.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const About = ({
  title = "Sobre mi",
  paragraphs = [],
  showEllipsis = false,
  showDecoration = true,
}) => {
  const defaultParagraphs = [
    "Profesional con experiencia en gestión administrativa y formación complementaria en desarrollo web. Este portfolio muestra proyectos y herramientas orientadas a la organización de información y mejora de procesos mediante tecnología.",
  ];

  // Si no hay párrafos, usamos los por defecto
  // Si showEllipsis está activo, añadimos "..." al último párrafo
  const contentParagraphs =
    paragraphs.length > 0
      ? paragraphs
      : defaultParagraphs.map((p, index) =>
          showEllipsis && index === defaultParagraphs.length - 1
            ? p + " ..."
            : p,
        );

  return (
    <motion.section
      id="about"
      className={styles.aboutContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.aboutTitle}>{title}</h2>
      <div className={styles.aboutSection}>
        {contentParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
  );
};

About.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  showEllipsis: PropTypes.bool,
};

export default About;
