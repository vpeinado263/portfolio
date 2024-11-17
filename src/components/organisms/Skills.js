import styles from "@/styles/Skills.module.css";

const Skills = () => {
    const skillsData = [
        {
          category: 'Lenguajes de Programación',
          items: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
        },
        {
          category: 'Frameworks',
          items: ['React', 'Next.js', 'Express.js'],
        },
        {
          category: 'Librerías',
          items: ['jQuery', 'Axios', 'Bootstrap', 'Tailwind CSS'],
        },
        {
          category: 'Tecnologías',
          items: ['Node.js', 'MongoDB', 'MySQL', 'REST APIs', 'GraphQL'],
        },
        {
          category: 'Herramientas',
          items: ['Git', 'GitHub', 'NPM', 'Postman', 'Slack', 'Vercel', 'Heroku'],
        },
        {
          category: 'Metodologías',
          items: ['Scrum', 'Kanban'],
        },
        {
          category: 'Certificaciones',
          items: [
            'Diploma en Desarrollo Web Full Stack',
            'Cursos en línea',
          ],
        },
        {
          category: 'Soft Skills',
          items: ['Trabajo en equipo', 'Comunicación', 'Resolución de problemas'],
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
