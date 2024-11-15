import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/Header.module.css';
import Navbar from './Navbar';
import SectionHome from './SectionHome';

const Bienvenida = () => {
  const [mostrarTexto, setMostrarTexto] = useState([]);
  
  // Uso de useMemo para memorizar el array de secciones
  const secciones = useMemo(() => [
    {
      titulo: "¡Bienvenido a mi portafolio!",
      contenido: "Soy un Desarrollador Web en formación con experiencia en enfermería. Me apasiona encontrar soluciones digitales efectivas que puedan aplicarse en diversos sectores, desde la salud hasta cualquier desafío empresarial."
    },
    {
        titulo: "Sobre mí",
        contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional. A lo largo de mi carrera, he trabajado en proyectos Full Stack, y mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en otros campos, ayudando a las empresas a resolver problemas mediante soluciones digitales innovadoras."
    },
    {
      titulo: "Mi Misión",
      contenido:  "Mi misión es aplicar mis conocimientos en desarrollo web y mi experiencia en el ámbito de la salud para crear soluciones digitales que impacten positivamente en cualquier área. Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas, independientemente de su sector, utilizando tecnología avanzada para resolver problemas."
    }
  ], []);

  const textRefs = useRef([]);

  useEffect(() => {
    let index = 0;

    const mostrar = () => {
      if (index < secciones.length) {
        setMostrarTexto((prev) => [...prev, secciones[index]]);
        setTimeout(() => {
          const currentIndex = index;
          if (textRefs.current[currentIndex]) {
            gsap.fromTo(
              textRefs.current[currentIndex],
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }
            );
          }
          index++;
          mostrar();
        }, 3000);
      }
    };

    mostrar(); 

    return () => {
      setMostrarTexto([]); 
    };
  }, [secciones]);

  return (
    <>
      <Navbar/>
      <header className={styles.header}>
        <SectionHome/>
        <div className={styles.content}>
          {mostrarTexto.length > 0 && mostrarTexto.map((texto, index) => (
            <div 
              key={index} 
              ref={(el) => (textRefs.current[index] = el)} 
              className={styles.subtitulo} // Se eliminó el uso de template strings ya que no es necesario aquí
            >
              <h2>{texto.titulo}</h2>
              <p>{texto.contenido}</p>
            </div>
          ))}
        </div>
      </header>
    </>
  );
};

export default Bienvenida;
