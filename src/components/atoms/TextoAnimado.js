import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "@/styles/TextoAnimado.module.css";

const TextoAnimado = ({ secciones }) => {
  const [mostrarTexto, setMostrarTexto] = useState([]);
  const textRefs = useRef([]);

  useEffect(() => {
    let index = 0;

    const mostrar = async () => {
      if (index < secciones.length) {
        setMostrarTexto((prev) => [...prev, secciones[index]]);
        
        await new Promise(resolve => setTimeout(resolve, 2500)); 

        const currentIndex = index;
        if (textRefs.current[currentIndex]) {
          gsap.fromTo(
            textRefs.current[currentIndex],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
          );

          setTimeout(() => {
          
            gsap.to(textRefs.current[currentIndex], {
              opacity: 0,
              y: -20,
              duration: 1, 
              ease: "power4.in",
            });
            
          
            setTimeout(() => {
              setMostrarTexto((prev) => prev.filter((_, i) => i !== currentIndex));
            }, 1000);  
          }, 30000);  
        }

        index++;
        mostrar();  
      }
    };

    mostrar();

    return () => {
      setMostrarTexto([]);  
    };
  }, [secciones]);

  return (
    <div className={styles.subtituloContainer}>
      {mostrarTexto.length > 0 &&
        mostrarTexto.map((texto, index) => (
          <div
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            className={styles.subtitulo}
          >
            <h2 className={styles.h2}>{texto.titulo}</h2>
            <p className={styles.p}>{texto.contenido}</p>
          </div>
        ))}
    </div>
  );
};

export default TextoAnimado;
