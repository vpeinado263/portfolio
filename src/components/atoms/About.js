import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <section id="About" className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={styles.aboutSection}>
        <p>
          A lo largo de mi trayectoria profesional he desarrollado una gran
          capacidad para comunicarme con personas que atraviesan situaciones
          estresantes, críticas o de alto impacto emocional. Estoy acostumbrado
          a interactuar con usuarios que expresan su malestar de forma intensa
          incluso con enojo y sé responder con calma, empatía y eficacia.
          Considero que una comunicación efectiva, respetuosa y clara es
          fundamental para resolver situaciones urgentes y restaurar la
          confianza, especialmente cuando se trata de servicios sensibles o
          emergencias.
        </p>
        <p>
          Estoy dando mis primeros pasos en el mundo IT, aplicando los
          conocimientos adquiridos en mi formación como Desarrollador Web Full
          Stack. Me encuentro en constante aprendizaje, creando proyectos
          propios, explorando nuevas tecnologías y perfeccionando herramientas y
          técnicas que me permitan crecer y aportar valor en entornos reales...
        </p>
      </div>
    </section>
  );
};

export default About;
