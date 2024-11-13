// src/components/TurnForm.js
import { useForm } from "react-hook-form";
import { createTurn } from "../services/api";

export default function TurnForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await createTurn(data);
      console.log("Turno creado:", response.data);
      reset(); // Limpia el formulario después de enviar
    } catch (error) {
      console.error("Error al crear el turno:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Tipo de Documento</label>
      <select {...register("tipoDocumento")}>
        <option value="CC">CC</option>
        <option value="CE">CE</option>
        <option value="TI">TI</option>
        <option value="PA">PA</option>
      </select>

      <label>Número de Documento</label>
      <input
        {...register("numeroDocumento")}
        placeholder="Número de documento"
      />

      <label>Nombre</label>
      <input {...register("nombre")} placeholder="Nombre completo" />

      <label>Teléfono</label>
      <input {...register("telefono")} placeholder="Teléfono" />

      <label>Tipo de Turno</label>
      <select {...register("tipoConsulta")}>
        <option value="radicacion">Radicación</option>
        <option value="validacion">Validación</option>
      </select>

      <button type="submit">Enviar Turno</button>
    </form>
  );
}
