import { motion } from "framer-motion";

const About = ({
  title = "Sobre mí",
  paragraphs = [],
  showEllipsis = false,
}) => {
  const defaultParagraphs = [
    "Profesional con experiencia en gestión administrativa y formación complementaria en desarrollo web. Este portfolio muestra proyectos y herramientas orientadas a la organización de información y mejora de procesos mediante tecnología.",
  ];

  const contentParagraphs =
    paragraphs.length > 0
      ? paragraphs
      : defaultParagraphs.map((p, index) =>
          showEllipsis && index === defaultParagraphs.length - 1
            ? p + " ..."
            : p,
        );

  return (
    <motion.section
      id="about"
      className="w-full mx-auto px-4 py-6 max-w-7xl
                 md:px-8 md:py-12
                 lg:w-[calc(100%-var(--navbar-width))] lg:ml-(--navbar-width) lg:px-12 lg:py-16
                 xl:w-[calc(100%-var(--navbar-width-lg))] xl:ml-(--navbar-width-lg)"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 
                     md:text-4xl lg:text-5xl
                     relative inline-block
                     after:content-[''] after:absolute after:bottom-0 after:left-0 
                     after:w-1/2 after:h-1 after:bg-primary after:rounded">
        {title}
      </h2>
      
      <div className="space-y-4 md:space-y-6">
        {contentParagraphs.map((paragraph, index) => (
          <motion.p 
            key={index}
            className="text-base text-gray-700 dark:text-gray-300 leading-relaxed
                       md:text-lg lg:text-xl
                       hover:text-gray-900 dark:hover:text-white 
                       transition-colors duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
};


export default About;