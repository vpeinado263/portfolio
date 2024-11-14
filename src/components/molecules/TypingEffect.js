import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypingEffect = ({ text }) => {
  const textRef = useRef("");

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        textRef.current += text[currentIndex];
        document.querySelector("#typedText").innerText = textRef.current;
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeCharacter, 210);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <h1 id="typedText"></h1>;
};

export default TypingEffect;
