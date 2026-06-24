import { Link } from "react-router";
import "@styles/notFound.css";
import notFoundImage from "@assets/404.png";

export default function NotFound() {
  return (
    <div className="notFound-container">
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <img className="notFound-image" src={notFoundImage} alt="404 Not Found" />
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
}
