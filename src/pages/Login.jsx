import React from "react";
import "../login.css";
import { Link } from 'react-router-dom';

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

            <Link to="/esqueci-senha" className="forgot-password">
              Esqueceu a senha?
            </Link>

            <button type="submit" className="btn btn-login">
              Entrar
            </button>
          </form>
          <p className="register-text">
            Sem {" "}
            <Link to="/cadastro" className="register-link-highlight">
              Cadastro
            </Link>
            ? Venha mudar o mundo conosco.
          </p>

          <Link to="/cadastro" className="btn btn-register">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
