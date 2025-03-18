import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SyD.css";

const SyD: React.FC = () => {
    const navigate = useNavigate(); // ✅ Hook para redirigir

    return (
        <section className="syd-container">
            <div className="syd-selection">
                <h2>Elige cómo deseas obtener tu solución</h2>
                <p>
                    Si ya conoces los productos que necesitas, usa el <strong>Simulador</strong>.
                    Si no, responde unas preguntas en el <strong>Diagnóstico</strong> y te recomendaremos una solución.
                </p>
                <div className="syd-buttons">
                    <button className="btn-simulador" onClick={() => navigate("/nsf")}>Usar Simulador</button>
                    <button className="btn-diagnostico" onClick={() => navigate("/ndf")}>Hacer Diagnóstico</button>
                </div>
            </div>
        </section>
    );
};

export default SyD;
