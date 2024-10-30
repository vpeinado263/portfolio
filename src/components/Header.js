import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Navbar from './Navbar';


const Bienvenida = () => {
  const [mostrarTitulo, setMostrarTitulo] = useState(false);
  const [mostrarParrafo, setMostrarParrafo] = useState(false);

  useEffect(() => {
    setMostrarTitulo(true);
    const timer = setTimeout(() => {
      setMostrarParrafo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Navbar/>
    <header className={styles.header}>
    <div className={styles.content}>
      <h1 className={`${styles.titulo} ${mostrarTitulo ? styles.fadeIn : ''}`}>
        ¡Mi Mombre es Victor!
      </h1>
      <h2 className={`${styles.subtitulo} ${mostrarParrafo ? styles.fadeIn : ''}`}>
        Aquí podrás explorar mis habilidades y proyectos en desarrollo web.
     </h2>
     {/*
      <h2 className={`${styles.subtitulo} ${mostrarParrafo ? styles.fadeIn : ''}`}>
        Soy desarrollador web y enfermero profesional apasionado por crear soluciones digitales y contribuir al bienestar de los demás. 
      </h2>
      <p>
        Te invito a conocer más sobre mi trabajo y mis conocimientos.
      </p> */}
    </div>
    </header>
    </>
  );
};

export default Bienvenida;
