import { ThemeContext } from '@/context/ThemeContextProvider';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../organisms/Navbar';
import Image from 'next/image';

const Header = () => {
  const data = useContext(ThemeContext);
  const [toggleTheme, handleTheme] = data;

  return (
    <header className={toggleTheme}>
      <button className="button" onClick={handleTheme}>
        <Image
          src={toggleTheme === 'light' ? '/sun.png' : '/sunDark.png'}
          alt="Theme-logos"
          width={30}
          height={30}
        />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        transition={{ duration: 3 }}
      >
        <Navbar />
      </motion.div>
    </header>
  );
};

export default Header;
