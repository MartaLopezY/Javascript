/*Observa el funcionamiento de la página siguiente.

https://www.loteriasyapuestas.es/es/resultados/euromillones

Al colocarte encima de la frase “ver por orden de aparición” los números se ordenan en el orden en el que salieron en el sorteo. 
Dispones de un array con los números del sorteo en el orden de aparición.
Crea una página web que realice esa funcionalidad.
*/
let numeros = [48, 5, 32, 14, 1];
let ordenados = [...numeros];
ordenados.sort(function (a, b) {
  return a - b;
});
window.addEventListener("load", iniciar);

function iniciar() {
  document.getElementById("respuesta").textContent = `${numeros}`;
  document.getElementById("ver").textContent = `Ver números ordenados`;
  document.getElementById("ver").addEventListener("mouseout", mostrar, true);
  document.getElementById("ver").addEventListener("mouseover", ordenar, true);
}
function mostrar() {
  document.getElementById("ver").textContent = `Ver números ordenados`;
  document.getElementById("respuesta").textContent = `${numeros}`;
}
function ordenar() {
  document.getElementById(
    "ver"
  ).textContent = `Ver números en orden de aparición`;
  document.getElementById("respuesta").textContent = `${ordenados}`;
}
