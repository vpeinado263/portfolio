import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section id="About" className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={styles.aboutSection}>
        <p>
          Soy un profesional con una combinación única de habilidades y
          pasiones. Como enfermero, trabajé durante la pandemia COVID-19 en el
          Hospital Central de Mendoza, brindando atención crítica a pacientes en
          un entorno desafiante y exigente. Además, soy desarrollador web Full
          Stack, con un enfoque en React en creación de aplicaciones dinámicas.
          Disfruto diseñar soluciones tecnológicas que combinen funcionalidad y
          estética.
        </p>
        <p>
          Fuera del ámbito profesional, encuentro inspiración en la forja. Mi
          pasatiempo es forjar de cuchillos, un arte que me permite explorar la
          precisión, la creatividad y el detalle, valores que también aplico en
          mi trabajo como enfermero y desarrollador. Este equilibrio entre
          tecnología, salud y manualidades refleja mi compromiso con la
          innovación y la dedicación en cada proyecto que emprendo.
        </p>
        <p>
          Mi objetivo es continuar creciendo en ambos mundos, desarrollando
          herramientas tecnológicas que impacten positivamente en la calidad de
          vida de las personas y perfeccionando mis habilidades. Estoy en
          constante aprendizaje, explorando nuevas tecnologías, herramientas y
          técnicas para lograrlo.
        </p>
      </div>
    </section>
  );
};

export default About;
