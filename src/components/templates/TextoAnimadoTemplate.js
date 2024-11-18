import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SectionTextoAnimado from "../organisms/SectionTextoAnimado";

const TextoAnimadoTemplate = () => {
  const router = useRouter();
  const [cargaCompleta, setCargaCompleta] = useState(false);

  const secciones = [
    { titulo: "Presentación #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
    { titulo: "Presentación #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
    { titulo: "Presentación #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
  ];

  useEffect(() => {
    const tiempoCarga = secciones.length * 3000 + 1000; 
    const timeout = setTimeout(() => {
      setCargaCompleta(true); 
      router.push("/Index"); 
    }, tiempoCarga);

    return () => clearTimeout(timeout);
  }, [router, secciones]);

  return (
    <main>
      {!cargaCompleta && (
        <SectionTextoAnimado
          tituloSeccion="Bienvenido a mi portafolio"
          secciones={secciones}
        />
      )}
    </main>
  );
};

export default TextoAnimadoTemplate;
