import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/MyMenu.module.css";

const MyMenu = () => {
  return (
   <ul className={styles.menu}>
    <LinkItem href="" text="My Projects"/>
    <LinkItem href="" text="The Skillset"/>
    <LinkItem href="" text="Insights"/>
   </ul>
  );
};

export default MyMenu;
