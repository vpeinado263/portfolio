import { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import Logo from '@/components/atoms/Logo';
import MyMenu from '@/components/molecules/MyMenu';
import Footer from './Footer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navContainer}>
        <Logo />
        <MyMenu />
      </nav>
      <Footer />
    </header>
  );
};

export default Navbar;
