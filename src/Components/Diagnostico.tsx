import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { jsPDF } from "jspdf";

// 🔹 Categorías disponibles
const categorias = [
  { id: "camaras", nombre: "Cámaras de Seguridad" },
  { id: "alarmas", nombre: "Sistemas de Alarma" },
  { id: "controles", nombre: "Controles de Acceso" },
  { id: "domotica", nombre: "Automatización/Domótica" },
];

// 🔹 Preguntas dinámicas por categoría
const preguntasPorCategoria: { [key: string]: { pregunta: string; opciones?: string[] }[] } = {
  camaras: [
    { pregunta: "¿Qué área necesitas vigilar?", opciones: ["Interior", "Exterior"] },
    { pregunta: "¿Requieres visión nocturna?", opciones: ["Sí", "No"] },
    { pregunta: "¿Cuántas cámaras necesitas aproximadamente?" },
    { pregunta: "¿Deseas acceso remoto desde tu celular?", opciones: ["Sí", "No"] },
    { pregunta: "¿Qué resolución prefieres?", opciones: ["720p", "1080p", "4K"] },
    { pregunta: "¿Necesitas grabación continua?", opciones: ["Sí", "No"] },
  ],
  alarmas: [
    { pregunta: "¿Quieres una alarma sonora o con notificación móvil?", opciones: ["Sonora", "Notificación móvil"] },
    { pregunta: "¿Necesitas sensores de movimiento o apertura de puertas?", opciones: ["Movimiento", "Apertura de puertas"] },
    { pregunta: "¿Quieres que la alarma esté conectada a una central de monitoreo?", opciones: ["Sí", "No"] },
    { pregunta: "¿Tienes mascotas en casa?", opciones: ["Sí", "No"] },
  ],
};

const Diagnostico: React.FC = () => {
  const [categoria, setCategoria] = useState<string>("");
  const [respuestas, setRespuestas] = useState<{ [key: number]: string }>({});

  const handleCategoriaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(event.target.value);
    setRespuestas({});
  };

  const handleRespuestaChange = (index: number, value: string) => {
    setRespuestas((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const totalPreguntas = preguntasPorCategoria[categoria]?.length || 0;
    const totalRespuestas = Object.keys(respuestas).length;

    if (totalRespuestas < totalPreguntas) {
      Swal.fire({
        icon: "warning",
        title: "Faltan respuestas",
        text: "Por favor responde todas las preguntas antes de continuar.",
      });
      return;
    }

    Swal.fire({
      title: "Diagnóstico Completado",
      text: "¿Qué deseas hacer con tu diagnóstico?",
      icon: "success",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Generar PDF",
      denyButtonText: "Compartir en WhatsApp",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#007bff", // Azul
      denyButtonColor: "#28a745", // Verde
      cancelButtonColor: "#dc3545", // Rojo
    }).then(async (result) => {
      if (result.isConfirmed) {
        await generarPDF();
      } else if (result.isDenied) {
        compartirWhatsApp();
      }
    });
  };

  // 📌 Función para generar PDF
  const generarPDF = async () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Diagnóstico Personalizado", 20, 20);
    doc.setFontSize(12);

    let respuestasTexto = "";
    let y = 40;
    preguntasPorCategoria[categoria].forEach((pregunta, index) => {
      const respuesta = respuestas[index] || "No respondido";
      respuestasTexto += `${pregunta.pregunta}: ${respuesta}\n`;
      doc.text(`${pregunta.pregunta}: ${respuesta}`, 20, y);
      y += 10;
    });

    doc.save("diagnostico.pdf");

    Swal.fire("📄 PDF Guardado", "Tu diagnóstico ha sido guardado.", "success");
  };

  // 📌 Función para compartir en WhatsApp
  const compartirWhatsApp = () => {
    const numeroWhatsApp = "9981231741";
    const mensaje = encodeURIComponent(
      `📋 *Diagnóstico Personalizado:*\n\n` +
        preguntasPorCategoria[categoria]
          .map((pregunta, index) => `✅ *${pregunta.pregunta}:* ${respuestas[index] || "No respondido"}`)
          .join("\n") +
        `\n\n🔍 Podemos ayudarte a encontrar la mejor solución. Contáctanos!`
    );
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank");
  };

  return (
    <Container>
      <Card>
        <Title>Diagnóstico Personalizado</Title>
        <Subtitle>Responde todas las preguntas para encontrar la mejor solución.</Subtitle>

        <SelectContainer>
          <Label>Selecciona una categoría:</Label>
          <Select value={categoria} onChange={handleCategoriaChange}>
            <option value="">-- Selecciona una opción --</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </Select>
        </SelectContainer>

        {categoria && (
          <FormContainer onSubmit={handleSubmit}>
            {preguntasPorCategoria[categoria]?.map((pregunta, index) => (
              <Pregunta key={index}>
                <Label>{pregunta.pregunta}</Label>
                {pregunta.opciones ? (
                  <OpcionesContainer>
                    {pregunta.opciones.map((opcion, idx) => (
                      <CheckboxContainer key={idx}>
                        <input
                          type="radio"
                          name={`pregunta-${index}`}
                          value={opcion}
                          onChange={(e) => handleRespuestaChange(index, e.target.value)}
                        />
                        <span>{opcion}</span>
                      </CheckboxContainer>
                    ))}
                  </OpcionesContainer>
                ) : (
                  <Input
                    type="text"
                    placeholder="Tu respuesta..."
                    value={respuestas[index] || ""}
                    onChange={(e) => handleRespuestaChange(index, e.target.value)}
                  />
                )}
              </Pregunta>
            ))}
            <SubmitButton type="submit">Guardar Diagnóstico</SubmitButton>
          </FormContainer>
        )}
      </Card>
    </Container>
  );
};

export default Diagnostico;

// 📌 Estilos con Styled-Components
const Container = styled.section`
  padding: 40px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const SelectContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const Pregunta = styled.div`
  margin-bottom: 20px;
`;

const OpcionesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

const SubmitButton = styled.button`
  background: #28a745;
  padding: 12px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
`;
