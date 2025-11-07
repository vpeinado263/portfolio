import React from "react";
import styles from "@/styles/Certifications.module.css";
import Link from "next/link";

const CertificationsData = [
  {
    category: "Enfermero Profesional",
    description: "IDICSA",
    projects: [
      {
        title: "Enfermero Profesional",
        link: "https://drive.google.com/file/d/1TIhB5dh97p6NjgRom6BwUSe2h_PE96vb/view?usp=sharing",
      },
    ],
  },
  {
    category: "Hospital Dr. Humberto Notti",
    description: "Mega Curso de Reanimación Cardiopulmonar para la Comunidad",
    projects: [
      {
        title: "RCP",
        link: "https://drive.google.com/file/d/11JfOEb3p1F1DtVpJFWz-HPSKBlvwq9ce/view?usp=sharing",
      },
    ],
  },
  {
    category: "Diplomatura en Desarrollo Web Full Stack",
    description: "Academia Numen",
    projects: [
      {
        title: "Desarrollo Web",
        link: "https://drive.google.com/file/d/1_kE4Qzre6YaR3OJN9dmdzK-6QdLyAcUJ/view?usp=sharing",
      },
    ],
  },
  {
    category: "IPAP",
    description: "Instituto Provincial de Administración Pública de Mendoza",
    /*<img decoding="async" width="250" height="123" src="https://mza-dicaws-portal-uploads-media-prod.s3.amazonaws.com/informacion-oficial/uploads/sites/14/2025/10/marca-ipap-mendoza-ok.webp" alt="" class="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone wp-image-2871 et-animated" loading="lazy">*/
    projects: [
      {
        title: "Ley 9003. Agilidad en la Gestión",
        link: "https://drive.google.com/file/d/16s4Iyue2CgE6s4g395XS5qMM56WwtZh7/view?usp=sharing",
      },
      {
        title: "Educación Financiera y Finanzas Personales",
        link: "https://drive.google.com/file/d/14PG1qQg321lY_h4xiQ0G5aMcEPZGfD9c/view?usp=sharing",
      },
      {
        title:
          "Perspectiva de Género y violencia contra las Mujeres Ley Micaela",
        link: "https://drive.google.com/file/d/1TVH503Cc0kTDgV6wRH7Im63t0gWqOTY8/view?usp=sharing",
      },
      {
        title: "Planilla de Cálculo Avanzado",
        link: "https://drive.google.com/file/d/1oC1z8JyFqBHzI5g08Ab6ClPVD6LAeCdZ/view?usp=sharing",
      },
      {
        title: "Trata de personas: enfoque desde la perspectiva de género",
        link: "https://drive.google.com/file/d/1WgrDvIZrzxWrqvWvBbMTgSSw7fgzoHSq/view?usp=sharing",
      },
      {
        title: "Varones y Masculinidades: Modelos para trasformar",
        link: "https://drive.google.com/file/d/1s9C-RpNm_DGLPc809m3Crwv24s1uD_Id/view?usp=sharing",
      },
      {
        title:
          "Violencia Obstétrica: persepectiva de género y acciones transformadoras",
        link: "https://drive.google.com/file/d/1MkYOcEppojlOWaxQ2oChedzdehufcVMJ/view?usp=sharing",
      },
    ],
  },
  {
    category: "Alkemy",
    description: "Mis Certificados",
    projects: [
      {
        title: "Muro",
        link: "https://partners.alkemy.org/certificates/auth0|66c78e3125702b5570a032ee",
      },
    ],
  },
];

const Certifications = () => {
  return (
    <section id="Certifications" className={styles.certificationsContainer}>
      {CertificationsData.map((category, index) => (
        <div key={index} className={styles.certificationsCategory}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <p className={styles.categoryDescription}>{category.description}</p>
          <ul className={styles.certificationsList}>
            {category.projects.map((project, idx) => (
              <li key={idx}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
