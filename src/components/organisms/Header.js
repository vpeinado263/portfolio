import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';
import SectionProfile from '@/components/organisms/SectionProfile';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 3 }}
    >
      <header>
        <div className={styles.header}>
          <SectionProfile />
        </div>
      </header>
    </motion.div>
  );
};

export default Header;
