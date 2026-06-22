import "@styles/reset.css";
import "@styles/normalize.css";
import "@styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Catalogo from "./pages/catalogo/Catalogo";
import Detalle from "./pages/detalle/Detalle";
import Contacto from "./pages/contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
