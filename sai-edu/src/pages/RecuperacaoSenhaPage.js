import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecoveryForm from "../components/RecuperacaoSenhaForm";

function RecuperacaoSenhaPage() {
  const handleRecovery = (email) => {
    console.log("Email para recuperação:", email);
    // Enviar dados para o backend
  };

  return (
    <div>
      <Header />
      <main className="recovery-container">
        <h2>Recuperação de Senha</h2>
        <p>
          Informe seu e-mail cadastrado para que possamos enviar as instruções
          de recuperação de senha.
        </p>
        <RecoveryForm onSubmit={handleRecovery} />
        <p className="back">
          <a href="/login">Voltar para Login</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default RecuperacaoSenhaPage;