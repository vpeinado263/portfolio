import Profile from "../molecules/Profile";
import CTAButtons from "../molecules/CTAButtons";
import styles from "@/styles/SectionHome.module.css";

const SectionHome = () => {
  const whatsappMessage = `"Hola, ¿podemos conversar sobre oportunidades laborales?"`;
  const text = "Hola, soy Victor.";

  return (
    <div className={styles.mainContainer}>
      <main className={styles.main}>
        <Profile
          avatarSrc="https://avatars.githubusercontent.com/u/132930442?v=4" 
          avatarAlt="Foto personal"
          avatarWidth={200}
          avatarHeight={140}
          text={text}
        />
        <CTAButtons whatsappMessage={whatsappMessage} />
      </main>
    </div>
  );
};

export default SectionHome;

