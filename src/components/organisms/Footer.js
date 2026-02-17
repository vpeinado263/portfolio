import styles from "@/styles/Footer.module.css";
import SocialLink from "@/components/molecules/SocialLink";
import Whatsapp from "@/components/molecules/Whatsapp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <div className={styles.socialItem}>
          <SocialLink
            href="https://github.com/vpeinado263"
            iconSrc="/github.svg"
            iconAlt="GitHub"
            iconWidth={24}
            iconHeight={24}
            platform="github"
          />
        </div>
        <div className={styles.socialItem}>
          <SocialLink
            href="https://www.linkedin.com/in/victor-peinado1739/"
            iconSrc="/linkedin.svg"
            iconAlt="LinkedIn"
            iconWidth={24}
            iconHeight={24}
            platform="linkedin"
          />
        </div>
        <div className={styles.socialItem}>
          <Whatsapp />
        </div>
        <div className={styles.socialItem}>
          <SocialLink
            href="https://drive.google.com/file/d/1C-5VwDMs-oU2-Ah0xHupGkxTo2QPk1dN/view"
            iconSrc="/file.svg"
            iconAlt="Currículum Vitae"
            iconWidth={24}
            iconHeight={24}
          >
            <span className={styles.cvText}>CV</span>
          </SocialLink>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} Victor Peinado. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
