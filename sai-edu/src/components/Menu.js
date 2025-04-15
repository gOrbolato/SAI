import React from "react";

function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li className="dropdown-menu">
          <a href="#Cadastro">Cadastrar</a>
          <ul className="submenu">
            <li><a href="/cadastro-instituicao">Cadastrar Instituição</a></li>
            <li><a href="/cadastrar-curso">Cadastrar Curso</a></li>
            <li><a href="/cadastrar-materia">Cadastrar Matéria</a></li>
          </ul>
        </li>
        <li><a href="/visualizacao">Visualização</a></li>
        <li><a href="/avaliacao">Avaliações</a></li>
        <li><a href="/reavaliacao">Reavaliações</a></li>
      </ul>
    </nav>
  );
}

export default Menu;