/*   Vas a crear un juego que consiste en encontrar parejas en 12 cartas con 6 parejas de imágenes. El juego consistirá en lo siguiente:
La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un color (puede ser también una imagen con un color) . Además se mostrará un cuadro de texto de aciertos con el valor inicial 0.
Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
Si las dos imágenes son iguales, se quedarán a la vista y se añadirá 1 al cuadro de texto de aciertos.
Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el color inicial.
Además al entrar en la página al usuario se le pedirá un nombre la primera vez que entre, ese nombre será almacenado en una cookie además de un contador de visitas a la página. 
	Si vuelve a entrar en la página se le mostrará un mensaje en la misma página diciendo Hola “nombre” y el número de veces que visitó la página.

	Puede ser de utilidad el atributo src del elemento <img>. Podremos acceder desde event.target.src o this.src

*/
let tarjetaDestapadas=0;
let tarjeta1;
let tarjeta2;
let primerResultado;
let segundoResultado;
let aciertos=0;
let mostrarAciertos=document.getElementById('aciertos');
let imagenes=['./img/circulo.png',
'./img/cuadrado.png',
'./img/estrella.png',
'./img/pentagono.png',
'./img/rombo.png',
'./img/triangulo.png',
'./img/circulo.png',
'./img/cuadrado.png',
'./img/estrella.png',
'./img/pentagono.png',
'./img/rombo.png',
'./img/triangulo.png'];
imagenes=imagenes.sort();

for (let i = 0; i < 12; i++) {
	document.getElementById(i.toString()).addEventListener('click', function() {
 destapar(i);
	});
   }


function destapar(id){
	tarjetaDestapadas++;
if (tarjetaDestapadas==1){
	tarjeta1=document.getElementById(id);
	primerResultado=imagenes[id];
	tarjeta1.innerHTML=`<img src="${primerResultado}">`;
	tarjeta1.disable= true;
}else if(tarjetaDestapadas==2){
	tarjeta2=document.getElementById(id);
	segundoResultado=imagenes[id];
	tarjeta2.innerHTML=`<img src="${segundoResultado}">`;
	tarjeta2.disable= true;

	if(primerResultado==segundoResultado){
     tarjetaDestapadas=0;
     aciertos++;
mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;
if(aciertos==6 && tarjeta1.disable== true && tarjeta2.disable== true){
	alert('¡Felicidades! Has ganado el juego.');
}
	}else{
		setTimeout(()=>{
			tarjeta1.innerHTML=`<img src="./img/js.png">`;
			tarjeta2.innerHTML=`<img src="./img/js.png">`;
			tarjeta1.disable=false;
			tarjeta2.disable=false;
			tarjetaDestapadas=0;
		},1000);
	}
}
}
let nombre = getCookie("nombre");
let visitas = getCookie("visitas");

if (!nombre) {
  nombre = prompt("Introduce tu nombre:");
  document.cookie = "nombre=" + nombre + "; path=/"  ;
}

if (visitas==null) {
  visitas = 0;
} else {
	visitas = Number(visitas);
  visitas++;
}
  
document.cookie = "visitas=" + visitas  + "; path=/"   ;

alert("Hola " + nombre + ", has visitado esta página " + visitas + " veces.");

    

   function getCookie(nombre) {
     var nom = nombre + "=";
     var array = document.cookie.split(/;/g);
     for (var i = 0; i < array.length; i++) {
       var c = array[i];
       while (c.charAt(0) == " ") {
         c = c.substring(1);
       }
       if (c.indexOf(nombre) == 0) {
         return c.substring(nom.length, c.length);
       }
     }
     return "";
   }

