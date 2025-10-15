import { Routes, Route } from "react-router-dom";
import "./App.css";
import Inicial from "./pages/inicial";
import Carrinho from "./pages/Carrinho";
import HeaderInicial from "./components/e-commerce/HeaderInicial";

function Layout() {
  return (
    <>
      <HeaderInicial />
      <Routes>
        <Route path="inicial" element={<Inicial />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </>
  );
}

export default Layout;
