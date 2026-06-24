import { Link } from "react-router";
import "@styles/home.css";
import HomeImage from "@assets/Home.png";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a la página de inicio</h1>
      <p>Explora el catálogo de personajes de Rick and Morty.</p>
      <img className="home-image" src={HomeImage} alt="Home" />
      <Link to="/catalogo">Ir al catálogo</Link>
    </div>
  );
}
