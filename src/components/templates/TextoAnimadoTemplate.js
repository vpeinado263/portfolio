import SectionTextoAnimado from "../organisms/SectionTextoAnimado";

const TextoAnimadoTemplate = () => {
    const secciones = [
        { titulo: "Habilidad #1", contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional." },
        { titulo: "Habilidad #2", contenido: "Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales." },
        { titulo: "Habilidad #3", contenido: "Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada." },
      ];

  return (
    <main>
    <SectionTextoAnimado
      tituloSeccion="Mis Habilidades"
      secciones={secciones}
    />
  </main>
  )
}

export default TextoAnimadoTemplate;
