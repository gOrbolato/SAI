import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CadastroUsuarioForm from "../components/CadastroUsuarioForm";

function CadastroUsuarioPage() {
  const handleCadastro = (data) => {
    console.log("Dados do usuário cadastrado:", data);
    // Enviar dados para o backend
  };

  return (
    <div>
      <Header />
      <main className="cadastro-container">
        <h2>Cadastro de Usuário</h2>
        <CadastroUsuarioForm onSubmit={handleCadastro} />
        <p className="login-link">
          Já possui uma conta? <a href="/login">Faça login</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default CadastroUsuarioPage;