import Button from "../atoms/Button";
import Whatsapp from "./Whatsapp";
import Image from "next/image";
import styles from "@/styles/CTAButtons.module.css";

const CTAButtons = ({ whatsappMessage }) => {
  return (
    <div className={styles.container}>
      <Button
        href="https://github.com/vpeinado263"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/file.svg"
          alt="proyectos"
          width={25}
          height={25}
        />
        Proyectos Personales
      </Button>
      <span className={styles.secondary}>
        Contactame
        <Whatsapp message={whatsappMessage}/>
      </span>
    </div>
  );
};

export default CTAButtons;
