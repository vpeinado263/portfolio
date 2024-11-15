import Icon from '@/components/atoms/Icon';
import LinkText from '@/components/atoms/LinkText';

const SocialLink = ({ href, iconSrc, iconAlt, iconWidth, iconHeight, children }) => {
  return (
    <LinkText href={href}>
      <Icon src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />
      {children}
    </LinkText>
  );
};

export default SocialLink;