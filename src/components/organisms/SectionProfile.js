import Profile from '../molecules/Profile';
import styles from '@/styles/SectionProfile.module.css';

const SectionProfile = () => {
  const text = "Hello, I'm Victor.";

  return (
    <div className={styles.containerProfile}>
      <Profile
        avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4"
        avatarAlt="Foto personal"
        avatarWidth={165}
        avatarHeight={150}
        text={text}
      />
    </div>
  );
};

export default SectionProfile;
