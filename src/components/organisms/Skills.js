import styles from "@/styles/Skills.module.css";
import SkillCategory from "../molecules/SkillCategory";

const Skills = ({ skillsData, skillIcons }) => (
  <section className={styles.skillsSection} id="skillset">
    <h2 className={styles.title}>Habilidades y Conocimientos</h2>
    <div className={styles.skillsContainer}>
      {skillsData.map((skill) => (
        <SkillCategory
          key={skill.category}
          category={skill.category}
          items={skill.items}
          skillIcons={skillIcons}
        />
      ))}
    </div>
  </section>
);

export default Skills;
