import React from 'react';
import '../Styles/Testimonios.css';

const testimonios = [
    {
        nombre: "Alejandro Ojeda",
        comentario: "El servicio es excelente, instalación rápida y atención de primera. Me siento mucho más seguro en mi hogar.",
    },
    {
        nombre: "María López",
        comentario: "Las cámaras tienen una calidad increíble. Ahora monitoreo mi negocio desde mi celular en tiempo real.",
    },
    {
        nombre: "Carlos Méndez",
        comentario: "Muy profesionales, explicaron todo el proceso y resolvieron mis dudas. Recomiendo ampliamente.",
    },
];

const Testimonios: React.FC = () => {
    return (
        <section className="testimonios">
            <div className="testimonios-container">
                <h2 className="testimonios-title">Lo que dicen nuestros clientes</h2>
                <p className="testimonios-subtitle">Más de 500 familias y empresas confían en nuestra seguridad.</p>

                <div className="testimonios-grid">
                    {testimonios.map((t, index) => (
                        <div key={index} className="testimonio-card">
                            <div className="testimonio-stars">
                                ★★★★★
                            </div>
                            <p className="testimonio-text">“{t.comentario}”</p>
                            <h3 className="testimonio-nombre">{t.nombre}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
