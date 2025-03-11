import React from 'react';
import '../Styles/Productos.css';

// Imágenes de las cámaras (Asegúrate de tener las imágenes correctas)
import interiores from '../assets/images/interores.png';
import exteriores from '../assets/images/exteriores.png';
import movimiento from '../assets/images/movimiento.png';
import wifi from '../assets/images/wifi.png';
import ojopez from '../assets/images/ojo de pez.png';
import visionnocturna from '../assets/images/nocturnas.png';

const productos = [
    {
        nombre: "Cámaras para Interiores",
        descripcion: "Diseñadas para brindar seguridad en espacios cerrados como casas, oficinas y negocios. Son compactas, discretas y ofrecen imágenes nítidas para monitorear cada detalle sin alterar la estética del lugar.",
        imagen: interiores,
        detalles: [
            "✅ Diseño discreto y compacto.",
            "✅ Imágenes en alta definición.",
            "✅ Fácil instalación en techos y paredes.",
            "✅ Monitoreo en tiempo real desde dispositivos móviles.",
        ]
    },
    {
        nombre: "Cámaras para Exteriores",
        descripcion: "Resistentes a la intemperie y con visión de amplio alcance. Ideales para patios, estacionamientos y entradas. Capturan imágenes en alta calidad incluso bajo condiciones climáticas adversas.",
        imagen: exteriores,
        detalles: [
            "✅ Protección contra lluvia, polvo y sol.",
            "✅ Visión de largo alcance en exteriores.",
            "✅ Opciones con detección de movimiento.",
            "✅ Ideal para entradas, patios y estacionamientos.",
        ]
    },
    {
        nombre: "Cámaras con Movimiento PTZ",
        descripcion: "Controla el ángulo de visión y el zoom a distancia. Perfectas para monitorear grandes áreas con un solo equipo, permitiendo seguir personas u objetos en tiempo real y eliminando puntos ciegos.",
        imagen: movimiento,
        detalles: [
            "✅ Movimiento horizontal y vertical con zoom.",
            "✅ Seguimiento automático de objetos en movimiento.",
            "✅ Ideal para vigilar grandes espacios.",
            "✅ Compatible con sistemas de seguridad avanzados.",
        ]
    },
    {
        nombre: "Cámaras WiFi",
        descripcion: "Conéctalas sin cables y accede a las imágenes desde tu celular en cualquier momento. Son fáciles de instalar y permiten un monitoreo remoto sin complicaciones, ideal para hogares y negocios en expansión.",
        imagen: wifi,
        detalles: [
            "✅ Conexión sin cables para mayor flexibilidad.",
            "✅ Acceso en tiempo real desde dispositivos móviles.",
            "✅ Instalación sencilla sin necesidad de técnicos.",
            "✅ Opciones con batería recargable y almacenamiento en la nube.",
        ]
    },
    {
        nombre: "Cámaras Panoramicas",
        descripcion: "Captura una vista panorámica de 360° con una sola cámara. Su lente especial cubre áreas amplias sin necesidad de múltiples dispositivos, ideal para tiendas, oficinas y espacios abiertos.",
        imagen: ojopez,
        detalles: [
            "✅ Visión de 360° sin puntos ciegos.",
            "✅ Reduce la cantidad de cámaras necesarias en un área.",
            "✅ Monitoreo en tiempo real y grabaciones en alta definición.",
            "✅ Compatible con aplicaciones móviles para visualización remota.",
        ]
    },
    {
        nombre: "Cámaras con Visión Nocturna",
        descripcion: "Seguridad garantizada las 24 horas con imágenes claras incluso en total oscuridad. Su tecnología de infrarrojos permite detectar movimientos y personas sin necesidad de luz.",
        imagen: visionnocturna,
        detalles: [
            "✅ Captura imágenes claras incluso en total oscuridad.",
            "✅ Tecnología de infrarrojos para mejor visibilidad nocturna.",
            "✅ Detección de movimiento para alertas automáticas.",
            "✅ Ideal para vigilancia nocturna en interiores y exteriores.",
        ]
    },
];

const Productos: React.FC = () => {
    return (
        <section className="productos" id="productos">
            <div className="productos-container" aria-label="Lista de cámaras">
                <h2 className="productos-title">CÁMARAS DE SEGURIDAD PARA CADA NECESIDAD</h2>
                <p className="productos-subtitle">Contamos con soluciones diseñadas para adaptarse a tu entorno, con tecnología de videovigilancia que se ajusta a cada necesidad y espacio.</p>

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
            </div>
        </section>
    );
};

export default Productos;
