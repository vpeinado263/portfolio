import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section id="About" className={styles.aboutContainer}>
      <div className={styles.aboutSection}>
        <p>
          Soy un profesional con una combinación única de habilidades y
          pasiones. Como enfermero especializado en cuidados intensivos, trabajé
          durante la pandemia de COVID-19 en el Hospital Central de Mendoza,
          brindando atención crítica a pacientes en un entorno desafiante y
          exigente. Mi experiencia en el sector salud me ha dotado de una gran
          capacidad para resolver problemas bajo presión y colaborar
          interdisciplinariamente.
        </p>
        <p>
          Además, soy desarrollador web Full Stack, con un enfoque en React y la
          creación de aplicaciones dinámicas. Disfruto diseñar soluciones
          tecnológicas que combinen funcionalidad y estética, y he desarrollado
          proyectos como herramientas para evaluar temperaturas corporales con
          recomendaciones personalizadas y diseños modernos utilizando{' '}
          <strong>CSS Grid</strong> y <strong>box modeling</strong>.
        </p>
        <p>
          Fuera del ámbito profesional, encuentro inspiración en la artesanía.
          Mi pasatiempo es la creación de cuchillos artesanales, un arte que me
          permite explorar la precisión, la creatividad y el detalle, valores
          que también aplico en mi trabajo como enfermero y desarrollador. Este
          equilibrio entre tecnología, salud y manualidades refleja mi
          compromiso con la innovación y la dedicación en cada proyecto que
          emprendo.
        </p>
        <p>
          Mi objetivo es continuar creciendo en ambos mundos, desarrollando
          herramientas tecnológicas que impacten positivamente en la calidad de
          vida de las personas y perfeccionando mis habilidades artesanales.
          Estoy en constante aprendizaje, explorando nuevas tecnologías,
          herramientas y técnicas para lograrlo.
        </p>
      </div>
    </section>
  );
};

export default About;
