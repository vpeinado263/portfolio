import Link from "next/link";

const LinkItem = ({ href, text}) => {
  return (
   <li>
    <Link href={href}>
        {text}
    </Link>
   </li>
  );
};

export default LinkItem
