import React from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Beneficios from './Components/Beneficios';
import Testimonios from './Components/Testimonios';
import CTA from './Components/CTA';
import FAQ from './Components/FAQ';
import Productos from './Components/Productos';
import Sectores from './Components/Sectores';
import Clientes from './Components/Clientes';
import Estadisticas from './Components/Estadisticas';
import BotonWhatsApp from "./Components/BotonWhatsApp";
import Partners from './Components/Partners';
// import Soluciones from './Components/Soluciones'; // Opcional

const App: React.FC = () => {
    return (
        <>
            <BotonWhatsApp />
            <header>
                <Hero /> 
            </header>
            
            <main>
                <section id="beneficios"><Beneficios /></section>
                <section id="sectores"><Sectores /></section>
                <section id="clientes"><Clientes /></section>
                {/* <section id="soluciones"><Soluciones /></section> */}
                <section id="productos"><Productos /></section>
                <section id="cta"><CTA /></section>
                <section id="estadisticas"><Estadisticas /></section>
                <section id="testimonios"><Testimonios /></section>
                <section id="partners"><Partners /></section>
                <section id="faq"><FAQ /></section>
            </main>

            <footer id="contacto">
                <Footer />
            </footer>
        </>
    );
};

export default App;
