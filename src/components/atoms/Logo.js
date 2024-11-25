import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/Logo.module.css';

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <motion.div
        className={styles.logoContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className={styles.logoTitle}>Victor Peinado </h2>
        <h3 className={styles.logoTitle}>Portfolio</h3>
      </motion.div>
    </Link>
  );
};

export default Logo;
