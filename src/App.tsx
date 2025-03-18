import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Beneficios from "./Components/Beneficios";
import Testimonios from "./Components/Testimonios";
import CTA from "./Components/CTA";
import FAQ from "./Components/FAQ";
import Productos from "./Components/Productos";
import Sectores from "./Components/Sectores";
import Clientes from "./Components/Clientes";
import Estadisticas from "./Components/Estadisticas";
import BotonWhatsApp from "./Components/BotonWhatsApp";
import Partners from "./Components/Partners";
import CheckList from "./Components/CheckList";
import SyD from "./Components/SyD";
import Simulador from "./Components/simulador";
import Diagnostico from "./Components/Diagnostico";
import NDF from "./Components/NDF";
import NSF from "./Components/NSF";
import Carrito from "./Components/Carrito"; // ✅ Importamos el carrito
import NCF from "./Components/NCF";

const App: React.FC = () => {
  return (
    <Router>
      <BotonWhatsApp />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <Hero />
              </header>
              <main>
                <section id="beneficios">
                  <Beneficios />
                </section>
                <section id="sectores">
                  <Sectores />
                </section>
                <section id="productos">
                  <Productos />
                </section>
                <section id="partners">
                  <Partners />
                </section>
                <section id="cta">
                  <CTA />
                </section>
                <section id="estadisticas">
                  <Estadisticas />
                </section>
                <section id="clientes">
                  <Clientes />
                </section>
                <section id="testimonios">
                  <Testimonios />
                </section>
                <CheckList />
                <section id="SyD">
                  <SyD />
                </section>
                <section id="faq">
                  <FAQ />
                </section>
              </main>
              <footer id="contacto">
                <Footer />
              </footer>
            </>
          }
        />

        {/* 🔹 NUEVAS RUTAS */}
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/ndf" element={<NDF />} />
        <Route path="/nsf" element={<NSF />} />
        <Route path="/ncf" element={<NCF />} />

        <Route path="/carrito" element={<Carrito />} /> {/* ✅ Ruta del carrito */}
      </Routes>
    </Router>
  );
};

export default App;
