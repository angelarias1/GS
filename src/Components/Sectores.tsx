import React from 'react';
import '../Styles/Sectores.css';

// Importar imágenes de sectores
import residencial from '../assets/images/imagen.jpg';
import corporativo from '../assets/images/imagen.jpg';
import hoteleria from '../assets/images/imagen.jpg';
import industrial from '../assets/images/imagen.jpg';
import gobierno from '../assets/images/imagen.jpg';
import financiero from '../assets/images/imagen.jpg';

const sectores = [
    { nombre: "Residencial", descripcion: "PROTECCIÓN DE LO QUE MÁS AMAS", imagen: residencial },
    { nombre: "Corporativo", descripcion: "SOLUCIÓN PARA TU NEGOCIO", imagen: corporativo },
    { nombre: "Hoteleria", descripcion: "SEGURIDAD PARA TUS HUÉSPEDES", imagen: hoteleria },
    { nombre: "Industrial", descripcion: "SALVAGUARDAMOS CON FIRMEZA", imagen: industrial },
    { nombre: "Gobierno", descripcion: "GARANTÍA EN INMUNIDAD", imagen: gobierno },
    { nombre: "Financiero", descripcion: "PROTEGEMOS CON CERTEZA", imagen: financiero },
];

const Sectores: React.FC = () => {
    return (
        <section className="sectores">
            <div className="sectores-container">
                <h2 className="sectores-title">Soluciones de Videovigilancia por Sector</h2>
                <p className="sectores-subtitle">Protección avanzada para cada tipo de industria.</p>

                <div className="sectores-grid">
                    {sectores.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <img src={sector.imagen} alt={sector.nombre} className="sector-imagen" />
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
