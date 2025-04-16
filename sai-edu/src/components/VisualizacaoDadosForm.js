import React, { useState } from "react";

function VisualizacaoDadosForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">Pesquisar Instituição</label>
      <input
        id="search"
        type="text"
        placeholder="Digite o nome da instituição"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
}

export default VisualizacaoDadosForm;