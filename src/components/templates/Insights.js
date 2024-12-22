import Link from 'next/link';
import styles from '@/styles/Insights.module.css';

const InsightData = [
  {
    category: 'Bootstrap y diseño moderno',
    description:
      'Introducción a Bootstrap para crear diseños rápidos y profesionales.',
    projects: [
      {
        title: 'Proyecto Bootstrap',
        link: 'https://tarea-8-clase-bootstrap.vercel.app/',
      },
    ],
  },
  {
    category: 'Proyectos con React y Next.js',
    description:
      'Implementé componentes dinámicos, manejo de rutas y despliegues modernos.',
    projects: [
      {
        title: 'Primera Tarea React',
        link: 'https://el-habito-de-fumar.vercel.app/',
      },
      {
        title: 'Ulceras',
        link: 'https://3ra-tarea-react-next-js.vercel.app/',
      },
      {
        title: 'Inventario Hospitalario',
        link: 'https://8va-tarea-react-next-js.vercel.app/',
      },
    ],
  },
];

const Insights = () => {
  return (
    <section id="Insights" className={styles.insightsContainer}>
      {InsightData.map((category, index) => (
        <div key={index} className={styles.insightsCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <p className={styles.categoryDescription}>{category.description}</p>
          <ul className={styles.insightsList}>
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
    </section>
  );
};

export default Insights;
