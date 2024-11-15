import styles from "@/styles/Footer.module.css";
import SocialLink from "../molecules/SocialLink";

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      
    <footer className={styles.footer}>
      <SocialLink
      href="https://github.com/vpeinado263"
      iconSrc="/github.svg"
      iconAlt="Github icon"
      iconWidth={16}
      iconHeight={16}
    >
      GitHub
    </SocialLink>
    <SocialLink
      href="https://www.linkedin.com/in/victor-peinado1739/?trk=opento_sprofile_details"
      iconSrc="/linkedin.svg"
      iconAlt="LinkedIn icon"
      iconWidth={16}
      iconHeight={16}
      >
      Linkedin
    </SocialLink>
    <SocialLink
      href="/CV.pdf"
      iconSrc="/file.svg"
      iconAlt="CV icon"
      iconWidth={16}
      iconHeight={16}
      >
        Descargar CV ↓
    </SocialLink>
    
  </footer>
  
    </div>
  )
}

export default Footer;
