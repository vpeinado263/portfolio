import styles from "@/styles/About.module.css";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const About = ({ 
  title = "Sobre Mí", 
  paragraphs = [],
  showEllipsis = false 
}) => {
  const defaultParagraphs = [
    "A lo largo de mi trayectoria profesional he desarrollado una gran capacidad para comunicarme con personas que atraviesan situaciones estresantes, críticas o de alto impacto emocional. Estoy acostumbrado a interactuar con usuarios que expresan su malestar de forma intensa incluso con enojo y sé responder con calma, empatía y eficacia. Considero que una comunicación efectiva, respetuosa y clara es fundamental para resolver situaciones urgentes y restaurar la confianza, especialmente cuando se trata de servicios sensibles o emergencias.",
    "Estoy dando mis primeros pasos en el mundo IT, aplicando los conocimientos adquiridos en mi formación como Desarrollador Web Full Stack. Me encuentro en constante aprendizaje, creando proyectos propios, explorando nuevas tecnologías y perfeccionando herramientas y técnicas que me permitan crecer y aportar valor en entornos reales."
  ];

  const contentParagraphs = paragraphs.length > 0 ? paragraphs : defaultParagraphs;

  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
<section id="about" className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>{title}</h2>
      <div className={styles.aboutSection}>
        {contentParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
            {showEllipsis && index === contentParagraphs.length - 1 && " ..."}
          </p>
        ))}
      </div>
    </section>
</motion.section>
   
  );
};

About.propTypes = {
  title: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  showEllipsis: PropTypes.bool
};

export default About;