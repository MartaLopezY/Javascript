/*Realiza un aplicación en javascript en la que aparezca un botón en pantalla y que cada vez que intente hacer click en él, 
cambie su posición para no poder pulsarlo. 
(puede ser de ayuda las propiedades style.position style.top style.left)

*/

window.addEventListener("load", iniciar);
function iniciar() {

  document.getElementById("boton").addEventListener("mouseover", mover, true);
}
function mover(){
    
let posicionTop =parseInt(document.getElementById("boton").style.bottom);
let posicionLeft = parseInt(document.getElementById("boton").style.left);
posicionTop=Math.random() * window.innerHeight;   //el boton se mueve a una posicion aleatoria
posicionLeft=Math.random() * window.innerWidth;
 document.getElementById("boton").style.top = posicionTop + 'px';
  document.getElementById("boton").style.left = posicionLeft + 'px';
}

/* window.innerHeight  devuelve la altura interior de la ventana del navegador en píxeles. 
Esta altura incluye la barra de desplazamiento horizontal si está presente.
 y la asigna positionTopAqui devuelve la altura de la ventana del navegador en píxeles */