import { api } from "@/API/http";
import type { Personaje } from "@/interfaces/Personaje.Interface";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CharacterCard from "../catalogo/componentes/CharacterCard";

/*
En el detalle reutilizás CharacterCard, que al hacer clic intenta navegar otra vez a /detalle/:id. 
No rompe, pero esa tarjeta debería recibir una prop para desactivar la navegación o mostrarse como componente solo visual.
Para accesibilidad, la tarjeta navegable debería ser un <Link> o un <button>, en vez de un <div onClick>.
*/
export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [personaje, setPersonaje] = useState<Personaje | null>(null);

  useEffect(() => {
    const obtenerPersonaje = async (): Promise<void> => {
      const response = await api.get(`/character/${id}`);
      setPersonaje(response.data);
    };
    obtenerPersonaje();
  }, [id]);

  return (
    <>
      <h1>Detalle del personaje</h1>
      {personaje && (
        <>
          <CharacterCard key={personaje.id} character={personaje} />{" "}
          <p>{personaje.episode.join(", ")}</p>
        </>
      )}
      <button onClick={() => navigate(-1)}>Volver</button>
    </>
  );
}
