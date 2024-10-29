import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

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
        <Link href="/" className={styles.logo}>
          <h1>Victor's Portfolio</h1>
        </Link>
        <ul className={styles.menu}>
          <li><Link href="#about" className={styles.link}>About</Link></li>
          <li><Link href="#skills" className={styles.link}>Skills</Link></li>
          <li><Link href="#projects" className={styles.link}>Projects</Link></li>
          <li><Link href="#contact" className={styles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
