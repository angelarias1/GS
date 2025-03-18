import React from "react";
import Navbar from "./Navbar";
import Diagnostico from "./Diagnostico";
import Footer from "./Footer";

const NDF: React.FC = () => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "60px", minHeight: "calc(100vh - 120px)" }}>
        <Diagnostico />
      </main>
      <Footer />
    </>
  );
};

export default NDF;
