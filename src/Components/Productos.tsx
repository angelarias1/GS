import React from 'react';
import '../Styles/Productos.css';

// Imágenes de los productos 
import camara1 from '../assets/images/cam.webp';
import camara2 from '../assets/images/camara2.webp';
import camara3 from '../assets/images/camara3.webp';
import camara4 from '../assets/images/camara4.webp';

// Imágenes de los tipos de cámaras
import tipo1 from '../assets/images/camarazoom.webp';
import tipo2 from '../assets/images/camaranocturnaa.webp';
import tipo3 from '../assets/images/camaramovimiento.webp';
import tipo4 from '../assets/images/camaraseguimiemto.webp'; // Corrección
import tipo5 from '../assets/images/camaraaudio.webp';
import tipo6 from '../assets/images/camarafacial.webp';

const productos = [
    {
        nombre: " Domo Turret",
        descripcion: "Cámara de seguridad  con resolución HD y visión nocturna.",
        imagen: camara1,
        detalles: [
            "✅ Resolución HD 1080p con visión nocturna avanzada.",
            "✅ Lente fijo de alto rendimiento con amplio ángulo de visión.",
            "✅ Diseño resistente a condiciones climáticas.",
            "✅ Detección inteligente de movimiento."
        ]
    },
    {
        nombre: " Bullet Dual",
        descripcion: "Doble lente para un monitoreo de seguridad con mayor detalle.",
        imagen: camara2,
        detalles: [
            "✅ Tecnología de doble lente para mejor profundidad de imagen.",
            "✅ Visión nocturna mejorada con infrarrojos de largo alcance.",
            "✅ Grabación en la nube con acceso remoto.",
            "✅ Resistente a golpes y condiciones extremas."
        ]
    },
    {
        nombre: " Bullet Pro",
        descripcion: "Zoom óptico y grabación en 4K para máxima seguridad.",
        imagen: camara3,
        detalles: [
            "✅ Zoom óptico de hasta 30x con enfoque automático.",
            "✅ Sistema de detección de intrusos con IA.",
            "✅ Grabación en 4K con claridad ultra HD.",
            "✅ Configuración avanzada de alertas personalizadas."
        ]
    },
    {
        nombre: " Domo IR",
        descripcion: "Infrarrojos y detección térmica para vigilancia 24/7.",
        imagen: camara4,
        detalles: [
            "✅ Detección térmica avanzada para vigilancia nocturna total.",
            "✅ Sensor de imagen de última generación con baja latencia.",
            "✅ Compatible con sistemas de alarma y domótica.",
            "✅ Control de acceso remoto desde cualquier dispositivo."
        ]
    },
];

const tiposCamaras = [
    { nombre: "Cámaras con Movimiento y Zoom", descripcion: "Permiten ajustar el ángulo de visión y hacer zoom.", imagen: tipo1 },
    { nombre: "Cámaras con Visión Nocturna", descripcion: "Capturan imágenes claras en total oscuridad con IR.", imagen: tipo2 },
    { nombre: "Cámaras con Detección de Movimiento", descripcion: "Activan grabación al detectar actividad.", imagen: tipo3 },
    { nombre: "Cámaras con Seguimiento de Objetos", descripcion: "Identifican y siguen personas o vehículos.", imagen: tipo4 },
    { nombre: "Cámaras con Audio Bidireccional", descripcion: "Incluyen micrófono y altavoz para comunicación.", imagen: tipo5 },
    { nombre: "Cámaras con Reconocimiento Facial", descripcion: "Identifican rostros en tiempo real.", imagen: tipo6 },
];

const Productos: React.FC = () => {
    return (
        <section className="productos" id="productos">
            <div className="productos-container" aria-label="Lista de cámaras ">
                <h2 className="productos-title"> Seguridad Avanzada</h2>
                <p className="productos-subtitle">Explora nuestras soluciones de videovigilancia con tecnología de punta.</p>

                {productos.map((producto, index) => (
                    <article key={index} className={`producto-item ${index % 2 === 0 ? 'invertido' : ''}`}>
                        <div className="producto-texto">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <ul className="producto-detalles">
                                {producto.detalles.map((detalle, i) => (
                                    <li key={i}>{detalle}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="producto-imagen">
                            <img src={producto.imagen} alt={`Cámara de seguridad ${producto.nombre}`} loading="lazy" decoding="async" />
                        </div>
                    </article>
                ))}

                <h2 className="productos-title">Tipos de Cámaras de Seguridad</h2>
                <p className="productos-subtitle">Diferentes tecnologías adaptadas a cada necesidad.</p>

                <div className="tipos-camaras-grid">
                    {tiposCamaras.map((tipo, index) => (
                        <article key={index} className="tipo-camara-card">
                            <img src={tipo.imagen} alt={tipo.nombre} className="tipo-camara-img" loading="lazy" decoding="async" />
                            <h3 className="tipo-camara-nombre">{tipo.nombre}</h3>
                            <p className="tipo-camara-descripcion">{tipo.descripcion}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Productos;
