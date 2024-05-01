/*Realiza un programa que solicite, un nombre de un jugadora de fútbol de la selección 
y que responda si está convocada o no para el siguiente partido. La lista de convocadas es: Luisa, Maria, Carlota, Ana, Martina y Claudia.

	Resuélvelo de dos maneras distintas.

*/
let nombre = prompt("Por favor, introduce el nombre de la jugadora");
nombre.toLowerCase();

switch(nombre){
    case 'luisa':         
    case 'maria':        
    case 'carlota':        
    case 'ana':       
    case 'martina':
    case 'claudia':
        window.alert("Esta convocada");
        break;
    default:
        window.alert("No esta convocada");
        break;
    }