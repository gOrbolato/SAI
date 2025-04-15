import React, { useState } from "react";

function CadastroInstituicaoForm({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, cidade, estado });
    setNome("");
    setCidade("");
    setEstado("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome da Instituição</label>
      <input
        type="text"
        id="nome"
        placeholder="Digite o nome da instituição"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />

      <label htmlFor="cidade">Selecione a Cidade</label>
      <input
        type="text"
        id="cidade"
        placeholder="Digite a cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        required
      />
      <label htmlFor="estado">Selecione o Estado</label>
      <input
        type="text"
        id="estado"
        placeholder="Digite o estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        required
      />

      <button type="submit">Cadastrar Instituição</button>
    </form>
  );
}

export default CadastroInstituicaoForm;