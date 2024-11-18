import TextoAnimado from "../molecules/TextoAnimado";
import styles from "@/styles/SectionTextoAnimado.module.css";

const SectionTextoAnimado = ({ tituloSeccion, secciones}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{tituloSeccion}</h1>
        <TextoAnimado secciones={secciones} />
      </div>
    </section>
  );
};

export default SectionTextoAnimado;
