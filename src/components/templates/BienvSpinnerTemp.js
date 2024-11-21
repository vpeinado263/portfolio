import { useState, useEffect } from "react";
import SpinnerAtomico from "../atoms/SpinnerAtomico";
import styles from "@/styles/BienvSpinnerTemp.module.css";


const BienvSpinnerTemp = () => {

const [mostrarSpinner, setMostrarSpinner] = useState(true);
      
useEffect(() => {
const timer = setTimeout(() => setMostrarSpinner(false), 1500); 
return () => clearTimeout(timer); 
}, []);

  return (
    <main className={styles.templateContainer}>
    {mostrarSpinner ? (
      <div className={styles.spinner}>
        <SpinnerAtomico />
      </div>
    ) : (
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Bienvenido a mi portafolio</h1>
      </div>
    )}
  </main>
  )
}

export default BienvSpinnerTemp;



