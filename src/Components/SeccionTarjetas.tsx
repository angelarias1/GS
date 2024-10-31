import React from 'react';
import '../Styles/SeccionTarjetas.css';

// Importación de imágenes locales
import arteModernoImg from '../assets/images/arte-moderno.jpg';
import culturaPopImg from '../assets/images/cultura-pop.jpg';
import museoImg from '../assets/images/museo.jpg';

const SeccionTarjetas: React.FC = () => {
    const ejemplos = [
        {
            titulo: "Arte Moderno",
            descripcion: "El estilo y las pinceladas de Van Gogh inspiraron a movimientos modernos como el expresionismo y el fauvismo.",
            imagen: arteModernoImg,
        },
        {
            titulo: "Cultura Popular",
            descripcion: "Su estilo ha aparecido en películas, series de televisión y hasta en la moda, convirtiéndose en un ícono cultural.",
            imagen: culturaPopImg,
        },
        {
            titulo: "Exhibiciones en Museos",
            descripcion: "Museos de todo el mundo organizan exhibiciones de sus obras, atrayendo a millones de visitantes cada año.",
            imagen: museoImg,
        },
    ];

    return (
        <section id="influencia" className="seccion-tarjetas">
            <div className="seccion-tarjetas-header">
                <h2 className="seccion-tarjetas-title">La Influencia de Van Gogh</h2>
                <p className="seccion-tarjetas-description">
                    El legado de Van Gogh ha trascendido en el tiempo, dejando una marca indeleble en el arte y en la cultura
                    moderna. Su estilo único continúa inspirando a artistas, diseñadores y fanáticos alrededor del mundo.
                </p>
            </div>
            <div className="seccion-tarjetas-grid">
                {ejemplos.map((ejemplo, index) => (
                    <div className="seccion-tarjetas-card" key={index}>
                        <img src={ejemplo.imagen} alt={ejemplo.titulo} />
                        <div className="seccion-tarjetas-card-content">
                            <h3 className="seccion-tarjetas-card-title">{ejemplo.titulo}</h3>
                            <p className="seccion-tarjetas-card-description">{ejemplo.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SeccionTarjetas;
