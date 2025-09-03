import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/loginCadastro/Header";
import Cadastrar from "./pages/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Login from "./pages/Login";
import RedefinirSenha from "./pages/RedefinirSenha";
import AuthCallback from "./pages/AuthCallback";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/cadastro" element={<Cadastrar />} />
        <Route path="/auth/callback" element={<Cadastrar />} />
        {/* <Route path="*" element={<RedefinirSenha />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
