import React from "react"; 
import LinkItem from "@/components/atoms/LinkItem";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MyMenu = ({ mobile = false, onClose }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

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

  const handleLinkClick = (sectionId) => {
    if (mobile && onClose) {
      onClose();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Agrupar items
  const menuGroups = [
    {
      title: "Principal",
      items: [
        { id: "", label: "Home", section: "" },
        { id: "about", label: "Sobre mí", section: "about" },
      ],
    },
    {
      title: "Trabajo",
      items: [
        { id: "projects", label: "Proyectos", section: "projects" },
        { id: "insights", label: "Insights", section: "insights" },
        {
          id: "certifications",
          label: "Certificaciones",
          section: "certifications",
        },
      ],
    },
    {
      title: "Personal",
      items: [{ id: "hobbies", label: "Hobbies", section: "hobbies" }],
    },
  ];

  if (mobile) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed top-0 right-0 w-70 h-screen bg-white dark:bg-gray-900 p-8 pr-6 shadow-[-5px_0_30px_rgba(0,0,0,0.15)] z-1002 border-l border-gray-200 dark:border-gray-800 overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
        >
          <button
            className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full w-9 h-9 text-lg cursor-pointer text-gray-700 dark:text-gray-300 flex items-center justify-center transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rotate-90"
            onClick={onClose}
          >
            ✕
          </button>

          <div className="mt-12">
            {menuGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className={
                  groupIndex > 0
                    ? "mt-6 pt-4 border-t border-gray-200 dark:border-gray-800"
                    : ""
                }
              >
                <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-4">
                  {group.title}
                </h3>
                <ul className="list-none p-0 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <LinkItem
                        href={item.id === "" ? "/" : `#${item.id}`}
                        text={item.label}
                        onClick={() => handleLinkClick(item.section)}
                        active={
                          item.section === ""
                            ? router.pathname === "/"
                            : activeSection === item.section
                        }
                        className="text-base py-2 px-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1 transition-all"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Versión desktop con grupos
  return (
    <nav className="hidden lg:block h-full">
      <div className="block h-full overflow-y-auto py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {menuGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={
                groupIndex > 0
                  ? "mt-6 pt-4 border-t border-gray-200 dark:border-gray-800"
                  : ""
              }
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-3">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1 list-none p-0">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <LinkItem
                      href={item.id === "" ? "/" : `#${item.id}`}
                      text={item.label}
                      onClick={() => handleLinkClick(item.section)}
                      active={
                        item.section === ""
                          ? router.pathname === "/"
                          : activeSection === item.section
                      }
                      variant="desktop"
                      className={`
                        flex items-center py-2 px-3 rounded-md
                        text-gray-700 dark:text-gray-300
                        text-sm font-medium no-underline
                        transition-all duration-200
                        border-l-3 border-transparent
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        hover:border-l-blue-500 dark:hover:border-l-blue-400
                        hover:translate-x-0.5
                        ${
                          activeSection === item.section
                            ? "bg-gray-200 dark:bg-gray-700 border-l-blue-500 dark:border-l-blue-400 text-gray-900 dark:text-white font-semibold"
                            : ""
                        }
                      `}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
};

export default MyMenu;
