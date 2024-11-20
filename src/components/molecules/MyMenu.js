import { useState } from "react";
import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/MyMenu.module.css";
import { FaBars } from 'react-icons/fa';

const MyMenu = () => {
 const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);
 const toggleMyMenu = () => setIsMyMenuOpen(!isMyMenuOpen);

  return (
    <>
    <div className={styles.burgerContainer} >
      <button className={styles.burger} onClick={toggleMyMenu} aria-expanded={isMyMenuOpen} aria-label={"MyMenu"}>
       <FaBars size={30} color="white"/> 
       <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span> 
      </button>  
    </div>  
 
      <ul className={`${styles.menu} ${isMyMenuOpen ? styles.activar : ""}`}>
       <LinkItem href="" text="My Projects" />
       <LinkItem href="" text="The Skillset"/>
       <LinkItem href="" text="Insights"/>
      </ul>
    </>
  );
};

export default MyMenu;
