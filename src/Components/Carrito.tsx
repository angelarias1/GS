import React from "react";
import { FaTrash, FaPlus, FaMinus, FaFilePdf } from "react-icons/fa";
import Swal from "sweetalert2";
import { useCarrito } from "../context/CarritoContext";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "../styles/Carrito.css";

const Carrito: React.FC = () => {
  const { carrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito } = useCarrito();

  // ✅ Función para generar el PDF con confirmación
  const generarPDF = () => {
    Swal.fire({
      title: "¿Deseas descargar el PDF?",
      text: "Se generará un documento con el resumen del carrito.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, descargar PDF",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#007bff", // Azul
      cancelButtonColor: "#dc3545", // Rojo
    }).then((result) => {
      if (result.isConfirmed) {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.text("Resumen del Carrito", 14, 15);

        autoTable(doc, {
          startY: 25,
          head: [["Producto", "Descripción", "Cantidad"]],
          body: carrito.map((item) => [item.name, item.descripcion, item.cantidad]),
          theme: "striped",
          headStyles: { fillColor: [41, 128, 185] }, // Azul
          styles: { fontSize: 12 },
        });

        doc.save("Resumen_Carrito.pdf");

        Swal.fire({
          title: "PDF Descargado",
          text: "El PDF del carrito ha sido generado y descargado correctamente.",
          icon: "success",
          confirmButtonText: "Cerrar",
          confirmButtonColor: "#007bff", // Azul
        });
      }
    });
  };

  // ✅ Función para compartir el resumen del carrito en WhatsApp
  const compartirWhatsApp = () => {
    if (carrito.length === 0) {
      Swal.fire("Carrito vacío", "No hay productos para compartir.", "warning");
      return;
    }

    let mensaje = "*🛒 Resumen del Carrito:*\n\n";
    carrito.forEach((item, index) => {
      mensaje += `📌 *${index + 1}. ${item.name}*\n`;
      mensaje += `📄 ${item.descripcion}\n`;
      mensaje += `🔢 Cantidad: ${item.cantidad}\n\n`;
    });

    // Codificamos el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = "9981231741";
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp con el mensaje
    window.open(enlaceWhatsApp, "_blank");
  };

  // ✅ Confirmar vaciado del carrito
  const confirmarVaciarCarrito = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Todos los productos serán eliminados.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545", // Rojo
      cancelButtonColor: "#6c757d", // Gris
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Carrito vaciado", "Tu carrito ha sido vaciado correctamente.", "success");
      }
    });
  };

  // ✅ Confirmar eliminación de un producto individual
  const confirmarEliminarProducto = (id: number) => {
    Swal.fire({
      title: "¿Eliminar producto?",
      text: "Este producto será eliminado del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545", // Rojo
      cancelButtonColor: "#6c757d", // Gris
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarDelCarrito(id);
        Swal.fire("Producto eliminado", "El producto ha sido eliminado del carrito.", "success");
      }
    });
  };

  // ✅ Mostrar opciones de guardar PDF o compartir en WhatsApp
  const mostrarOpcionesGuardar = () => {
    Swal.fire({
      title: "Guardar o Compartir Carrito",
      text: "¿Qué deseas hacer con tu carrito?",
      icon: "info",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Generar PDF",
      denyButtonText: "Compartir en WhatsApp",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#007bff", // Azul
      denyButtonColor: "#25D366", // Verde
      cancelButtonColor: "#dc3545", // Rojo
    }).then((result) => {
      if (result.isConfirmed) {
        generarPDF();
      } else if (result.isDenied) {
        compartirWhatsApp();
      }
    });
  };

  return (
    <div className="simulador-container">
      <h2 className="title">Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p className="message">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="product-grid">
            {carrito.map((item) => (
              <div key={item.id} className="product-card">
                <span className="category-tag">{item.categoria}</span>
                <div className="product-image-container">
                  <img
                    src={`https://localhost:7288${item.imagenUrl}`}
                    alt={item.name}
                    className="product-image"
                    onError={(e) => { e.currentTarget.src = "/images/error.jpg"; }}
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">{item.descripcion}</p>
                </div>

                <div className="actions">
                  <button className="qty-button" onClick={() => actualizarCantidad(item.id, Math.max(item.cantidad - 1, 1))}>
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={item.cantidad}
                    min={1}
                    onChange={(e) => actualizarCantidad(item.id, Math.max(parseInt(e.target.value) || 1, 1))}
                  />
                  <button className="qty-button" onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>
                    <FaPlus />
                  </button>
                  <button className="delete-button" onClick={() => confirmarEliminarProducto(item.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button className="vaciar-button" onClick={confirmarVaciarCarrito}>
              Vaciar Carrito
            </button>
            <button className="guardar-button" onClick={mostrarOpcionesGuardar}>
              <FaFilePdf /> Guardar / Compartir
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
