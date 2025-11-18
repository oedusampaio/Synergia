import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Contato from "./pages/Contato.jsx";
import AddLocation from "./pages/AddLocation.jsx";
import AddTool from "./pages/AddTool.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import EsqueciSenha from "./pages/EsqueciSenha.jsx";
import Ferramentas from "./pages/Ferramentas.jsx";
import InscricaoDetalhe from "./pages/InscricaoDetalhe.jsx";
import Inscricoes from "./pages/Inscricoes.jsx";
import Locais from "./pages/Locais.jsx";
import Login from "./pages/Login.jsx";
import Perfil from "./pages/Perfil.jsx";
import Projetos from "./pages/Projetos.jsx";
import SuperAdminDashboard from "./pages/SuperAdminDashboard.jsx";

function App() {
  return (
    <Routes>
      {/* Página Inicial */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      
      {/* Autenticação */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
      
      {/* Contato */}
      <Route path="/contato" element={<Contato />} />
      
      {/* Dashboard e Administração */}
      <Route path="/super-admin" element={<SuperAdminDashboard />} />
      
      {/* Gestão de Locais */}
      <Route path="/locais" element={<Locais />} />
      <Route path="/add-location" element={<AddLocation />} />
      
      {/* Gestão de Ferramentas */}
      <Route path="/ferramentas" element={<Ferramentas />} />
      <Route path="/add-tool" element={<AddTool />} />
      
      {/* Projetos */}
      <Route path="/projetos" element={<Projetos />} />
      
      {/* Inscrições */}
      <Route path="/inscricoes" element={<Inscricoes />} />
      <Route path="/inscricao-detalhe" element={<InscricaoDetalhe />} />
      
      {/* Perfil do Usuário */}
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
}

export default App;