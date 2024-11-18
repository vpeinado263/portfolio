import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextoAtomico from "../atoms/TextoAtomico";
import styles from "@/styles/TextoAnimado.module.css";

const TextoAnimado = ({ titulo, contenido }) => {  // Recibimos directamente título y contenido
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (titulo && contenido) {
      setMostrarTexto(true);
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );

      const timeout = setTimeout(() => {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power4.in",
          onComplete: () => setMostrarTexto(false),
        });
      }, 6000); // Mostramos el texto durante 6 segundos

      return () => clearTimeout(timeout); // Limpiamos el timeout al desmontar el componente
    }
  }, [titulo, contenido]); // Dependemos directamente de los props

  return (
    <div className={styles.subtituloContainer}>
      {mostrarTexto && (
        <div ref={textRef} className={styles.textoVisible}>
          <TextoAtomico titulo={titulo} contenido={contenido} />
        </div>
      )}
    </div>
  );
};

export default TextoAnimado;
