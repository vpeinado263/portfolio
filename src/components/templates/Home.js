import TextoAnimado from "../molecules/TextoAnimado";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Navbar from "../organisms/Navbar";
import Skills from "../organisms/Skills";

const Home = () => {

  const secciones = [
    {
      titulo: "Bienvenido a mi portafolio",
      contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional. Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales. Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada."
    }
  ];

  return (
    <div>
        <TextoAnimado secciones={secciones}/>
        <Header/> 
        <Navbar/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home;
