import MainContent from "./componentes/MainContent";
import { useContext } from "react";
import { favoriteContext } from "@/context/favoriteContext";

export default function Catalogo() {
  const { favorites } = useContext(favoriteContext);

  return (
    <>
      <h1>Favoritos: {favorites.length}</h1>
      <MainContent />
    </>
  );
}
