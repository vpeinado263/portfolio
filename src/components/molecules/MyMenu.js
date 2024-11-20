import { useState } from "react";
import LinkItem from "../atoms/LinkItem";
import styles from "@/styles/MyMenu.module.css";
import { FarBars } from 'react-icons';

const MyMenu = () => {
 const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);
 const toggleMyMenu = () => setIsMyMenuOpen(!isMyMenuOpen);

  return (
   <div className={styles.burgerContainer} >
      <button className={styles.burger} onClick={toggleMyMenu}>
       <FarBars size={30} color="white"/>  
      </button>    
 
      <ul className={`${styles.menu} ${isMyMenuOpen ? styles.activar : ""}`}>
       <LinkItem href="" text="My Projects"/>
       <LinkItem href="" text="The Skillset"/>
       <LinkItem href="" text="Insights"/>
      </ul>
   </div>
  );
};

export default MyMenu;
