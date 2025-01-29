import Image from 'next/image';
import './whatsappIcon.css';

const ContactWhatsapp = () => {
    window.open('https://wa.me/5547997137923?text=Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.', '_blank', 'noopener, noreferrer');
}

const WhatsAppIcon = () => {
  return (
    <Image
      src="/SVG/whatsapp.svg"
      alt="Ícone decorativo"
      className="whatsapp-icon fixed bottom-4 right-4 cursor-pointer z-50"
      width={20}
      height={20}
      onClick={ContactWhatsapp}
    />
  );
};

export default WhatsAppIcon;
