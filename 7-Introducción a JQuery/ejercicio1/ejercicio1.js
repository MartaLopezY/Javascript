/*   Vas a crear un juego que consiste en encontrar parejas en 12 cartas con 6 parejas de imágenes. El juego consistirá en lo siguiente:
La aplicación deberá tener una tabla con 3 filas y cuatro columnas de un color (puede ser también una imagen con un color) . Además se mostrará un cuadro de texto de aciertos con el valor inicial 0.
Cuando el usuario haga clic sobre una celda, se mostrará una imagen.
Cuando el usuario haga clic sobre otra celda, se mostrará otra imagen.
Si las dos imágenes son iguales, se quedarán a la vista y se añadirá 1 al cuadro de texto de aciertos.
Si las dos imágenes son diferentes, se ocultarán mostrando nuevamente el color inicial.
Además al entrar en la página al usuario se le pedirá un nombre la primera vez que entre, ese nombre será almacenado en una cookie además de un contador de visitas a la página. 
	Si vuelve a entrar en la página se le mostrará un mensaje en la misma página diciendo Hola “nombre” y el número de veces que visitó la página.

	Puede ser de utilidad el atributo src del elemento <img>. Podremos acceder desde event.target.src o this.src
  Realiza el ejercicio 7.1.3 utilizando JQuery.
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
let mostrarAciertos=$('#aciertos');
//let mostrarAciertos=document.getElementById('aciertos');
let imagenes=[];
let indice=[0,1,2,3,4,5,6,7,8,9,10,11];
shuffle(indice);
let emails=[];
$("#cargar").on("click", cargarDatos);

function cargarDatos() {
  $.get("https://randomuser.me/api/?results=6&format=XML", function(data) {
    cargarXML(data);
  });
}

function cargarXML(xml) {
  let docXML = $(xml);
  let datos = docXML.find("results");

  datos.each(function(i, result) {
    let email = $(result).find("email").text();
    let picture = $(result).find("medium").text();

    imagenes.splice(indice[i], 0, picture);
    emails.splice(indice[i], 0, email);
    imagenes.splice(indice[6 + i], 0, picture);
    emails.splice(indice[6 + i], 0, email);
  });
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //genera un numero aleatorio entre 0 y la longitud del array+1
    [array[i], array[j]] = [array[j], array[i]]; //intercambia las posiciones de i y j
  }
} 

for (let i = 0; i < 12; i++) {
  $("#"+i).on('click', function() {  //con $("#i")selecciono los id de los botones
    destapar(i);
 });
	//document.getElementById(i.toString()).addEventListener('click', function() {destapar(i);});
  
   }
  
   function destapar(id){
    tarjetaDestapadas++;
    if (tarjetaDestapadas==1){
       tarjeta1=$("#"+id);
       imagen1 = `<img src="${imagenes[id]}" title="${emails[id]}">`;
       tarjeta1.html(imagen1);
       tarjeta1.prop('disabled', true);
       primerResultado = imagenes[id];
    }else if(tarjetaDestapadas==2){
       tarjeta2 = $("#"+id);
       imagen2 = `<img src="${imagenes[id]}" title="${emails[id]}">`;
       tarjeta2.html(imagen2);
       tarjeta2.prop('disabled', true);   //con el método .prop() obtengo las propiedades del elemento seleccionado
       segundoResultado = imagenes[id];
   
       if(primerResultado==segundoResultado){
         tarjetaDestapadas=0;
         aciertos++;
         $('#aciertos').html(`Aciertos: ${aciertos}`);
        if(aciertos==6 && tarjeta1.prop('disabled')== true && tarjeta2.prop('disabled')== true){
          alert('¡Felicidades! Has ganado el juego.');
        }
    
       }else{
         setTimeout(()=>{
           tarjeta1.html(`<img src="js.png" title="">`);
           tarjeta2.html(`<img src="js.png" title="">`);
           tarjeta1.prop('disabled', false);
           tarjeta2.prop('disabled', false);
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
     let nom = nombre + "=";
     let array = document.cookie.split(/;/g);
     for (let i = 0; i < array.length; i++) {
       let c = array[i];
       while (c.charAt(0) == " ") {
         c = c.substring(1);
       }
       if (c.indexOf(nombre) == 0) {
         return c.substring(nom.length, c.length);
       }
     }
     return "";
   }

