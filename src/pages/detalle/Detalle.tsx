import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import CharacterCard from "../catalogo/componentes/CharacterCard";
import usePersonaje from "@/hooks/usePersonaje";

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { personaje, setId, loading, error } = usePersonaje();

  useEffect(() => {
    if (id) {
      setId(parseInt(id));
    }
  }, [id, setId]);

  if (loading || personaje?.id !== Number(id)) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Detalle del personaje</h1>
      {personaje && (
        <>
          <CharacterCard
            key={personaje.id}
            character={personaje}
            detalle={true}
          />{" "}
        </>
      )}
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
}
