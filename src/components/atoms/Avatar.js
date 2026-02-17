import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Avatar.module.css";

const Avatar = ({ 
  src, 
  alt, 
  width, 
  height,
  priority = false,
  fallbackIcon = "👤" // Emoji o inicial
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!src || imageError) {
    return (
      <div className={`${styles.avatarContainer} ${styles.avatarFallback}`}>
        <span className={styles.fallbackText}>
          {fallbackIcon}
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.avatarContainer} ${!imageLoaded ? styles.loading : ''}`}>
      <Image
        className={`${styles.avatar} ${imageLoaded ? styles.loaded : ''}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        onError={() => setImageError(true)}
        onLoad={() => setImageLoaded(true)}
      />
      
      {/* Overlay sutil con tu nombre/rol */}
      <div className={styles.avatarOverlay}>
        <span className={styles.overlayText}>Victor Peinado</span>
        <span className={styles.overlaySubtext}>Full Stack Dev</span>
      </div>
    </div>
  );
};

export default Avatar;