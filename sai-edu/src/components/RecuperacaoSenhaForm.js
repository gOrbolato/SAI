import React, { useState } from "react";
import axios from "axios";

function RecoveryForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/recuperar-senha", {
        email,
      });

      if (response.data.success) {
        setMessage("Instruções de recuperação enviadas para seu email.");
        setEmail("");
      } else {
        setError("Email não encontrado.");
      }
    } catch (err) {
      setError("Erro ao enviar recuperação. Tente novamente mais tarde.");
    }
  };

  return (
    <section className="recovery-container">
      <h2>Recuperar Senha</h2>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

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
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default RecoveryForm;