import "@styles/reset.css";
import "@styles/normalize.css";
import "@styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Catalogo from "./pages/catalogo/Catalogo";
import Detalle from "./pages/detalle/Detalle";
import Contacto from "./pages/contacto/Contacto";
import FavoriteProvider from "./context/favoriteProvider";
import MainLayout from "./layout/mainLayout";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    /*Agregar Layout con Header, Navbar y Footer*/
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
