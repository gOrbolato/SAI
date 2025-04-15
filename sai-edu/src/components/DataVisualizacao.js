import React from "react";

function DataVisualization({ data }) {
  return (
    <section className="dados">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="border p-2">Instituição</th>
            <th scope="col" className="border p-2">Cidade</th>
            <th scope="col" className="border p-2">Estado</th>
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