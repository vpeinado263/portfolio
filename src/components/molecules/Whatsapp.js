import WhatsappLink from "../atoms/WhatsappLink";


const Whatsapp = ({message}) => {
    const phoneNumber = "+542612448018";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <WhatsappLink
     href={whatsappLink}
     src="/whatsapp.svg"
     alt="Chat"
     width={39}
     height={37}/>
  );
};

export default Whatsapp;
