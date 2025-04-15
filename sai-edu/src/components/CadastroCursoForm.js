import React, { useState } from "react";

function CadastroCursoForm({ instituicoes, onSubmit }) {
  const [nomeCurso, setNomeCurso] = useState("");
  const [instituicaoSelecionada, setInstituicaoSelecionada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nomeCurso, instituicaoSelecionada });
    setNomeCurso("");
    setInstituicaoSelecionada("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="nome"
        placeholder="Digite o nome do curso"
        value={nomeCurso}
        onChange={(e) => setNomeCurso(e.target.value)}
        required
      />

      <label htmlFor="instituicao">Selecione a Instituição</label>
      <select
        id="instituicao"
        value={instituicaoSelecionada}
        onChange={(e) => setInstituicaoSelecionada(e.target.value)}
        required
      >
        <option value="">Escolha uma Instituição</option>
        {instituicoes.map((instituicao) => (
          <option key={instituicao} value={instituicao}>
            {instituicao}
          </option>
        ))}
      </select>

      <button type="submit">Cadastrar Curso</button>
    </form>
  );
}

export default CadastroCursoForm;