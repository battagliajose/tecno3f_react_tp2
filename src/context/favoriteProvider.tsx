import { useState } from "react";
import { favoriteContext } from "./favoriteContext";
import type { Personaje } from "@/interfaces/Personaje.Interface";

interface FavoriteProviderProps {
  children: React.ReactNode;
}

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<Personaje[]>([]);

  const toggleFavorite = (personaje: Personaje) => {
    setFavorites((prevFavorites) => {
      const yaEsFavorito = prevFavorites.some(
        (favorito) => favorito.id === personaje.id,
      );

      if (yaEsFavorito) {
        return prevFavorites.filter((favorito) => favorito.id !== personaje.id);
      }

      return [...prevFavorites, personaje];
    });
  };

  const isFavorite = (id: number) => {
    return favorites.some((personaje) => personaje.id === id);
  };

  return (
    <favoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
}
