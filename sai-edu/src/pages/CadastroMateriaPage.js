import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroMateriaForm from "../components/CadastroMateriaForm";

function CadastroMateriaPage() {
  const handleCadastro = (data) => {
    console.log("Dados da matéria cadastrada:", data);
    // Enviar dados para o backend
  };

  return (
    <div>
      <Header />
      <main className="home-container">
        <h2>Painel do Usuário</h2>
        <h3>Cadastro de Matéria</h3>
        <section className="cadastro-container">
          <CadastroMateriaForm onSubmit={handleCadastro} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CadastroMateriaPage;