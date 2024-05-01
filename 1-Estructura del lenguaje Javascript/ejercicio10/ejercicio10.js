/*Realiza un programa que solicite, un nombre de un jugadora de fútbol de la selección 
y que responda si está convocada o no para el siguiente partido. La lista de convocadas es: Luisa, Maria, Carlota, Ana, Martina y Claudia.

	Resuélvelo de dos maneras distintas.

*/
let nombre = prompt("Por favor, introduce el nombre de la jugadora");
nombre.toLowerCase();
if (
  nombre == "luisa" ||
  nombre == "maria" ||
  nombre == "carlota" ||
  nombre == "ana" ||
  nombre == "martina" ||
  nombre == "claudia"
) {
    window.alert("Está convocada");
} else {
    window.alert("No está convocada");
}
