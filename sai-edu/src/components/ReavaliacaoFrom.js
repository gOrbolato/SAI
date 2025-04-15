import React, { useState, useEffect } from "react";

function ReavaliacaoForm({ title, options, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ selectedOption, rating, comment });
    setSelectedOption("");
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <label htmlFor="option">Selecione:</label>
      <select
        id="option"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        required
      >
        <option value="">-- Escolha uma opção --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label>Nova Avaliação (0 a 5 estrelas)</label>
      <div className="stars">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              type="radio"
              id={`${title.toLowerCase()}-star${value}`}
              name={`${title.toLowerCase()}_rating`}
              value={value}
              checked={rating === value}
              onChange={() => setRating(value)}
              required
            />
            <label htmlFor={`${title.toLowerCase()}-star${value}`}>★</label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        placeholder="Atualize seu comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>

      <button type="submit">Atualizar Avaliação</button>
    </form>
  );
}

export default ReavaliacaoForm;