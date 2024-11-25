import styles from '@/styles/Skills.module.css';

const ListemItem = ({ icon, text }) => (
  <li className={styles.skillItem}>
    {icon}
    <span>{text}</span>
  </li>
);

export default ListemItem;
