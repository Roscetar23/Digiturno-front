// src/components/CreatePerfilForm.js
import { useForm } from "react-hook-form";
import { createPerfil } from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePerfilForm() {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createPerfil(data);
      setMessage("Usuario creado exitosamente");
      setError(null);
      console.log("Perfil creado:", response.data);
      reset();

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(null);
      setError("Error al crear el perfil. Intenta de nuevo.");
      console.error("Error al crear el perfil:", error);
    }
  };

  return (
    <div>
      <h2>Crear Perfil</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input {...register("name")} placeholder="Nombre completo" required />

        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="Correo electrónico"
          required
        />

        <label>Contraseña</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Contraseña"
          required
        />

        <button type="submit">Crear Perfil</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
