import Whatsapp from './Whatsapp';
import styles from '@/styles/CTAButtons.module.css';

const CTAButtons = ({ whatsappMessage }) => {
  return (
    <div className={styles.containerButton}>
      
      <span className={styles.secondary}>
        Whatsapp
        <Whatsapp message={whatsappMessage} />
      </span>
    </div>
  );
};

export default CTAButtons;
