import { Link } from "react-router";
import "@styles/nav-bar.css";
import { useContext } from "react";
import { favoriteContext } from "@/context/favoriteContext";

export default function CustomNavBar() {
  const { favorites } = useContext(favoriteContext);

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-links">
        <Link className="custom-navbar-link" to="/">
          Inicio
        </Link>
        <Link className="custom-navbar-link" to="/catalogo">
          Catálogo
        </Link>
        <Link className="custom-navbar-link" to="/favoritos">
          Favoritos
        </Link>
        <Link className="custom-navbar-link" to="/contacto">
          Contacto
        </Link>
      </div>
      <span className="custom-navbar-favorites">
        Favoritos: {favorites.length}
      </span>
    </nav>
  );
}
