import Link from 'next/link';
import styles from '@/styles/LinkItem.module.css';

const LinkItem = ({ href, text }) => {
  return (
    <li className={styles.linkItem}>
      <Link href={href}>{text}</Link>
    </li>
  );
};

export default LinkItem;
