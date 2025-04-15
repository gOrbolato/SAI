import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DataVisualizacao from "../components/DataVisualizacao";
import VisualizacaoDadosForm from "../components/VisualizacaoDadosForm";

function VisualizacaoDadosPage() {
  const [instituicoes, setInstituicoes] = useState([]);

  // Simulação de requisição ao backend para buscar dados
  const fetchData = async (nomeInstituicao) => {
    try {
      const response = await fetch(`/api/instituicoes?nome=${nomeInstituicao}`);
      const data = await response.json();
      setInstituicoes(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleSearch = (nomeInstituicao) => {
    fetchData(nomeInstituicao);
  };

  return (
    <div>
      <Header />
      <main className="home-container">
        <section className="search-section">
          <VisualizacaoDadosForm onSearch={handleSearch} />
        </section>
        <DataVisualizacao data={instituicoes} />
      </main>
      <Footer />
    </div>
  );
}

export default VisualizacaoDadosPage;