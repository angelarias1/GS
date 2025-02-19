import React, { useState } from 'react';
import '../Styles/FAQ.css';

const faqs = [
    {
        pregunta: "¿Puedo monitorear las cámaras desde mi celular?",
        respuesta: "Sí, nuestras cámaras de videovigilancia permiten acceso remoto desde cualquier dispositivo con conexión a internet.",
    },
    {
        pregunta: "¿Qué sucede si detecto un movimiento sospechoso?",
        respuesta: "Nuestras cámaras con inteligencia artificial envían alertas en tiempo real para que puedas actuar de inmediato.",
    },
    {
        pregunta: "¿La instalación tiene garantía?",
        respuesta: "Sí, ofrecemos garantía tanto en los equipos como en la instalación, asegurando un servicio de calidad.",
    },
    {
        pregunta: "¿Cómo sé qué sistema de videovigilancia necesito?",
        respuesta: "Nuestro equipo de expertos te asesora de manera personalizada para elegir el sistema que mejor se adapte a tus necesidades.",
    },
    {
        pregunta: "¿Ofrecen financiamiento?",
        respuesta: "Sí, contamos con opciones de pago flexibles para que puedas adquirir tu sistema de videovigilancia sin preocupaciones.",
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <div className="faq-container">
                <h2 className="faq-title">Preguntas Frecuentes</h2>
                <p className="faq-subtitle">Resolvemos tus dudas para que tomes la mejor decisión en seguridad.</p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
                            <div className="faq-question">
                                <h3>{faq.pregunta}</h3>
                                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.respuesta}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
