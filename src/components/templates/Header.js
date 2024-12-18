import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';

import Navbar from '../organisms/Navbar';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 3 }}
    >
      <div className={styles.header}>
        <Navbar />
      </div>
    </motion.div>
  );
};

export default Header;
