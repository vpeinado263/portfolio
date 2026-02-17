import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/WhatsappLink.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const WhatsappLink = ({ href, src, alt, width = 34, height = 34 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
        }}
        className={styles.iconContainer}
      >
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={false}
        />
      </motion.div>
    </Link>
  );
};

export default WhatsappLink;
