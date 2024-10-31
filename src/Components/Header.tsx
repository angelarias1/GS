import React, { useState } from 'react';
import noche from '../assets/images/fondo.jpg';
import '../Styles/Header.css';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" style={{ backgroundImage: `url(${noche})` }}>
            <nav className="nav-menu">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#quien">¿Quién fue?</a></li>
                    <li><a href="#carrusel">Obras</a></li>
                    <li><a href="#inspiracion">Inspiración</a></li>
                    <li><a href="#influencia">Influencia</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1 className="header-title">Bienvenido a Lirium </h1>
                <p className="header-text">Explora el mundo del arte y la inspiración de Van Gogh</p>
                <a href="#quien" className="ver-mas">Ver Más</a>
            </div>
        </header>
    );
};

export default Header;
