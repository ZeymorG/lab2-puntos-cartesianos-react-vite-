// utils/geometry.js
// Funciones puras: no dependen de React ni del DOM.
// Reciben números y devuelven números (o null si no se puede calcular).

/**
 * Calcula la distancia euclidiana entre dos puntos.
 * d = raiz( (x2-x1)^2 + (y2-y1)^2 )
 */
export function calcularDistancia(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calcula el punto medio entre A(x1,y1) y B(x2,y2).
 * M = ( (x1+x2)/2 , (y1+y2)/2 )
 */
export function calcularPuntoMedio(x1, y1, x2, y2) {
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
  };
}

/**
 * Calcula la pendiente de la recta que pasa por A y B.
 * m = (y2-y1) / (x2-x1)
 * Si x1 === x2, la recta es vertical y la pendiente no está definida.
 */
export function calcularPendiente(x1, y1, x2, y2) {
  if (x2 - x1 === 0) {
    return null; // recta vertical: pendiente indefinida
  }
  return (y2 - y1) / (x2 - x1);
}
