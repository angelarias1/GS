import React from 'react';
import noche from '../assets/images/van_gogh.jpg';
import '../Styles/SeccionQuien.css';

const SeccionQuien: React.FC = () => {
    return (
        <section id="quien" className="seccion-quien">
            <div className="quien-image">
                <img src={noche} alt="Vincent van Gogh" />
            </div>
            <div className="quien-text-card">
                <h2>¿Quién fue Vincent van Gogh?</h2>
                <p>
                    Vincent van Gogh (1853-1890) fue un pintor postimpresionista neerlandés, 
                    reconocido por su uso expresivo del color y pinceladas dinámicas que 
                    revolucionaron el arte moderno. Aunque no fue valorado en vida, dejó un legado 
                    de más de 2,000 obras, incluyendo "La noche estrellada".
                </p>
            </div>
        </section>
    );
};

export default SeccionQuien;
