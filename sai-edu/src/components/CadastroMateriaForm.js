import React, { useState, useEffect } from "react";

function CadastroMateriaForm({ onSubmit }) {
  const [periodo, setPeriodo] = useState("");
  const [nomeMateria, setNomeMateria] = useState("");
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [cursos, setCursos] = useState([]);

  // Simulação de requisição ao backend para buscar cursos
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch("/api/cursos");
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      }
    };

    fetchCursos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ periodo, nomeMateria, cursoSelecionado });
    setPeriodo("");
    setNomeMateria("");
    setCursoSelecionado("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="periodo"
        placeholder="Digite o período"
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value)}
        required
      />

      <input
        type="text"
        id="nome"
        placeholder="Digite o nome da matéria"
        value={nomeMateria}
        onChange={(e) => setNomeMateria(e.target.value)}
        required
      />

      <label htmlFor="cursos">Selecione o Curso</label>
      <select
        id="cursos"
        value={cursoSelecionado}
        onChange={(e) => setCursoSelecionado(e.target.value)}
        required
      >
        <option value="">Escolha um Curso</option>
        {cursos.map((curso) => (
          <option key={curso} value={curso}>
            {curso}
          </option>
        ))}
      </select>

      <button type="submit">Cadastrar Matéria</button>
    </form>
  );
}

export default CadastroMateriaForm;