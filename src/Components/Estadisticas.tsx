import React, { useEffect, useState } from "react";
import "../Styles/Estadisticas.css";

// Lista de estadísticas con palabras clave optimizadas
const estadisticas = [
  { numero: "2000", descripcion: "Clientes Satisfechos" },
  { numero: "35", descripcion: "Años de Experiencia en Seguridad" },
  { numero: "15", descripcion: "Proyectos en Curso" },
  { numero: "500", descripcion: "Proyectos Concluidos con Éxito" },
];

const Estadisticas: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detectar scroll para activar animaciones
    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".estadisticas-grid");
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
        <section className="estadisticas" id="estadisticas" aria-label="Resultados y Experiencia en Videovigilancia">
            <div className="estadisticas-container">
                <h2 className="estadisticas-title">Resultados que nos Respaldan</h2>
                <p className="estadisticas-subtitle">
                    Con más de 35 años de experiencia, hemos asegurado hogares y negocios con tecnología avanzada.
                </p>

                <div className="estadisticas-grid">
                    {estadisticas.map((item, index) => (
                        <div key={index} className={`estadistica-item ${isVisible ? "show" : ""}`} role="presentation">
                            <h2 className="estadistica-numero">{item.numero}</h2>
                            <p className="estadistica-descripcion">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Estadisticas;
