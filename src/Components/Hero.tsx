import React from 'react';
import '../Styles/Hero.css';
import LogoImg from '../assets/images/Saom.png'; // Logo

const Hero: React.FC = () => {
    // Número de WhatsApp con mensaje predeterminado
    const whatsappNumber = "529989148930"; 
    const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus servicios de videovigilancia."; 
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="hero">
            {/* HEADER */}
            <header className="hero-header">
                <img src={LogoImg} alt="Grupo SAOM Logo" className="hero-logo" />
                <nav className="hero-nav">
                    <a href="#beneficios">Beneficios</a>
                    <a href="#productos">Productos</a>
                    <a href="#soluciones">Soluciones</a>
                    <a href="#faq">Preguntas Frecuentes</a>
                    <a href="#contacto">Contacto</a>
                </nav>
            </header>

            {/* CONTENIDO HERO */}
            <div className="hero-overlay">
                <div className="hero-text">
                    <h2>Protege tu Hogar con Tecnología de Videovigilancia</h2>
                    <h1>Seguridad Inteligente en Cancún</h1>
                    <p>Descubre nuestros sistemas de cámaras con monitoreo en tiempo real y control desde tu celular.</p>
                    {/* BOTÓN LINKED A WHATSAPP */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-button">
                        Solicita tu asesoría
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
