import styles from '@/styles/Skills.module.css';
import SkillCategory from '@/components/molecules/SkillCategory';
import SkillChart from '@/components/atoms/SkillChart';

const Skills = ({ skillsData, skillsIcons }) => (
  <section id="skillset">
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Habilidades y Conocimientos</h2>

      <div className={styles.skillsContainer}>
        <div className={styles.chartContainer}>
          <h3>Gráfico de habilidades</h3>
          <SkillChart/>
        </div>
      </div>

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
