import styles from "@/styles/Projects.module.css";

const projectsData = [
  {
    category: "Mis comienzos con HTML",
    description: "Proyectos simples que me ayudaron a entender la estructura básica de las páginas web y la semántica de HTML.",
    projects: [
      { title: "Tarea 1", link: "https://tarea-1-clase-html.vercel.app/" },
      { title: "Tarea 2", link: "https://tarea-2-clase-html.vercel.app/" },
    ],
  },
  {
    category: "Explorando CSS",
    description: "Aprendí sobre estilos, diseño responsivo, y cómo dar vida a las interfaces.",
    projects: [
      { title: "Tarea 3", link: "https://tarea-3-clase-css.vercel.app/" },
      { title: "Tarea 4", link: "https://tarea-4-clase-css.vercel.app/" },
      { title: "Tarea 5", link: "https://tarea-5-clase-css.vercel.app/" },
      { title: "Tarea 6", link: "https://tarea-6-clase-css.vercel.app/" },
      { title: "Tarea 7", link: "https://tarea-7-clase-css.vercel.app/" },
    ],
  },
  {
    category: "Bootstrap y diseño moderno",
    description: "Introducción a Bootstrap para crear diseños rápidos y profesionales.",
    projects: [
      { title: "Proyecto Bootstrap", link: "https://tarea-8-clase-bootstrap.vercel.app/" },
    ],
  },
  {
    category: "Proyectos con Vanilla JavaScript",
    description: "Desarrollé habilidades de programación, manejo de APIs y lógica en proyectos interactivos.",
    projects: [
      { title: "Peso Argentino", link: "https://peso-argentino.vercel.app/" },
      { title: "Consumiendo API Rest Countries 1", link: "https://consumiendo-api-rest-contries.vercel.app/" },
      { title: "Consumiendo API Rest Countries 2", link: "https://consumiendo-api-rest-contries-yhyq.vercel.app/" },
      { title: "Herramientas de Precisión", link: "https://herramientas-de-precisi-n.vercel.app/" },
      { title: "Notas Interactivas", link: "https://notas-interactivas.vercel.app/" },
      { title: "NASA API", link: "https://nasa-api-wheat.vercel.app/" },
    ],
  },
  {
    category: "Proyectos con React y Next.js",
    description: "Implementé componentes dinámicos, manejo de rutas y despliegues modernos.",
    projects: [
      { title: "Primera Tarea React", link: "https://1ra-tarea-react-next-js.vercel.app/" },
      { title: "Segunda Tarea React", link: "https://2da-tarea-react-next-js.vercel.app/" },
      // Continúa con los demás links aquí...
    ],
  },
  {
    category: "Full Stack con React/Next.js y TypeScript",
    description: "Proyectos integrales donde combiné frontend y backend, aprendiendo a desplegarlos de forma individual y conjunta.",
    projects: [
      { title: "Infinito JG", link: "https://infinito-jg.vercel.app/" },
      { title: "Tienda X", link: "https://tienda-x--swart.vercel.app/" },
    ],
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projectsContainer}>
        {projectsData.map((category, index) => (
          <div key={index} className={styles.projectCategory}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <p className={styles.categoryDescription}>{category.description}</p>
            <ul className={styles.projectList}>
              {category.projects.map((project, idx) => (
                <li key={idx} className={styles.projectItem}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
