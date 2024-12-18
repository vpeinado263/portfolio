import { useState } from 'react';
import LinkItem from '@/components/atoms/LinkItem';
import styles from '@/styles/MyMenu.module.css';
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MyMenu = () => {
  const [isMyMenuOpen, setIsMyMenuOpen] = useState(false);
  const toggleMyMenu = () => setIsMyMenuOpen(!isMyMenuOpen);

  return (
    <>
      <div className={styles.burgerContainer}>
        <button
          className={styles.burger}
          onClick={toggleMyMenu}
          aria-expanded={isMyMenuOpen}
          aria-label={'MyMenu'}
        >
          <FaBars size={30} color="white" />
        </button>
      </div>

       <motion.div
        className={styles.logoContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
      <ul className={`${styles.menu} ${isMyMenuOpen ? styles.activar : ''}`}>
        <LinkItem href="#My Projects" text="Projects" />
        <LinkItem href="#About" text="About" />
        <LinkItem href="" text="Insights" />
      </ul>
      </motion.div>
    </>
  );
};

export default MyMenu;
