import React, { useEffect, useState } from 'react';
import '../Styles/Testimonios.css';

const testimonios = [
    { nombre: "Carlos Sanchez", comentario: "Excelente servicio y calidad de equipos." },
    { nombre: "Israel Ojeda", comentario: "Muy profesionales, atención de especialistas." },
    { nombre: "Anahi Ruíz", comentario: "Muy profesionales, explicaron todo el proceso y resolvieron mis dudas. Recomiendo ampliamente." },
];

const MAX_LENGTH = 100;

const getRandomColor = () => {
    const colors = ["#FF5733", "#33A1FF", "#FF33A1", "#33FF57", "#A133FF", "#FFA133"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const Testimonios: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".testimonios-grid");
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const triggerPoint = window.innerHeight * 0.8;
                if (sectionTop < triggerPoint) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="testimonios" id="testimonios">
            <div className="testimonios-container">
                <h2 className="testimonios-title">Lo que dicen nuestros clientes</h2>
                <p className="testimonios-subtitle">Más de 500 familias y empresas confían en nuestra seguridad.</p>

                <div className="testimonios-grid">
                    {testimonios.map((t, index) => {
                        const isExpanded = expanded[index] || false;
                        const shouldTruncate = t.comentario.length > MAX_LENGTH;
                        return (
                            <div key={index} className={`testimonio-card ${isVisible ? "show" : ""}`}>
                                <div className="testimonio-header">
                                    <div className="perfil-icon" style={{ backgroundColor: getRandomColor() }}>
                                        {t.nombre.charAt(0).toUpperCase()}
                                    </div>
                                    <span>{t.nombre}</span>
                                </div>
                                <div className="testimonio-stars">★★★★★</div>
                                <p className="testimonio-text">
                                    {shouldTruncate && !isExpanded ? t.comentario.substring(0, MAX_LENGTH) + "..." : t.comentario}
                                </p>
                                {shouldTruncate && (
                                    <button
                                        className="ver-mas"
                                        onClick={() => setExpanded(prev => ({ ...prev, [index]: !isExpanded }))}
                                    >
                                        {isExpanded ? "Ver menos" : "Ver más"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
