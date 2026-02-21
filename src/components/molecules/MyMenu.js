import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const MyMenu = ({ mobile = false, onClose }) => {
  const router = useRouter();

  const menuGroups = [
    {
      title: "Principal",
      items: [
        { path: "/", label: "Home"},
        { path: "/about", label: "Sobre mí"},
      ],
    },
    {
      title: "Trabajo",
      items: [
        { path: "/projects", label: "Proyectos"},
        { path: "/insights", label: "Insights"},
        { path: "/certifications", label: "Certificaciones"},
      ],
    },
    {
      title: "Personal",
      items: [{ path: "/hobbies", label: "Hobbies"}],
    },
  ];

  const handleLinkClick = () => {
    if (mobile && onClose) onClose();
  };

  // Versión móvil
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
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`
                          flex items-center gap-3 px-4 py-2 rounded-md
                          transition-all duration-200
                          ${
                            router.pathname === item.path
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }
                        `}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-base font-medium">{item.label}</span>
                      </Link>
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

  // Versión desktop
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
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`
                        flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg
                        transition-all duration-200
                        ${
                          router.pathname === item.path
                            ? "bg-blue-500 text-white shadow-md"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }
                      `}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                      {router.pathname === item.path && (
                        <motion.div
                          className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
                          layoutId="activeIndicator"
                        />
                      )}
                    </Link>
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