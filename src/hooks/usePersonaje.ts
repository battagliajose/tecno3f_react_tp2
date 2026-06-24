import { api } from "@API/http";
import type { Personaje } from "@interfaces/Personaje.Interface";
import { useEffect, useState } from "react";

export default function usePersonaje() {
  const [personaje, setPersonaje] = useState<Personaje | null>(null);
  const [id, setId] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerPersonaje = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/character/${id}`);
        setPersonaje(response.data);
      } catch (err) {
        setError("Error al obtener el personaje - " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    obtenerPersonaje();
  }, [id]);

  return {
    personaje,
    setId,
    loading,
    error,
  };
}
