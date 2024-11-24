import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';
import SectionProfile from './SectionProfile';

const Header = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}  
    animate={{ opacity: 2 }}   
    transition={{ duration: 3 }} 
    >
       <header className={styles.header}>
        <SectionProfile/>
      </header>
    </motion.div>
  );
};

export default Header;
