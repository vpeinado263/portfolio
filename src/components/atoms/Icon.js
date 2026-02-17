import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Icon.module.css";

const Icon = ({
  src,
  alt,
  width = 24,
  height = 24,
  className,
  onClick,
  grayscale = false,
  hoverEffect = "scale",
}) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`${styles.icon} ${styles.iconFallback} ${className || ""}`}
      >
        <span>{alt?.charAt(0) || "?"}</span>
      </div>
    );
  }

  const hoverClass =
    hoverEffect === "scale"
      ? styles.hoverScale
      : hoverEffect === "rotate"
        ? styles.hoverRotate
        : hoverEffect === "glow"
          ? styles.hoverGlow
          : "";

  return (
    <div
      className={`${styles.iconWrapper} ${className || ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.icon} ${grayscale ? styles.grayscale : ""} ${hoverClass}`}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default Icon;
