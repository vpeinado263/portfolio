import WhatsappLink from "@/components/atoms/WhatsappLink";

const Whatsapp = ({ message }) => {
  const phoneNumber = "+5426124480180";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <WhatsappLink
      href={whatsappLink}
      src="/whatsapp.svg"
      alt="Chat"
      width={34}
      height={34}
    />
  );
};

export default Whatsapp;
