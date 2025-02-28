import React, { useEffect, useState } from "react";
import "../Styles/Estadisticas.css";

// Lista de estadísticas
const estadisticas = [
  { numero: "2000", descripcion: "Clientes Satisfechos" },
  { numero: "35", descripcion: "Años de Experiencia" },
  { numero: "15", descripcion: "Proyectos en Curso" },
  { numero: "500", descripcion: "Proyectos Concluidos" },
];

const Estadisticas: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detectar scroll para mostrar animaciones
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
        <section className="estadisticas" id="estadisticas">
            <div className="estadisticas-container">
                <h2 className="estadisticas-title">Resultados que nos respaldan</h2>
                <p className="estadisticas-subtitle">
                    Nuestra experiencia y compromiso nos han permitido lograr grandes resultados en el sector de videovigilancia.
                </p>

                <div className="estadisticas-grid">
                    {estadisticas.map((item, index) => (
                        <div key={index} className={`estadistica-item ${isVisible ? "show" : ""}`}>
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
