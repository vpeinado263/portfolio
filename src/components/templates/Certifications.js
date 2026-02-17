import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CertificationsData = [
  {
    category: "Enfermero Profesional",
    institution: "IDICSA",
    icon: "🏥",
    projects: [
      {
        title: "Enfermero Profesional",
        link: "https://drive.google.com/file/d/1TIhB5dh97p6NjgRom6BwUSe2h_PE96vb/view",
        date: "2022",
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
        title: "Planilla de Cálculo Avanzado",
        link: "https://drive.google.com/file/d/1oC1z8JyFqBHzI5g08Ab6ClPVD6LAeCdZ/view",
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
    <section
      id="certifications"
      className="
        w-full px-4 py-6 md:px-6 md:py-12 lg:px-8 lg:py-16
        mx-auto max-w-7xl
        lg:w-[calc(100%-var(--navbar-width))] lg:ml-(--navbar-width)
        xl:w-[calc(100%-var(--navbar-width-lg))] xl:ml-(--navbar-width-lg)
        min-h-screen
      "
    >
      <motion.div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
          gap-6 md:gap-8
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {CertificationsData.map((category, index) => (
          <motion.article
            key={index}
            className="
              bg-white dark:bg-gray-900
              p-6 md:p-8
              border border-gray-200 dark:border-gray-800
              rounded-xl
              transition-all duration-300
              hover:-translate-y-2
              hover:border-blue-500 dark:hover:border-blue-400
              hover:shadow-lg
            "
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Header de la categoría */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="text-xl md:text-2xl font-first text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
            </div>

            {/* Institución */}
            <p className="text-base text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              {category.institution}
            </p>

            {/* Lista de certificaciones */}
            <ul className="list-none p-0 m-0">
              {category.projects.map((project, idx) => (
                <li key={idx} className="mb-2 last:mb-0">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center justify-between
                      py-1.5 px-2 -mx-2
                      text-blue-600 dark:text-blue-400
                      hover:text-blue-700 dark:hover:text-blue-300
                      rounded-md
                      transition-all duration-200
                      hover:translate-x-1
                      hover:bg-gray-50 dark:hover:bg-gray-800
                    "
                  >
                    <span className="flex-1 text-sm md:text-base">
                      {project.title}
                    </span>

                    {project.date && (
                      <span
                        className="
                        text-xs text-gray-400 dark:text-gray-500
                        mr-2
                      "
                      >
                        {project.date}
                      </span>
                    )}

                    <svg
                      className="
                        w-4 h-4
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-200
                      "
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
