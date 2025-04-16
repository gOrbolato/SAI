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

  const handleInstituicaoSubmit = (data) => enviarAvaliacao("/api/avaliar-instituicao", data, "instituição");
  const handleCursoSubmit = (data) => enviarAvaliacao("/api/avaliar-curso", data, "curso");
  const handleMateriaSubmit = (data) => enviarAvaliacao("/api/avaliar-materia", data, "matéria");
  
  const enviarAvaliacao = async (url, data, nome) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert(`Avaliação de ${nome} enviada com sucesso!`);
      } else {
        alert(`Erro ao enviar avaliação de ${nome}.`);
      }
    } catch (error) {
      console.error(`Erro ao enviar avaliação de ${nome}:`, error);
    }
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