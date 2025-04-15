import React from "react";
import { Link } from "react-router-dom"; // ✅ Importa Link

function Menu() {
  return (
    <nav className="Menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="dropdown-menu">
          <Link to="#">Cadastrar</Link>
          <ul className="submenu">
            <li><Link to="/cadastro-instituicao">Cadastrar Instituição</Link></li>
            <li><Link to="/cadastrar-curso">Cadastrar Curso</Link></li>
            <li><Link to="/cadastrar-materia">Cadastrar Matéria</Link></li>
          </ul>
        </li>
        <li><Link to="/visualizacao">Visualização</Link></li>
        <li><Link to="/avaliacao">Avaliações</Link></li>
        <li><Link to="/reavaliacao">Reavaliações</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
