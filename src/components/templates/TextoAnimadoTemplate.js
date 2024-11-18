import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import SectionTextoAnimado from "../organisms/SectionTextoAnimado";
import SpinnerAtomico from "../atoms/SpinnerAtomico"; 
import styles from "@/styles/TextoAnimadoTemplate.module.css";

const TextoAnimadoTemplate = () => {
  const router = useRouter();
  const [cargaCompleta, setCargaCompleta] = useState(false);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarPresentaciones, setMostrarPresentaciones] = useState(false);

  // Memorizar 'secciones' para evitar que cambie en cada renderizado
  const secciones = useMemo(() => [
    { titulo: "Presentación #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
    { titulo: "Presentación #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
    { titulo: "Presentación #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
  ], []);  // 'secciones' se recalcula solo si sus dependencias cambian (en este caso, no tiene dependencias)

  useEffect(() => {
    const iniciarCarga = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Espera de spinner
      setMostrarSpinner(false);
      setMostrarTitulo(true);

      await new Promise(resolve => setTimeout(resolve, 1000)); // Espera antes de mostrar presentaciones
      setMostrarPresentaciones(true);

      const tiempoCarga = secciones.length * 3000 + 1000; // Tiempo estimado según secciones
      setTimeout(() => {
        setCargaCompleta(true);
        router.push("/"); // Redirigir al home
      }, tiempoCarga);
    };

    iniciarCarga();
  }, [router, secciones]); // Ahora 'secciones' está memoizado y no cambia en cada renderizado

  return (
    <main className={styles.templateContainer}>
      {mostrarSpinner && (
        <div className={styles.spinnerWrapper}>
          <SpinnerAtomico />
        </div>
      )}
      
      {mostrarTitulo && !cargaCompleta && (
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Bienvenido a mi portafolio</h1>
        </div>
      )}
      
      {mostrarPresentaciones && !cargaCompleta && (
        <div className={styles.animationWrapper}>
          {secciones.map((seccion, index) => (
            <SectionTextoAnimado
              key={index}
              tituloSeccion={seccion.titulo}
              contenido={seccion.contenido}
            />
          ))}
        </div>
      )}

      {cargaCompleta && (
        <p className={styles.loadingMessage}>
          ¡Gracias por esperar! Ahora te redirigiré a la página principal.
        </p>
      )}
    </main>
  );
};

export default TextoAnimadoTemplate;
