import Link from 'next/link';
import styles from '@/styles/Button.module.css';

const Button = ({ href, target, rel, children }) => {
  return (
    <Link className={styles.button} href={href} target={target} rel={rel}>
      {children}
    </Link>
  );
};

export default Button;
