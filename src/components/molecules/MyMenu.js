import LinkItem from '@/components/atoms/LinkItem';
import styles from '@/styles/MyMenu.module.css';
import { motion } from 'framer-motion';

const MyMenu = () => {
  return (
    <>
      <nav >
        <div className={styles.menuContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <ul className={styles.menu}>
              <LinkItem href="#About" text="About" />
              <LinkItem href="#My Projects" text="Projects" />
              <LinkItem href="#Insights" text="Insights" />
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default MyMenu;
