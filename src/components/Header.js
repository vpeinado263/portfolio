import React from 'react'
import styles from "@/styles/Header.module.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
        <Navbar/>
        <div className={styles.content}>
            <h1 className={styles.titulo}>¡Hola soy Victor!</h1>
            <p className={styles.subtitulo}>Aquí podrás explorar mis habilidades y proyectos en desarrollo web. Soy desarrollador web y enfermero profesional apasionado por crear soluciones digitales y contribuir al bienestar de los demás. Te invito a conocer más sobre mi trabajo y mis conocimientos.</p>
        </div>
    </header>
  )
}

export default Header
