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
        
        // Espera antes de animar el siguiente
        await new Promise(resolve => setTimeout(resolve, 2000));

        const currentIndex = index;
        if (textRefs.current[currentIndex]) {
          // Mostrar el texto con animación
          gsap.fromTo(
            textRefs.current[currentIndex],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
          );
          
          // Desaparecer el texto después de un tiempo (ej. 3 segundos)
          setTimeout(() => {
            gsap.to(textRefs.current[currentIndex], {
              opacity: 0,
              y: -40,
              duration: 0.6,
              ease: "power2.in",
            });
            // Eliminar el texto después de que desaparezca
            setTimeout(() => {
              setMostrarTexto((prev) => prev.filter((_, i) => i !== currentIndex));
            }, 600); // 600ms = tiempo que tarda en desaparecer
          }, 3000); // El texto se mantiene visible por 3 segundos
        }

        index++;
        mostrar(); // Recursión para continuar con el siguiente texto
      }
    };

    mostrar();

    return () => {
      setMostrarTexto([]); // Limpia el estado cuando el componente se desmonta
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
