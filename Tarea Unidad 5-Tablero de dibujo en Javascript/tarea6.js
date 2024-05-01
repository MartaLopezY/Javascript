/*Queremos hacer una aplicación en JavaScript que simule un pequeño tablero de dibujo. Para ello tendrás que dibujar una tablero de 30 celdas x 30 celdas con cada celda de ancho 10 px y alto 10 px. Para realizar el tablero de dibujo tendrás que emplear obligatoriamente los métodos de creación de nodos del DOM. Una vez generado el tablero lo meterás dentro del div con id "zonadibujo". Además tendrás una paleta con 5 colores de dibujo (que ya está creada y se facilita con el código .html)

Se te facilitará un fichero .html y un fichero .css con los estilos que tendrás que utilizar. La programación de la aplicación JavaScript la tendrás que realizar en un fichero .js adicional.

Si se modifican los colores programados en los estilos CSS (color1 a color 6) la aplicación tendrá que seguir funcionando correctamente.

La forma de funcionamiento de la aplicación será la siguiente:

Haremos click en alguno de los 5 colores de la paleta y se le asignará la clase "seleccionado".
Una vez seleccionado un color de la paleta, haremos un click en una celda (que se pintará del color activo en la paleta) y desde ese momento al mover el ratón por el tablero pintará del color activo todas las celdas por las que vayamos pasando el ratón. En el momento que volvamos a hacer click en otra celda dejará de pintar.
Podremos escoger un color diferente y repetir el proceso, incluso sobre celdas que ya han sido pintadas.
Para borrar una celda pintaremos con el color blanco de la paleta.
Cada vez que el pincel esté activado se mostrará un mensaje debajo de la paleta de colores indicando : PINCEL ACTIVADO o PINCEL DESACTIVADO. */

function generaTablero() {
  let zonadibujo = document.getElementById('zonadibujo');
  let tabla = document.createElement('table');
  tabla.setAttribute("class", "tablerodibujo");
  for (let i = 0; i < 30; i++) {
    let fila = document.createElement('tr');
 
      for (let j = 0; j < 30; j++) {
        let celda = document.createElement('td');
          celda.style.width = '10px';
          celda.style.height = '10px';
          fila.appendChild(celda);
      }
 
      tabla.appendChild(fila);
  }
 
  zonadibujo.appendChild(tabla);
 }
 generaTablero();

function asignaEventos() {
 let celdas = document.querySelectorAll('#zonadibujo table td');

 celdas.forEach(function(celda) {
     celda.addEventListener('click', function() {
         this.style.backgroundColor = colorSeleccionado;
     });
 });
} 
/* Esta función asigna el evento click a las celdas del tablero para cambiar el color de la celda cuando se hace click en ella. 
Cuando se hace click en una celda, cambiamos su color de fondo al color seleccionado actualmente.  */


/*Control del estado del pincel.
 Cuando el pincel está activado, se cambia el color de todas las celdas por las que se pasa el ratón.
 Cuando se hace click en una celda, se cambia el estado del pincel.*/
 
asignaEventos();
let pincelActivo = false;

document.querySelectorAll('#paleta td').forEach(function(color) {
  color.addEventListener('click', function() {
      if (!pincelActivo) {
          pincelActivo = true;
          colorSeleccionado = window.getComputedStyle(this).backgroundColor;
          /*La función getComputedStyle() es una función de JavaScript que devuelve un objeto conteniendo los valores 
          de todas las propiedades CSS de un elemento, después de aplicar las hojas de estilo activas 
          y resolver cualquier cálculo básico que esas propiedades puedan contener. 
          En este caso se está utilizando la función getComputedStyle() para obtener el valor del color de fondo 
          (backgroundColor) del elemento actualmente seleccionado en la paleta de colores.*/
          document.getElementById('pincel').innerText = 'PINCEL ACTIVADO';
      } else {
          pincelActivo = false;
          document.getElementById('pincel').innerText = 'PINCEL DESACTIVADO';
      }
  });
});

let dibujando = false;

document.querySelectorAll('#paleta td').forEach(function(color) {
  color.addEventListener('click', function() {
  pincelActivo = true;
  colorSeleccionado = window.getComputedStyle(this).backgroundColor;
  document.getElementById('pincel').innerText = 'PINCEL ACTIVADO';
  });
 });
 
 document.querySelectorAll('#zonadibujo table td').forEach(function(celda) {
  celda.addEventListener('click', function() {
  if (pincelActivo) {
      dibujando = !dibujando;
  }
  });
 });
 

 let tableroDibujo = document.querySelector('#zonadibujo table');

 tableroDibujo.addEventListener('mousemove', function(event) {
  if (pincelActivo && dibujando) {
  let celda = document.elementFromPoint(event.clientX, event.clientY);
  //obtiene el elemento en la posición actual del cursor del mouse. Las coordenadas del cursor del mouse son proporcionadas por event.clientX y event.clientY 
  if (celda && celda.tagName === 'TD') {
    celda.style.backgroundColor = colorSeleccionado;
  }
  }
 });
/* La línea let celda = document.elementFromPoint(event.clientX, event.clientY); 
utiliza la función elementFromPoint() para obtener el elemento más superior en el árbol de visualización que se encuentra en la posición especificada por las coordenadas del ratón.
La función elementFromPoint() toma dos argumentos que representan las coordenadas x e y del punto en el documento. 
En este caso, event.clientX y event.clientY son las coordenadas del ratón en relación con el área visible de la ventana del navegador (también conocido como viewport) 3.
Si el elemento en el punto especificado pertenece a otro documento (por ejemplo, el documento de un <iframe>), se devuelve el elemento padre de ese documento. 
Si el elemento en el punto dado es contenido anónimo o generado por XBL, como las barras de desplazamiento de un cuadro de texto, entonces se devuelve el primer elemento 
ancestro no anónimo (por ejemplo, el cuadro de texto). Los elementos con pointer-events establecido en none serán ignorados, y se devolverá el elemento debajo de él 2.
Por lo tanto, en este contexto, document.elementFromPoint(event.clientX, event.clientY) devuelve la celda del tablero de dibujo sobre la cual se encuentra actualmente el ratón.*/