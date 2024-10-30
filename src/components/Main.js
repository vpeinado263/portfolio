import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Main.module.css";
import TypingEffect from "./TypingEffect";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  

const Main = () => {
  return (
    <>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <Image
            className={styles.foto}
            src="/myPhoto.png"
            alt="Foto personal"
            width={290}
            height={180}
            priority
          />
      
        <TypingEffect text ="Bienvenido a mi portafolio"/>
        
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
              href="www.linkedin.com/in/victor-peinado1739."
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

export default Main
