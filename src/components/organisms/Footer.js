import styles from "@/styles/Footer.module.css";
import SocialLink from "@/components/molecules/SocialLink";
import Whatsapp from "../molecules/Whatsapp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.a}>
        <SocialLink
          href="https://github.com/vpeinado263"
          iconSrc="/github.svg"
          iconAlt="Github icon"
          iconWidth={20}
          iconHeight={20}
        ></SocialLink>
      </div>
      <div className={styles.a}>
        <SocialLink
          href="https://www.linkedin.com/in/victor-peinado1739/?trk=opento_sprofile_details"
          iconSrc="/linkedin.svg"
          iconAlt="LinkedIn icon"
          iconWidth={20}
          iconHeight={20}
        ></SocialLink>
      </div>
      <div className={styles.a}>
        <Whatsapp />
      </div>
      <div className={styles.a}>
        <SocialLink
          href="https://drive.google.com/file/d/1C-5VwDMs-oU2-Ah0xHupGkxTo2QPk1dN/view?usp=sharing"
          iconSrc="/file.svg"
          iconAlt="CV icon"
          iconWidth={20}
          iconHeight={20}
        >
          CV ↓
        </SocialLink>
      </div>
    </footer>
  );
};

export default Footer;
