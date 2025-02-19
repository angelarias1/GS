import React from 'react';
import '../Styles/Beneficios.css';
import imagen from '../assets/images/imagen.jpg'; // Importa la imagen genérica

const Beneficios: React.FC = () => {
    return (
        <section className="beneficios">
            <div className="beneficios-container">
                <h2 className="beneficios-title">¿Por qué elegir nuestro sistema de videovigilancia?</h2>
                <p className="beneficios-subtitle">Protege tu hogar y negocio con tecnología avanzada.</p>

                <div className="beneficios-grid">
                    <div className="beneficio-card">
                        <img src={imagen} alt="Seguridad 24/7" />
                        <h3>Seguridad 24/7</h3>
                        <p>Monitorea en tiempo real desde cualquier lugar con acceso remoto.</p>
                    </div>

                    <div className="beneficio-card">
                        <img src={imagen} alt="Inteligencia Artificial" />
                        <h3>Detección Inteligente</h3>
                        <p>Nuestras cámaras identifican movimientos sospechosos y alertan en segundos.</p>
                    </div>

                    <div className="beneficio-card">
                        <img src={imagen} alt="Grabación en la nube" />
                        <h3>Grabación en la Nube</h3>
                        <p>Accede a tus videos almacenados con alta seguridad y protección.</p>
                    </div>

                    <div className="beneficio-card">
                        <img src={imagen} alt="Fácil instalación" />
                        <h3>Fácil Instalación</h3>
                        <p>Instalación profesional sin complicaciones y configuración rápida.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
