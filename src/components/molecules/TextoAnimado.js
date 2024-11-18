import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import TextoAtomico from "../atoms/TextoAtomico";
import styles from "@/styles/TextoAnimado.module.css";

const TextoAnimado = ({ secciones }) => {
  const [index, setIndex] = useState(0); // Para controlar cuál sección mostrar
  const [mostrarTexto, setMostrarTexto] = useState(null); 
  const textRef = useRef(null);

  // Memorizar 'secciones' para que no cause un re-render innecesario en el 'useEffect'
  const seccionesMemorizadas = useMemo(() => secciones, [secciones]);

  useEffect(() => {
    if (seccionesMemorizadas && seccionesMemorizadas.length > 0 && index < seccionesMemorizadas.length) {
      setMostrarTexto(seccionesMemorizadas[index]);

      // Animación de entrada con GSAP
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );

      // Esperamos el tiempo que tarda la animación
      const timeout = setTimeout(() => {
        // Animación de salida con GSAP
        gsap.to(textRef.current, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power4.in",
          onComplete: () => {
            setIndex((prevIndex) => prevIndex + 1); // Aumentamos el índice para la siguiente sección
          }
        });
      }, 6000); // Este es el tiempo que la sección se muestra en pantalla

      return () => clearTimeout(timeout); // Limpiamos el timeout cuando el componente se desmonte o cambie
    } else {
      setMostrarTexto(null); // Terminamos cuando llegamos al final de las secciones o si 'secciones' está vacío
    }
  }, [index, seccionesMemorizadas]); // Usamos 'seccionesMemorizadas' como dependencia

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
