import React, { useState } from 'react';
import '../Styles/SeccionCarrusel.css';

// Importamos las imágenes locales
import retrato from '../assets/images/retrato.jpg';
import girasol from '../assets/images/girasol.jpg';
import cuarto from '../assets/images/cuarto.jpg';

const images = [retrato, girasol, cuarto];
const descriptions = [
    "Retrato del Dr. Gachet (1890) - Retrato de su amigo y médico, representa uno de sus trabajos más psicológicamente profundos.",
    "Los girasoles (1888) - Van Gogh pintó múltiples versiones de sus girasoles en Arles, destacando por su colorido y técnica.",
    "La habitación de Van Gogh en Arles (1888) - Muestra su habitación de una manera vibrante y única."
];

const SeccionCarrusel: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => setCurrent((current + 1) % images.length);
    const handlePrev = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <section id="carrusel" className="seccion-carrusel">
            <button className="carousel-button prev" onClick={handlePrev}>&#10094;</button>
            <img src={images[current]} alt={`Slide ${current}`} />
            <button className="carousel-button next" onClick={handleNext}>&#10095;</button>
            <p className="description">{descriptions[current]}</p>
        </section>
    );
};

export default SeccionCarrusel;
