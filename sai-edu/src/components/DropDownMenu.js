import React, { useState } from "react";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Aluno
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10"
          role="menu"
        >
          <a
            href="/perfil"
            className="block px-4 py-2 hover:bg-gray-100"
            role="menuitem"
          >
            Perfil
          </a>
          <a
            href="/configuracoes"
            className="block px-4 py-2 hover:bg-gray-100"
            role="menuitem"
          >
            Configurações
          </a>
          <a
            href="/login"
            className="block px-4 py-2 hover:bg-gray-100 text-red-600"
            role="menuitem"
          >
            Sair
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;