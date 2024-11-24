import styles from '@/styles/Header.module.css';
import SectionHome from './SectionHome';
import { motion } from 'framer-motion';

const Header = () => {

  return (
    <motion.div
    initial={{ opacity: 0 }}  
    animate={{ opacity: 2 }}   
    transition={{ duration: 3 }} 
    >
       <header className={styles.header}>
        <SectionHome />
      </header>
    </motion.div>
  );
};

export default Header;
