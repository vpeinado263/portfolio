import Avatar from "../atoms/Avatar";
import TypingEffect from "./TypingEffect";
import styles from "./Profile.module.css";

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
