import React, { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/Header.module.css';
import Navbar from './Navbar';
import SectionHome from './SectionHome';

const Bienvenida = () => {
  const [mostrarTexto, setMostrarTexto] = useState([]);
  const secciones = useMemo(() => [
    {
      titulo: "Bienvenido a mi portafolio",
      contenido: "Soy un Desarrollador Web Full Stack en formación y Enfermero Profesional. Mi objetivo es aplicar mis habilidades tanto en el desarrollo web como en diversos sectores, buscando siempre crear soluciones digitales innovadoras que resuelvan problemas de cualquier área, desde la salud hasta desafíos empresariales. Estoy comprometido con el aprendizaje continuo y con aportar valor a las empresas utilizando tecnología avanzada."
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
              { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
            );
          }
          index++;
          mostrar();
        }, 5000); 
      }
    };

    mostrar(); 

    return () => {
      setMostrarTexto([]); 
    };
  }, [secciones]);

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <SectionHome />
        <div className={styles.content}>
          {mostrarTexto.length > 0 && mostrarTexto.map((texto, index) => (
            <div 
              key={index} 
              ref={(el) => (textRefs.current[index] = el)} 
              className={styles.subtitulo}
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
