import React from 'react';
import '../Styles/Productos.css';

// Imágenes de los productos
import camara1 from '../assets/images/camara1.png';
import camara2 from '../assets/images/camara1.png';
import camara3 from '../assets/images/camara1.png';
import camara4 from '../assets/images/camara1.png';

const productos = [
    {
        nombre: "Cámara AI Ultra HD",
        descripcion: "Resolución 4K con inteligencia artificial y visión nocturna avanzada.",
        imagen: camara1,
        detalles: [
            "✅ Resolución 4K Ultra HD para máxima calidad.",
            "✅ Visión nocturna mejorada con sensores IR.",
            "✅ Inteligencia Artificial para detección de movimientos.",
            "✅ Conectividad WiFi para acceso remoto desde tu celular."
        ]
    },
    {
        nombre: "Sistema 360°",
        descripcion: "Monitoreo panorámico con alertas inteligentes en tu celular.",
        imagen: camara2,
        detalles: [
            "✅ Cobertura de 360° sin puntos ciegos.",
            "✅ Alertas en tiempo real a tu smartphone.",
            "✅ Compatible con Alexa y Google Assistant.",
            "✅ Detección de movimiento con seguimiento automático."
        ]
    },
    {
        nombre: "Cámara WiFi Inteligente",
        descripcion: "Accede desde cualquier parte del mundo con control total.",
        imagen: camara3,
        detalles: [
            "✅ Control total desde cualquier parte del mundo.",
            "✅ Grabación en la nube para máxima seguridad.",
            "✅ Audio bidireccional para comunicación en vivo.",
            "✅ Instalación fácil sin cables complicados."
        ]
    },
    {
        nombre: "Kit de Videovigilancia PRO",
        descripcion: "Conjunto de cámaras con grabación en la nube y detección avanzada.",
        imagen: camara4,
        detalles: [
            "✅ 4 cámaras de alta resolución con visión nocturna.",
            "✅ Grabación en la nube con almacenamiento seguro.",
            "✅ Resistente a la intemperie para exteriores.",
            "✅ Modo inteligente con alertas personalizadas."
        ]
    },
];

const Productos: React.FC = () => {
    return (
        <section className="productos">
            <div className="productos-container">
                <h2 className="productos-title">Soluciones en Seguridad</h2>
                <p className="productos-subtitle">Descubre nuestros sistemas de videovigilancia más avanzados.</p>

                {productos.map((producto, index) => (
                    <div key={index} className={`producto-item ${index % 2 === 0 ? 'invertido' : ''}`}>
                        <div className="producto-texto">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <ul className="producto-detalles">
                                {producto.detalles.map((detalle, i) => (
                                    <li key={i}>{detalle}</li>
                                ))}
                            </ul>
                            <button className="producto-boton">Más Información</button>
                        </div>
                        <div className="producto-imagen">
                            <img src={producto.imagen} alt={producto.nombre} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productos;
