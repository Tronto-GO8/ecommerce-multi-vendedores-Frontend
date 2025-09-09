import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/loginCadastro/Header";
import Cadastrar from "./pages/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import RedefinirSenha from "./pages/RedefinirSenha";
import Inicial from "./pages/inicial";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/cadastro" element={<Cadastrar />} /> */}
        {/* <Route path="*" element={<RedefinirSenha />} /> */}
        <Route path="*" element={<Inicial />} />
      </Routes>
    </Router>
  );
}

export default App;
