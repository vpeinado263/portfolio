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
          un entorno desafiante y exigente. Además, soy Desarrollador web en formación, 
          con experiencia en proyectos personales que abarcan desde el diseño de interfaces 
          hasta la implementación de back-end con Node.js y MongoDB, con un enfoque en React
          en creación de aplicaciones dinámicas.
          Disfruto diseñar soluciones tecnológicas que combinen funcionalidad y
          estética.
        </p>
        <p>
          Fuera del ámbito profesional, encuentro inspiración en la forja. Mi
          pasatiempo es forjar de cuchillos, un arte que me permite explorar la
          precisión, la creatividad y el detalle. Este equilibrio entre
          tecnología, salud y manualidades refleja mi compromiso con la
          innovación y la dedicación en cada proyecto que emprendo.
        </p>
        <p>
          Mi objetivo es continuar creciendo en ambos mundos, desarrollando
          herramientas tecnológicas que impacten positivamente en la calidad de
          vida de las personas y perfeccionando mis habilidades. Busco mi primera experiencia laboral en
          desarrollo full stack para aplicar y seguir ampliando mis conocimientos. 
          Estoy en constante aprendizaje, explorando nuevas tecnologías, herramientas y
          técnicas para lograrlo.
        </p>
      </div>
    </section>
  );
};

export default About;
