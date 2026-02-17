import Link from "next/link";
import styles from "@/styles/LinkText.module.css";

const LinkText = ({
  href,
  children,
  className,
  external = false,
  target,
  rel,
  onClick,
  ariaLabel,
  ...props
}) => {
  // Determinar si es un enlace externo
  const isExternal =
    external || href?.startsWith("http") || href?.startsWith("//");

  // Valores por defecto para enlaces externos
  const externalProps = isExternal
    ? {
        target: target || "_blank",
        rel: rel || "noopener noreferrer",
      }
    : {};

  // Clases combinadas
  const combinedClassName = `${styles.link} ${className || ""}`;

  // Para enlaces internos (Next.js Link)
  if (!isExternal) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Para enlaces externos (anchor tag normal)
  return (
    <a
      href={href}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default LinkText;
