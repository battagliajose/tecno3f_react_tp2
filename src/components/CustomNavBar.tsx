import { Link } from "react-router";
import "@styles/nav-bar.css";

export default function CustomNavBar() {
  return (
    <nav className="custom-navbar">
      <Link className="custom-navbar-link" to="/">
        Inicio
      </Link>
      <Link className="custom-navbar-link" to="/catalogo">
        Catálogo
      </Link>
      <Link className="custom-navbar-link" to="/contacto">
        Contacto
      </Link>
    </nav>
  );
}
