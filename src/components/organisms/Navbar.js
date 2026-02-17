import { useState, useEffect } from "react";
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
      <div
        className={`
          hidden lg:block
          fixed top-0 left-0
          w-(--navbar-width) xl:w-(--navbar-width-lg)
          h-screen
          py-8 px-4
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          z-40
          overflow-y-auto
          transition-all duration-300
          ${isScrolled ? "shadow-lg" : ""}
        `}
      >
        <nav className="flex flex-col gap-6">
          <MyMenu />
        </nav>
      </div>

      {/* Navbar para móvil (hamburguesa) */}
      <div className="lg:hidden">
        <button
          className="
            fixed top-4 right-4 z-50
            flex flex-col justify-center items-center
            w-10 h-10
            bg-white dark:bg-gray-900
            rounded-full
            shadow-md
            border border-gray-200 dark:border-gray-800
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          <span
            className={`
              block w-5 h-0.5 bg-gray-600 dark:bg-gray-400
              transition-all duration-300
              ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"}
            `}
          />
          <span
            className={`
              block w-5 h-0.5 bg-gray-600 dark:bg-gray-400
              transition-all duration-300
              ${isMobileMenuOpen ? "opacity-0" : "mb-1.5"}
            `}
          />
          <span
            className={`
              block w-5 h-0.5 bg-gray-600 dark:bg-gray-400
              transition-all duration-300
              ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}
            `}
          />
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menú móvil */}
            <div className="absolute top-0 right-0">
              <MyMenu mobile onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>

      {/* Avatar con typing effect - AHORA MÁS COMPACTO */}
      <div
        className="
        flex items-center justify-center
        min-h-screen
        lg:ml-(--navbar-width) xl:ml-(--navbar-width-lg)
        p-4
      "
      >
        <TypingEffect
          avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4"
          avatarAlt="Victor - Desarrollador Full Stack"
          avatarSize={100}
          text={text}
          typingSpeed={100}
          variant="centered"
          showGlow={true}
          glowIntensity="medium"
        />
      </div>
    </>
  );
};

export default Navbar;
