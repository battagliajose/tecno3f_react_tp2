import "../styles/pagination.css";

interface PaginationProps {
  pagina: number;
  totalPaginas: number;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  pagina,
  totalPaginas,
  setPagina,
}: PaginationProps) {
  const rango = 2;

  const inicio = Math.max(1, pagina - rango);
  const fin = Math.min(totalPaginas, pagina + rango);

  const paginas = [];

  for (let i = inicio; i <= fin; i++) {
    paginas.push(i);
  }

  return (
    <>
      <div className="pagination">
        <button className="pagination-button" onClick={() => setPagina(1)}>
          {"<<"}
        </button>
        <button
          className="pagination-button"
          onClick={() => setPagina((prev) => Math.max(prev - 1, 1))}
        >
          {"<"}
        </button>
        <div className="pagination-numbers">
          {paginas.map((numeroPagina) => (
            <button
              key={numeroPagina}
              onClick={() => setPagina(numeroPagina)}
              className={numeroPagina === pagina ? "active" : ""}
            >
              {numeroPagina}
            </button>
          ))}
        </div>
        <button
          className="pagination-button"
          onClick={() => setPagina((prev) => Math.min(prev + 1, totalPaginas))}
        >
          {">"}
        </button>
        <button
          className="pagination-button"
          onClick={() => setPagina(totalPaginas)}
        >
          {">>"}
        </button>
      </div>
    </>
  );
}
