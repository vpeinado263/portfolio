import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const LinkItem = ({ href, text}) => {
  return (
   <li>
    <Link href={href} className={styles.link}>
        {text}
    </Link>
   </li>
  );
};

export default LinkItem
