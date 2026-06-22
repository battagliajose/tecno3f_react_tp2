import { useNavigate, useParams } from "react-router";

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Detalle del personaje</h1>
      <p>
        Aquí se mostrará la información detallada del personaje seleccionado.
      </p>
      <p>ID del personaje: {id}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
}
