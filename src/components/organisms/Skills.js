import styles from '@/styles/Skills.module.css';
import SkillCategory from '../molecules/SkillCategory';

const Skills = ({ skillsData, skillsIcons }) => (
  <section id="skillset">
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Habilidades y Conocimientos</h2>

      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <SkillCategory
            key={skill.category}
            category={skill.category}
            items={skill.items}
            skillsIcons={skillsIcons}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
