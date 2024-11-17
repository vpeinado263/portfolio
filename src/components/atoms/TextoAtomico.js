import { forwardRef } from "react";
import styles from "@/styles/TextoAtomico.module.css"; 

const TextoAtomico = forwardRef(({ titulo, contenido, className }, ref) => (
  <div ref={ref} className={`${styles.subtitulo} ${className}`}>
    <h2 className={styles.h2}>{titulo}</h2>
    <p className={styles.p}>{contenido}</p>
  </div>
));

TextoAtomico.displayName = "TextoAtomico";

export default TextoAtomico;

