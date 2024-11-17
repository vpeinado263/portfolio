import React, { useEffect, useRef } from "react";
import TypedText from "../atoms/TypedText";

const TypingEffect = ({ text }) => {
  const textRef = useRef(""); 
  const elementRef = useRef(null); 

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        textRef.current += text[currentIndex]; 
        if (elementRef.current) {
          elementRef.current.innerText = textRef.current; 
        }
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeCharacter, 210);

    return () => clearInterval(typingInterval); 
  }, [text]);

  return <TypedText ref={elementRef} />;
};

export default TypingEffect;
