import React from "react";
import styles from "@/styles/Certifications.module.css";
import Link from "next/link";
import { motion } from "framer-motion"; // Si quieres animaciones

const CertificationsData = [
  {
    category: "Enfermero Profesional",
    institution: "IDICSA",
    icon: "🏥", // Opcional: emoji o icono
    projects: [
      {
        title: "Enfermero Profesional",
        link: "https://drive.google.com/file/d/1TIhB5dh97p6NjgRom6BwUSe2h_PE96vb/view",
        date: "2022", // Opcional
      },
    ],
  },
  {
    category: "Diplomatura en Desarrollo Web Full Stack",
    institution: "Academia Numen",
    icon: "💻",
    projects: [
      {
        title: "Desarrollo Web Full Stack",
        link: "https://drive.google.com/file/d/1_kE4Qzre6YaR3OJN9dmdzK-6QdLyAcUJ/view",
        date: "2024",
      },
    ],
  },
  {
    category: "Formación Complementaria",
    institution: "IPAP - Instituto Provincial de Administración Pública",
    icon: "📚",
    projects: [
      {
        title: "Ley 9003. Agilidad en la Gestión",
        link: "https://drive.google.com/file/d/16s4Iyue2CgE6s4g395XS5qMM56WwtZh7/view",
      },
      {
        title: "Educación Financiera y Finanzas Personales",
        link: "https://drive.google.com/file/d/14PG1qQg321lY_h4xiQ0G5aMcEPZGfD9c/view",
      },
      {
        title: "Perspectiva de Género y violencia contra las Mujeres",
        link: "https://drive.google.com/file/d/1TVH503Cc0kTDgV6wRH7Im63t0gWqOTY8/view",
      },
      {
        title: "Planilla de Cálculo Avanzado",
        link: "https://drive.google.com/file/d/1oC1z8JyFqBHzI5g08Ab6ClPVD6LAeCdZ/view",
      },
      {
        title: "Trata de personas: enfoque desde la perspectiva de género",
        link: "https://drive.google.com/file/d/1WgrDvIZrzxWrqvWvBbMTgSSw7fgzoHSq/view",
      },
      {
        title: "Varones y Masculinidades: Modelos para transformar",
        link: "https://drive.google.com/file/d/1s9C-RpNm_DGLPc809m3Crwv24s1uD_Id/view",
      },
      {
        title: "Violencia Obstétrica: perspectiva de género",
        link: "https://drive.google.com/file/d/1MkYOcEppojlOWaxQ2oChedzdehufcVMJ/view",
      },
    ],
  },
  {
    category: "Alkemy",
    institution: "Certificados de Finalización",
    icon: "⚡",
    projects: [
      {
        title: "Muro - Proyecto Final",
        link: "https://partners.alkemy.org/certificates/auth0|66c78e3125702b5570a032ee",
      },
    ],
  },
];

const Certifications = () => {
  // Animación para las tarjetas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className={styles.certificationsContainer}>
      <motion.div
        className={styles.certificationsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CertificationsData.map((category, index) => (
          <motion.article
            key={index}
            className={styles.certificationsCategory}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>
            <p className={styles.categoryInstitution}>{category.institution}</p>

            <ul className={styles.certificationsList}>
              {category.projects.map((project, idx) => (
                <li key={idx}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificationLink}
                  >
                    <span className={styles.linkText}>{project.title}</span>
                    {project.date && (
                      <span className={styles.linkDate}>{project.date}</span>
                    )}
                    <svg
                      className={styles.linkIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H8M17 7V16" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
