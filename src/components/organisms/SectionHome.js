import Image from "next/image";
import styles from "@/styles/Main.module.css";
import TypingEffect from "../molecules/TypingEffect";



const SectionHome = () => {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.foto}
            src="/myPhoto.png"
            alt="Foto personal"
            width={290}
            height={180}
            priority
          />
      
        <TypingEffect text ="Me llamo Victor"/>
        
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/file.svg"
                alt="proyectos"
                width={25}
                height={25}
              />
              Proyectos Personales
            </a>
            <a
              href="https://www.linkedin.com/in/victor-peinado1739."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
             Contactame
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default SectionHome;
