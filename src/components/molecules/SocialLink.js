import LinkText from "@/components/atoms/LinkText";
import Icon from "@/components/atoms/Icon";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialLink = ({
  href,
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  children,
  platform,
  variant = "default",
  size = "md",
  showText = true,
  showTooltip = false,
  tooltipPosition = "top",
  className = "",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = href.startsWith("http") || href.startsWith("https");

  // Mapa de colores por plataforma
  const platformColors = {
    github: { bg: "#24292e", text: "white", hover: "hover:bg-[#24292e]" },
    linkedin: { bg: "#0077b5", text: "white", hover: "hover:bg-[#0077b5]" },
    whatsapp: { bg: "#25d366", text: "white", hover: "hover:bg-[#25d366]" },
    twitter: { bg: "#1DA1F2", text: "white", hover: "hover:bg-[#1DA1F2]" },
    instagram: { bg: "#E4405F", text: "white", hover: "hover:bg-[#E4405F]" },
    cv: { bg: "#9CA3AF", text: "white", hover: "hover:bg-gray-400" },
  };

  // Tamaños
  const sizeClasses = {
    sm: {
      container: "px-3 py-1.5 text-xs gap-1.5",
      icon: "w-4 h-4",
      text: "text-xs",
      iconOnly: "p-1.5",
    },
    md: {
      container: "px-4 py-2 text-sm gap-2",
      icon: "w-5 h-5",
      text: "text-sm",
      iconOnly: "p-2",
    },
    lg: {
      container: "px-5 py-2.5 text-base gap-2.5",
      icon: "w-6 h-6",
      text: "text-base",
      iconOnly: "p-2.5",
    },
  }[size];

  // Variantes
  const variantClasses = {
    default: "rounded-full",
    iconOnly: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  }[variant];

  const isIconOnly = variant === "iconOnly" || !children || !showText;

  // Tooltip
  const tooltipClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  }[tooltipPosition];

  const platformColor = platform ? platformColors[platform] : null;

  const linkClasses = `
    inline-flex items-center ${sizeClasses.container}
    ${variantClasses}
    no-underline
    text-gray-700 dark:text-gray-300
    bg-white dark:bg-gray-900
    border border-gray-200 dark:border-gray-800
    transition-all duration-200 ease-in-out
    hover:-translate-y-0.5
    hover:shadow-md
    ${platformColor ? platformColor.hover : "hover:bg-gray-100 dark:hover:bg-gray-800"}
    ${platformColor ? "hover:text-white" : ""}
    ${isIconOnly ? sizeClasses.iconOnly : ""}
    relative
    ${className}
  `;

  return (
    <div className="relative inline-block">
      <LinkText
        href={href}
        className={linkClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        <Icon
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className={`
            transition-all duration-200
            ${sizeClasses.icon}
            ${isHovered ? "scale-110" : "scale-100"}
          `}
        />
        {!isIconOnly && (
          <span className={`${sizeClasses.text} font-medium`}>{children}</span>
        )}
      </LinkText>

      {/* Tooltip */}
      {showTooltip && isIconOnly && isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`
            absolute ${tooltipClasses}
            bg-gray-900 dark:bg-gray-700 text-white text-xs
            px-2 py-1 rounded whitespace-nowrap
            shadow-lg z-50
            pointer-events-none
          `}
        >
          {children || platform || iconAlt}
        </motion.div>
      )}
    </div>
  );
};

export default SocialLink;
