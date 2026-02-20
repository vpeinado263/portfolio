import React from "react"; 
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappLink = ({
  href,
  src,
  alt = "WhatsApp",
  phoneNumber,
  message = "Hola, vi tu portfolio y me gustaría contactarte",
  width = 34,
  height = 34,
  showGlow = true,
  glowIntensity = "medium",
  animationType = "rotate",
  useIcon = false,
  iconColor = "#25D366",
  showTooltip = false,
  tooltipText = "Contáctame por WhatsApp",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Construir href si solo se proporciona el número
  const whatsappHref = phoneNumber
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : href;

  // Intensidad del glow
  const glowShadows = {
    low: "0_4px_8px_rgba(37,211,102,0.2)",
    medium: "0_4px_12px_rgba(37,211,102,0.3)",
    high: "0_4px_16px_rgba(37,211,102,0.4)",
  };

  // Animaciones según tipo
  const getAnimation = () => {
    switch (animationType) {
      case "rotate":
        return {
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.1 : 1,
        };
      case "pulse":
        return {
          scale: isHovered ? [1, 1.1, 1] : 1,
        };
      case "bounce":
        return {
          y: isHovered ? [0, -5, 0] : 0,
        };
      default:
        return {
          scale: isHovered ? 1.1 : 1,
        };
    }
  };

  // Transiciones según animación
  const getTransition = () => {
    if (animationType === "pulse" || animationType === "bounce") {
      return {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      };
    }
    return {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
    };
  };

  const linkClasses = `
    inline-block rounded-full overflow-hidden
    transition-all duration-300 ease-in-out
    cursor-pointer no-underline bg-transparent
    relative
    ${showGlow ? `hover:drop-shadow-[${glowShadows[glowIntensity]}]` : ""}
    active:scale-95 active:opacity-80
    md:w-auto md:h-auto
    ${className}
  `;

  return (
    <div className="relative inline-block">
      <Link
        href={whatsappHref}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={getAnimation()}
          transition={getTransition()}
          className="flex items-center justify-center transition-all duration-300"
        >
          {useIcon ? (
            <FaWhatsapp
              size={width}
              color={iconColor}
              className="transition-transform duration-300"
            />
          ) : (
            <Image
              className="object-contain transition-filter duration-300 group-hover:brightness-110"
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={false}
              style={{
                width: width,
                height: height,
              }}
            />
          )}
        </motion.div>
      </Link>

      {/* Tooltip */}
      {showTooltip && isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute -top-10 left-1/2 transform -translate-x-1/2
            bg-gray-900 dark:bg-gray-700 text-white text-sm
            px-3 py-1 rounded-lg whitespace-nowrap
            shadow-lg z-50
            after:content-[''] after:absolute after:top-full after:left-1/2
            after:-translate-x-1/2 after:border-4 after:border-transparent
            after:border-t-gray-900 dark:after:border-t-gray-700
          "
        >
          {tooltipText}
        </motion.div>
      )}
    </div>
  );
};

export default WhatsappLink;
