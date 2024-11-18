import ListItem from '../atoms/ListItem';
import styles from "@/styles/Skills.module.css";

const SkillCategory = ({ category, items, skillIcons }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.categoryTitle}>{category}</h3>
    <ul className={styles.skillList}>
      {items.map((item, index) => (
        <ListItem key={index} icon={skillIcons[item]} text={item} />
      ))}
    </ul>
  </div>
);

export default SkillCategory;
