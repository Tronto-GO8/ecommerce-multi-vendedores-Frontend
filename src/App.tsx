import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/loginCadastro/Header";
import Cadastrar from "./pages/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import RedefinirSenha from "./pages/RedefinirSenha";
import AuthCallback from "./pages/AuthCallback";
import Inicial from "./pages/inicial"
import Assistencia from "./pages/AssistenciaAoProduto";
import PainelDeControle from "./pages/AreaAdministrativa";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assistencia" element={<Assistencia/>} />
        <Route path="/" element={<Inicial />} />
        <Route path="*" element={<Inicial />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/PainelDeControle" element={<PainelDeControle />} />
        {/* <Route path="*" element={<RedefinirSenha />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
