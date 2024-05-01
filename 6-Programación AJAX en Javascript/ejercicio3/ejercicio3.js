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
let imagen1;
let imagen2;
let span1;
let span2;
let aciertos=0;
let mostrarAciertos=document.getElementById('aciertos');
let imagenes=[];
let indice=[0,1,2,3,4,5,6,7,8,9,10,11];
shuffle(indice);
let emails=[];
document.getElementById("cargar").addEventListener("click", cargarDatos);

function cargarDatos() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarXML(this);
    }
  };
  xhr.open("GET", "https://randomuser.me/api/?results=6&format=XML", true);
  xhr.send();
}

function cargarXML(xml) {
  let docXML = xml.responseXML;
  let datos = docXML.getElementsByTagName("results");

 for (let i = 0; i < datos.length; i++) {
   let email = datos[i].getElementsByTagName("email")[0].textContent;
   let picture = datos[i].getElementsByTagName("medium")[0].textContent;
   
      imagenes.splice(indice[i],0,picture);
      emails.splice(indice[i],0,email);
      imagenes.splice(indice[(6+i)], 0, picture);
      emails.splice(indice[(6+i)], 0, email);
  
   }
  
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //genera un numero aleatorio entre 0 y la longitud del array+1
    [array[i], array[j]] = [array[j], array[i]]; //intercambia las posiciones de i y j
  }
} 

for (let i = 0; i < 12; i++) {
 
	document.getElementById(i.toString()).addEventListener('click', function() {
 destapar(i);
	});
  
   }
  
   function destapar(id){
    tarjetaDestapadas++;
    if (tarjetaDestapadas==1){
       tarjeta1=document.getElementById(id);
       imagen1 = `<img src="${imagenes[id]}" title="${emails[id]}">`;
       tarjeta1.innerHTML = imagen1;
       tarjeta1.disabled = true;
       primerResultado = imagenes[id];
    }else if(tarjetaDestapadas==2){
       tarjeta2 = document.getElementById(id);
       imagen2 = `<img src="${imagenes[id]}" title="${emails[id]}">`;
       tarjeta2.innerHTML = imagen2;
       tarjeta2.disabled = true;
       segundoResultado = imagenes[id];
   
       if(primerResultado==segundoResultado){
         tarjetaDestapadas=0;
         aciertos++;
         mostrarAciertos.innerHTML=`Aciertos: ${aciertos}`;
         if(aciertos==6 && tarjeta1.disabled== true && tarjeta2.disabled== true){
           alert('¡Felicidades! Has ganado el juego.');
         }
       }else{
         setTimeout(()=>{
           tarjeta1.innerHTML=`<img src="js.png" title="">`;
           tarjeta2.innerHTML = `<img src="js.png" title="">`;
           tarjeta1.disabled=false;
           tarjeta2.disabled=false;
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

