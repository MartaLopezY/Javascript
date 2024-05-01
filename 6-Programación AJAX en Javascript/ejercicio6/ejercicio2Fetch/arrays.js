/*crear un archivo arrays.js que incluya las siguientes funciones, recibirán un array por parametro:
Mostrar el número de elementos del array.
Mostrar todos los elementos del array.
Muestra los elementos del array en sentido inverso.
Muestra los elementos del array ordenados alfabéticamente.
Añadir un elemento solicitado al usuario al principio del array.
Añadir un elemento solicitado al usuario al final del array.
Borrar un elemento al principio del array  (y decir cuál se ha borrado).
Borrar un elemento al final del array (y decir cuál se ha borrado).
Muestra el elemento que se encuentra en una posición que el usuario indica.
Muestra la posición en la que se encuentra un elemento que le indica el usuario.

 */
function numElementos(miArray) {
  return(miArray.length);
  }
   
function mostrar(miArray) {
  return(miArray.toString());
  }
   
function mostrarDelReves(miArray) {
  return(miArray.reverse().toString());
  }
     
function mostrarOrdenados(miArray) {
  return(miArray.sort().toString());
  }  
     
function agregarPpio(miArray,elemento) {

  miArray.unshift(elemento); 
 
  }
  function agregarFinal(miArray,elemento) {
    miArray.push(elemento);
  }
function borrarPrimero(miArray) {
   miArray.shift(); //extrae el primer elemento y lo borra

  }
function borrarUltimo(miArray) {
    miArray.pop(); //extrae el ultimo elemento y lo borra
   
 
   }
function consultarPosicion(miArray,elemento) {

  let i=miArray.indexOf(elemento);
  return("La posición de "+elemento+" es: "+i);
  }

function consultarElemento(miArray,posicion) {
  return(miArray[posicion]);

    }

  export{numElementos,mostrar,mostrarDelReves,mostrarOrdenados,agregarPpio,agregarFinal,borrarPrimero,borrarUltimo,consultarPosicion,consultarElemento};