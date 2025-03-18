import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Simulador from "./simulador";

const NSF: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "60px", minHeight: "calc(100vh - 120px)" }}>
        <Simulador />
      </main>
      <Footer />
    </>
  );
};

export default NSF;
