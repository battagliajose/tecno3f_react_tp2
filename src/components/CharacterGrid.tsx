import CharacterCard from "./CharacterCard";
import "../styles/character-grid.css";
import type { Personaje } from "../types/personaje.Type";

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
