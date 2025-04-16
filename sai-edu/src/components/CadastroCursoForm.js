import React, { useState } from "react";

function CadastroCursoForm({ instituicoes, onSubmit }) {
  const [nomeCurso, setNomeCurso] = useState("");
  const [instituicaoId, setInstituicaoId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Monta os dados no formato certo
    const dadosCurso = {
      nome: nomeCurso,
      instituicaoId: parseInt(instituicaoId) // importante ser número
    };

    onSubmit(dadosCurso);

    // Limpa o formulário
    setNomeCurso("");
    setInstituicaoId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nomeCurso">Nome do Curso:</label>
      <input
        type="text"
        id="nomeCurso"
        value={nomeCurso}
        onChange={(e) => setNomeCurso(e.target.value)}
        required
      />

      <label htmlFor="instituicao">Instituição:</label>
      <select
        id="instituicao"
        value={instituicaoId}
        onChange={(e) => setInstituicaoId(e.target.value)}
        required
      >
        <option value="">Selecione uma instituição</option>
        {instituicoes.map((inst) => (
          <option key={inst.id} value={inst.id}>
            {inst.nome}
          </option>
        ))}
      </select>

      <button type="submit">Cadastrar Curso</button>
    </form>
  );
}

export default CadastroCursoForm;