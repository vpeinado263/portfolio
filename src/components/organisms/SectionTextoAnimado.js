import TextoAnimado from "../molecules/TextoAnimado";
import styles from "@/styles/SectionTextoAnimado.module.css";

const SectionTextoAnimado = ({ tituloSeccion, contenido }) => {  // Simplificamos las props
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{tituloSeccion}</h1>
        <TextoAnimado titulo={tituloSeccion} contenido={contenido} /> {/* Pasamos directamente titulo y contenido */}
      </div>
    </section>
  );
};

export default SectionTextoAnimado;
