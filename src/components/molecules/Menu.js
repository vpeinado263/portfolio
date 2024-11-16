import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/Menu.module.css";

const Menu = () => {
  return (
   <ul className={styles.menu}>
    <LinkItem href="#about" text="Lenguajes"/>
    <LinkItem href="#projectc" text="Herramientas"/>
   </ul>
  );
};

export default Menu;
