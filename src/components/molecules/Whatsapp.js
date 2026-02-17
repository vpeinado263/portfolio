import WhatsappLink from "@/components/atoms/WhatsappLink";
import styles from "@/styles/Whatsapp.module.css"; // ← Ahora sí tiene estilos

const Whatsapp = ({
  message = "Hola Victor, vi tu portafolio y me gustaría contactarte.",
}) => {
  const phoneNumber = "+542612448018";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.whatsappContainer}>
      <WhatsappLink
        href={whatsappLink}
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={34}
        height={34}
        className={styles.whatsappIcon}
      />
      <span className={styles.tooltip}>Chatear por WhatsApp</span>
    </div>
  );
};

export default Whatsapp;
