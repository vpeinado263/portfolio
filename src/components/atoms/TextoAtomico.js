import React, { forwardRef } from "react";
import styles from "@/styles/TextoAnimado.module.css";

const TextoAtomico = forwardRef(({ titulo, contenido, className }, ref) => (
  <div ref={ref} className={`${styles.subtitulo} ${className}`}>
    <h2 className={styles.h2}>{titulo}</h2>
    <p className={styles.p}>{contenido}</p>
  </div>
));

// Asigna un displayName para que ESLint no marque error
TextoAtomico.displayName = "TextoAtomico";

export default TextoAtomico;
