import Link from "next/link";
import { useRouter } from "next/router";

const LinkItem = ({ 
  href, 
  text, 
  icon, 
  onClick, 
  active = false,
  variant = "default",
  hoverEffect = "translate",
  compact = false,
}) => {
  const router = useRouter();
  const isActive =
    active || router.asPath === href || router.asPath.startsWith(href + "#");

  // Efectos hover personalizables
  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "translate":
        return "hover:translate-x-1 lg:hover:translate-x-2";
      case "scale":
        return "hover:scale-105";
      case "background":
        return "hover:bg-gray-100 dark:hover:bg-gray-800";
      default:
        return "hover:translate-x-1";
    }
  };

  // Tamaños según compact o normal
  const sizes = compact 
    ? "px-4 py-2 text-base md:text-sm" 
    : "px-5 py-3 text-lg md:text-base lg:text-xl";

  const baseClasses = `
    flex items-center gap-3 ${sizes}
    text-gray-600 dark:text-gray-400
    font-second no-underline rounded-lg
    transition-all duration-300 ease-in-out
    relative overflow-hidden
    before:content-[''] before:absolute before:inset-0
    before:bg-gray-100 dark:before:bg-gray-800
    before:opacity-0 before:transition-opacity before:duration-300
    before:-z-10
    hover:before:opacity-100
    ${getHoverClasses()}
    hover:text-blue-500 dark:hover:text-blue-400
    active:scale-98 active:bg-gray-100 dark:active:bg-gray-800
    focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2
  `;

  const getVariantClasses = () => {
    if (variant === "underline") {
      return `
        ${baseClasses}
        border-l-0 border-b-2 border-transparent rounded-none px-0
        ${isActive ? 'border-b-blue-500 dark:border-b-blue-400 bg-transparent font-semibold' : ''}
      `;
    }

    return `
      ${baseClasses}
      ${isActive 
        ? 'text-blue-500 dark:text-blue-400 font-semibold bg-white dark:bg-gray-900 border-l-4 border-blue-500 dark:border-blue-400 before:opacity-10' 
        : ''
      }
    `;
  };

  return (
    <li className="list-none m-0 w-full animate-slideIn">
      <Link
        href={href}
        className={getVariantClasses()}
        onClick={onClick}
      >
        {icon && (
          <span className="flex items-center justify-center w-6 h-6 md:w-5 md:h-5 text-lg">
            {icon}
          </span>
        )}
        <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </span>
      </Link>
    </li>
  );
};

export default LinkItem;