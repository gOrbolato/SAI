import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EvaluationForm from "../components/EvaluationForm";

function AvaliacaoPage() {
  const [instituicoes, setInstituicoes] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [materias, setMaterias] = useState([]);

  // Simulação de requisição ao backend para buscar dados
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const instituicoesResponse = await fetch("/api/instituicoes");
        const cursosResponse = await fetch("/api/cursos");
        const materiasResponse = await fetch("/api/materias");

        const instituicoesData = await instituicoesResponse.json();
        const cursosData = await cursosResponse.json();
        const materiasData = await materiasResponse.json();

        setInstituicoes(instituicoesData);
        setCursos(cursosData);
        setMaterias(materiasData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleInstituicaoSubmit = (data) => {
    console.log("Avaliação de Instituição:", data);
    // Enviar dados para o backend
  };

  const handleCursoSubmit = (data) => {
    console.log("Avaliação de Curso:", data);
    // Enviar dados para o backend
  };

  const handleMateriaSubmit = (data) => {
    console.log("Avaliação de Matéria:", data);
    // Enviar dados para o backend
  };

  return (
    <div>
      <Header />
      <main className="home-container">
        <h2>Avaliações</h2>

        <section className="avaliacao-container">
          <EvaluationForm
            title="Instituição"
            options={instituicoes}
            onSubmit={handleInstituicaoSubmit}
          />

          <EvaluationForm
            title="Curso"
            options={cursos}
            onSubmit={handleCursoSubmit}
          />

          <EvaluationForm
            title="Matéria"
            options={materias}
            onSubmit={handleMateriaSubmit}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AvaliacaoPage;