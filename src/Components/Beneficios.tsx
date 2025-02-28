import React from "react";
import "../Styles/Clientes.css";

// Importa los logos de las empresas
import logo1 from '../assets/images/aguakan.webp';
import logo2 from '../assets/images/api.webp';
import logo3 from '../assets/images/dolfin.webp';
import logo4 from '../assets/images/barcelo.webp';
import logo5 from '../assets/images/cadu.webp';
import logo6 from '../assets/images/cfe.webp';
import logo7 from '../assets/images/ciudad.webp';
import logo8 from '../assets/images/cumbres.webp';
import logo9 from '../assets/images/lomas-.webp';
import logo10 from '../assets/images/walmart.webp';
import logo11 from '../assets/images/westin.webp';
import logo12 from '../assets/images/fair.webp';
import logo13 from '../assets/images/grand.webp';
import logo14 from '../assets/images/maroma.webp';
import logo15 from '../assets/images/xcaret.webp';
import logo16 from '../assets/images/yza.webp';

const logosFila1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const logosFila2 = [logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16];

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
            {logosFila1.concat(logosFila1).map((logo, index) => (
              <div key={index} className="clientes-slide">
                <img src={logo} alt={`Cliente ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila (movimiento a la izquierda) */}
        <div className="clientes-slider clientes-slider-izquierda">
          <div className="clientes-slide-track">
            {logosFila2.concat(logosFila2).map((logo, index) => (
              <div key={index} className="clientes-slide">
                <img src={logo} alt={`Cliente ${index + 9}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
