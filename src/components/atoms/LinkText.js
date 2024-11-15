import Link from "next/link";

const LinkText = ({ href, children, className}) => {
  return (
    <Link href={href} className={className}>
        {children}
    </Link>
  );
};

export default LinkText
