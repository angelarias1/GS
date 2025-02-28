import React from 'react';
import '../Styles/Sectores.css';

// Importar imágenes de sectores
import residencial from '../assets/images/residencia.webp';
import corporativo from '../assets/images/corporativo.webp';
import hoteleria from '../assets/images/hotel.webp';
import industrial from '../assets/images/industrial.webp';
import gobierno from '../assets/images/gobierno.webp';
import financiero from '../assets/images/financiero.webp';

const sectores = [
    { nombre: "Residencial", descripcion: "Protección total para tu hogar con sistemas de seguridad avanzados.", imagen: residencial },
    { nombre: "Corporativo", descripcion: "Soluciones de seguridad personalizadas para empresas y oficinas.", imagen: corporativo },
    { nombre: "Hotelería", descripcion: "Garantiza la seguridad de tus huéspedes con monitoreo 24/7.", imagen: hoteleria },
    { nombre: "Industrial", descripcion: "Protección robusta para entornos industriales con videovigilancia avanzada.", imagen: industrial },
    { nombre: "Gobierno", descripcion: "Tecnología de seguridad de alto nivel para instituciones gubernamentales.", imagen: gobierno },
    { nombre: "Financiero", descripcion: "Seguridad optimizada para bancos y entidades financieras.", imagen: financiero },
];

const Sectores: React.FC = () => {
    return (
        <section className="sectores" id="sectores">
            <div className="sectores-container">
                <h2 className="sectores-title">Soluciones de Videovigilancia por Sector</h2>
                <p className="sectores-subtitle">Protección avanzada adaptada a cada tipo de industria.</p>

                <div className="sectores-grid">
                    {sectores.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <div
                                className="sector-imagen"
                                style={{ backgroundImage: `url(${sector.imagen})` }}
                                aria-hidden="true"
                            ></div>
                            <div className="sector-overlay">
                                <h3 className="sector-nombre">{sector.nombre}</h3>
                                <p className="sector-descripcion">{sector.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectores;
