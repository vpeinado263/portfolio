import styles from "@/styles/Skill.module.css";

const ListemItem = ({ icon, text}) => (
    <li className={styles.skillItme}>
        {icon}
        <span>{text}</span>
    </li>
);

export default ListemItem;
