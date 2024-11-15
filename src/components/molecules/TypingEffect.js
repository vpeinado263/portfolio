import React, { useEffect, useRef } from "react";
import TypedText from "../atoms/TypedText";

const TypingEffect = ({ text }) => {
  const textRef = useRef(""); // Ref para mantener el texto acumulado
  const elementRef = useRef(null); // Ref para apuntar al nodo DOM

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        textRef.current += text[currentIndex]; // Acumula el texto
        if (elementRef.current) {
          elementRef.current.innerText = textRef.current; // Actualiza el DOM
        }
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeCharacter, 210);

    return () => clearInterval(typingInterval); // Limpieza al desmontar el componente
  }, [text]);

  return <TypedText ref={elementRef} />;
};

export default TypingEffect;
