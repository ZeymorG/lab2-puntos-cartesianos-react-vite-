// components/ResultsPanel.jsx
// Recibe los resultados ya calculados (via props) y los reparte entre
// tres ResultCard. No hace ningún cálculo aquí: solo presenta datos.

import ResultCard from "./ResultCard";
import "./ResultsPanel.css";

function ResultsPanel({ distancia, puntoMedio, pendiente }) {
  const textoPendiente =
    pendiente === null ? "Indefinida (recta vertical)" : pendiente.toFixed(2);

  return (
    <div className="results-panel">
      <ResultCard titulo="Distancia entre A y B" valor={distancia.toFixed(2)} />
      <ResultCard
        titulo="Punto medio"
        valor={`(${puntoMedio.x.toFixed(2)}, ${puntoMedio.y.toFixed(2)})`}
      />
      <ResultCard titulo="Pendiente de la recta" valor={textoPendiente} />
    </div>
  );
}

export default ResultsPanel;
