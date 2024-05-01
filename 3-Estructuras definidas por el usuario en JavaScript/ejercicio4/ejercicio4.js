/*Necesitamos almacenar en un programa todos los discos de música que tenemos en casa. 
Crea una clase “Disco” que almacene la siguiente información:
Nombre del disco.
Grupo de música o cantante.
Año de publicación.
Tipo de música (podrá ser “rock”, “pop”, “punk” o “indie”);
Localización: almacenará un número de estantería.
Prestado: almacenará un valor booleano. Por defecto será false.
Carátula: nombre del archivo de imagen de la carátula (p.ej: imagen.png)
Además tendrá los siguientes métodos:
Un constructor (la localización será 0 por defecto y prestado estará a false, carátula por defecto imagen.png).
Un método que permitirá cambiar el número de estantería en la localización.
Un método que permitirá cambiar la propiedad Prestado.
Un método que muestre toda la información de un disco.
Guarda todo el código en un archivo llamado disco.js y reutiliza en tu página el archivo de arrays que hicimos en la práctica 1.
Crea un array vacío para almacenar los discos.
Cuando el usuario cargue la página, se mostrarán las opciones:
Mostrar número de discos.
Mostrar tabla de discos con todos los datos de cada disco(y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente).
Mostrar un intervalo de discos por año de publicación(y le pedirá que introduzca el intervalo en formato inicio-fin)
Añadir un disco (y le preguntará si quiere añadir al principio o al final).
Borrar un disco (y le preguntará si quiere borrar al principio o al final).
Consultar un disco (y le preguntará si quiere consultar por posición o por nombre).
 */

import * as libArrays from  '../arrays.js';
import { Disco } from './discos.js';
let discos=[];
window.addEventListener("load",inicio,true);
function inicio(){
  document.getElementById("respuesta");
  document.getElementById("boton").addEventListener("click",ejecuta,true);
}
function ejecuta(){

let menuOpcion=document.getElementById("opcion").value;
let salida=document.getElementById("respuesta");
switch(menuOpcion){
case "1": salida.innerHTML=`Numero de discos: ${libArrays.numElementos(discos)}`; break;
case "2": 
          mostrarTabla(discos);
          break;
case "3": salida.innerHTML=`Tabla de discos con todos los datos de cada disco del revés: `
          let reves=discos.slice();     //copio el array para mantener el orden en el original
          libArrays.mostrarDelReves(reves);
          mostrarTabla(reves);
          break;
case "4": salida.innerHTML=`Tabla de discos con todos los datos de cada disco ordenados alfabeticamente: `; 
          // eslint-disable-next-line no-case-declarations
          let ordenados=discos.slice().sort((a, b) => { //la función de comparación toma dos elementos del array discos
            if (a.nombre<  b.nombre) {   //los compara por su atributo nombre
              return -1;
            }
            if (a.nombre > b.nombre) {
              return 1;
            }
            // los nombres deben ser iguales
            return 0;
           });
          mostrarTabla(ordenados);
          break;
case "5": {
          let inicio=prompt("Introduce el año de inicio del intervalo:");
          let fin=prompt("Introduce el año de fin del intervalo:");
          let intervalo=[];

          for(let i=0;i<discos.length;i++){

            if(discos[i].publicacion >=parseInt(inicio) && discos[i].publicacion<=parseInt(fin)) {
          
              libArrays.agregarPpio(intervalo,discos[i]);
              }
          }
          mostrarTabla(intervalo);
          break;
          } 
case "6": {
          let disco=nuevodisco();
          libArrays.agregarPpio(discos,disco); 
          alert("Elemento añadido al principio");
          break;
        }
case "7": {
          let disco=nuevodisco();
          libArrays.agregarFinal(discos,disco);  
          alert("Elemento añadido al final");
          break;
        }
case "8":   libArrays.borrarPrimero(discos); 
            alert("Primer elemento borrado");
            break;
case "9":   libArrays.borrarUltimo(discos);
            alert("Último elemento borrado");
            break;
case "10":   {
          let posicion=prompt("Introduce una posición:");
          let elemento=libArrays.consultarElemento(discos,posicion);
          alert("El elemento de la posición "+posicion+" es: "+elemento.MostrarInfo());  
          break;
        }
case "11":  {
          let nombre=prompt("Introduce un nombre de disco:");
          let posicion=discos.findIndex(disco => disco.nombre === nombre);  /*Utilizo el método findIndex()para buscar en el array discos el primer elemento 
                                                                            que cumpla con la condición de que disco.nombre === nombre*/
          alert("La posición de "+nombre+" es: "+posicion);  
        }
        }

}
function nuevodisco(){
  let nombre=prompt("Introduce el nombre de un disco:");
  let componentes=prompt("Introduce grupo de musica o cantante:");
  let publicacion=prompt("Introduce el año de publicación:");
  let tipoMusica=prompt("Introduce el tipo de musica (“rock”, “pop”, “punk” o “indie”):");
  return (new Disco(nombre,componentes,publicacion,tipoMusica));
}

function mostrarTabla(miArray){
  let tabla=document.getElementById("miTabla");
  let encabezado=document.createElement("tr");   //crea la fila
  let thNombre=document.createElement("th");    //crea la columna de encabezado
  thNombre.textContent="Nombre";    //Introduce el contenido en la columna
  encabezado.appendChild(thNombre);  //Agrega la columna a la fila 
  let thComponentes=document.createElement("th");
  thComponentes.textContent="Componentes";
  encabezado.appendChild(thComponentes);
  let thPublicacion=document.createElement("th");
  thPublicacion.textContent="Publicacion";
  encabezado.appendChild(thPublicacion);
  let thTipoMusica=document.createElement("th");
  thTipoMusica.textContent="Tipo Musica";
  encabezado.appendChild(thTipoMusica);
  let thLocalizacion=document.createElement("th");
  thLocalizacion.textContent="Localizacion";
  encabezado.appendChild(thLocalizacion);
  let thPrestado=document.createElement("th");
  thPrestado.textContent="Prestado";
  encabezado.appendChild(thPrestado);
  let thCaratula=document.createElement("th");
  thCaratula.textContent="Caratula";
  encabezado.appendChild(thCaratula);
  tabla.appendChild(encabezado);    //Agrega la fila a la tabla

for(let i=0;i<miArray.length;i++){
  let fila=document.createElement("tr"); 
  let tdNombre=document.createElement("td");
  tdNombre.textContent=miArray[i].nombre;
  fila.appendChild(tdNombre);
  let tdComponentes=document.createElement("td");
  tdComponentes.textContent=miArray[i].componentes;
  fila.appendChild(tdComponentes);
  let tdPublicacion=document.createElement("td");
  tdPublicacion.textContent=miArray[i].publicacion;
  fila.appendChild(tdPublicacion);
  let tdTipoMusica=document.createElement("td");
  tdTipoMusica.textContent=miArray[i].tipoMusica;
  fila.appendChild(tdTipoMusica);
  let tdLocalizacion=document.createElement("td");
  tdLocalizacion.textContent=miArray[i].localizacion;
  fila.appendChild(tdLocalizacion);
  let tdPrestado=document.createElement("td");
  tdPrestado.textContent=miArray[i].prestado;
  fila.appendChild(tdPrestado);
  let tdCaratula=document.createElement("td");
  tdCaratula.textContent=miArray[i].caratula;
  fila.appendChild(tdCaratula);
  tabla.appendChild(fila);
   }

}