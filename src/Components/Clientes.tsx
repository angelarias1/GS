import React from "react";
import "../Styles/Clientes.css";

// Importa los logos de las empresas
import logo1 from '../assets/images/imagen.jpg';
import logo2 from '../assets/images/imagen.jpg';
import logo3 from '../assets/images/imagen.jpg';
import logo4 from '../assets/images/imagen.jpg';
import logo5 from '../assets/images/imagen.jpg';
import logo6 from '../assets/images/imagen.jpg';
import logo7 from '../assets/images/imagen.jpg';
import logo8 from '../assets/images/imagen.jpg';
import logo9 from '../assets/images/imagen.jpg';
import logo10 from '../assets/images/imagen.jpg';


const logosFila1 = [logo1, logo2, logo3, logo4, logo5];
const logosFila2 = [logo6, logo7, logo8, logo9, logo10];

const Clientes: React.FC = () => {
  return (
    <section className="clientes">
      <div className="clientes-container">
        <h2 className="clientes-title">Nuestros Clientes Satisfechos</h2>
        <p className="clientes-subtitle">
          Empresas que confían en nuestra tecnología para su seguridad.
        </p>

        {/* Primera fila (derecha) */}
        <div className="clientes-slider clientes-slider-derecha">
          <div className="clientes-slide-track">
            {logosFila1.concat(logosFila1).map((logo, index) => (
              <div key={index} className="clientes-slide">
                <img src={logo} alt={`Cliente ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila (izquierda) */}
        <div className="clientes-slider clientes-slider-izquierda">
          <div className="clientes-slide-track">
            {logosFila2.concat(logosFila2).map((logo, index) => (
              <div key={index} className="clientes-slide">
                <img src={logo} alt={`Cliente ${index + 6}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
