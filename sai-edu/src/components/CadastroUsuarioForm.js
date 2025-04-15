import React, { useState } from "react";

function CadastroUsuarioForm({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [ra, setRa] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [curso, setCurso] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (password !== passwordConfirm) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    onSubmit({
      nome,
      id,
      email,
      ra,
      instituicao,
      cidade,
      estado,
      curso,
      periodo,
      password,
    });

    // Limpa os campos após o envio
    setNome("");
    setId("");
    setEmail("");
    setRa("");
    setInstituicao("");
    setCidade("");
    setEstado("");
    setCurso("");
    setPeriodo("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <input
        type="text"
        id="id"
        placeholder="Digite seu ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />

      <input
        type="email"
        id="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        id="ra"
        placeholder="Digite seu RA"
        value={ra}
        onChange={(e) => setRa(e.target.value)}
        required
      />

      <input
        type="text"
        id="instituicao"
        placeholder="Digite o nome da instituição"
        value={instituicao}
        onChange={(e) => setInstituicao(e.target.value)}
        required
      />

      <input
        type="text"
        id="cidade"
        placeholder="Digite a cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        required
      />

      <input
        type="text"
        id="estado"
        placeholder="Digite o seu estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        required
      />

      <input
        type="text"
        id="curso"
        placeholder="Digite seu curso"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        required
      />

      {/* Seleção de período */}
      <label htmlFor="periodo">Selecione o período:</label>
      <div className="periodo-container">
        <label className="periodo-option">
          <input
            type="radio"
            name="periodo"
            value="diurno"
            checked={periodo === "diurno"}
            onChange={() => setPeriodo("diurno")}
            required
          />
          <span className="periodo-dot"></span> Diurno
        </label>

        <label className="periodo-option">
          <input
            type="radio"
            name="periodo"
            value="noturno"
            checked={periodo === "noturno"}
            onChange={() => setPeriodo("noturno")}
            required
          />
          <span className="periodo-dot"></span> Noturno
        </label>
      </div>

      {/* Senha e confirmação de senha */}
      <input
        type="password"
        id="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        type="password"
        id="passwordConfirm"
        placeholder="Confirme a sua senha"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroUsuarioForm;