import { useEffect, useRef } from "react";
import TypedText from "../atoms/TypedText";

const TypingEffect = ({ text }) => {
  const elementRef = useRef(null); 

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        const currentText = text.slice(0, currentIndex + 1); 
        if (elementRef.current) {
          elementRef.current.textContent = currentText; 
        }
        currentIndex++;
        setTimeout(typeCharacter, 210); 
      }
    };

    typeCharacter(); 

    return () => {
      if (elementRef.current) {
        elementRef.current.textContent = ""; 
      }
    };
  }, [text]);

  return <TypedText ref={elementRef} />;
};

export default TypingEffect;
