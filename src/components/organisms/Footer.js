import React from 'react'
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      
    <footer className={styles.footer}>
    <Link
      href="https://github.com/vpeinado263"
      className={styles.a}
    >
      <Image
        src="/github.svg"
        alt="Github icon"
        width={16}
        height={16}
      />
      GitHub
    </Link>
    <Link
      href="https://www.linkedin.com/in/victor-peinado1739/?trk=opento_sprofile_details"
      className={styles.a}
    >
      <Image
        src="/linkedin.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Linkedin
    </Link>
    <Link
      href="/CV.pdf"
      alt="Descarga cv"
      className={styles.a}
    >
      <Image
        src="/file.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
      Descargar CV ↓
    </Link>
    
  </footer>
  
    </div>
  )
}

export default Footer;
