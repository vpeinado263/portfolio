import styles from '@/styles/Header.module.css';
import SectionHome from './SectionHome';
import { motion } from 'framer-motion';

const Header = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}  
    animate={{ opacity: 1 }}   
    transition={{ duration: 2 }} 
    >
       <header className={styles.header}>
        <SectionHome />
      </header>
    </motion.div>
  );
};

export default Header;
