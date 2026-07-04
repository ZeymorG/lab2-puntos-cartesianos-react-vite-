// components/ResultCard.jsx
// Componente pequeño y reutilizable: recibe un título y un valor, y los muestra.
// Se usa 3 veces dentro de ResultsPanel (distancia, punto medio, pendiente).

import "./ResultCard.css";

function ResultCard({ titulo, valor }) {
  return (
    <div className="result-card">
      <span className="result-titulo">{titulo}</span>
      <span className="result-valor">{valor}</span>
    </div>
  );
}

export default ResultCard;
