import React, { useState } from "react";
import Swal from "sweetalert2";
import "../Styles/CheckList.css";

const preguntas = [
  { pregunta: "¿Tienes cámaras de seguridad instaladas en tu propiedad?", opciones: ["Sí, en todos los accesos.", "Solo en algunas áreas.", "No tengo cámaras."] },
  { pregunta: "¿Cuentas con sensores de movimiento en áreas clave?", opciones: ["Sí, en interiores.", "Sí, en exteriores.", "No tengo sensores."] },
  { pregunta: "¿Puedes monitorear tu propiedad en tiempo real desde tu celular?", opciones: ["Sí, en todo momento.", "Solo cuando estoy en casa.", "No puedo hacerlo."] },
  { pregunta: "¿Tu sistema de seguridad te alerta en caso de movimiento sospechoso?", opciones: ["Sí, recibo notificaciones en tiempo real.", "Solo reviso las grabaciones.", "No tengo alertas."] },
  { pregunta: "¿Tienes cámaras con visión nocturna para vigilar en la oscuridad?", opciones: ["Sí, funcionan de noche.", "No, dependen de la iluminación.", "No tengo cámaras."] },
  { pregunta: "¿Cuentas con respaldo de grabaciones en la nube?", opciones: ["Sí, todo queda almacenado.", "Solo guardo en una memoria interna.", "No tengo almacenamiento."] },
  { pregunta: "¿Tu equipo de seguridad tiene batería de respaldo en caso de apagón?", opciones: ["Sí, sigue funcionando sin electricidad.", "No, se apaga con cortes de luz.", "No sé si tiene respaldo."] },
  { pregunta: "¿Has realizado mantenimiento reciente a tu sistema de seguridad?", opciones: ["Sí, cada cierto tiempo.", "Hace mucho que no lo reviso.", "Nunca he dado mantenimiento."] },
  { pregunta: "¿Las cámaras de tu propiedad tienen un ángulo de cobertura amplio?", opciones: ["Sí, cubren toda la zona.", "Hay puntos ciegos.", "No sé qué tan amplio es el ángulo."] },
  { pregunta: "¿Cuentas con un sistema de seguridad para entrada y salida de visitantes?", opciones: ["Sí, tengo control de accesos.", "Solo tengo cámaras.", "No tengo control de accesos."] },
];

const CheckList: React.FC = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<string[]>([]);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;

  const manejarSeleccion = (respuesta: string) => {
    setRespuestaSeleccionada(respuesta);
    setError(false);
  };

  const manejarSiguiente = () => {
    if (!respuestaSeleccionada) {
      setError(true);
      return;
    }

    setRespuestas([...respuestas, respuestaSeleccionada]);
    setRespuestaSeleccionada(null);
    setError(false);

    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      Swal.fire({
        title: "¡Evaluación completada!",
        text: "Gracias por completar la evaluación. Si necesitas mejorar tu seguridad, nuestro equipo puede asesorarte.",
        icon: "success",
        confirmButtonText: "Solicitar asesoría",
      });
    }
  };

  return (
    <section className="checklist">
      <h2>Evalúa la Seguridad de Tu Propiedad</h2>
      <p>Responde estas preguntas rápidas para conocer qué tan protegida está tu propiedad y qué mejoras puedes realizar.</p>

      <div className="barra-progreso">
        <div className="progreso" style={{ width: `${progreso}%` }}></div>
      </div>

      <div className="pregunta">
        <h3>{preguntas[preguntaActual].pregunta}</h3>
        {preguntas[preguntaActual].opciones.map((opcion, index) => (
          <button 
            key={index} 
            className={`opcion ${respuestaSeleccionada === opcion ? "seleccionada" : ""}`} 
            onClick={() => manejarSeleccion(opcion)}
          >
            {opcion}
          </button>
        ))}
        {error && <p className="mensaje-error">Por favor, selecciona una opción antes de continuar.</p>}
      </div>

      <button className="boton-siguiente" onClick={manejarSiguiente} disabled={!respuestaSeleccionada}>
        {preguntaActual < preguntas.length - 1 ? "Siguiente" : "Finalizar"}
      </button>
    </section>
  );
};

export default CheckList;
