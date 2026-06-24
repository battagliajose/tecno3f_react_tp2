import { api } from "@/API/http";
import type { Personaje } from "@/interfaces/Personaje.Interface";
import { useEffect, useState } from "react";

/*
Falta manejar loading y error, especialmente porque la petición puede fallar.
Al buscar, conviene reiniciar pagina a 1 (parece que Finder ya recibe setPagina para hacerlo).
Opcionalmente, cancelar la petición previa para evitar resultados desactualizados al escribir rápido.
*/

export default function usePersonaje() {
  const [personaje, setPersonaje] = useState<Personaje | null>(null);
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    const obtenerPersonaje = async (): Promise<void> => {
      const response = await api.get(`/character/${id}`);
      setPersonaje(response.data);
    };
    obtenerPersonaje();
  }, [id]);

  return {
    personaje,
    setId,
  };
}
