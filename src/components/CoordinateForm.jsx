// components/CoordinateForm.jsx
// Componente "controlado": los inputs guardan su valor en el estado del padre (App)
// mediante la función onChange que recibe como prop.

import "./CoordinateForm.css";

function CoordinateForm({ coords, onChange }) {
  const handleInput = (campo) => (e) => {
    onChange(campo, e.target.value);
  };

  return (
    <div className="coordinate-form">
      <div className="punto-grupo">
        <h3>Punto A</h3>
        <label>
          x1:
          <input
            type="number"
            value={coords.x1}
            onChange={handleInput("x1")}
          />
        </label>
        <label>
          y1:
          <input
            type="number"
            value={coords.y1}
            onChange={handleInput("y1")}
          />
        </label>
      </div>

      <div className="punto-grupo">
        <h3>Punto B</h3>
        <label>
          x2:
          <input
            type="number"
            value={coords.x2}
            onChange={handleInput("x2")}
          />
        </label>
        <label>
          y2:
          <input
            type="number"
            value={coords.y2}
            onChange={handleInput("y2")}
          />
        </label>
      </div>
    </div>
  );
}

export default CoordinateForm;
