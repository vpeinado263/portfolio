import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import MyMenu from "@/components/molecules/MyMenu";
import TypingEffect from "@/components/molecules/TypingEffect";

const Navbar = () => {
  const text = "Hello, I'm Victor.";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar para desktop */}
      <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <nav className={styles.navContainer}>
          <MyMenu />
        </nav>
      </div>

      {/* Navbar para móvil (hamburguesa) */}
      <div className={styles.mobileNavbar}>
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <MyMenu mobile onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </div>

      {/* Avatar con typing effect - AHORA MÁS COMPACTO */}
      <div className={styles.heroSection}>
        <TypingEffect
          avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4"
          avatarAlt="Victor - Desarrollador Full Stack"
          avatarSize={100} // Reducido de 165x150 a 100px
          text={text}
          typingSpeed={100}
        />
      </div>
    </>
  );
};

export default Navbar;
