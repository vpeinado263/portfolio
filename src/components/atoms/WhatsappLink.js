import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/WhatsappLink.module.css';
import { motion } from 'framer-motion';

const WhatsappLink = ({ href, src, alt, width, height }) => {
  return (
    <Link href={href} className={styles.link}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 5 }}>
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </motion.div>
    </Link>
  );
};

export default WhatsappLink;
