import styles from '@/styles/Projects.module.css';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const projectsData = [
  {
    category: 'Mis comienzos con HTML',
    description:
      'Proyectos simples que me ayudaron a entender la estructura básica de las páginas web y la semántica de HTML.',
    projects: [
      {
        title: 'Gamer Master Kanives',
        link: 'https://tarea-1-clase-html.vercel.app/',
        icon: (
          <FaHtml5 style={{ color: 'rgb(233, 98, 40)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Gamer Master Kanives',
        link: 'https://tarea-2-clase-html.vercel.app/',
        icon: (
          <FaHtml5 style={{ color: 'rgb(233, 98, 40)', fontSize: '2rem' }} />
        ),
      },
    ],
  },
  {
    category: 'Explorando CSS',
    description:
      'Aprendí sobre estilos, diseño responsivo, y cómo dar vida a las interfaces.',
    projects: [
      {
        title: 'Gamer Master Kanives',
        link: 'https://tarea-3-clase-css.vercel.app/',
        icon: (
          <FaCss3Alt style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Gamer Master Kanives',
        link: 'https://tarea-4-clase-css.vercel.app/',
        icon: (
          <FaCss3Alt style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Tarjetas Interactivas',
        link: 'https://tarea-5-clase-css.vercel.app/',
        icon: (
          <FaCss3Alt style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Tarjetas Interactivas',
        link: 'https://tarea-6-clase-css.vercel.app/',
        icon: (
          <FaCss3Alt style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Gamer Master Kanives',
        link: 'https://tarea-7-clase-css.vercel.app/',
        icon: (
          <FaCss3Alt style={{ color: 'rgb(21, 114, 182)', fontSize: '2rem' }} />
        ),
      },
    ],
  },
  {
    category: 'Proyectos con Vanilla JavaScript',
    description:
      'Desarrollé habilidades de programación, manejo de APIs y lógica en proyectos interactivos.',
    projects: [
      {
        title: 'Peso Argentino',
        link: 'https://peso-argentino.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
      {
        title: 'Explorando Países',
        link: 'https://consumiendo-api-rest-contries.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
      {
        title: 'Portada Libro Elocuent Java Script',
        link: 'https://consumiendo-api-rest-contries-yhyq.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
      {
        title: 'Herramientas Prácticas',
        link: 'https://herramientas-de-precisi-n.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
      {
        title: 'Notas',
        link: 'https://notas-interactivas.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
      {
        title: 'Api Nasa',
        link: 'https://nasa-api-wheat.vercel.app/',
        icon: (
          <FaJsSquare
            style={{ color: 'rgb(239, 216, 28)', fontSize: '2rem' }}
          />
        ),
      },
    ],
  },
  {
    category: 'Proyectos con React y Next.js',
    description:
      'Implementé componentes dinámicos, manejo de rutas y despliegues modernos.',
    projects: [
      {
        title: 'Figuritas',
        link: 'https://2da-tarea-react-next-js.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Relojes',
        link: 'https://4ta-tarea-react-next-js.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Modo-claro-oscuro',
        link: 'https://5ta-tarea-react-next-js.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Shopping-Cart',
        link: 'https://6ta-tarea-react-next-1e3yvlp76-vhp-projects-694c293c.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Breaking-Bad',
        link: 'https://7ma-tarea-react-next-js.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
      {
        title: 'Infinito JG',
        link: 'https://infinito-jg.vercel.app/',
        icon: (
          <FaReact style={{ color: 'rgb(18, 155, 194)', fontSize: '2rem' }} />
        ),
      },
    ],
  },
];

const Projects = () => {
  return (
    <div id="My Projects" className={styles.projectsContainer}>
      {projectsData.map((category, index) => (
        <div key={index} className={styles.projectCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <p className={styles.categoryDescription}>{category.description}</p>
          <ul>
            {category.projects.map((project, idx) => (
              <li key={idx} className={styles.projectStiles}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{project.icon}</div>
                  <p>{project.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
