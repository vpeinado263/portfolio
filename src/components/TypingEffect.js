import React, { useEffect, useState } from "react";

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bienvenido a mi portafolio"; 
  const typingSpeed = 150; 

  useEffect(() => {
    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval); 
      }
    };
    const typingInterval = setInterval(typeCharacter, typingSpeed); 

    return () => clearInterval(typingInterval); 
  }, []);

  return (
    <h1>{displayedText}</h1>
  );
};

export default TypingEffect;

