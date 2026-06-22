import { Link } from "react-router";
import CustomFooter from "@components/CustomFooter";
import CustomHeader from "@components/CustomHeader";

export default function Home() {
  return (
    <>
      <CustomHeader />
      <h1>Bienvenido a la página de inicio</h1>
      <p>Explora el catálogo de personajes de Rick and Morty.</p>
      <Link to="/catalogo">Ir al catálogo</Link>
      <CustomFooter />
    </>
  );
}
