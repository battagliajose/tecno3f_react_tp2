import { useState } from "react";
import "@styles/finder.css";

interface FinderProps {
  setBusqueda: React.Dispatch<React.SetStateAction<string>>;
  setPagina: React.Dispatch<React.SetStateAction<number>>;
}

export default function Finder({ setBusqueda, setPagina }: FinderProps) {
  const [inputValue, setInputValue] = useState("");

  const handlerBuscar = () => {
    setBusqueda(inputValue);
    setPagina(1);
  };

  const handlerLimpiar = () => {
    setInputValue("");
    setBusqueda("");
    setPagina(1);
  };

  const handlerTeclado = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlerBuscar();
    }
    if (e.key === "Escape") {
      handlerLimpiar();
    }
  };

  return (
    <div className="finder" onKeyDown={handlerTeclado}>
      <input
        type="text"
        placeholder="Busca un personaje..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && (
        <button className="clear-button" onClick={handlerLimpiar}>
          X
        </button>
      )}
      <button className="search-button" onClick={handlerBuscar}>
        Buscar
      </button>
    </div>
  );
}
