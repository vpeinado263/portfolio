import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '@/styles/Header.module.css';
import Navbar from './Navbar';
import SectionHome from './SectionHome';

const Bienvenida = () => {
  const [mostrarTexto, setMostrarTexto] = useState([]);
  const secciones = [
    {
      titulo: '¡Bienvenido a mi portafolio!',
      contenido: 'Aquí podrás explorar mis habilidades y proyectos en desarrollo web.'
    },
    {
      titulo: 'Sobre mí',
      contenido: 'Soy Desarrollador Web y Enfermero Profesional apasionado por crear soluciones digitales y contribuir al bienestar de los demás.'
    },
    {
      titulo: 'Mi Misión',
      contenido: 'Siempre busco aprender y mejorar mis habilidades.'
    }
  ];

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
      <Navbar />
      <header className={styles.header}>
        <SectionHome />
        <div className={styles.content}>
          {mostrarTexto.length > 0 && mostrarTexto.map((texto, index) => (
            <div 
              key={index} 
              ref={(el) => (textRefs.current[index] = el)} 
              className={`${styles.subtitulo}`}
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
