import React from 'react';
import Header from './Components/Header';
import SeccionQuien from './Components/SeccionQuien';
import SeccionCarrusel from './Components/SeccionCarrusel';
import SeccionInspiracion from './Components/SeccionInspiracion';
import SeccionTarjetas from './Components/SeccionTarjetas';
import Footer from './Components/Footer';


const App: React.FC = () => {
    return (
        <div>
            <Header />
            <SeccionQuien />
            <SeccionCarrusel />
            <SeccionInspiracion />
            <SeccionTarjetas />
            <Footer />

        </div>
    );
};

export default App;
