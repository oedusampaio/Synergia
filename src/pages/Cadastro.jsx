import React from "react";
import "../cadastro.css";
import { useNavigate, Link } from 'react-router-dom';

export default function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você colocaria a chamada ao backend para criar o usuário.
    // Após sucesso, redirecione para a tela de login.
    navigate('/login');
  };

  return (
    <div className="background-container">
      <header className="logo">
        <span className="logo-text">Synergia</span>
      </header>

      <div className="cadastro-card-container">
        <div className="cadastro-card">
          <h1 className="card-title">CADASTRE - SE</h1>

          <form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
              />
            </div>

            <div className="input-group">
              <label htmlFor="data_nascimento">Data</label>
              <input type="date" id="data_nascimento" name="data_nascimento" />
            </div>

            <div className="input-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" />
            </div>

            <div className="input-group">
              <label htmlFor="confirma_senha">Confirme</label>
              <input
                type="password"
                id="confirma_senha"
                name="confirma_senha"
                placeholder="Confirme a senha"
              />
            </div>

            <button type="submit" className="btn btn-register-final">
              Cadastre-se
            </button>
            <p className="cadastro-text">
  Já possui conta?  Faça {" "}
  <Link to="/login" className="register-link-highlight">Login</Link>.
</p>
</form>


        </div>
      </div>
    </div>
  );
}
