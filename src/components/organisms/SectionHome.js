import Image from "next/image";
import styles from "@/styles/SectionHome.module.css";
import TypingEffect from "../molecules/TypingEffect";
import WhatsappButton from "../atoms/WhatsappButton";
import Link from "next/link";



const SectionHome = () => {

  const text ="Hola, soy Victor.";
  console.log(text)

  return (
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
      
        <TypingEffect text ={text}/>
        
          <div className={styles.ctas}>
            <Link
              className={styles.primary}
              href="https://github.com/vpeinado263"
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
            </Link>
            <span className={styles.secondary}>
             Contactame
             <WhatsappButton/>
            </span>
          </div>
        </main>
      </div>
  )
}

export default SectionHome;
