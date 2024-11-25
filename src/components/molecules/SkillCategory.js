import styles from '@/styles/Skills.module.css';
import ListemItem from '@/components/atoms/ListemItem';

const SkillCategory = ({ category, items, skillsIcons }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.categoryTitle}>{category}</h3>
    <ul className={styles.skillList}>
      {items.map((items, index) => (
        <ListemItem key={index} icon={skillsIcons[items]} text={items} />
      ))}
    </ul>
  </div>
);

export default SkillCategory;
