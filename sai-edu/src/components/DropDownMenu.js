import React from "react";

function DropdownMenu() {
  return (
    <div className="dropdown">
      <p><a href="#">Aluno</a></p>
      <div className="dropdown-content">
        <a href="/perfil">Perfil</a>
        <a href="/configuracoes">Configurações</a>
        <a href="/login">Sair</a>
      </div>
    </div>
  );
}

export default DropdownMenu;