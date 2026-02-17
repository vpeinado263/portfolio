import { forwardRef } from "react";
import Avatar from "./Avatar";

const TypedText = forwardRef(
  (
    {
      text = "",
      avatarSrc,
      avatarAlt = "Avatar",
      subtitle = "Full Stack Developer",
      showCursor = true,
      showGlow = true,
      showParticles = true,
    },
    ref,
  ) => {
    return (
      <div
        className="
      flex flex-col items-center justify-center gap-4 md:gap-12 
      w-full max-w-4xl mx-auto px-4 py-8 md:py-12 lg:py-16 
      lg:ml-56 lg:max-w-225 lg:px-8
      relative
    "
      >
        {/* Avatar con efectos visuales */}
        {avatarSrc && (
          <div className="relative w-fit z-10 md:shrink-0 transform scale-90 md:scale-100">
            {/* Glow effect */}
            {showGlow && (
              <div
                className="
              absolute -inset-2.5
              bg-gradient-radial from-blue-500 to-transparent
              opacity-30 rounded-full blur-md
              animate-pulseGlow
              group-hover:opacity-70 group-hover:blur-xl
              transition-all duration-300
              -z-10
            "
              />
            )}

            {/* Partículas rotantes */}
            {showParticles && (
              <div
                className="
              absolute -inset-4
              border border-blue-500/0 rounded-full
              hover:border-blue-500/30 hover:border-dashed
              animate-rotate
              transition-opacity duration-300
              pointer-events-none
            "
              />
            )}

            <Avatar
              src={avatarSrc}
              alt={avatarAlt}
              width={120}
              height={120}
              className="relative z-10"
            />
          </div>
        )}

        {/* Contenedor de texto */}
        <div
          className="
        flex flex-col items-center md:items-start gap-2
        w-full max-w-2xl relative
      "
        >
          {/* Línea de texto con efecto typing */}
          <div className="flex items-center justify-center md:justify-start">
            <h1
              ref={ref}
              className="
              font-second text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              text-gray-700 dark:text-gray-300
              text-center md:text-left
              leading-tight min-h-12 md:min-h-16
              inline-block
              wrap-break-word
            "
            >
              {text}
            </h1>

            {/* Cursor animado */}
            {showCursor && (
              <span
                className="
              inline-block w-0.75 h-8 md:h-10 lg:h-12
              bg-blue-500 ml-1 align-middle
              animate-blink
            "
              />
            )}
          </div>

          {/* Subtítulo */}
          {subtitle && (
            <p
              className="
            font-third text-sm md:text-base
            text-gray-400 dark:text-gray-500
            mt-2 md:mt-4
            text-center md:text-left
            uppercase tracking-wider opacity-80
            border-t border-gray-200 dark:border-gray-800
            pt-3 md:pt-4
          "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  },
);

TypedText.displayName = "TypedText";

export default TypedText;
