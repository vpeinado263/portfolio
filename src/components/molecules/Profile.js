import Avatar from '@/components/atoms/Avatar';
import TypingEffect from '@/components/molecules/TypingEffect';
import styles from '@/styles/Profile.module.css';

const Profile = ({ avatarSrc, avatarAlt, avatarWidth, avatarHeight, text }) => {
  return (
    <div className={styles.profile}>
      <Avatar
        src={avatarSrc}
        alt={avatarAlt}
        width={avatarWidth}
        height={avatarHeight}
      />
      <TypingEffect text={text} />
    </div>
  );
};

export default Profile;
