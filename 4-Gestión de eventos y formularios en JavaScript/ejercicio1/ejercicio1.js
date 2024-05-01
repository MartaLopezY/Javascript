/*Haz un programa que mediante eventos y el uso del objeto event, te muestre en todo momento la posición actual del ratón en pantalla. 
Para mostrarlo modificaremos de forma dinámica un elemento HTML para que nos muestre la posición actual del ratón. 
 */

window.addEventListener("mousemove", function (evento) {
  let x = evento.clientX;
  let y = evento.clientY;
  document.getElementById("respuesta").innerHTML = `x:${x}, y: ${y}`;
});

/*
COORDENADAS 
Todos los eventos del ratón proporcionan coordenadas en dos sabores:

Relativas a la ventana: clientX y clientY.
Relativos al documento: pageX y pageY.
En resumen, las coordenadas relativas al documento pageX/Yse cuentan desde la esquina superior izquierda del documento y no cambian cuando se desplaza la página, 
mientras que clientX/Y se cuentan desde la esquina superior actual. Cambian cuando se desplaza la página.
Por ejemplo, si tenemos una ventana del tamaño 500x500, y el mouse está en la esquina superior izquierda, entonces clientX y clientY son 0, sin importar cómo se desplace la página.
Y si el mouse está en el centro, entonces clientX y clientY son 250, No importa en qué parte del documento se encuentren. Esto es similar a position:fixed en ese aspecto. 
*/
