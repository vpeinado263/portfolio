import LinkText from '@/components/atoms/LinkText';
import Icon from '@/components/atoms/Icon';
import styles from './SocialLink.module.css'; 

const SocialLink = ({ href, iconSrc, iconAlt, iconWidth, iconHeight, children }) => {
  return (
    <LinkText href={href} className={styles.socialLink}> 
      <Icon 
        src={iconSrc} 
        alt={iconAlt} 
        width={iconWidth} 
        height={iconHeight} 
        className={styles.icon} />
      {children}
    </LinkText>
  );
};

export default SocialLink;
