import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/LinkItem.module.css";

const LinkItem = ({ href, text, icon, onClick, active = false }) => {
  const router = useRouter();
  const isActive =
    active || router.asPath === href || router.asPath.startsWith(href + "#");

  return (
    <li className={styles.linkItem}>
      <Link
        href={href}
        className={`${styles.link} ${isActive ? styles.active : ""}`}
        onClick={onClick}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.text}>{text}</span>
      </Link>
    </li>
  );
};

export default LinkItem;
