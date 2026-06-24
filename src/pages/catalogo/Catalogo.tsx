import CharacterGrid from "./componentes/CharacterGrid";
import "@styles/main.css";
import Finder from "./componentes/Finder";
import Pagination from "./componentes/Pagination";
import usePersonajes from "@hooks/usePersonajes";
import MainContent from "./componentes/MainContent";

export default function Catalogo() {
  const {
    personajes,
    pagina,
    totalPaginas,
    setPagina,
    setBusqueda,
    loading,
    error,
  } = usePersonajes();

  if (loading) {
    return (
      <MainContent>
        <h2>Cargando...</h2>
      </MainContent>
    );
  }

  if (error) {
    return (
      <MainContent>
        <h2>Error al cargar los personajes</h2>
      </MainContent>
    );
  }

  return (
    <MainContent>
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
    </MainContent>
  );
}
