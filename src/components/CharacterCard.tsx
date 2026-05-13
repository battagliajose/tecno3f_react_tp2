import "../styles/character-card.css";
import type { Personaje } from "../types/personaje.Type";

interface CharacterCardProps {
  character: Personaje;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const imagenUrl = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;

  return (
    <div className="character-card">
      <div
        className="character-card-bg"
        style={{
          backgroundImage: `url(${imagenUrl})`,
        }}
      />

      <div className="back-overlay">
        <img className="character-image" src={imagenUrl} alt={character.name} />

        <div className="character-info">
          <h2>
            <b>Nombre:</b> {character.name}
          </h2>

          <h3>
            <b>Estado:</b> {character.status}
          </h3>

          <h3>
            <b>Especie:</b> {character.species}
          </h3>
        </div>
      </div>
    </div>
  );
}
