import React from 'react';
import '../Styles/CTA.css';

// Imagen de fondo optimizada
import bgImage from '../assets/images/camaraa.webp';

const CTA: React.FC = () => {
    // Número de WhatsApp con mensaje predeterminado
    const whatsappNumber = "529989148930";
    const whatsappMessage = "¡Hola! Me gustaría recibir más información sobre sus servicios de videovigilancia.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="cta" id="cta" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="cta-overlay">
                <h2 className="cta-title">Protege lo que más importa</h2>
                <p className="cta-subtitle">
                    Agenda una asesoría gratuita y recibe la mejor solución en seguridad.
                </p>
                <div className="cta-buttons">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button whatsapp">
                        Contactar por WhatsApp
                    </a>
                    <a href="#contacto" className="cta-button secondary">
                        Solicitar Cotización
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
