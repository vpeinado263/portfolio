import React from "react"; 
import Image from "next/image";
import { useState } from "react";

const Avatar = ({
  src,
  alt,
  width = 150,
  height = 150,
  priority = false,
  fallbackIcon = "👤",
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback cuando no hay imagen o hay error
  if (!src || imageError) {
    return (
      <div
        className="relative inline-block rounded-full overflow-hidden bg-linear-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-600 items-center justify-center animate-fadeInScale"
        style={{ width, height }}
      >
        <span className="text-4xl md:text-5xl lg:text-6xl text-white dark:text-gray-200 font-second">
          {fallbackIcon}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`
        relative inline-block rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800
        transition-all duration-300 w-fit group
        animate-fadeInScale
        ${!imageLoaded ? "bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-size-[200%_100%] animate-loading" : ""}
      `}
    >
      {/* Imagen */}
      <Image
        className={`
          block rounded-full border-4 border-gray-300 dark:border-gray-600
          object-cover transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
          group-hover:scale-108 group-hover:border-blue-400 dark:group-hover:border-blue-500
          group-hover:shadow-lg group-active:scale-98 group-active:opacity-90
          md:border-2
        `}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />

      {/* Borde animado en hover */}
      <div
        className="absolute -inset-0.5 rounded-full border-2 border-transparent 
                      group-hover:border-blue-300 dark:group-hover:border-blue-600 
                      group-hover:scale-110 group-hover:opacity-50 transition-all duration-300
                      pointer-events-none"
      />
    </div>
  );
};

export default Avatar;
