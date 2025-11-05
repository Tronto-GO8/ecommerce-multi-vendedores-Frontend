import { Routes, Route } from "react-router-dom";
import "./App.css";
import Inicial from "./pages/inicial";
import Carrinho from "./pages/Carrinho";
import HeaderInicial from "./components/e-commerce/HeaderInicial";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderInicial />
      <main className="flex-1">
        <Routes>
          <Route path="inicial" element={<Inicial />} />
          <Route path="carrinho" element={<Carrinho />} />
        </Routes>
      </main>
    </div>
  );
}

export default Layout;
