import LinkItem from "@/components/atoms/LinkItem";
import styles from "@/styles/MyMenu.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MyMenu = ({ mobile = false, onClose }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  // Detectar sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "projects",
        "insights",
        "certifications",
        "hobbies",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar clic en enlace
  const handleLinkClick = (sectionId) => {
    if (mobile && onClose) {
      onClose(); // Cerrar menú móvil
    }

    // Scroll suave a la sección
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Versión móvil (menú hamburguesa)
  if (mobile) {
    return (
      <AnimatePresence>
        <motion.div
          className={styles.mobileMenu}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
        >
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
          <ul className={styles.mobileMenuList}>
            <LinkItem
              href="/"
              text="Home"
              onClick={() => handleLinkClick("")}
              className={router.pathname === "/" ? styles.active : ""}
            />
            <LinkItem
              href="#about"
              text="About"
              onClick={() => handleLinkClick("about")}
              className={activeSection === "about" ? styles.active : ""}
            />
            <LinkItem
              href="#projects"
              text="Projects"
              onClick={() => handleLinkClick("projects")}
              className={activeSection === "projects" ? styles.active : ""}
            />
            <LinkItem
              href="#insights"
              text="Insights"
              onClick={() => handleLinkClick("insights")}
              className={activeSection === "insights" ? styles.active : ""}
            />
            <LinkItem
              href="#certifications"
              text="Certifications"
              onClick={() => handleLinkClick("certifications")}
              className={
                activeSection === "certifications" ? styles.active : ""
              }
            />
            <LinkItem
              href="#hobbies"
              text="Hobbies"
              onClick={() => handleLinkClick("hobbies")}
              className={activeSection === "hobbies" ? styles.active : ""}
            />
          </ul>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Versión desktop (menú lateral)
  return (
    <nav className={styles.desktopNav}>
      <div className={styles.menuContainer}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className={styles.menu}>
            <LinkItem
              href="/"
              text="Home"
              onClick={() => handleLinkClick("")}
              className={router.pathname === "/" ? styles.active : ""}
            />
            <LinkItem
              href="#about"
              text="About"
              onClick={() => handleLinkClick("about")}
              className={activeSection === "about" ? styles.active : ""}
            />
            <LinkItem
              href="#projects"
              text="Projects"
              onClick={() => handleLinkClick("projects")}
              className={activeSection === "projects" ? styles.active : ""}
            />
            <LinkItem
              href="#insights"
              text="Insights"
              onClick={() => handleLinkClick("insights")}
              className={activeSection === "insights" ? styles.active : ""}
            />
            <LinkItem
              href="#certifications"
              text="Certifications"
              onClick={() => handleLinkClick("certifications")}
              className={
                activeSection === "certifications" ? styles.active : ""
              }
            />
            <LinkItem
              href="#hobbies"
              text="Hobbies"
              onClick={() => handleLinkClick("hobbies")}
              className={activeSection === "hobbies" ? styles.active : ""}
            />
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default MyMenu;
