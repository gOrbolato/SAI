import React from "react";

function DataVisualization({ data }) {
  return (
    <section className="dados">
      <table>
        <thead>
          <tr>
            <th>Instituição</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.cidade}</td>
                <td>{item.estado}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Nenhuma instituição encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default DataVisualization;