import { useState, useEffect } from "react";
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

  const secciones = [
    { titulo: "Presentación #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
    { titulo: "Presentación #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
    { titulo: "Presentación #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
  ];

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setMostrarSpinner(false); // Ocultar el spinner después de 1.5 segundos
      setMostrarTitulo(true); // Mostrar el título después de 1.5 segundos
    }, 1500);

    const tituloTimeout = setTimeout(() => {
      setMostrarPresentaciones(true); // Mostrar las presentaciones después de que se muestre el título
    }, 2500);

    // Tiempo total para las animaciones de las presentaciones (total de secciones)
    const tiempoCarga = secciones.length * 3000 + 1000;
    const textoTimeout = setTimeout(() => {
      setCargaCompleta(true);
      router.push("/"); // Redirigir a la página principal
    }, tiempoCarga);

    // Limpiar timeouts
    return () => {
      clearTimeout(spinnerTimeout);
      clearTimeout(tituloTimeout);
      clearTimeout(textoTimeout);
    };
  }, [router, secciones]);

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

      {/* Mensaje de carga final */}
      {cargaCompleta && (
        <p className={styles.loadingMessage}>
          ¡Gracias por esperar! Ahora te redirigiré a la página principal.
        </p>
      )}
    </main>
  );
};

export default TextoAnimadoTemplate;
