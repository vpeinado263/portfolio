import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SectionTextoAnimado from "../organisms/SectionTextoAnimado";
import SpinnerAtomico from "../atoms/SpinnerAtomico"; 
import styles from "@/styles/TextoAnimadoTemplate.module.css";

const TextoAnimadoTemplate = () => {
  const router = useRouter();
  const [cargaCompleta, setCargaCompleta] = useState(false);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  const secciones = [
    { titulo: "Presentación #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
    { titulo: "Presentación #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
    { titulo: "Presentación #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
  ];

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setMostrarSpinner(false);
    }, 1500);

    const tiempoCarga = secciones.length * 6000 + 2000; 
    const textoTimeout = setTimeout(() => {
      setCargaCompleta(true);
      router.push("/Index");
    }, tiempoCarga);

    return () => {
      clearTimeout(spinnerTimeout);
      clearTimeout(textoTimeout);
    };
  }, [router, secciones]);

  return (
    <main className={styles.templateContainer}>
      {mostrarSpinner ? (
        <div className={styles.spinnerWrapper}>
          <SpinnerAtomico />
        </div>
      ) : !cargaCompleta ? (
        <div className={styles.animationWrapper}>
          <SectionTextoAnimado
            tituloSeccion="Bienvenido a mi portafolio"
            secciones={secciones}
          />
          <p className={styles.loadingMessage}>
            Cargando, por favor espera...
          </p>
        </div>
      ) : null}
    </main>
  );
};

export default TextoAnimadoTemplate;
