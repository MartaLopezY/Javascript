/*Vamos a gestionar una lista de países haciendo uso de Arrays. 
Cuando el usuario cargue la página, se cargarán las opciones:
Mostrar el número de países.
Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
Añadir un país (y le preguntará si quiere añadir al principio o al final).
Borrar un país (y le preguntará si quiere borrar al principio o al final).
Consultar un país (y le preguntará si quiere consultar por posición o por nombre).
Para ello necesitarás crear un archivo arrays.js que incluya las siguientes funciones, recibirán un array por parametro:
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
import * as libArrays from  '../arrays.js';
let paises=["España","Portugal","Francia","Italia","Alemania"];
window.addEventListener("load",inicio,true);
function inicio(){
  document.getElementById("respuesta");
document.getElementById("boton").addEventListener("click",ejecuta,true);
}
function ejecuta(){

let menuOpcion=document.getElementById("opcion").value;
let salida=document.getElementById("respuesta");
switch(menuOpcion){
case "1": salida.innerHTML=`Numero de paises: ${libArrays.numElementos(paises)}`; break;
case "2": salida.innerHTML=`Listado de paises en el orden actual: ${libArrays.mostrar(paises)}`; break;
case "3": salida.innerHTML=`Listado de paises del revés: ${libArrays.mostrarDelReves(paises)}`; break;
case "4": salida.innerHTML=`Listado de paises ordenados alfabeticamente: ${libArrays.mostrarOrdenados(paises)}`;  break;
case "5": {
          let elemento=prompt("Introduce un pais:");
          libArrays.agregarPpio(paises,elemento);
          salida.innerHTML=`La lista tras agregar  ${elemento} es: ${libArrays.mostrar(paises)}`;  
          break;
         }
case "6": {
          let elemento=prompt("Introduce un pais:");
          libArrays.agregarFinal(paises,elemento);
          salida.innerHTML=`La lista tras agregar  ${elemento} es: ${libArrays.mostrar(paises)}`;  
          break;
          }
case "7":   
          // eslint-disable-next-line no-case-declarations
          let primero=paises[0];
          libArrays.borrarPrimero(paises);
          salida.innerHTML=`La lista tras borrar: ${primero} es:  ${libArrays.mostrar(paises)}`; 
          break;
case "8":   
          // eslint-disable-next-line no-case-declarations
          let ultimo=paises[(paises.length)-1];
          libArrays.borrarUltimo(paises);
          salida.innerHTML=`La lista tras borrar ${ultimo} es: ${libArrays.mostrar(paises)}`;  
          break;
case "9": {
          let posicion=prompt("Introduce una posición:");
          salida.innerHTML=`El elemento de la posición ${posicion} es: ${libArrays.consultarElemento(paises,posicion)}`;  
          break;
          }   
case "10":  {
          let elemento=prompt("Introduce un pais:");
          salida.innerHTML=`"${libArrays.consultarPosicion(paises,elemento)}`;  
          }
}

}