import styles from "@/styles/Skills.module.css";
import { 
  FaReact, FaNodeJs, FaGit, FaHtml5, FaCss3Alt, FaGithub, FaSlack, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiGraphql, 
  SiJquery, SiAxios, SiTailwindcss, SiPostman, SiNpm, SiHeroku, SiVercel 
} from 'react-icons/si';
import { FaClipboardList, FaTasks, FaUsers, FaComments, FaLightbulb } from 'react-icons/fa';

const Skills = () => {
  // Asignación de iconos a habilidades
  const skillIcons = {
    // Lenguajes de Programación
    JavaScript: <SiJavascript />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    TypeScript: <SiTypescript />,
    // Frameworks
    React: <FaReact />,
    "Next.js": <SiNextdotjs />,
    "Express.js": <SiExpress />,
    // Librerías
    jQuery: <SiJquery />,
    Axios: <SiAxios />,
    Bootstrap: <FaBootstrap />,
    "Tailwind CSS": <SiTailwindcss />,
    // Tecnologías
    "Node.js": <FaNodeJs />,
    MongoDB: <SiMongodb />,
    MySQL: <SiMysql />,
    "REST APIs": <FaClipboardList />,
    GraphQL: <SiGraphql />,
    // Herramientas
    Git: <FaGit />,
    GitHub: <FaGithub />,
    NPM: <SiNpm />,
    Postman: <SiPostman />,
    Slack: <FaSlack />,
    Vercel: <SiVercel />,
    Heroku: <SiHeroku />,
    // Metodologías
    Scrum: <FaClipboardList />,
    Kanban: <FaTasks />,
    // Soft Skills
    "Trabajo en equipo": <FaUsers />,
    Comunicación: <FaComments />,
    "Resolución de problemas": <FaLightbulb />,
  };

  // Datos de las habilidades
  const skillsData = [
    {
      category: "Lenguajes de Programación",
      items: ["JavaScript", "HTML", "CSS", "TypeScript"],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Express.js"],
    },
    {
      category: "Librerías",
      items: ["jQuery", "Axios", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Tecnologías",
      items: ["Node.js", "MongoDB", "MySQL", "REST APIs", "GraphQL"],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "NPM", "Postman", "Slack", "Vercel", "Heroku"],
    },
    {
      category: "Metodologías",
      items: ["Scrum", "Kanban"],
    },
    {
      category: "Certificaciones",
      items: ["Diploma en Desarrollo Web Full Stack", "Cursos en línea"],
    },
    {
      category: "Soft Skills",
      items: ["Trabajo en equipo", "Comunicación", "Resolución de problemas"],
    },
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Habilidades y Conocimientos</h2>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <div key={skill.category} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{skill.category}</h3>
            <ul className={styles.skillList}>
              {skill.items.map((item, index) => (
                <li key={index} className={styles.skillItem}>
                  {skillIcons[item]} {/* Renderiza el icono correspondiente */}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
