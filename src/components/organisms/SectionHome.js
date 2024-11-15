import Image from "next/image";
import styles from "@/styles/Main.module.css";
import TypingEffect from "../molecules/TypingEffect";
import WhatsappButton from "../atoms/WhatsappButton";



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
            <span className={styles.secondary}>
             Contactame
             <WhatsappButton/>
            </span>
          </div>
        </main>
      </div>
    </>
  )
}

export default SectionHome;
