import styles from '@/styles/Footer.module.css';
import SocialLink from '@/components/molecules/SocialLink';

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <footer className={styles.footer}>
        <div className={styles.a}>
          <SocialLink
            href="https://github.com/vpeinado263"
            iconSrc="/github.svg"
            iconAlt="Github icon"
            iconWidth={20}
            iconHeight={20}
          >
            GitHub
          </SocialLink>
        </div>
        <div className={styles.a}>
          <SocialLink
            href="https://www.linkedin.com/in/victor-peinado1739/?trk=opento_sprofile_details"
            iconSrc="/linkedin.svg"
            iconAlt="LinkedIn icon"
            iconWidth={20}
            iconHeight={20}
          >
            Linkedin
          </SocialLink>
        </div>
        <div className={styles.a}>
          <SocialLink
            href="/CV.pdf"
            iconSrc="/file.svg"
            iconAlt="CV icon"
            iconWidth={20}
            iconHeight={20}
          >
            Download CV ↓
          </SocialLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
