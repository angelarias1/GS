import React from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Beneficios from './Components/Beneficios';
import Soluciones from './Components/Soluciones';
import Testimonios from './Components/Testimonios';
import CTA from './Components/CTA';
import FAQ from './Components/FAQ';
import Productos from './Components/Productos';
import Sectores from './Components/Sectores';
import Clientes from './Components/Clientes';



const App: React.FC = () => {
    return (
        <div>
            <Hero /> 
            <Beneficios />
            <Soluciones />
            <Productos />
            <CTA />
            <Sectores />
            <Clientes />
            <Testimonios />
            <FAQ />
            <Footer/>


        </div>
    );
};

export default App;
