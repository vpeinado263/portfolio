import LinkText from "@/components/atoms/LinkText";
import Icon from "@/components/atoms/Icon";
import styles from "@/styles/SocialLink.module.css";

const SocialLink = ({
  href,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  children,
  platform, // 'github' | 'linkedin' | 'whatsapp' | 'cv'
}) => {
  // Determinar si el enlace es externo (para target="_blank")
  const isExternal = href.startsWith("http") || href.startsWith("https");

  // Clase específica para la plataforma
  const platformClass = platform ? styles[platform] : "";

  return (
    <LinkText
      href={href}
      className={`${styles.socialLink} ${platformClass}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon
        src={iconSrc}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        className={styles.icon}
      />
      {children && <span className={styles.text}>{children}</span>}
    </LinkText>
  );
};

export default SocialLink;
