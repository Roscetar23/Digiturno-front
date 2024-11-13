import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // Verifica que esta URL sea la correcta (el puerto puede variar)
});

export const createTurn = async (turnData) => {
  try {
    const response = await api.post("/turnos", turnData);
    console.log("Respuesta desde el servidor:", response.data);
    return response;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
};
