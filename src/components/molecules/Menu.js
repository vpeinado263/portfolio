import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/Menu.module.css";

const Menu = () => {
  return (
   <ul className={styles.menu}>
    <LinkItem href="#about" text="My Projects"/>
    <LinkItem href="#projectc" text="The Skillset"/>
   </ul>
  );
};

export default Menu;
