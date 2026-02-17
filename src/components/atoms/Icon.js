import Image from "next/image";
import { useState } from "react";

const Icon = ({
  src,
  alt,
  width = 24,
  height = 24,
  className = "",
  onClick,
  grayscale = false,
  hoverEffect = "scale", // "scale" | "rotate" | "glow"
}) => {
  const [imageError, setImageError] = useState(false);

  // Determinar clases de hover según el efecto seleccionado
  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "scale":
        return "hover:scale-120";
      case "rotate":
        return "hover:rotate-12 hover:scale-110";
      case "glow":
        return "hover:drop-shadow-[0_0_8px_currentColor] hover:scale-110";
      default:
        return "";
    }
  };

  // Fallback cuando la imagen no carga
  if (imageError) {
    return (
      <div
        className={`
          inline-flex items-center justify-center
          w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8
          bg-gray-100 dark:bg-gray-800 
          rounded text-xs font-bold text-gray-600 dark:text-gray-300
          uppercase ${className}
        `}
      >
        <span>{alt?.charAt(0) || "?"}</span>
      </div>
    );
  }

  // Clases base para el wrapper
  const wrapperClasses = `
    inline-flex items-center justify-center
    leading-none transition-all duration-300
    ${onClick ? "cursor-pointer" : ""}
    ${onClick ? "focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 focus-visible:rounded" : ""}
    ${className}
  `;

  // Clases para la imagen
  const imageClasses = `
    block object-contain
    transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    animate-fadeIn
    ${grayscale ? "grayscale opacity-80 hover:grayscale-0 hover:opacity-100" : ""}
    ${getHoverClasses()}
    
    // Efectos para dispositivos táctiles
    active:scale-90 active:opacity-80
  `;

  return (
    <div
      className={wrapperClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={imageClasses}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default Icon;
