import React, { useEffect, useState } from "react";
import "../Styles/Estadisticas.css";

// Lista de estadísticas con valores iniciales en 0 para la animación
const estadisticas = [
  { numeroFinal: 2000, descripcion: "Clientes Satisfechos" },
  { numeroFinal: 35, descripcion: "Años de Experiencia en Seguridad" },
  { numeroFinal: 15, descripcion: "Proyectos en Curso" },
  { numeroFinal: 500, descripcion: "Proyectos Concluidos con Éxito" },
];

const Estadisticas: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState(estadisticas.map(() => 0));

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

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setCounters((prevCounters) =>
                    prevCounters.map((counter, i) =>
                        counter < estadisticas[i].numeroFinal
                            ? counter + Math.ceil(estadisticas[i].numeroFinal / 50) // Ajusta la velocidad del conteo
                            : estadisticas[i].numeroFinal
                    )
                );
            }, 30); // Ajusta la velocidad del efecto

            setTimeout(() => clearInterval(interval), 2000); // Detiene la animación después de 2s
        }
    }, [isVisible]);

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
                            <h2 className="estadistica-numero">{counters[index]}</h2>
                            <p className="estadistica-descripcion">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Estadisticas;
