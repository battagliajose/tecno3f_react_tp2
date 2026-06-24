import { useNavigate } from "react-router";
import type { Personaje } from "@interfaces/Personaje.Interface";
import "@styles/character-card.css";
import heartFilled from "@assets/heart-full.png";
import heartEmpty from "@assets/heart-transp.png";
import { favoriteContext } from "@/context/favoriteContext";
import { useContext } from "react";

interface CharacterCardProps {
  character: Personaje;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const { isFavorite, toggleFavorite } = useContext(favoriteContext);
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
        <img
          className="heart-icon"
          src={isFavorite(character.id) ? heartFilled : heartEmpty}
          alt="Favorito"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(character);
          }}
        />{" "}
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
