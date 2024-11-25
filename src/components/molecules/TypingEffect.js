import { useEffect, useRef } from 'react';
import TypedText from '@/components/atoms/TypedText';

const TypingEffect = ({ text }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;

    const element = elementRef.current;

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        const currentText = text.slice(0, currentIndex + 1);
        if (element) {
          element.textContent = currentText;
        }
        currentIndex++;
        setTimeout(typeCharacter, 210);
      }
    };

    typeCharacter();

    return () => {};
  }, [text]);

  return <TypedText ref={elementRef} />;
};

export default TypingEffect;
