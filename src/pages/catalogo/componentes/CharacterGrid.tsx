import type { Personaje } from "@interfaces/Personaje.Interface";
import CharacterCard from "./CharacterCard";
import "@styles/character-grid.css";

interface CharacterGridProps {
  personajes: Personaje[];
}

export default function CharacterGrid({ personajes }: CharacterGridProps) {
  return (
    <div className="character-grid">
      {personajes.map((personaje) => (
        <CharacterCard key={personaje.id} character={personaje} />
      ))}
    </div>
  );
}
