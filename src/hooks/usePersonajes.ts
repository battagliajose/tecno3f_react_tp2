import { api } from "@/API/http";
import type { Personaje } from "@/interfaces/Personaje.Interface";
import { useEffect, useState } from "react";

export default function usePersonajes() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [busqueda, setBusqueda] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // ver useCallback para sacar funcion fuera de useEffect
  useEffect(() => {
    const obtenerPersonajes = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(
          `/character/?page=${pagina}&name=${busqueda}`,
        );
        setPersonajes(response.data.results);
        setTotalPaginas(response.data.info.pages);
      } catch (err) {
        setError("Error al obtener los personajes - " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    obtenerPersonajes();
  }, [pagina, busqueda]);

  return {
    personajes,
    pagina,
    setPagina,
    totalPaginas,
    busqueda,
    setBusqueda,
    loading,
    error,
  };
}
