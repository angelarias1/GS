import React from 'react';
import '../Styles/Soluciones.css';

// Imágenes de las soluciones
import hogarImg from '../assets/images/imagen.jpg';
import negocioImg from '../assets/images/imagen.jpg';
import industrialImg from '../assets/images/imagen.jpg';

const Soluciones: React.FC = () => {
    return (
        <section className="soluciones">
            <div className="soluciones-container">
                <h2 className="soluciones-title">Soluciones de Videovigilancia para Cada Necesidad</h2>
                <p className="soluciones-subtitle">Tecnología avanzada para proteger lo que más importa.</p>

                <div className="soluciones-grid">
                    {/* Solución Hogar */}
                    <div className="solucion-card">
                        <img src={hogarImg} alt="Seguridad para Hogar" className="solucion-img" />
                        <div className="solucion-text">
                            <h3>Seguridad para el Hogar</h3>
                            <p>Monitorea tu casa en tiempo real y mantén protegida a tu familia con nuestras cámaras de última generación.</p>
                        </div>
                    </div>

                    {/* Solución Negocios */}
                    <div className="solucion-card">
                        <img src={negocioImg} alt="Seguridad para Negocios" className="solucion-img" />
                        <div className="solucion-text">
                            <h3>Protección para Negocios</h3>
                            <p>Controla el acceso, monitorea en tiempo real y protege tu empresa con sistemas inteligentes.</p>
                        </div>
                    </div>

                    {/* Solución Industrial */}
                    <div className="solucion-card">
                        <img src={industrialImg} alt="Seguridad Industrial" className="solucion-img" />
                        <div className="solucion-text">
                            <h3>Seguridad Industrial</h3>
                            <p>Supervisa grandes áreas y optimiza la seguridad con tecnología avanzada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Soluciones;
