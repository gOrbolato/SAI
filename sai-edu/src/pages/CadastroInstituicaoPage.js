import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroInstituicaoForm from "../components/CadastroInstituicaoForm";

function CadastroInstituicaoPage() {
  const handleCadastro = (data) => {
    console.log("Dados da instituição cadastrada:", data);
    // Enviar dados para o backend
  };

  return (
    <div>
      <Header />
      <main className="home-container">
        <h2>Painel do Usuário</h2>
        <h3>Cadastro de Instituição</h3>
        <section className="cadastro-container">
          <CadastroInstituicaoForm onSubmit={handleCadastro} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CadastroInstituicaoPage;