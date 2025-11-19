import React from "react";
import "../login.css";

export default function Login() {
  return (
    <div className="background-container">
      <header className="logo">
        <span className="logo-text">Synergia</span>
      </header>

      <div className="login-card-container">
        <div className="login-card">
          <h1 className="card-title">LOGIN</h1>

          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="input-group">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" name="senha" />
            </div>

            <a href="EsqueciSenha.jsx" className="forgot-password">
              Esqueceu a senha?
            </a>

            <button type="submit" className="btn btn-login">
              Entrar
            </button>
          </form>

          <p className="register-text">
            Sem{" "}
            <a href="Cadastro" className="register-link-highlight">
              Cadastro
            </a>
            ? Venha mudar o mundo conosco.
          </p>

          <a href="Cadastro" className="btn btn-register">
            Cadastre-se
          </a>
        </div>
      </div>
    </div>
  );
}
