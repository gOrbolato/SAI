import React, { useState } from "react";

function EvaluationForm({ title, options, onSubmit }) {
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
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <label htmlFor="option" className="block mb-1 font-medium">Selecione:</label>
      <select
        id="option"
        className="mb-4 w-full border rounded px-2 py-1"
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

      <fieldset className="mb-4">
        <legend className="font-medium">Avaliação:</legend>
        <div className="stars flex flex-row-reverse justify-end gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`star${value}`}
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => setRating(value)}
                className="hidden peer"
                required
              />
              <label
                htmlFor={`star${value}`}
                className="text-2xl cursor-pointer text-gray-400 peer-checked:text-yellow-500"
                aria-label={`${value} estrela${value > 1 ? "s" : ""}`}
              >
                ★
              </label>
            </React.Fragment>
          ))}
        </div>
      </fieldset>

      <textarea
        className="w-full border rounded p-2 mb-4"
        placeholder="Deixe seu comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enviar Avaliação
      </button>
    </form>
  );
}

export default EvaluationForm;