# Unidades de Medida en CSS

En CSS, se utilizan varias unidades de medida para definir valores en estilos, como anchos, márgenes, tamaños de fuente, entre otros. A continuación, se muestra una tabla con las principales unidades de medida utilizadas.

| Unidad | Descripción                            | Relación                                       |
|--------|----------------------------------------|------------------------------------------------|
| `px`   | Píxeles                                | Unidades absolutas basadas en la resolución de pantalla. |
| `%`    | Porcentaje                             | Basada en el tamaño del elemento padre o contenedor.   |
| `em`   | Em                                     | Relativa al tamaño de la fuente del elemento padre. |
| `rem`  | Root Em                                | Relativa al tamaño de la fuente raíz (`html`). |
| `vw`   | Viewport Width                         | Porcentaje del ancho del área visible del navegador (viewport). |
| `vh`   | Viewport Height                        | Porcentaje de la altura del área visible del navegador (viewport). |
| `vmin` | Viewport Minimum                       | El menor valor entre `vw` y `vh`.              |
| `vmax` | Viewport Maximum                       | El mayor valor entre `vw` y `vh`.              |
| `cm`   | Centímetros                            | Unidad física, basada en el tamaño real.       |
| `mm`   | Milímetros                             | Unidad física, basada en el tamaño real.       |
| `in`   | Pulgadas                               | 1 pulgada es igual a 96 píxeles.               |
| `pt`   | Puntos                                 | 1 punto es igual a 1/72 de una pulgada.        |
| `pc`   | Picas                                  | 1 pica es igual a 12 puntos.                   |
| `ch`   | Carácter                               | Relativa al ancho del carácter `0` en la fuente actual. |
| `ex`   | Ex                                     | Relativa a la altura de la letra "x" en la fuente actual. |
| `fr`   | Fracción                               | Usada en los contenedores CSS Grid, representa una fracción del espacio disponible. |

## Ejemplos de uso

```css
/* Tamaño de fuente en píxeles */
h1 {
  font-size: 24px;
}

/* Ancho de un contenedor en porcentaje */
.container {
  width: 80%;
}

/* Margen en viewport width */
div {
  margin: 5vw;
}