import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/loginCadastro/Header'
import Cadastrar from './pages/Cadastro'
import EsqueceuSenha from './pages/EsqueceuSenha'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/esqueceusenha" element={<EsqueceuSenha />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/cadastro" element={<Cadastrar />} />
      </Routes>

    </Router>
  )
}

export default App
