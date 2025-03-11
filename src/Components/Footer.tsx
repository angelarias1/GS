import React from 'react';
import '../Styles/Footer.css';
import LogoImg from '../assets/images/image.webp'; // Logo
import UbicacionIcon from '../assets/images/ubicacion.png'; // Icono de ubicación
import TelefonoIcon from '../assets/images/telefono.png'; // Icono de teléfono
import CorreoIcon from '../assets/images/correo.png'; // Icono de correo

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* COLUMNA IZQUIERDA - LOGO Y DESCRIPCIÓN */}
                <div className="footer-brand">
                    <img src={LogoImg} alt="Grupo SAOM - Seguridad y Videovigilancia" className="footer-logo" />
                    <p className="footer-description">
                        Seguridad y videovigilancia con tecnología avanzada. Protegemos lo que más importa.
                    </p>
                </div>

                {/* COLUMNA CENTRAL - ENLACES RÁPIDOS EN DOS COLUMNAS */}
                <div className="footer-links">
                    <h3>Enlaces</h3>
                    <div className="footer-links-columns">
                        <div className="footer-links-column">
                            <a href="#beneficios">Beneficios</a>
                            <a href="#sectores">Sectores</a>
                            <a href="#clientes">Clientes</a>
                            <a href="#productos">Productos</a>
                            <a href="#cta">Contacto Rápido</a>
                        </div>
                        <div className="footer-links-column">
                            <a href="#estadisticas">Estadísticas</a>
                            <a href="#testimonios">Testimonios</a>
                            <a href="#partners">Partners</a>
                            <a href="#faq">Preguntas Frecuentes</a>
                            <a href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA - CONTACTO */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <div className="contacto-item">
                        <img src={UbicacionIcon} alt="Ubicación" className="contacto-icon" />
                        <p>Cancún, Quintana Roo</p>
                    </div>
                    <div className="contacto-item">
                        <img src={CorreoIcon} alt="Correo" className="contacto-icon" />
                        <p>
                            <a href="mailto:ventas@gruposaom.com.mx">ventas@gruposaom.com.mx</a>
                        </p>
                    </div>
                    <div className="contacto-item">
                        <img src={TelefonoIcon} alt="Teléfono" className="contacto-icon" />
                        <p>
                            <a href="tel:+529989148930">+52 998 914 8930</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="footer-social">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Grupo SAOM. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
