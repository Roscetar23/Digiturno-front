import React, { useState } from "react";
import { getLastTurn, deleteTurn } from "../services/api";

export default function TakeTurn() {
  const [turno, setTurno] = useState(null);
  const [error, setError] = useState(null);

  const handleTakeTurn = async (turnType) => {
    try {
      const data = await getLastTurn(
        turnType === "radicacion" ? "Radication" : "Validation"
      );
      setTurno(data);
    } catch (err) {
      setError("Error al obtener el turno");
    }
  };

  const handleFinishTurn = async (turnType) => {
    if (!turno) return;
    try {
      await deleteTurn(
        turnType === "radicacion" ? "radicacion" : "validacion",
        turno._id
      );
      setTurno(null);
    } catch (err) {
      setError("Error al terminar el turno");
    }
  };

  return (
    <div className="atencion-turno">
      <h2>Atender Turno</h2>
      {error && <p className="error-message">{error}</p>}
      {turno ? (
        <div>
          <p>Turno ID: {turno.id}</p>
          <p>Nombre: {turno.nombre}</p>
          <p>Tipo de Consulta: {turno.tipoConsulta}</p>
          <button onClick={handleFinishTurn}>Terminar Turno</button>
        </div>
      ) : (
        <button onClick={handleTakeTurn}>Atender Siguiente Turno</button>
      )}
    </div>
  );
}
