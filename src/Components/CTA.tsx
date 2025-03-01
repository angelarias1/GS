import React from 'react';
import '../Styles/CTA.css';

const CTA: React.FC = () => {
    const whatsappNumber = "529989148930";
    const whatsappMessage = "¡Hola! Me gustaría recibir más información sobre sus servicios de videovigilancia.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="cta" id="cta" aria-label="Sección de asesoría gratuita y contacto">
            <div className="cta-overlay" role="presentation">
                <h2 className="cta-title">Seguridad y Videovigilancia Inteligente</h2>
                <p className="cta-subtitle">
                    Obtén una asesoría gratuita y descubre cómo proteger tu hogar o negocio con tecnología avanzada.
                </p>
                <div className="cta-buttons">
                    <a href={whatsappLink} target="_blank" rel="nofollow noopener noreferrer" className="cta-button whatsapp">
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
