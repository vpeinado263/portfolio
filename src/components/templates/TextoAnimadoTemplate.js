import { useState, useEffect } from "react";
import SectionTextoAnimado from "../organisms/SectionTextoAnimado";
import SpinnerAtomico from "../atoms/SpinnerAtomico"; 
import styles from "@/styles/TextoAnimadoTemplate.module.css";

const TextoAnimadoTemplate = () => {
  const [etapa, setEtapa] = useState("spinner");
  const [indiceSeccion,] = useState(-1);


  useEffect(() => {
    const animarContenido = async () => {
      // 1. Mostrar Spinner por 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      setEtapa("titulo");

      // 2. Mostrar Título por 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setEtapa("secciones");
    };

    animarContenido();
  }, []);

  return (
    <main className={styles.templateContainer}>
      {/* Spinner */}
      <div
        className={`${styles.spinnerWrapper} ${etapa === "spinner" ? styles.visible : styles.hidden}`}
      >
        <SpinnerAtomico />
      </div>

      {/* Título */}
      <div
        className={`${styles.titleWrapper} ${etapa === "titulo" ? styles.visible : styles.hidden}`}
      >
        <h1 className={styles.title}>Bienvenido a mi portafolio</h1>
      </div>

      {/* Secciones */}
      {etapa === "secciones" && indiceSeccion >= 0 && (
        <div className={`${styles.animationWrapper} ${styles.visible}`}>
          <SectionTextoAnimado
            tituloSeccion={secciones[indiceSeccion].titulo}
            contenido={secciones[indiceSeccion].contenido}
          />
        </div>
      )}

    </main>
  );
};

export default TextoAnimadoTemplate;
