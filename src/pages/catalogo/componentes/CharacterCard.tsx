import { useNavigate } from "react-router";
import type { Personaje } from "@interfaces/Personaje.Interface";
import "@styles/character-card.css";

interface CharacterCardProps {
  character: Personaje;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();
  const imagenUrl = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;

  return (
    <div
      className="character-card"
      onClick={() => navigate(`/detalle/${character.id}`)}
    >
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
