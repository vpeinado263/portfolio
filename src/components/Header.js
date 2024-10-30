import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Navbar from './Navbar';
import SectionHome from './SectionHome';

const Bienvenida = () => {
  const [mostrarTexto, setMostrarTexto] = useState([]);
  const textos = [
    "¡Bienvenido a mi portafolio!",
    "Aquí podrás explorar mis habilidades y proyectos en desarrollo web.",
    "Soy desarrollador web y enfermero profesional apasionado por crear soluciones digitales y contribuir al bienestar de los demás.",
    "Te invito a conocer más sobre mi trabajo y mis conocimientos."
  ];

  useEffect(() => {
    let index = 0;
    const mostrar = () => {
      if (index < textos.length) {
        setMostrarTexto((prev) => [...prev, textos[index]]);
        index++;
        setTimeout(mostrar, 4000); // Mostrar el siguiente texto después de 4 segundos
      }
    };

    mostrar(); // Inicia la secuencia de mostrar texto

    return () => {
      setMostrarTexto([]); // Limpiar el estado al desmontar el componente
    };
  }, []);

  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <SectionHome />
        <div className={styles.content}>
          {mostrarTexto.map((texto, index) => (
            <h2 key={index} className={`${styles.subtitulo} ${styles.fadeIn}`}>
              {texto}
            </h2>
          ))}
        </div>
      </header>
    </>
  );
};

export default Bienvenida;
