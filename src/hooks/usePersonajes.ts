import { api } from "@/API/http";
import type { Personaje } from "@/interfaces/Personaje.Interface";
import { useEffect, useState } from "react";

/*
Falta manejar loading y error, especialmente porque la petición puede fallar.
Al buscar, conviene reiniciar pagina a 1 (parece que Finder ya recibe setPagina para hacerlo).
Opcionalmente, cancelar la petición previa para evitar resultados desactualizados al escribir rápido.
*/

export default function usePersonajes() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [busqueda, setBusqueda] = useState<string>("");

  // ver useCallback para sacar funcion fuera de useEffect
  useEffect(() => {
    const obtenerPersonajes = async (): Promise<void> => {
      const response = await api.get(
        `/character/?page=${pagina}&name=${busqueda}`,
      );
      setPersonajes(response.data.results);
      setTotalPaginas(response.data.info.pages);
    };
    obtenerPersonajes();
  }, [pagina, busqueda]);

  return {
    personajes,
    pagina,
    totalPaginas,
    busqueda,
    setPagina,
    setBusqueda,
  };
}
