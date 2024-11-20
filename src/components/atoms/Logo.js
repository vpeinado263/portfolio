import Link from "next/link";
import styles from "@/styles/Logo.module.css";  

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <h2 className={styles.logoTitle}>Victor Portfolio</h2>
    </Link>
  );
};

export default Logo;
