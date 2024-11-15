import styles from '@/styles/Header.module.css';
import TextoAnimado from '../atoms/TextoAnimado';
import SectionHome from './SectionHome';

const Header = () => {
 
  const secciones = [
    {
      titulo: "Bienvenido a mi portafolio",
      contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional. Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales. Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada."
    }
  ];

  return (
      <header className={styles.header}>
        <SectionHome />
        <TextoAnimado secciones={secciones}/>
      </header>
  );
};

export default Header;
