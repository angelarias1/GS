import React from "react";
import "../Styles/Partners.css";

// Importa los logos de los partners tecnológicos
import partner1 from '../assets/images/aliend.webp';
import partner2 from '../assets/images/altai.webp';
import partner3 from '../assets/images/cambium.webp';
import partner4 from '../assets/images/came.webp';
import partner5 from '../assets/images/charofil.webp';
import partner6 from '../assets/images/faac.webp';
import partner7 from '../assets/images/fanvil.webp';
import partner8 from '../assets/images/fiberhome.webp';
import partner9 from '../assets/images/grandstream.webp';
import partner11 from '../assets/images/hid.webp';
import partner12 from '../assets/images/hikvision.webp';
import partner13 from '../assets/images/idemia.webp';
import partner14 from '../assets/images/kenwood.webp';
import partner15 from '../assets/images/lutron.webp';
import partner16 from '../assets/images/mimosa.webp';
import partner17 from '../assets/images/panduit.webp';
import partner18 from '../assets/images/planet.webp';
import partner19 from '../assets/images/resideo.webp';
import partner20 from '../assets/images/rosslare.webp';
import partner21 from '../assets/images/suprema.webp';
import partner22 from '../assets/images/tp-link.webp';
import partner23 from '../assets/images/ubiquiti.webp';
import partner24 from '../assets/images/zkteco.webp';

const partnersFila1 = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner11, partner12];
const partnersFila2 = [partner13, partner14, partner15, partner16, partner17, partner18, partner19, partner20, partner21, partner22, partner23, partner24];

const Partners: React.FC = () => {
  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <h2 className="partners-title">Partners Tecnológicos</h2>
        <p className="partners-subtitle">
          Colaboramos con los líderes en tecnología para ofrecerte la mejor seguridad.
        </p>

        {/* Primera fila (movimiento a la derecha) */}
        <div className="partners-slider partners-slider-derecha">
          <div className="partners-slide-track">
            {partnersFila1.concat(partnersFila1).map((logo, index) => (
              <div key={index} className="partners-slide">
                <img src={logo} alt={`Partner ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila (movimiento a la izquierda) */}
        <div className="partners-slider partners-slider-izquierda">
          <div className="partners-slide-track">
            {partnersFila2.concat(partnersFila2).map((logo, index) => (
              <div key={index} className="partners-slide">
                <img src={logo} alt={`Partner ${index + 13}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
