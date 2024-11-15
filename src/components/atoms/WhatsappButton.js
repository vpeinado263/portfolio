import Image from "next/image";
import Link from "next/link";



const WhatsappButton = ({ message }) => {
 const phoneNumber = "+542612448018";
 const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;


  return (
    <Link href={whatsappLink}>
       <Image
       src="/whatsapp.svg"
       alt="Chat"
       width={39}
       height={37}
    />
    </Link>
   
  );
};

export default WhatsappButton;

