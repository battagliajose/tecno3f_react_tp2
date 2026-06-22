import { useEffect, useState } from "react";
import { api } from "../../../API/http";
import CharacterGrid from "./CharacterGrid";
import "@styles/main.css";
import Finder from "./Finder";
import Pagination from "./Pagination";
import type { Personaje } from "@interfaces/Personaje.Interface";

export default function MainContent() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [pagina, setPagina] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [busqueda, setBusqueda] = useState<string>("");

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

  return (
    <main className="main-content">
      <div className="main-background" />
      <div className="main-overlay">
        <Pagination
          pagina={pagina}
          totalPaginas={totalPaginas}
          setPagina={setPagina}
        />
        <Finder setBusqueda={setBusqueda} setPagina={setPagina} />
        <CharacterGrid personajes={personajes} />
        <Pagination
          pagina={pagina}
          totalPaginas={totalPaginas}
          setPagina={setPagina}
        />
      </div>
    </main>
  );
}
