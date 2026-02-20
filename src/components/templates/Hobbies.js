import React from "react"; 
import { motion } from "framer-motion";
import { useState } from "react";

const HobbiesData = [
  {
    category: "Tecnología",
    icon: "💻",
    color: "#58608c",
    items: [
      {
        name: "Programación",
        description: "Proyectos Full Stack y experimentación continua",
        icon: "👨‍💻",
      },
      {
        name: "Herramientas de Gestión",
        description: "Notion para procesos, registros y organización de datos",
        icon: "📋",
      },
    ],
  },
  {
    category: "Salud y Bienestar",
    icon: "🧘",
    color: "#024873",
    items: [
      {
        name: "Ciclismo",
        description: "Rutas de 20km diarios para mantener el estado físico",
        icon: "🚴",
      },
      {
        name: "Lectura",
        description: "Desarrollo personal y técnica profesional",
        icon: "📖",
      },
      {
        name: "Meditación",
        description: "Práctica diaria de mindfulness y bienestar mental",
        icon: "🧠",
      },
    ],
  },
  {
    category: "Arte y Cultura",
    icon: "🔪",
    color: "#594c59",
    items: [
      {
        name: "Cuchillería Artesanal",
        description: "Diseño y creación de piezas únicas de colección",
        icon: "⚒️",
      },
      {
        name: "Lectura",
        description: "Ciencia ficción, historia y desarrollo personal",
        icon: "📚",
      },
    ],
  },
  {
    category: "Naturaleza",
    icon: "🐝",
    color: "#2d5a27",
    items: [
      {
        name: "Apicultura",
        description: "Apiario de abejas recientemente creado",
        icon: "🍯",
      },
      {
        name: "Apiario",
        description: "Cuidado y mantenimiento de colmenas",
        icon: "🏡",
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
    <section
      id="hobbies"
      className="
        min-h-screen w-full
        max-w-7xl mx-auto
        px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24
        lg:w-[calc(100%-var(--navbar-width))] lg:ml-(--navbar-width)
        xl:w-[calc(100%-var(--navbar-width-lg))] xl:ml-(--navbar-width-lg)
      "
    >
      <motion.h2
        className="
          text-3xl md:text-4xl lg:text-5xl
          text-center
          mb-12 md:mb-16 lg:mb-20
          font-second
          text-gray-800 dark:text-gray-200
        "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mis Hobbies e Intereses
      </motion.h2>

      <motion.div
        className="
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
          gap-6 md:gap-8
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {HobbiesData.map((category, index) => (
          <motion.div
            key={index}
            className={`
              relative
              p-6 md:p-8
              rounded-2xl
              bg-white dark:bg-gray-900
              border-2 border-transparent
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              overflow-hidden
              cursor-pointer
              ${activeCategory === index ? "shadow-2xl scale-[1.02]" : ""}
            `}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
            style={{
              borderColor:
                activeCategory === index ? category.color : "transparent",
            }}
          >
            {/* Barra superior de color */}
            <div
              className="absolute inset-x-0 top-0 h-2 transition-opacity duration-300"
              style={{
                background: category.color,
                opacity: activeCategory === index ? 1 : 0.5,
              }}
            />

            {/* Header de la categoría */}
            <div className="flex items-center gap-4 mb-6 mt-2">
              <span className="text-4xl leading-none">{category.icon}</span>
              <h3 className="text-xl md:text-2xl font-first text-gray-800 dark:text-gray-200">
                {category.category}
              </h3>
            </div>

            {/* Lista de hobbies */}
            <ul className="space-y-3">
              {category.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="
                    flex items-start gap-3
                    p-3 rounded-lg
                    bg-gray-50 dark:bg-gray-800
                    transition-all duration-200
                    hover:translate-x-1
                    hover:bg-gray-100 dark:hover:bg-gray-700
                  "
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-xl min-w-8 text-center">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <strong className="block text-sm md:text-base text-gray-800 dark:text-gray-200 mb-1">
                      {item.name}
                    </strong>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Efecto de glow */}
            {activeCategory === index && (
              <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                style={{ background: category.color }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Mensaje adicional sobre el apiario */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="
          mt-12 text-center
          text-gray-600 dark:text-gray-400
          text-sm md:text-base
          italic
          border-t border-gray-200 dark:border-gray-800
          pt-6
        "
      >
        <p>
          🍯 Recientemente creador de un apiario de abejas - Apasionado por la
          apicultura y la naturaleza
        </p>
      </motion.div>
    </section>
  );
};

export default Hobbies;
