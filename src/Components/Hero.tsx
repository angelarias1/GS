import React, { useState } from 'react';
import '../Styles/Hero.css';
import LogoImg from '../assets/images/image.webp';
import MenuIcon from '../assets/images/menu.png';
import CloseIcon from '../assets/images/close.png';

const Hero: React.FC = () => {
    const whatsappNumber = "529989148930"; 
    const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus servicios de videovigilancia."; 
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <section className="hero" id="hero">
            <header className="hero-header">
                <a href="#hero">
                    <img src={LogoImg} alt="Grupo SAOM - Cámaras de seguridad en Cancún" className="hero-logo" loading="lazy" />
                </a>

                <nav className="hero-nav" aria-label="Menú de navegación">
                    <a href="#hero">Inicio</a>
                    <a href="#beneficios">Beneficios</a>
                    <a href="#sectores">Sectores</a>
                    <a href="#productos">Cámaras</a>
                    <a href="#contacto">Contacto</a>
                </nav>

                <div className="menu-toggle" role="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? CloseIcon : MenuIcon} alt={menuOpen ? "Cerrar menú" : "Abrir menú"} />
                </div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <a href="#hero">Inicio</a>
                        <a href="#beneficios">Beneficios</a>
                        <a href="#sectores">Sectores</a>
                        <a href="#productos">Cámaras</a>
                        <a href="#contacto">Contacto</a>
                    </div>
                )}
            </header>

            <div className="hero-overlay">
                <div className="hero-text">
                    <h2>Cámaras de Seguridad con Tecnología Avanzada</h2>
                    <h1>Cámaras de Seguridad en Cancún - Videovigilancia Inteligente</h1>
                    <p>Protege lo que más importa con monitoreo en tiempo real y control total.</p>
                    <a href={whatsappLink} target="_blank" rel="nofollow noopener noreferrer" title="Abrir chat de WhatsApp" className="hero-button">
                        Solicita tu asesoría
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
