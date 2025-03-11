import React from 'react';
import '../Styles/Beneficios.css';

// Importar imágenes de fondo para cada beneficio
import img1 from '../assets/images/vanguardia.webp';
import img2 from '../assets/images/inteligente.webp';
import img3 from '../assets/images/monitoreo.webp';
import img4 from '../assets/images/soporte.webp';

const beneficios = [
    {
        titulo: "Tecnología de Vanguardia",
        descripcion: "Nuestras soluciones se adaptan a todas las necesidades de nuestros clientes.",
        imagenFondo: img1,
    },
    {
        titulo: "Detección Inteligente",
        descripcion: "Cámaras de seguridad con visión nocturna y detección avanzada de movimiento.",
        imagenFondo: img2,
    },
    {
        titulo: "Monitoreo en Tiempo Real",
        descripcion: "Diferentes tecnologías de acuerdo a tu necesidad para un control total.",
        imagenFondo: img3,
    },
    {
        titulo: "Soporte y garantía",
        descripcion: "Contamos con un equipo especializado para instalación, mantenimiento y asistencia técnica cuando lo necesites.",
        imagenFondo: img4,
    },
];

const Beneficios: React.FC = () => {
    return (
        <section className="beneficios" id="beneficios">
            <div className="beneficios-container">
                <h2 className="beneficios-title">Beneficios de Nuestra Tecnología</h2>
                <p className="beneficios-subtitle">Soluciones de seguridad avanzadas diseñadas para tu tranquilidad.</p>

                <div className="beneficios-grid">
                    {beneficios.map((beneficio, index) => (
                        <div key={index} className="beneficio-card">
                            <div
                                className="beneficio-imagen"
                                style={{ backgroundImage: `url(${beneficio.imagenFondo})` }}
                                aria-hidden="true"
                            ></div>
                            <div className="beneficio-overlay">
                                <h3 className="beneficio-title">{beneficio.titulo}</h3>
                                <p className="beneficio-text">{beneficio.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
