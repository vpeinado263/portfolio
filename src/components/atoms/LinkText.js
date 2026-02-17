import Link from "next/link";

const LinkText = ({
  href,
  children,
  className = "",
  external = false,
  target,
  rel,
  onClick,
  ariaLabel,
  variant = "default", 
  size = "md", 
  color = "primary", 
  disabled = false,
  showExternalIcon = true,
  underline = "none", 
  ...props
}) => {
  const isExternal =
    external || href?.startsWith("http") || href?.startsWith("//");

  const externalProps = isExternal
    ? {
        target: target || "_blank",
        rel: rel || "noopener noreferrer",
      }
    : {};

  // Tamaños
  const sizeClasses = {
    sm: "text-sm gap-1",
    md: "text-base gap-1.5",
    lg: "text-lg gap-2",
  }[size];

  // Colores
  const colorClasses = {
    primary: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
    secondary: "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300",
    gray: "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
  }[color];

  // Subrayado
  const underlineClasses = {
    none: "no-underline",
    hover: "no-underline hover:underline",
    always: "underline",
  }[underline];

  const baseClasses = `
    inline-flex items-center ${sizeClasses}
    no-underline cursor-pointer
    transition-all duration-200 ease-in-out
    font-first
    focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 focus-visible:rounded
    ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}
    ${colorClasses}
    ${underlineClasses}
  `;

  const getVariantClasses = () => {
    switch (variant) {
      case "highlight":
        return "font-semibold border-b-2 border-transparent hover:border-current";
      
      case "buttonLike":
        return `
          bg-white dark:bg-gray-800
          px-4 py-2 md:px-3 md:py-1.5
          rounded-full border border-gray-200 dark:border-gray-700
          hover:bg-gray-50 dark:hover:bg-gray-700
          hover:border-blue-500 dark:hover:border-blue-400
          shadow-sm hover:shadow
        `;
      
      case "withIcon":
        return "inline-flex items-center gap-2";
      
      case "nav":
        return "px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800";
      
      case "footer":
        return "text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300";
      
      default:
        return "hover:-translate-y-0.5 active:translate-y-0";
    }
  };

  const externalClass = isExternal && showExternalIcon 
    ? "after:content-['↗'] after:text-xs after:ml-1 after:opacity-70" 
    : "";

  const combinedClassName = `
    ${baseClasses}
    ${getVariantClasses()}
    ${externalClass}
    ${className}
  `;

  if (!isExternal) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkText;