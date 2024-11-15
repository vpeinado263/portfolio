import Icon from "../atoms/Icon";
import LinkText from "../atoms/LinkText";

const SocialLink = ({ href, iconSrc, iconAlt, iconWidth, iconHeight, children}) => {
  return (
   <LinkText href={href}>
    <Icon src={iconSrc} alt={iconAlt} width={width} height={height}/>
    {children}
   </LinkText>
  );
};

export default SocialLink;
