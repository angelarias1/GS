// Footer.tsx
import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Inspirado en Vincent van Gogh</h2>
        <p className="footer-text">
          Un homenaje a la vida y el arte de Van Gogh.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterestP />
          </a>
        </div>
      </div>
      <p className="footer-credits">© 2024 Inspirado en Van Gogh. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
