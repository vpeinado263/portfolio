import Image from "next/image"
import Link from "next/link"

const WhatsappLink = ({ href, src, alt, width, height}) => {
  return (
    <Link href={href}>
        <Image src={src} alt={alt} width={width} height={height}/>
    </Link>
  );
};

export default WhatsappLink;
