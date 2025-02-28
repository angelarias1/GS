import React from "react";
import "../Styles/BotonWhatsApp.css";
import whatsappIcon from "../assets/images/whatsapp.webp"; // ✅ Importa la imagen correctamente

// Número y mensaje de WhatsApp
const whatsappNumber = "529989148930"; // Reemplázalo con el número correcto
const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus servicios de videovigilancia.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const BotonWhatsApp: React.FC = () => {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="boton-whatsapp">
      <span className="tooltip-text">Chatea con nosotros</span>
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default BotonWhatsApp;
