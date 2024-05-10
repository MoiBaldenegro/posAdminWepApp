import { Route, Routes } from "react-router-dom";

// elements
import ProductosYPrecios from "../components/main/catalogo/productosYPrecios/productosYPrecios";
import Categorias from "../components/main/catalogo/categorias/categorias";
import Complementos from "../components/main/catalogo/complementos/complementos";
import Modificaciones from "../components/main/catalogo/modificaciones/modificaciones";
import MenusYRecetas from "../components/main/catalogo/menusYRecetas/menusYRecetas";

export default function CatalogoRouter() {
  return (
    <Routes>
      <Route path="products&prices" element={<ProductosYPrecios />} />
      <Route path="categories" element={<Categorias />} />
      <Route path="dishes" element={<Complementos />} />
      <Route path="modifications" element={<Modificaciones />} />
      <Route path="menus&recipes" element={<MenusYRecetas />} />
    </Routes>
  );
}