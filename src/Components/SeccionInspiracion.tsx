import React from 'react';
import '../Styles/SeccionInspiracion.css';

const SeccionInspiracion: React.FC = () => {
    return (
        <section id="inspiracion" className="seccion-inspiracion-container">
            <div className="seccion-inspiracion-card">
                <h2>Inspiración en el Arte</h2>
                <p>
                    "Si oyes una voz dentro de ti que dice 'no puedes pintar', pinta por supuesto, y esa voz será silenciada.
                    No tengo la certeza de nada, pero la visión de las estrellas me hace soñar. No hay nada más verdaderamente
                    artístico que amar a las personas."
                    <br />
                    <p>- Vincent van Gogh</p> 
                </p>
            </div>
        </section>
    );
};

export default SeccionInspiracion;
