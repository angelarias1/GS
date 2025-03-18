import React from "react";
import Navbar from "./Navbar";
import Carrito from "./Carrito";
import Footer from "./Footer";

const NCF: React.FC = () => {
  return (
    <>
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      <main style={{ marginTop: "80px", paddingBottom: "80px", minHeight: "calc(100vh - 160px)" }}>
        <Carrito />
      </main>

      {/* Footer en la parte inferior */}
      <Footer />
    </>
  );
};

export default NCF;
