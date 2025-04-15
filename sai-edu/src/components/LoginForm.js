import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar dados para o backend
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });

      if (response.data.success) {
        // Redirecionar para a página inicial após o login bem-sucedido
        window.location.href = "/";
      } else {
        setErrorMessage("Email ou senha inválidos.");
      }
    } catch (error) {
      setErrorMessage("Erro ao realizar login. Tente novamente.");
    }
  };

  return (
    <section className="login-container">
      <h2>Login</h2>

      {/* Exibe mensagem de erro */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>

      <p className="signup">
        <a href="/recuperacao-senha">Esqueceu sua senha?</a>
      </p>
    </section>
  );
}

export default LoginForm;