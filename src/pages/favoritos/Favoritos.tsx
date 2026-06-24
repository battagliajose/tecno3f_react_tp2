import { favoriteContext } from "@/context/favoriteContext";
import MainContent from "../catalogo/componentes/MainContent";
import { useContext } from "react";
import CharacterGrid from "../catalogo/componentes/CharacterGrid";

export default function Favoritos() {
  const { favorites } = useContext(favoriteContext);

  return (
    <MainContent>
      <h1>Favoritos</h1>
      <CharacterGrid personajes={favorites} />
    </MainContent>
  );
}
