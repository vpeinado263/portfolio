import { useEffect, useRef, useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import TypedText from "@/components/atoms/TypedText";
import styles from "@/styles/TypingEffect.module.css";

const TypingEffect = ({
  avatarSrc,
  avatarAlt = "Victor Peinado",
  avatarSize = 50,
  text,
  typingSpeed = 50,
  cursor = true,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!text) return;

    let currentIndex = 0;
    setIsTyping(true);
    setDisplayText("");

    const typeCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeCharacter, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    let timeoutId = setTimeout(typeCharacter, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, [text, typingSpeed]);

  return (
    <div className={styles.container}>
      {/* Avatar con efecto de glow */}
      <div className={styles.avatarWrapper}>
        <Avatar
          src={avatarSrc}
          alt={avatarAlt}
          width={avatarSize}
          height={avatarSize}
          priority
        />
        <div className={styles.avatarGlow}></div>
      </div>

      {/* Texto con efecto typing */}
      <div className={styles.textWrapper}>
        <TypedText text={displayText} className={styles.typedText} />
        {cursor && (isTyping || showCursor) && (
          <span className={styles.cursor}>|</span>
        )}

        {/* Subtítulo opcional */}
        <p className={styles.subtitle}>
          Full Stack Developer | Enfermero Profesional
        </p>
      </div>
    </div>
  );
};

export default TypingEffect;
