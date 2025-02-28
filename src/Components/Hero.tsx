import React, { useState } from 'react';
import '../Styles/Hero.css';
import LogoImg from '../assets/images/image.webp'; // Logo
import MenuIcon from '../assets/images/menu.png'; // Icono menú
import CloseIcon from '../assets/images/close.png'; // Icono cerrar menú

const Hero: React.FC = () => {
    // Número de WhatsApp con mensaje predeterminado
    const whatsappNumber = "529989148930"; 
    const whatsappMessage = "¡Hola! Me interesa conocer más sobre sus servicios de videovigilancia."; 
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Estado para el menú hamburguesa
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para hacer scroll suave a las secciones
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = section.getBoundingClientRect().top + window.scrollY - 80; // Ajuste para la barra de navegación
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
        setMenuOpen(false); // Cierra el menú en móvil al hacer clic
    };

    return (
        <section className="hero" id="hero">
            <header className="hero-header">
                <img src={LogoImg} alt="Grupo SAOM - Expertos en Seguridad" className="hero-logo" loading="lazy" />

                <nav className="hero-nav">
                    <a onClick={() => scrollToSection('hero')}>Inicio</a>
                    <a onClick={() => scrollToSection('beneficios')}>Beneficios</a>
                    <a onClick={() => scrollToSection('sectores')}>Sectores</a>
                    <a onClick={() => scrollToSection('productos')}>Cámaras</a>
                    <a onClick={() => scrollToSection('contacto')}>Contacto</a>
                </nav>

                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menú de navegación" />
                </div>

                {menuOpen && (
                    <div className="mobile-menu">
                        <a onClick={() => scrollToSection('hero')}>Inicio</a>
                        <a onClick={() => scrollToSection('beneficios')}>Beneficios</a>
                        <a onClick={() => scrollToSection('sectores')}>Sectores</a>
                        <a onClick={() => scrollToSection('productos')}>Cámaras</a>
                        <a onClick={() => scrollToSection('contacto')}>Contacto</a>
                    </div>
                )}
            </header>

            <div className="hero-overlay">
                <div className="hero-text">
                    <h2>Cámaras de Seguridad con Tecnología Avanzada</h2>
                    <h1>Videovigilancia en Cancún: Seguridad Inteligente para tu Hogar y Negocio</h1>
                    <p>Protege lo que más importa con monitoreo en tiempo real y control total.</p>
                    <a href={whatsappLink} target="_blank" rel="nofollow noopener noreferrer" className="hero-button">
                        Solicita tu asesoría
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
