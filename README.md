# Punto Cartesiano — Operaciones entre dos puntos

Aplicación Front-End desarrollada con **React** y **Vite** que permite calcular operaciones geométricas básicas entre dos puntos del plano cartesiano.

##  Descripción

La aplicación permite ingresar las coordenadas de dos puntos:

- Punto A = (x1, y1)
- Punto B = (x2, y2)

Y calcula automáticamente:

- **Distancia** entre los dos puntos
- **Punto medio** del segmento que los une
- **Pendiente** de la recta que pasa por ambos puntos
3

##  Fórmulas implementadas

| Operación | Fórmula |
| Distancia | `d = √((x2 - x1)² + (y2 - y1)²)` |
| Punto medio | `M = ((x1 + x2) / 2, (y1 + y2) / 2)` |
| Pendiente | `m = (y2 - y1) / (x2 - x1)` — indefinida si `x1 = x2` (recta vertical) |

