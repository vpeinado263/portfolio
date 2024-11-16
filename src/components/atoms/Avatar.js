import Image from "next/image";
import styles from "@/styles/Avatar.module.css";

const Avatar = () => {
  return (
    <Image
      className={styles.avatar}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
    />
  )
}

export default Avatar;
