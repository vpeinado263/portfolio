import React from "react"; 
import { useEffect, useState } from "react";
import Avatar from "@/components/atoms/Avatar";
import TypedText from "@/components/atoms/TypedText";

const TypingEffect = ({
  avatarSrc,
  avatarAlt = "Victor Peinado",
  avatarSize = 120,
  text = "Hola, soy Victor Peinado",
  typingSpeed = 50,
  cursor = true,
  subtitle = "",
  showGlow = true,
  className = "",
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
    <div
      className={`
        flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12
        p-8 md:p-12 lg:p-16
        w-full max-w-2xl md:max-w-4xl mx-auto
        lg:ml-56 lg:max-w-225
        ${!displayText ? "opacity-70" : ""}
        ${className}
      `}
    >
      {/* Avatar con efecto de glow */}
      <div className="relative group">
        <div className="relative rounded-full overflow-hidden shadow-lg border-4 border-blue-500 dark:border-blue-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-blue-600 dark:group-hover:border-blue-300">
          <Avatar
            src={avatarSrc}
            alt={avatarAlt}
            width={avatarSize}
            height={avatarSize}
            priority
            className="transition-filter duration-300 group-hover:brightness-105"
          />
        </div>

        {/* Glow effect */}
        {showGlow && (
          <div className="absolute -inset-4 bg-blue-500/20 dark:bg-blue-400/20 rounded-full blur-xl -z-10 animate-pulse" />
        )}
      </div>

      {/* Contenedor de texto */}
      <div className="flex items-center justify-center min-h-15 bg-white dark:bg-gray-900 px-8 py-4 rounded-full shadow-md border border-gray-200 dark:border-gray-800 w-full md:w-auto">
        <div className="flex items-center gap-1">
          <TypedText
            text={displayText}
            className="font-second text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 text-center m-0 leading-relaxed"
          />

          {/* Cursor parpadeante */}
          {cursor && (isTyping || showCursor) && (
            <span className="inline-block w-0.75 h-6 md:h-7 lg:h-8 bg-blue-500 dark:bg-blue-400 ml-1 animate-blink" />
          )}
        </div>
      </div>

      {/* Subtítulo (solo en desktop) */}
      {subtitle && (
        <p className="hidden md:block text-sm md:text-base text-gray-500 dark:text-gray-400 mt-4 text-center md:text-left font-third uppercase tracking-wider border-t border-gray-200 dark:border-gray-800 pt-4 max-w-md">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TypingEffect;
