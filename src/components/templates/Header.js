import { motion } from 'framer-motion';
import Footer from '../organisms/Footer';
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
        <Footer />
      </motion.div>
    </header>
  );
};

export default Header;
