import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroCursoForm from "../components/CadastroCursoForm";

function CadastroCursoPage() {
  const [instituicoes, setInstituicoes] = useState([]);

  // Função para buscar instituições do backend
  useEffect(() => {
    const fetchInstituicoes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/instituicoes");
        const data = await response.json();
        setInstituicoes(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar instituições:", error);
      }
    };

    fetchInstituicoes();
  }, []); // Executa apenas uma vez quando o componente é montado

  const handleCadastro = async(data) => {
    try {
      const response = await fetch("http://localhost:5000/api/cursos", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        alert("Curso cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar curso.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar curso:", error);
      alert("Erro no servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div>
      <Header />
      <main className="home-container">
        <h2>Painel do Usuário</h2>
        <h3>Cadastro de Curso</h3>
        <section className="cadastro-container">
          {/* Passa as instituições como prop para o formulário */}
          <CadastroCursoForm instituicoes={instituicoes} onSubmit={handleCadastro} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CadastroCursoPage;