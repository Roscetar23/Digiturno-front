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

export const createPerfil = async (perfilData) => {
  try {
    const response = await api.post("/auth/register", perfilData);
    console.log("Respuesta desde el servidor:", response.data);
    return response;
  } catch (error) {
    console.error("Error al enviar los datos:", error);
  }
};

export async function login(credentials) {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.message : "Error de conexión";
  }
}

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getLastTurn = async (turnType) => {
  try {
    const response = await api.get(`/turnos/lastTurn${turnType}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el último turno:", error);
    throw error;
  }
};

export const deleteTurn = async (turnType, turnId) => {
  try {
    const response = await api.delete(`/turnos/${turnType}/${turnId}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar el turno:", error);
    throw error;
  }
};
