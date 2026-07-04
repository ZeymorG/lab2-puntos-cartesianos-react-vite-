// App.jsx
// Componente raíz. Guarda el estado de las 4 coordenadas y coordina
// el formulario (CoordinateForm) con el panel de resultados (ResultsPanel).
// El cálculo en sí vive en utils/geometry.js (separación de responsabilidades).

import { useState } from "react";
import CoordinateForm from "./components/CoordinateForm";
import ResultsPanel from "./components/ResultsPanel";
import {
  calcularDistancia,
  calcularPuntoMedio,
  calcularPendiente,
} from "./utils/geometry";
import "./App.css";

function App() {
  const [coords, setCoords] = useState({ x1: "", y1: "", x2: "", y2: "" });

  const handleChange = (campo, valor) => {
    setCoords((prev) => ({ ...prev, [campo]: valor }));
  };

  // Convertimos a número; si algún campo está vacío, no calculamos aún.
  const { x1, y1, x2, y2 } = coords;
  const valoresCompletos = [x1, y1, x2, y2].every((v) => v !== "");

  let distancia = null;
  let puntoMedio = null;
  let pendiente = null;

  if (valoresCompletos) {
    const nx1 = Number(x1);
    const ny1 = Number(y1);
    const nx2 = Number(x2);
    const ny2 = Number(y2);

    distancia = calcularDistancia(nx1, ny1, nx2, ny2);
    puntoMedio = calcularPuntoMedio(nx1, ny1, nx2, ny2);
    pendiente = calcularPendiente(nx1, ny1, nx2, ny2);
  }

  return (
    <div className="app">
      <h1>Operaciones entre dos puntos del plano cartesiano</h1>

      <CoordinateForm coords={coords} onChange={handleChange} />

      {valoresCompletos ? (
        <ResultsPanel
          distancia={distancia}
          puntoMedio={puntoMedio}
          pendiente={pendiente}
        />
      ) : (
        <p className="mensaje">Completa las 4 coordenadas para ver los resultados.</p>
      )}
    </div>
  );
}

export default App;
