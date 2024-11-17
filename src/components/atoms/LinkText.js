import Link from "next/link";
import styles from "@/styles/LinkText.module.css"; 

const LinkText = ({ href, children, className }) => {
  return (
    <Link href={href} className={`${styles.link} ${className ? className : ''}`}>
      {children}
    </Link>
  );
};

export default LinkText;

