import { ThemeContext } from "@/context/ThemeContextProvider";
import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import Image from "next/image";
import Link from "next/link";

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
      {/* Skip Link para accesibilidad */}
      <Link
        href="#main-content"
        className="
          absolute -top-12 left-0
          bg-gray-700 dark:bg-gray-800 text-white
          px-4 py-2 md:px-3 md:py-1.5
          no-underline
          z-1001
          transition-all duration-300
          rounded-br-md
          text-sm md:text-xs font-medium
          focus:top-0
          focus:outline-2 focus:outline-blue-500 focus:outline-offset-2
        "
      >
        Saltar al contenido principal
      </Link>

      <motion.header
        className={`
          fixed top-0 left-0 right-0
          z-40
          bg-white dark:bg-gray-900
          border-b border-gray-200 dark:border-gray-800
          transition-all duration-300
          ${scrolled ? 'backdrop-blur-md bg-white/95 dark:bg-gray-900/95 shadow-lg' : ''}
          lg:hidden
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="
          max-w-7xl mx-auto
          px-4 py-2 md:px-6 md:py-3
          flex justify-between items-center
        ">
          {/* Botón de cambio de tema */}
          <button
            className="
              relative
              bg-transparent border-none
              cursor-pointer
              p-2
              rounded-full
              flex items-center justify-center
              transition-colors duration-200
              hover:bg-gray-100 dark:hover:bg-gray-800
              group
              before:content-[attr(data-tooltip)]
              before:absolute before:-bottom-10 before:left-1/2
              before:-translate-x-1/2
              before:bg-gray-700 dark:before:bg-gray-800
              before:text-white
              before:px-2 before:py-1
              before:rounded
              before:text-xs
              before:whitespace-nowrap
              before:opacity-0 before:invisible
              before:transition-all before:duration-200
              before:pointer-events-none
              before:z-50
              hover:before:opacity-100 hover:before:visible
              md:before:hidden
            "
            onClick={toggleTheme}
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
            data-tooltip={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <Image
              src={theme === "dark" ? "/sunDark.png" : "/sun.png"}
              alt="Toggle theme"
              width={40}
              height={40}
              className="
                w-8 h-8 md:w-7 md:h-7
                transition-transform duration-300
                group-hover:rotate-15
              "
              priority
            />
          </button>

          {/* Navbar (solo en móvil/tablet) */}
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