import React from "react";
import "../Styles/Clientes.css";

// Importar logos con nombres correctos para SEO
import logoAguakan from '../assets/images/aguakan.webp';
import logoAPI from '../assets/images/api.webp';
import logoDolfin from '../assets/images/dolfin.webp';
import logoBarcelo from '../assets/images/barcelo.webp';
import logoCadu from '../assets/images/cadu.webp';
import logoCFE from '../assets/images/cfe.webp';
import logoCiudad from '../assets/images/ciudad.webp';
import logoCumbres from '../assets/images/cumbres.webp';
import logoLomas from '../assets/images/lomas-.webp';
import logoWalmart from '../assets/images/walmart.webp';
import logoWestin from '../assets/images/westin.webp';
import logoFairmont from '../assets/images/fair.webp';
import logoGrand from '../assets/images/grand.webp';
import logoMaroma from '../assets/images/maroma.webp';
import logoXcaret from '../assets/images/xcaret.webp';
import logoYza from '../assets/images/yza.webp';

// Logos divididos en dos filas
const logosFila1 = [
    { src: logoAguakan, nombre: "Aguakan" },
    { src: logoAPI, nombre: "API Quintana Roo" },
    { src: logoDolfin, nombre: "Dolfin Discovery" },
    { src: logoBarcelo, nombre: "Barceló Hotels" },
    { src: logoCadu, nombre: "CADU Inmobiliaria" },
    { src: logoCFE, nombre: "CFE" },
    { src: logoCiudad, nombre: "Ciudad Mayakoba" },
    { src: logoCumbres, nombre: "Cumbres Cancún" },
];

const logosFila2 = [
    { src: logoLomas, nombre: "Lomas Travel" },
    { src: logoWalmart, nombre: "Walmart México" },
    { src: logoWestin, nombre: "Westin Hotels" },
    { src: logoFairmont, nombre: "Fairmont Mayakoba" },
    { src: logoGrand, nombre: "Grand Velas Riviera Maya" },
    { src: logoMaroma, nombre: "Maroma Beach Resort" },
    { src: logoXcaret, nombre: "Xcaret" },
    { src: logoYza, nombre: "Farmacias Yza" }
];

const Clientes: React.FC = () => {
  return (
    <section className="clientes" id="clientes">
      <div className="clientes-container">
        <h2 className="clientes-title">Nuestros Clientes Satisfechos</h2>
        <p className="clientes-subtitle">
          Empresas que confían en nuestra tecnología para su seguridad.
        </p>

        {/* Primera fila (movimiento a la derecha) */}
        <div className="clientes-slider clientes-slider-derecha">
          <div className="clientes-slide-track">
            {[...logosFila1, ...logosFila1].map((logo, index) => (
              <div key={`fila1-${index}`} className="clientes-slide">
                <img src={logo.src} alt={`Cliente: ${logo.nombre}`} loading="lazy" aria-hidden={index >= logosFila1.length ? "true" : "false"} />
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila (movimiento a la izquierda) */}
        <div className="clientes-slider clientes-slider-izquierda">
          <div className="clientes-slide-track">
            {[...logosFila2, ...logosFila2].map((logo, index) => (
              <div key={`fila2-${index}`} className="clientes-slide">
                <img src={logo.src} alt={`Cliente: ${logo.nombre}`} loading="lazy" aria-hidden={index >= logosFila2.length ? "true" : "false"} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
