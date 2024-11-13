import { useState, useEffect } from "react";
import axios from "axios";

export default function TurnList() {
  const [radicacionTurns, setRadicacionTurns] = useState([]);
  const [validacionTurns, setValidacionTurns] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/turnos/radicacion")
      .then((response) => {
        setRadicacionTurns(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los turnos de radicación:", error);
      });

    axios
      .get("http://localhost:4000/turnos/validacion")
      .then((response) => {
        setValidacionTurns(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los turnos de validación:", error);
      });
  }, []);

  return (
    <div>
      <h2>Turnos de Radicación</h2>
      <ul>
        {radicacionTurns.map((turno) => (
          <li key={turno.id}>
            {turno.nombre} - {turno.tipoDocumento} - {turno.numeroDocumento}
          </li>
        ))}
      </ul>

      <h2>Turnos de Validación</h2>
      <ul>
        {validacionTurns.map((turno) => (
          <li key={turno.id}>
            {turno.nombre} - {turno.tipoDocumento} - {turno.numeroDocumento}
          </li>
        ))}
      </ul>
    </div>
  );
}
