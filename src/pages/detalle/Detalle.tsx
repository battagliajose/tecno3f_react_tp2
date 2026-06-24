import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import CharacterCard from "../catalogo/componentes/CharacterCard";
import usePersonaje from "@/hooks/usePersonaje";

/*
En el detalle reutilizás CharacterCard, que al hacer clic intenta navegar otra vez a /detalle/:id. 
No rompe, pero esa tarjeta debería recibir una prop para desactivar la navegación o mostrarse como componente solo visual.
Para accesibilidad, la tarjeta navegable debería ser un <Link> o un <button>, en vez de un <div onClick>.
*/
export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { personaje, setId } = usePersonaje();

  useEffect(() => {
    if (id) {
      setId(parseInt(id));
    }
  }, [id, setId]);

  if (!personaje) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1>Detalle del personaje</h1>
      {personaje && (
        <>
          <CharacterCard key={personaje.id} character={personaje} />{" "}
        </>
      )}
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
}
