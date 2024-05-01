/*Crea una página web que tenga 3 botones (<button>), crear, parar y borrar. 
El botón crear mostrar una ventana de 500*200 y que se mueva automáticamente de 10 px hacia la derecha y hacia abajo cada 100 milisegundos, 
cuando llegue a la esquina inferior derecha deberá rebotar hacia la esquina superior izquierda. El botón parar detendrá la ventana y el cerrar la eliminará.
 */
let miVentana;
let intervalo;

function crear(){
    miVentana=window.open("","","width=500,height=200");
    let x = 0;
    let y = 0;
    let direccionX = 10;
    let direccionY = 10;
    intervalo=setInterval(mover, 100);
    
    function mover(){
    if (
      (x + 500 > window.outerWidth || x < 0) &&
      (y + 200 > window.outerHeight || y < 0)
    ) {
      direccionX = -direccionX;
      direccionY = -direccionY;
    }
    x = x + direccionX;
    y = y + direccionY;
    miVentana.moveTo(x, y);
  
}
}
function parar(){
   clearInterval(intervalo)
}
function borrar(){
    miVentana.close();
}