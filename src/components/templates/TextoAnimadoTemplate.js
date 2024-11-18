import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SectionTextoAnimado from "../organisms/SectionTextoAnimado";
import SpinnerAtomico from "../atoms/SpinnerAtomico"; // Importa el spinner

const TextoAnimadoTemplate = () => {
  const router = useRouter();
  const [cargaCompleta, setCargaCompleta] = useState(false);
  const [mostrarSpinner, setMostrarSpinner] = useState(true); // Estado del spinner

  const secciones = [
    { titulo: "Presentación #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
    { titulo: "Presentación #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
    { titulo: "Presentación #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
  ];

  useEffect(() => {
    const tiempoCarga = secciones.length * 3000 + 1000;

    const spinnerTimeout = setTimeout(() => {
      setMostrarSpinner(false); // Oculta el spinner antes de iniciar la animación de texto
    }, 1500); // Tiempo que el spinner se muestra antes de iniciar las animaciones

    const textoTimeout = setTimeout(() => {
      setCargaCompleta(true);
      router.push("/Index"); // Ajusta esta ruta según sea necesario
    }, tiempoCarga);

    return () => {
      clearTimeout(spinnerTimeout);
      clearTimeout(textoTimeout);
    };
  }, [router, secciones]);

  return (
    <main>
      {!cargaCompleta && (
        <>
          {mostrarSpinner && <SpinnerAtomico />} {/* Muestra el spinner */}
          {!mostrarSpinner && (
            <SectionTextoAnimado
              tituloSeccion="Bienvenido a mi portafolio"
              secciones={secciones}
            />
          )}
        </>
      )}
    </main>
  );
};

export default TextoAnimadoTemplate;
