import { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import MyMenu from '@/components/molecules/MyMenu';
import TypingEffect from '../molecules/TypingEffect';

const Navbar = () => {
  const text = "Hello, I'm Victor.";
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
    <>
      <div className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <nav className={styles.navContainer}>
          <MyMenu />
        </nav>
      </div>
      <TypingEffect
        avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4"
        avatarAlt="Foto personal"
        avatarWidth={165}
        avatarHeight={150}
        text={text}
      />
    </>
  );
};

export default Navbar;
