import { motion } from 'framer-motion';
import Navbar from '../organisms/Navbar';

const Header = () => {
  return (
    <header>
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
