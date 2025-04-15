import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>Sistema de Avaliação Educacional</h1>
      <p><a href="/">Home</a></p>
      <div className="menu-right">
        <DropdownMenu />
      </div>
    </header>
  );
}

export default Header;