import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip Link para accesibilidad - AHORA SÍ RENDERIZADO */}
      <Link href="#main-content" className={styles.skipLink}>
        Saltar al contenido principal
      </Link>

      <motion.header
        className={`${styles.header} ${theme === "dark" ? styles.dark : ""} ${scrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.headerContent}>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
            data-tooltip={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <Image
              src={theme === "dark" ? "/sunDark.png" : "/sun.png"}
              alt="Toggle theme"
              width={40}
              height={40}
              className={styles.themeIcon}
              priority
            />
          </button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Navbar />
          </motion.div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;