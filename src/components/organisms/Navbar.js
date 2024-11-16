import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
    <nav className={styles.navContainer}>
      <Logo/>
      <Menu/>
    </nav>
  </header>
  );
};

export default Navbar;
