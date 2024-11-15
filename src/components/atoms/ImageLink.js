import Image from "next/image"
import Link from "next/link"

const ImageLink = ({ href, src, alt, width, height}) => {
  return (
    <Link href={href}>
        <Image src={src} alt={alt} width={width} height={height}/>
    </Link>
  );
};

export default ImageLink;
