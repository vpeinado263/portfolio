import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Hobbies.module.css";
import { useState } from "react";

// Datos reales para hobbies (ejemplos - modifica con tus intereses)
const HobbiesData = [
  {
    category: "Tecnología",
    icon: "💻",
    color: "#58608c",
    items: [
      {
        name: "Programación Personal",
        description: "Proyectos propios y experimentación",
        icon: "👨‍💻",
      },
      {
        name: "Hardware",
        description: "Armado y mantenimiento de PCs",
        icon: "🖥️",
      },
    ],
  },
  {
    category: "Salud y Bienestar",
    icon: "🧘",
    color: "#024873",
    items: [
      {
        name: "Meditación",
        description: "Mindfulness y bienestar mental",
        icon: "🧠",
      },
      {
        name: "Running",
        description: "5km diarios",
        icon: "🏃",
      },
    ],
  },
  {
    category: "Arte y Cultura",
    icon: "🎨",
    color: "#594c59",
    items: [
      {
        name: "Fotografía",
        description: "Fotografía urbana y naturaleza",
        icon: "📸",
      },
      {
        name: "Lectura",
        description: "Ciencia ficción y desarrollo personal",
        icon: "📚",
      },
    ],
  },
  {
    category: "Naturaleza",
    icon: "🌲",
    color: "#2d5a27",
    items: [
      {
        name: "Senderismo",
        description: "Exploración de montañas",
        icon: "🥾",
      },
      {
        name: "Jardinería",
        description: "Plantas suculentas",
        icon: "🌱",
      },
    ],
  },
];

const Hobbies = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="hobbies" className={styles.hobbiesContainer}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Hobbies e Intereses
      </motion.h2>

      <motion.div
        className={styles.hobbiesGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {HobbiesData.map((category, index) => (
          <motion.div
            key={index}
            className={`${styles.hobbyCard} ${activeCategory === index ? styles.active : ""}`}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
            style={{ borderColor: category.color }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.categoryIcon}>{category.icon}</span>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>

            <ul className={styles.hobbiesList}>
              {category.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className={styles.hobbyItem}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <div className={styles.itemContent}>
                    <strong>{item.name}</strong>
                    <span className={styles.itemDescription}>
                      {item.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {activeCategory === index && (
              <motion.div
                className={styles.cardGlow}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                style={{ background: category.color }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hobbies;
