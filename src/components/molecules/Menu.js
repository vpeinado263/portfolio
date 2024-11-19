import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/Menu.module.css";

const Menu = () => {
  return (
   <ul className={styles.menu}>
    <LinkItem href="" text="My Projects"/>
    <LinkItem href="" text="The Skillset"/>
    <LinkItem href="" text="Insights"/>
   </ul>
  );
};

export default Menu;
