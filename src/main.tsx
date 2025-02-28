import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // ✅ Reagregado
import App from './App.tsx';

// ✅ Asegura que el elemento root existe antes de renderizar
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el DOM");
}

const root = createRoot(rootElement);

// ✅ Usa `hydrateRoot` si usas SSR, o `createRoot` si es CSR
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
