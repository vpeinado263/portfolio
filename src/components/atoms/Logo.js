import Link from "next/link";
import styles from "@/styles/Logo.module.css";  

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <h2 className={styles.logoTitle}>Victor Peinado </h2>
      <h3 className={styles.logoTitle}>Portfolio</h3>
    </Link>
  );
};

export default Logo;
