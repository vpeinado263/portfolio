import styles from '@/styles/Projects.module.css';
import Link from 'next/link';

const projectsData = [
  {
    category: 'Mis comienzos con HTML',
    description:
      'Proyectos simples que me ayudaron a entender la estructura básica de las páginas web y la semántica de HTML.',
    projects: [
      {
        title: 'Cuchillos Personalizados-HTML-5',
        link: 'https://tarea-1-clase-html.vercel.app/',
      },
      {
        title: 'Cuchillos Personalizados-2-HTML-5',
        link: 'https://tarea-2-clase-html.vercel.app/',
      },
    ],
  },
  {
    category: 'Explorando CSS',
    description:
      'Aprendí sobre estilos, diseño responsivo, y cómo dar vida a las interfaces.',
    projects: [
      {
        title: 'Cuchillos Personalizados-3-CSS-3',
        link: 'https://tarea-3-clase-css.vercel.app/',
      },
      {
        title: 'Cuchillos Personalizados-4-CSS-3',
        link: 'https://tarea-4-clase-css.vercel.app/',
      },
      { title: 'Orco-Elfo', link: 'https://tarea-5-clase-css.vercel.app/' },
      {
        title: 'Practica-ResponsiveGrid',
        link: 'https://tarea-6-clase-css.vercel.app/',
      },
      {
        title: 'Cuchillos Artesanales',
        link: 'https://tarea-7-clase-css.vercel.app/',
      },
    ],
  },
  {
    category: 'Proyectos con Vanilla JavaScript',
    description:
      'Desarrollé habilidades de programación, manejo de APIs y lógica en proyectos interactivos.',
    projects: [
      { title: 'Peso Argentino', link: 'https://peso-argentino.vercel.app/' },
      {
        title: 'Consumiendo API Rest Countries 1',
        link: 'https://consumiendo-api-rest-contries.vercel.app/',
      },
      {
        title: 'Consumiendo API Rest Countries 2',
        link: 'https://consumiendo-api-rest-contries-yhyq.vercel.app/',
      },
      {
        title: 'Herramientas de Precisión',
        link: 'https://herramientas-de-precisi-n.vercel.app/',
      },
      {
        title: 'Notas Interactivas',
        link: 'https://notas-interactivas.vercel.app/',
      },
      { title: 'NASA API', link: 'https://nasa-api-wheat.vercel.app/' },
    ],
  },
  {
    category: 'Proyectos con React y Next.js',
    description:
      'Implementé componentes dinámicos, manejo de rutas y despliegues modernos.',
    projects: [
      {
        title: 'Segunda Tarea React',
        link: 'https://2da-tarea-react-next-js.vercel.app/',
      },
      {
        title: 'Relojes',
        link: 'https://4ta-tarea-react-next-js.vercel.app/',
      },
      {
        title: 'Modo-claro-oscuro',
        link: 'https://5ta-tarea-react-next-js.vercel.app/',
      },
      {
        title: 'Shopping-Cart',
        link: 'https://6ta-tarea-react-next-1e3yvlp76-vhp-projects-694c293c.vercel.app/',
      },
      {
        title: 'Breaking-Bad',
        link: 'https://7ma-tarea-react-next-js.vercel.app/',
      },
    ],
  },
  {
    category: 'Full Stack con React/Next.js y TypeScript',
    description:
      'Proyectos integrales donde combiné frontend y backend, aprendiendo a desplegarlos de forma individual y conjunta.',
    projects: [
      { title: 'Infinito JG', link: 'https://infinito-jg.vercel.app/' },
      { title: 'Tienda X', link: 'https://tienda-x--swart.vercel.app/' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="My Projects">
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          {projectsData.map((category, index) => (
            <div key={index} className={styles.projectCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <p className={styles.categoryDescription}>
                {category.description}
              </p>
              <ul className={styles.projectList}>
                {category.projects.map((project, idx) => (
                  <li key={idx}>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
