/*Realizar un programa que, pasados 2 segundos, nos muestre una vez la fecha actual del sistema. 
Solucionarlo con los dos métodos mencionados en el encabezado del objeto Window.
*/

function ejecuta(){
  let hoy=new Date();
    const myTimeout = setTimeout(fecha, 2000);

    function fecha() {
      document.getElementById("respuesta").innerHTML = `${hoy}`;
    }
 }

 function ejecuta2(){
  let hoy=new Date();
  let intervalo=setInterval(fecha, 2000);

function fecha() {
 
  document.getElementById("respuesta2").innerHTML = `${hoy}`;

}
 
 }
 clearInterval(intervalo);