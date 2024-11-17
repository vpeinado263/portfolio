import styles from '@/styles/Header.module.css';
import SectionHome from './SectionHome';

const Header = () => {

  return (
      <header className={styles.header}>
        <SectionHome />
      </header>
  );
};

export default Header;
