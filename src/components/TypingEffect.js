import { useEffect, useState } from "react";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(""); // Estado para el texto mostrado
  const typingSpeed = 150; // Velocidad de escritura en milisegundos

  useEffect(() => {
    if (!text) return; // Si el texto está vacío o no definido, no hacer nada

    let currentIndex = 0; // Índice del carácter actual

    const typeCharacter = () => {
      // Solo escribe si hay caracteres restantes
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]); // Agrega el siguiente carácter
        currentIndex++; // Incrementa el índice
      } else {
        clearInterval(typingInterval); // Detiene el intervalo cuando se completa el texto
      }
    };

    const typingInterval = setInterval(typeCharacter, typingSpeed); // Configura el intervalo para escribir

    return () => clearInterval(typingInterval); // Limpia el intervalo al desmontar el componente
  }, [text]); // Dependencia para el efecto

  return <h1>{displayedText}</h1>; // Renderiza el texto mostrado
};

export default TypingEffect;
