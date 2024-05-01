/*Realizar un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. 
Al hacer click en “Comenzar Saludos”, lanzará un setInterval que cada 3 segundos muestre un alert con “Hola”. El botón “Parar Saludos” parará esa secuencia. 
 */

window.addEventListener("load", iniciar);

function iniciar(){
document.getElementById("comenzar").addEventListener('click', comenzar, true);
document.getElementById("parar").addEventListener('click', parar, true);
}
let intervalo;
function comenzar() {
  intervalo = setInterval(function () {
    alert("Hello");
  }, 3000);
}
function parar() {
  clearInterval(intervalo);
}