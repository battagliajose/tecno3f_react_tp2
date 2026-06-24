import type { Personaje } from "@/interfaces/Personaje.Interface";
import { createContext } from "react";

interface FavoriteContextType {
  favorites: number[];
  toggleFavorite: (personaje: Personaje) => void;
  isFavorite: (id: number) => boolean;
}

export const favoriteContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType,
);
