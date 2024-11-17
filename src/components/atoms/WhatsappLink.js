import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/WhatsappLink.module.css";

const WhatsappLink = ({ href, src, alt, width, height }) => {
  return (
    <Link href={href} className={styles.link}>
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
};

export default WhatsappLink;
