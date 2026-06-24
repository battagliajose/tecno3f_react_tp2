import CharacterGrid from "./CharacterGrid";
import "@styles/main.css";
import Finder from "./Finder";
import Pagination from "./Pagination";
import usePersonajes from "@hooks/usePersonajes";

export default function MainContent() {
  const { personajes, pagina, totalPaginas, setPagina, setBusqueda } =
    usePersonajes();

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
