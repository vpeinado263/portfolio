import Image from "next/image";
import localFont from "next/font/local"
import styles from "@/styles/Main.module.css";
import TypingEffect from "../molecules/TypingEffect";

const geistSans = localFont({
    src: "/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMono = localFont({
    src: "/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  

const SectionHome = () => {
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
