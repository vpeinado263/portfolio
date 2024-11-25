import Link from 'next/link';
import styles from '@/styles/LinkItem.module.css';

const LinkItem = ({ href, text }) => {
  return (
    <li className={styles.linkItem}>
      <Link href={href} className={styles.link}>
        {text}
      </Link>
    </li>
  );
};

export default LinkItem;
