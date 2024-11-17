import Link from "next/link";
import styles from "@/styles/Logo.module.css";  

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <h1>Victor Portfolio</h1>
    </Link>
  );
};

export default Logo;
