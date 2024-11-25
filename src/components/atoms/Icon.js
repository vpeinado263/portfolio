import Image from 'next/image';
import styles from '@/styles/Icon.module.css';

const Icon = ({ src, alt, width, height, className }) => {
  return (
    <div className={`${styles.icon} ${className || ''}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Icon;
