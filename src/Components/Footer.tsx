import React from 'react';
import '../Styles/Footer.css';
import LogoImg from '../assets/images/Saom.png'; // Logo

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* COLUMNA IZQUIERDA - LOGO Y DESCRIPCIÓN */}
                <div className="footer-brand">
                    <img src={LogoImg} alt="Grupo SAOM Logo" className="footer-logo" />
                    <p className="footer-description">
                        Seguridad y videovigilancia con tecnología avanzada. Protegemos lo que más importa.
                    </p>
                </div>

                {/* COLUMNA CENTRAL - ENLACES RÁPIDOS */}
                <div className="footer-links">
                    <h3>Enlaces</h3>
                    <a href="#about">Nosotros</a>
                    <a href="#services">Servicios</a>
                    <a href="#testimonios">Testimonios</a>
                    <a href="#contact">Contacto</a>
                </div>

                {/* COLUMNA DERECHA - CONTACTO */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>📍 Cancún, Quintana Roo</p>
                    <p>📧 ventas@gruposaom.com.mx</p>
                    <p>📞 +52 998 914 8930</p>
                </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="footer-social">
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Grupo SAOM. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
