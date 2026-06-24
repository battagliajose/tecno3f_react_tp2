import { useState } from "react";
import { favoriteContext } from "./favoriteContext";
import type { Personaje } from "@/interfaces/Personaje.Interface";

interface FavoriteProviderProps {
  children: React.ReactNode;
}

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (personaje: Personaje) => {
    if (favorites.includes(personaje.id)) {
      setFavorites(favorites.filter((id) => id !== personaje.id));
    } else {
      setFavorites([...favorites, personaje.id]);
    }
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
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
