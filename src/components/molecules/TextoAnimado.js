import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextoAtomico from "../atoms/TextoAtomico";
import styles from "@/styles/TextoAnimado.module.css";

const TextoAnimado = ({ secciones }) => {
  const [mostrarTexto, setMostrarTexto] = useState(null); 
  const textRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const mostrar = async () => {
      if (index < secciones.length) {
        setMostrarTexto(secciones[index]); 

        await new Promise((resolve) => {
          if (textRef.current) {
            gsap.fromTo(
              textRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", onComplete: resolve }
            );
          } else {
            resolve();
          }
        });

        await new Promise((resolve) => setTimeout(resolve, 3000)); 
        
        await new Promise((resolve) => {
          if (textRef.current) {
            gsap.to(textRef.current, {
              opacity: 0,
              y: -20,
              duration: 1,
              ease: "power4.in",
              onComplete: resolve,
            });
          } else {
            resolve();
          }
        });

        index++;
        mostrar();
      } else {
        setMostrarTexto(null); 
      }
    };

    mostrar();

    return () => setMostrarTexto(null); 
  }, [secciones]);

  return (
    <div className={styles.subtituloContainer}>
      {mostrarTexto && (
        <div ref={textRef} className={styles.textoVisible}>
          <TextoAtomico
            titulo={mostrarTexto.titulo}
            contenido={mostrarTexto.contenido}
          />
        </div>
      )}
    </div>
  );
};

export default TextoAnimado;

