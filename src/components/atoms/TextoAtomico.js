import styles from "@/styles/TextoAtomico.module.css";

const TextoAtomico = ({ titulo, contenido }) => {
  return (
    <div className={styles.subtitulo}>
      <h2 className={styles.h2}>{titulo}</h2>
      <p className={styles.p}>{contenido}</p>
    </div>
  );
};

export default TextoAtomico;
