import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CarritoProvider } from "./context/CarritoContext"; // ✅ Importa el proveedor del carrito
import "./index.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el DOM");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CarritoProvider> {/* ✅ Envolver toda la aplicación con el proveedor */}
      <App />
    </CarritoProvider>
  </StrictMode>
);
