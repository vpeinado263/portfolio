import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section id="About" className={styles.aboutContainer}>
      <div className={styles.aboutSection}>
        <p>
          Soy un desarrollador apasionado por crear experiencias web accesibles,
          funcionales y con atención a los detalles. Mi enfoque se centra en el
          desarrollo <strong>full stack</strong>, con especial interés en{' '}
          <strong>React</strong>, donde disfruto diseñar interfaces de usuario
          que combinan una estética atractiva con un rendimiento optimizado y
          una sólida ingeniería.
        </p>
        <p>
          Actualmente, estoy fortaleciendo mis habilidades técnicas a través de
          proyectos propios y prácticas diarias que abarcan desde el diseño
          responsivo y manejo de estado avanzado hasta la integración de APIs y
          optimización del rendimiento. También utilizo herramientas como{' '}
          <strong>Mimo</strong> y <strong>Coderware</strong> para fomentar un
          aprendizaje constante y mantenerme actualizado con las mejores
          prácticas.
        </p>
        <p>
          En el pasado, he desarrollado soluciones que combinan tecnología y
          creatividad, como un sistema para evaluar temperaturas corporales con
          recomendaciones personalizadas y la implementación de diseños modernos
          utilizando
          <strong>CSS Grid</strong> y <strong>box modeling</strong>.
        </p>
        <p>
          Mi objetivo es seguir creciendo como desarrollador, aplicando mi
          conocimiento técnico y pasión por la tecnología para crear proyectos
          innovadores y de impacto. En mi tiempo libre, disfruto aprendiendo
          nuevas herramientas, perfeccionando mis habilidades en React y
          explorando las infinitas posibilidades del desarrollo web.
        </p>
      </div>
    </section>
  );
};

export default About;
