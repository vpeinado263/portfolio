import WhatsappLink from "@/components/atoms/WhatsappLink";

const Whatsapp = ({
  message = "Hola Victor, vi tu portafolio y me gustaría contactarte.",
  phoneNumber = "+542612448018",
  showTooltip = true,
  tooltipText = "Chatear por WhatsApp",
  tooltipPosition = "bottom", 
  pulseAnimation = true,
  iconSize = 34,
  className = "",
}) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // Posiciones del tooltip
  const tooltipPositions = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div className={`relative inline-block group ${className}`}>
      <WhatsappLink
        href={whatsappLink}
        src="/whatsapp.svg"
        alt="WhatsApp"
        width={iconSize}
        height={iconSize}
        className={`
          transition-all duration-300 ease-in-out
          cursor-pointer
          drop-shadow-md
          hover:scale-110 hover:rotate-5
          hover:drop-shadow-[0_4px_8px_rgba(37,211,102,0.3)]
          ${pulseAnimation ? 'animate-pulse-slow' : ''}
          hover:animate-none
        `}
      />

      {/* Tooltip */}
      {showTooltip && (
        <span
          className={`
            absolute ${tooltipPositions[tooltipPosition]}
            bg-[#25d366] text-white
            px-2 py-1 rounded-full
            text-xs font-third
            whitespace-nowrap
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            ${tooltipPosition === 'bottom' ? 'group-hover:-translate-y-1.25' : ''}
            ${tooltipPosition === 'top' ? 'group-hover:translate-y-1.25' : ''}
            shadow-lg
            pointer-events-none
            z-10
            md:block
            hidden
          `}
        >
          {tooltipText}
        </span>
      )}
    </div>
  );
};

export default Whatsapp;