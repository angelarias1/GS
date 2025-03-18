import React, { useEffect, useState } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { useCarrito } from "../context/CarritoContext";
import "../styles/Simulador.css";

// 🔹 Interfaz de productos
interface Producto {
  id: number;
  name: string;
  descripcion: string;
  categoria: string;
  imagenUrl: string;
}

// 🔹 Categorías disponibles
const categorias = ["Todas", "Cámaras", "Alarmas", "Sensores", "Domótica"];

const Simulador: React.FC = () => {
  const { agregarAlCarrito, carrito } = useCarrito();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://localhost:7288/api/Productos");
        if (!response.ok) throw new Error("Error al obtener los productos");

        let data = await response.json();

        data = data.map((producto: any) => ({
          ...producto,
          name: producto.nombre ?? "Producto sin nombre",
        }));

        setProductos(data);
        setQuantities(
          data.reduce((acc: { [key: number]: number }, item: Producto) => {
            acc[item.id] = 1;
            return acc;
          }, {})
        );
      } catch (error) {
        console.error("Error al obtener los productos:", error);
        setError(error instanceof Error ? error.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  const productosFiltrados =
    categoriaSeleccionada === "Todas"
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada);

  return (
    <div className="simulador-container">
      {loading && <p className="message">Cargando productos...</p>}
      {error && <p className="message error">Error: {error}</p>}

      {/* 🔹 Contenedor del filtro y carrito */}
      <div className="header-container">
        {/* 🔹 Selector de categorías */}
        <div className="filter-container">
          <label htmlFor="categoria">Filtrar por categoría:</label>
          <select
            id="categoria"
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 Botón del carrito */}
        <button className="cart-button" onClick={() => window.location.href = "/ncf"}>
          <FaShoppingCart /> Carrito <span className="cart-count">{carrito.length}</span>
        </button>
      </div>

      {/* 🔹 Grid de productos */}
      <div className="product-grid">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="product-card">
            <span className="category-tag">{producto.categoria}</span>
            <div className="product-image-container">
              <img
                src={`https://localhost:7288${producto.imagenUrl}`}
                alt={producto.name}
                className="product-image"
                onError={(e) => {
                  e.currentTarget.src = "/images/error.jpg";
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{producto.name}</h3>
              <p className="product-description">{producto.descripcion}</p>
            </div>
            <div className="actions">
              <span className="qty-label">QTY</span>
              <input
                type="number"
                className="quantity-input"
                value={quantities[producto.id] || 1}
                min={1}
                onChange={(e) => {
                  setQuantities({ ...quantities, [producto.id]: parseInt(e.target.value) || 1 });
                }}
              />
              <button
                className="add-button"
                onClick={() => {
                  agregarAlCarrito(producto, quantities[producto.id]);
                }}
              >
                <FaPlus /> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Simulador;
