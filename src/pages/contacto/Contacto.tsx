import { useForm } from "react-hook-form";
import "@styles/contacto.css";

export default function Contacto() {
  interface ContactoProps {
    nombre: string;
    email: string;
    mensaje: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactoProps>();

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      <p>Si tienes alguna pregunta o comentario, no dudes en contactarnos.</p>
      <form
        className="contacto-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <div className="contacto-form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            {...register("nombre", { required: "Ingresa tu nombre" })}
          />
          {errors.nombre && (
            <span className="spanError">{errors.nombre.message}</span>
          )}
        </div>
        <div className="contacto-form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Ingresa tu email" })}
          />
          {errors.email && (
            <span className="spanError">{errors.email.message}</span>
          )}
        </div>
        <div className="contacto-form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            {...register("mensaje", { required: "Ingresa tu mensaje" })}
          />
          {errors.mensaje && (
            <span className="spanError">{errors.mensaje.message}</span>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
