import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "27662598261";
  const message = encodeURIComponent(
    "Hi Kempton Place Pharmacy! I'd like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center justify-center animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-primary-foreground" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
