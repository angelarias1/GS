import React, { createContext, useContext, useState, useEffect } from "react";
import { Producto } from "../types/Producto"; 

// 🔹 Interfaz para los elementos del carrito
interface CarritoItem extends Producto {
  cantidad: number;
}

// 🔹 Interfaz del contexto
interface CarritoContextProps {
  carrito: CarritoItem[];
  agregarAlCarrito: (producto: Producto, cantidad: number) => void;
  eliminarDelCarrito: (id: number) => void;
  actualizarCantidad: (id: number, nuevaCantidad: number) => void; // ✅ Nueva función
  vaciarCarrito: () => void;
}

// 🔹 Crear contexto
const CarritoContext = createContext<CarritoContextProps | undefined>(undefined);

export const CarritoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ✅ Recuperar carrito desde localStorage
  const [carrito, setCarrito] = useState<CarritoItem[]>(() => {
    try {
      const carritoGuardado = localStorage.getItem("carrito");
      return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    } catch (error) {
      console.error("Error cargando el carrito desde localStorage:", error);
      return [];
    }
  });

  // ✅ Guardar cambios en localStorage cada vez que el carrito se actualiza
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // ✅ Agregar productos al carrito
  const agregarAlCarrito = (producto: Producto, cantidad: number) => {
    console.log(`Intentando agregar:`, producto, `Cantidad:`, cantidad);

    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      let nuevoCarrito;
      if (existe) {
        nuevoCarrito = prevCarrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      } else {
        nuevoCarrito = [...prevCarrito, { ...producto, cantidad }];
      }

      console.log("Carrito actualizado:", nuevoCarrito);
      return nuevoCarrito;
    });
  };

  // ✅ Eliminar un producto del carrito
  const eliminarDelCarrito = (id: number) => {
    console.log(`Eliminando producto con ID: ${id}`);
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // ✅ Nueva función: Actualizar cantidad en el carrito
  const actualizarCantidad = (id: number, nuevaCantidad: number) => {
    console.log(`Actualizando cantidad del producto ID ${id} a ${nuevaCantidad}`);

    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      ).filter((item) => item.cantidad > 0) // ✅ Si la cantidad es 0, lo elimina automáticamente
    );
  };

  // ✅ Vaciar el carrito
  const vaciarCarrito = () => {
    console.log("Vaciando carrito");
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
  }
  return context;
};
